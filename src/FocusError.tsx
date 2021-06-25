import React, { Fragment, useEffect } from "react";
import { getIn, FormikContextType, FormikValues } from "formik";
import flattenToLodashFormat from "./flattenToLodashFormat";

/**
 * This component focus the first error in the Formik form after the validation.
 * Note: The first is not necessary the first on the screen, it's just the first
 * key in the touched object, order is not guaranteed.
 * */

export interface FocusErrorProps {
  /**
   * Values from Formik provider.
   */
  formik: Pick<
  FormikContextType<FormikValues>,
    "isSubmitting" | "touched" | "isValidating" | "errors"
  >;
  /**
   * Time in ms to execute the focus in the component with the error, by default 100ms.
   */
  focusDelay?: number;

  errorKeys?: string[];
}

export function FocusError({
  formik: { isSubmitting, touched, isValidating, errors },
  focusDelay = 100,
  errorKeys = []
}: FocusErrorProps) {
  useEffect(() => {
    if (isSubmitting && !isValidating) {
      // Flatten touched as a way to check nested keys easily and
      // fix the depth problem when the error text is created
      // by a React component like react-intl.
      const flattedTouched = flattenToLodashFormat(touched);

      const errorNames = Object.keys(flattedTouched).reduce((prev, key) => {
        if (getIn(errors, key)) {
          prev.push(key);
        }
        return prev;
      }, [] as string[]);


      const _errorKeys = Array.from(new Set([...errorKeys, ...errorNames]))

      if (errorNames.length && typeof document !== "undefined") {
        let errorElement: HTMLElement | null;

        _errorKeys.forEach((errorKey) => {
          if (!errorNames.includes(errorKey)) return;

          const selector = `[name="${errorKey}"]`;
          if (!errorElement) {
            errorElement = document.querySelector(selector);

            if (errorElement?.getAttribute("type") === "hidden" && errorElement.tagName?.toLowerCase() === "input") {
              errorElement = errorElement.parentElement;
            }

            return;
          }
        });

        // This is to avoid the other components autofocus when submitting
        setTimeout(() => {
          if (errorElement) {
            errorElement.scrollIntoView({ 
              behavior: 'auto',
              block: 'center',
              inline: 'center' 
            });
            errorElement.focus();
          }
        }, focusDelay);
      }
    }
  }, [isSubmitting, isValidating, errors, touched, focusDelay]);

  return <Fragment />;
}
