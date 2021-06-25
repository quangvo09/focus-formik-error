"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusError = FocusError;

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _flattenToLodashFormat = _interopRequireDefault(require("./flattenToLodashFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function FocusError(_ref) {
  var _ref$formik = _ref.formik,
      isSubmitting = _ref$formik.isSubmitting,
      touched = _ref$formik.touched,
      isValidating = _ref$formik.isValidating,
      errors = _ref$formik.errors,
      _ref$focusDelay = _ref.focusDelay,
      focusDelay = _ref$focusDelay === void 0 ? 100 : _ref$focusDelay,
      _ref$errorKeys = _ref.errorKeys,
      errorKeys = _ref$errorKeys === void 0 ? [] : _ref$errorKeys;
  (0, _react.useEffect)(function () {
    if (isSubmitting && !isValidating) {
      // Flatten touched as a way to check nested keys easily and
      // fix the depth problem when the error text is created
      // by a React component like react-intl.
      var flattedTouched = (0, _flattenToLodashFormat["default"])(touched);
      var errorNames = Object.keys(flattedTouched).reduce(function (prev, key) {
        if ((0, _formik.getIn)(errors, key)) {
          prev.push(key);
        }

        return prev;
      }, []);

      var _errorKeys = Array.from(new Set([].concat(_toConsumableArray(errorKeys), _toConsumableArray(errorNames))));

      if (errorNames.length && typeof document !== "undefined") {
        var errorElement;

        _errorKeys.forEach(function (errorKey) {
          if (!errorNames.includes(errorKey)) return;
          var selector = "[name=\"".concat(errorKey, "\"]");

          if (!errorElement) {
            var _errorElement, _errorElement$tagName;

            errorElement = document.querySelector(selector);

            if (((_errorElement = errorElement) === null || _errorElement === void 0 ? void 0 : _errorElement.getAttribute("type")) === "hidden" && ((_errorElement$tagName = errorElement.tagName) === null || _errorElement$tagName === void 0 ? void 0 : _errorElement$tagName.toLowerCase()) === "input") {
              errorElement = errorElement.parentElement;
            }

            return;
          }
        }); // This is to avoid the other components autofocus when submitting


        setTimeout(function () {
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
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb2N1c0Vycm9yLnRzeCJdLCJuYW1lcyI6WyJGb2N1c0Vycm9yIiwiZm9ybWlrIiwiaXNTdWJtaXR0aW5nIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImVycm9ycyIsImZvY3VzRGVsYXkiLCJlcnJvcktleXMiLCJmbGF0dGVkVG91Y2hlZCIsImVycm9yTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicHJldiIsImtleSIsInB1c2giLCJfZXJyb3JLZXlzIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJlcnJvckVsZW1lbnQiLCJmb3JFYWNoIiwiZXJyb3JLZXkiLCJpbmNsdWRlcyIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudEVsZW1lbnQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCTyxTQUFTQSxVQUFULE9BSWE7QUFBQSx5QkFIbEJDLE1BR2tCO0FBQUEsTUFIUkMsWUFHUSxlQUhSQSxZQUdRO0FBQUEsTUFITUMsT0FHTixlQUhNQSxPQUdOO0FBQUEsTUFIZUMsWUFHZixlQUhlQSxZQUdmO0FBQUEsTUFINkJDLE1BRzdCLGVBSDZCQSxNQUc3QjtBQUFBLDZCQUZsQkMsVUFFa0I7QUFBQSxNQUZsQkEsVUFFa0IsZ0NBRkwsR0FFSztBQUFBLDRCQURsQkMsU0FDa0I7QUFBQSxNQURsQkEsU0FDa0IsK0JBRE4sRUFDTTtBQUNsQix3QkFBVSxZQUFNO0FBQ2QsUUFBSUwsWUFBWSxJQUFJLENBQUNFLFlBQXJCLEVBQW1DO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFVBQU1JLGNBQWMsR0FBRyx1Q0FBc0JMLE9BQXRCLENBQXZCO0FBRUEsVUFBTU0sVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsY0FBWixFQUE0QkksTUFBNUIsQ0FBbUMsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDbkUsWUFBSSxtQkFBTVQsTUFBTixFQUFjUyxHQUFkLENBQUosRUFBd0I7QUFDdEJELFVBQUFBLElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxHQUFWO0FBQ0Q7O0FBQ0QsZUFBT0QsSUFBUDtBQUNELE9BTGtCLEVBS2hCLEVBTGdCLENBQW5COztBQVFBLFVBQU1HLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVcsSUFBSUMsR0FBSiw4QkFBWVosU0FBWixzQkFBMEJFLFVBQTFCLEdBQVgsQ0FBbkI7O0FBRUEsVUFBSUEsVUFBVSxDQUFDVyxNQUFYLElBQXFCLE9BQU9DLFFBQVAsS0FBb0IsV0FBN0MsRUFBMEQ7QUFDeEQsWUFBSUMsWUFBSjs7QUFFQU4sUUFBQUEsVUFBVSxDQUFDTyxPQUFYLENBQW1CLFVBQUNDLFFBQUQsRUFBYztBQUMvQixjQUFJLENBQUNmLFVBQVUsQ0FBQ2dCLFFBQVgsQ0FBb0JELFFBQXBCLENBQUwsRUFBb0M7QUFFcEMsY0FBTUUsUUFBUSxxQkFBYUYsUUFBYixRQUFkOztBQUNBLGNBQUksQ0FBQ0YsWUFBTCxFQUFtQjtBQUFBOztBQUNqQkEsWUFBQUEsWUFBWSxHQUFHRCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJELFFBQXZCLENBQWY7O0FBRUEsZ0JBQUksa0JBQUFKLFlBQVksVUFBWixzREFBY00sWUFBZCxDQUEyQixNQUEzQixPQUF1QyxRQUF2QyxJQUFtRCwwQkFBQU4sWUFBWSxDQUFDTyxPQUFiLGdGQUFzQkMsV0FBdEIsUUFBd0MsT0FBL0YsRUFBd0c7QUFDdEdSLGNBQUFBLFlBQVksR0FBR0EsWUFBWSxDQUFDUyxhQUE1QjtBQUNEOztBQUVEO0FBQ0Q7QUFDRixTQWJELEVBSHdELENBa0J4RDs7O0FBQ0FDLFFBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSVYsWUFBSixFQUFrQjtBQUNoQkEsWUFBQUEsWUFBWSxDQUFDVyxjQUFiLENBQTRCO0FBQzFCQyxjQUFBQSxRQUFRLEVBQUUsTUFEZ0I7QUFFMUJDLGNBQUFBLEtBQUssRUFBRSxRQUZtQjtBQUcxQkMsY0FBQUEsTUFBTSxFQUFFO0FBSGtCLGFBQTVCO0FBS0FkLFlBQUFBLFlBQVksQ0FBQ2UsS0FBYjtBQUNEO0FBQ0YsU0FUUyxFQVNQL0IsVUFUTyxDQUFWO0FBVUQ7QUFDRjtBQUNGLEdBaERELEVBZ0RHLENBQUNKLFlBQUQsRUFBZUUsWUFBZixFQUE2QkMsTUFBN0IsRUFBcUNGLE9BQXJDLEVBQThDRyxVQUE5QyxDQWhESDtBQWtEQSxzQkFBTyxnQ0FBQyxlQUFELE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRJbiwgRm9ybWlrQ29udGV4dFR5cGUsIEZvcm1pa1ZhbHVlcyB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBmbGF0dGVuVG9Mb2Rhc2hGb3JtYXQgZnJvbSBcIi4vZmxhdHRlblRvTG9kYXNoRm9ybWF0XCI7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgZm9jdXMgdGhlIGZpcnN0IGVycm9yIGluIHRoZSBGb3JtaWsgZm9ybSBhZnRlciB0aGUgdmFsaWRhdGlvbi5cbiAqIE5vdGU6IFRoZSBmaXJzdCBpcyBub3QgbmVjZXNzYXJ5IHRoZSBmaXJzdCBvbiB0aGUgc2NyZWVuLCBpdCdzIGp1c3QgdGhlIGZpcnN0XG4gKiBrZXkgaW4gdGhlIHRvdWNoZWQgb2JqZWN0LCBvcmRlciBpcyBub3QgZ3VhcmFudGVlZC5cbiAqICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNFcnJvclByb3BzIHtcbiAgLyoqXG4gICAqIFZhbHVlcyBmcm9tIEZvcm1payBwcm92aWRlci5cbiAgICovXG4gIGZvcm1pazogUGljazxcbiAgRm9ybWlrQ29udGV4dFR5cGU8Rm9ybWlrVmFsdWVzPixcbiAgICBcImlzU3VibWl0dGluZ1wiIHwgXCJ0b3VjaGVkXCIgfCBcImlzVmFsaWRhdGluZ1wiIHwgXCJlcnJvcnNcIlxuICA+O1xuICAvKipcbiAgICogVGltZSBpbiBtcyB0byBleGVjdXRlIHRoZSBmb2N1cyBpbiB0aGUgY29tcG9uZW50IHdpdGggdGhlIGVycm9yLCBieSBkZWZhdWx0IDEwMG1zLlxuICAgKi9cbiAgZm9jdXNEZWxheT86IG51bWJlcjtcblxuICBlcnJvcktleXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvY3VzRXJyb3Ioe1xuICBmb3JtaWs6IHsgaXNTdWJtaXR0aW5nLCB0b3VjaGVkLCBpc1ZhbGlkYXRpbmcsIGVycm9ycyB9LFxuICBmb2N1c0RlbGF5ID0gMTAwLFxuICBlcnJvcktleXMgPSBbXVxufTogRm9jdXNFcnJvclByb3BzKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU3VibWl0dGluZyAmJiAhaXNWYWxpZGF0aW5nKSB7XG4gICAgICAvLyBGbGF0dGVuIHRvdWNoZWQgYXMgYSB3YXkgdG8gY2hlY2sgbmVzdGVkIGtleXMgZWFzaWx5IGFuZFxuICAgICAgLy8gZml4IHRoZSBkZXB0aCBwcm9ibGVtIHdoZW4gdGhlIGVycm9yIHRleHQgaXMgY3JlYXRlZFxuICAgICAgLy8gYnkgYSBSZWFjdCBjb21wb25lbnQgbGlrZSByZWFjdC1pbnRsLlxuICAgICAgY29uc3QgZmxhdHRlZFRvdWNoZWQgPSBmbGF0dGVuVG9Mb2Rhc2hGb3JtYXQodG91Y2hlZCk7XG5cbiAgICAgIGNvbnN0IGVycm9yTmFtZXMgPSBPYmplY3Qua2V5cyhmbGF0dGVkVG91Y2hlZCkucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGdldEluKGVycm9ycywga2V5KSkge1xuICAgICAgICAgIHByZXYucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwgW10gYXMgc3RyaW5nW10pO1xuXG5cbiAgICAgIGNvbnN0IF9lcnJvcktleXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLmVycm9yS2V5cywgLi4uZXJyb3JOYW1lc10pKVxuXG4gICAgICBpZiAoZXJyb3JOYW1lcy5sZW5ndGggJiYgdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxldCBlcnJvckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICAgICAgICBfZXJyb3JLZXlzLmZvckVhY2goKGVycm9yS2V5KSA9PiB7XG4gICAgICAgICAgaWYgKCFlcnJvck5hbWVzLmluY2x1ZGVzKGVycm9yS2V5KSkgcmV0dXJuO1xuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgW25hbWU9XCIke2Vycm9yS2V5fVwiXWA7XG4gICAgICAgICAgaWYgKCFlcnJvckVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVycm9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImhpZGRlblwiICYmIGVycm9yRWxlbWVudC50YWdOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgZXJyb3JFbGVtZW50ID0gZXJyb3JFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgdG8gYXZvaWQgdGhlIG90aGVyIGNvbXBvbmVudHMgYXV0b2ZvY3VzIHdoZW4gc3VibWl0dGluZ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3JFbGVtZW50KSB7XG4gICAgICAgICAgICBlcnJvckVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBcbiAgICAgICAgICAgICAgYmVoYXZpb3I6ICdhdXRvJyxcbiAgICAgICAgICAgICAgYmxvY2s6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBpbmxpbmU6ICdjZW50ZXInIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlcnJvckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZvY3VzRGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2lzU3VibWl0dGluZywgaXNWYWxpZGF0aW5nLCBlcnJvcnMsIHRvdWNoZWQsIGZvY3VzRGVsYXldKTtcblxuICByZXR1cm4gPEZyYWdtZW50IC8+O1xufVxuIl19