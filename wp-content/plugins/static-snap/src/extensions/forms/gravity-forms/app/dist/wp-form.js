"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var frontend_1 = require("@staticsnap/frontend");
var WpForm = /** @class */ (function (_super) {
    tslib_1.__extends(WpForm, _super);
    function WpForm() {
        var _this = _super.call(this, '[data-static-snap-type="form"][data-static-snap-form-type="wpform"]') || this;
        _this.extensionMessagesClasses = {
            error: 'wpforms-error-alert',
            field_error: 'wpforms-error-alert',
            invalid_error: 'wpforms-error-alert',
            success: 'wpforms-confirmation-container-full',
        };
        return _this;
    }
    WpForm.prototype.onSubmit = function (_e, form, _submitData) {
        this.setMessage(form, 'success');
    };
    WpForm.prototype.onError = function (_e, form, _error) {
        //console.log('ElementorForms onError', e, form, error);
        this.setMessage(form, 'error');
    };
    WpForm.prototype.setMessage = function (form, type) {
        var noticeElement = this.getNoticeElement(form);
        var message = this.getNoticeMessageOrRedirect(form, type);
        noticeElement.innerHTML = "<p>".concat(message, "</p>");
        var messageClass = this.extensionMessagesClasses[type];
        // remove other form classes
        Object.values(this.extensionMessagesClasses).forEach(function (messageClass) {
            form.classList.remove(messageClass);
        });
        noticeElement.classList.add(messageClass);
    };
    WpForm.prototype.getNoticeElement = function (form) {
        var noticeElement = form.querySelector(' .wpforms-notice-container');
        if (!noticeElement) {
            noticeElement = document.createElement('div');
            noticeElement.classList.add('wpforms-notice-container');
            form.appendChild(noticeElement);
        }
        return noticeElement;
    };
    return WpForm;
}(frontend_1.FormBase));
exports.default = WpForm;
//# sourceMappingURL=wp-form.js.map