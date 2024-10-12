"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var frontend_1 = require("@staticsnap/frontend");
var GravityForms = /** @class */ (function (_super) {
    tslib_1.__extends(GravityForms, _super);
    function GravityForms() {
        var _this = _super.call(this, '[data-static-snap-type="form"][data-static-snap-form-type="gravity-forms"]') || this;
        _this.extensionMessagesClasses = {
            error: 'wpforms-error-alert',
            field_error: 'wpforms-error-alert',
            invalid_error: 'wpforms-error-alert',
            success: 'wpforms-confirmation-container-full',
        };
        return _this;
    }
    GravityForms.prototype.onSubmit = function (_e, form, _submitData) {
        this.setMessage(form, 'success');
    };
    GravityForms.prototype.onError = function (_e, form, _error) {
        //console.log('ElementorForms onError', e, form, error);
        this.setMessage(form, 'error');
    };
    GravityForms.prototype.setMessage = function (form, type) {
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
    GravityForms.prototype.getNoticeElement = function (form) {
        var noticeElement = form.querySelector(' .gform_confirmation_message');
        if (!noticeElement) {
            noticeElement = document.createElement('div');
            noticeElement.classList.add('gform_confirmation_message');
            form.appendChild(noticeElement);
        }
        return noticeElement;
    };
    return GravityForms;
}(frontend_1.FormBase));
exports.default = GravityForms;
//# sourceMappingURL=gravity-forms.js.map