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

      var _errorKeys = !(errorKeys !== null && errorKeys !== void 0 && errorKeys.length) ? errorNames : errorKeys;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb2N1c0Vycm9yLnRzeCJdLCJuYW1lcyI6WyJGb2N1c0Vycm9yIiwiZm9ybWlrIiwiaXNTdWJtaXR0aW5nIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImVycm9ycyIsImZvY3VzRGVsYXkiLCJlcnJvcktleXMiLCJmbGF0dGVkVG91Y2hlZCIsImVycm9yTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicHJldiIsImtleSIsInB1c2giLCJfZXJyb3JLZXlzIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJlcnJvckVsZW1lbnQiLCJmb3JFYWNoIiwiZXJyb3JLZXkiLCJpbmNsdWRlcyIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudEVsZW1lbnQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQXdCTyxTQUFTQSxVQUFULE9BSWE7QUFBQSx5QkFIbEJDLE1BR2tCO0FBQUEsTUFIUkMsWUFHUSxlQUhSQSxZQUdRO0FBQUEsTUFITUMsT0FHTixlQUhNQSxPQUdOO0FBQUEsTUFIZUMsWUFHZixlQUhlQSxZQUdmO0FBQUEsTUFINkJDLE1BRzdCLGVBSDZCQSxNQUc3QjtBQUFBLDZCQUZsQkMsVUFFa0I7QUFBQSxNQUZsQkEsVUFFa0IsZ0NBRkwsR0FFSztBQUFBLDRCQURsQkMsU0FDa0I7QUFBQSxNQURsQkEsU0FDa0IsK0JBRE4sRUFDTTtBQUNsQix3QkFBVSxZQUFNO0FBQ2QsUUFBSUwsWUFBWSxJQUFJLENBQUNFLFlBQXJCLEVBQW1DO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFVBQU1JLGNBQWMsR0FBRyx1Q0FBc0JMLE9BQXRCLENBQXZCO0FBRUEsVUFBTU0sVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsY0FBWixFQUE0QkksTUFBNUIsQ0FBbUMsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDbkUsWUFBSSxtQkFBTVQsTUFBTixFQUFjUyxHQUFkLENBQUosRUFBd0I7QUFDdEJELFVBQUFBLElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxHQUFWO0FBQ0Q7O0FBQ0QsZUFBT0QsSUFBUDtBQUNELE9BTGtCLEVBS2hCLEVBTGdCLENBQW5COztBQU9BLFVBQU1HLFVBQVUsR0FBRyxFQUFDVCxTQUFELGFBQUNBLFNBQUQsZUFBQ0EsU0FBUyxDQUFFVSxNQUFaLElBQXFCUixVQUFyQixHQUFrQ0YsU0FBckQ7O0FBRUEsVUFBSUUsVUFBVSxDQUFDUSxNQUFYLElBQXFCLE9BQU9DLFFBQVAsS0FBb0IsV0FBN0MsRUFBMEQ7QUFDeEQsWUFBSUMsWUFBSjs7QUFFQUgsUUFBQUEsVUFBVSxDQUFDSSxPQUFYLENBQW1CLFVBQUNDLFFBQUQsRUFBYztBQUMvQixjQUFJLENBQUNaLFVBQVUsQ0FBQ2EsUUFBWCxDQUFvQkQsUUFBcEIsQ0FBTCxFQUFvQztBQUVwQyxjQUFNRSxRQUFRLHFCQUFhRixRQUFiLFFBQWQ7O0FBQ0EsY0FBSSxDQUFDRixZQUFMLEVBQW1CO0FBQUE7O0FBQ2pCQSxZQUFBQSxZQUFZLEdBQUdELFFBQVEsQ0FBQ00sYUFBVCxDQUF1QkQsUUFBdkIsQ0FBZjs7QUFFQSxnQkFBSSxrQkFBQUosWUFBWSxVQUFaLHNEQUFjTSxZQUFkLENBQTJCLE1BQTNCLE9BQXVDLFFBQXZDLElBQW1ELDBCQUFBTixZQUFZLENBQUNPLE9BQWIsZ0ZBQXNCQyxXQUF0QixRQUF3QyxPQUEvRixFQUF3RztBQUN0R1IsY0FBQUEsWUFBWSxHQUFHQSxZQUFZLENBQUNTLGFBQTVCO0FBQ0Q7O0FBRUQ7QUFDRDtBQUNGLFNBYkQsRUFId0QsQ0FrQnhEOzs7QUFDQUMsUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixjQUFJVixZQUFKLEVBQWtCO0FBQ2hCQSxZQUFBQSxZQUFZLENBQUNXLGNBQWIsQ0FBNEI7QUFDMUJDLGNBQUFBLFFBQVEsRUFBRSxNQURnQjtBQUUxQkMsY0FBQUEsS0FBSyxFQUFFLFFBRm1CO0FBRzFCQyxjQUFBQSxNQUFNLEVBQUU7QUFIa0IsYUFBNUI7QUFLQWQsWUFBQUEsWUFBWSxDQUFDZSxLQUFiO0FBQ0Q7QUFDRixTQVRTLEVBU1A1QixVQVRPLENBQVY7QUFVRDtBQUNGO0FBQ0YsR0EvQ0QsRUErQ0csQ0FBQ0osWUFBRCxFQUFlRSxZQUFmLEVBQTZCQyxNQUE3QixFQUFxQ0YsT0FBckMsRUFBOENHLFVBQTlDLENBL0NIO0FBaURBLHNCQUFPLGdDQUFDLGVBQUQsT0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEluLCBGb3JtaWtDb250ZXh0VHlwZSwgRm9ybWlrVmFsdWVzIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IGZsYXR0ZW5Ub0xvZGFzaEZvcm1hdCBmcm9tIFwiLi9mbGF0dGVuVG9Mb2Rhc2hGb3JtYXRcIjtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBmb2N1cyB0aGUgZmlyc3QgZXJyb3IgaW4gdGhlIEZvcm1payBmb3JtIGFmdGVyIHRoZSB2YWxpZGF0aW9uLlxuICogTm90ZTogVGhlIGZpcnN0IGlzIG5vdCBuZWNlc3NhcnkgdGhlIGZpcnN0IG9uIHRoZSBzY3JlZW4sIGl0J3MganVzdCB0aGUgZmlyc3RcbiAqIGtleSBpbiB0aGUgdG91Y2hlZCBvYmplY3QsIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkLlxuICogKi9cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c0Vycm9yUHJvcHMge1xuICAvKipcbiAgICogVmFsdWVzIGZyb20gRm9ybWlrIHByb3ZpZGVyLlxuICAgKi9cbiAgZm9ybWlrOiBQaWNrPFxuICBGb3JtaWtDb250ZXh0VHlwZTxGb3JtaWtWYWx1ZXM+LFxuICAgIFwiaXNTdWJtaXR0aW5nXCIgfCBcInRvdWNoZWRcIiB8IFwiaXNWYWxpZGF0aW5nXCIgfCBcImVycm9yc1wiXG4gID47XG4gIC8qKlxuICAgKiBUaW1lIGluIG1zIHRvIGV4ZWN1dGUgdGhlIGZvY3VzIGluIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgZXJyb3IsIGJ5IGRlZmF1bHQgMTAwbXMuXG4gICAqL1xuICBmb2N1c0RlbGF5PzogbnVtYmVyO1xuXG4gIGVycm9yS2V5cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9jdXNFcnJvcih7XG4gIGZvcm1pazogeyBpc1N1Ym1pdHRpbmcsIHRvdWNoZWQsIGlzVmFsaWRhdGluZywgZXJyb3JzIH0sXG4gIGZvY3VzRGVsYXkgPSAxMDAsXG4gIGVycm9yS2V5cyA9IFtdXG59OiBGb2N1c0Vycm9yUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNTdWJtaXR0aW5nICYmICFpc1ZhbGlkYXRpbmcpIHtcbiAgICAgIC8vIEZsYXR0ZW4gdG91Y2hlZCBhcyBhIHdheSB0byBjaGVjayBuZXN0ZWQga2V5cyBlYXNpbHkgYW5kXG4gICAgICAvLyBmaXggdGhlIGRlcHRoIHByb2JsZW0gd2hlbiB0aGUgZXJyb3IgdGV4dCBpcyBjcmVhdGVkXG4gICAgICAvLyBieSBhIFJlYWN0IGNvbXBvbmVudCBsaWtlIHJlYWN0LWludGwuXG4gICAgICBjb25zdCBmbGF0dGVkVG91Y2hlZCA9IGZsYXR0ZW5Ub0xvZGFzaEZvcm1hdCh0b3VjaGVkKTtcblxuICAgICAgY29uc3QgZXJyb3JOYW1lcyA9IE9iamVjdC5rZXlzKGZsYXR0ZWRUb3VjaGVkKS5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgICBpZiAoZ2V0SW4oZXJyb3JzLCBrZXkpKSB7XG4gICAgICAgICAgcHJldi5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LCBbXSBhcyBzdHJpbmdbXSk7XG5cbiAgICAgIGNvbnN0IF9lcnJvcktleXMgPSAhZXJyb3JLZXlzPy5sZW5ndGggPyBlcnJvck5hbWVzIDogZXJyb3JLZXlzO1xuXG4gICAgICBpZiAoZXJyb3JOYW1lcy5sZW5ndGggJiYgdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGxldCBlcnJvckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICAgICAgICBfZXJyb3JLZXlzLmZvckVhY2goKGVycm9yS2V5KSA9PiB7XG4gICAgICAgICAgaWYgKCFlcnJvck5hbWVzLmluY2x1ZGVzKGVycm9yS2V5KSkgcmV0dXJuO1xuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgW25hbWU9XCIke2Vycm9yS2V5fVwiXWA7XG4gICAgICAgICAgaWYgKCFlcnJvckVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVycm9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImhpZGRlblwiICYmIGVycm9yRWxlbWVudC50YWdOYW1lPy50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgZXJyb3JFbGVtZW50ID0gZXJyb3JFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgdG8gYXZvaWQgdGhlIG90aGVyIGNvbXBvbmVudHMgYXV0b2ZvY3VzIHdoZW4gc3VibWl0dGluZ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3JFbGVtZW50KSB7XG4gICAgICAgICAgICBlcnJvckVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBcbiAgICAgICAgICAgICAgYmVoYXZpb3I6ICdhdXRvJyxcbiAgICAgICAgICAgICAgYmxvY2s6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBpbmxpbmU6ICdjZW50ZXInIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlcnJvckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZvY3VzRGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2lzU3VibWl0dGluZywgaXNWYWxpZGF0aW5nLCBlcnJvcnMsIHRvdWNoZWQsIGZvY3VzRGVsYXldKTtcblxuICByZXR1cm4gPEZyYWdtZW50IC8+O1xufVxuIl19