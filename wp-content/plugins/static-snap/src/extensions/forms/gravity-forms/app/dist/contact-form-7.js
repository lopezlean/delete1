"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var frontend_1 = require("@staticsnap/frontend");
var ContactForm7 = /** @class */ (function (_super) {
    tslib_1.__extends(ContactForm7, _super);
    function ContactForm7() {
        var _this = _super.call(this, '[data-static-snap-type="form"][data-static-snap-form-type="contact-form-7"]') || this;
        _this.extensionMessagesClasses = {
            success: 'success',
            error: 'failed',
            field_error: 'failed',
            invalid_error: 'failed',
        };
        console.log('ContactForm7 initialized');
        return _this;
    }
    ContactForm7.prototype.onSubmit = function (_e, form, _submitData) {
        this.setMessage(form, 'success');
    };
    ContactForm7.prototype.onError = function (_e, form, _error) {
        //console.log('ElementorForms onError', e, form, error);
        this.setMessage(form, 'error');
    };
    ContactForm7.prototype.setMessage = function (form, type) {
        var noticeElement = this.getNoticeElement(form);
        var message = this.getNoticeMessage(form, type);
        noticeElement.textContent = message;
        var messageClass = this.extensionMessagesClasses[type];
        // remove other form classes
        Object.values(this.extensionMessagesClasses).forEach(function (messageClass) {
            noticeElement.classList.remove(messageClass);
        });
        form.classList.add(messageClass);
    };
    ContactForm7.prototype.getNoticeElement = function (form) {
        var noticeElement = form.querySelector(' .wpcf7-response-output');
        if (!noticeElement) {
            noticeElement = document.createElement('div');
            noticeElement.classList.add('wpcf7-response-output');
            form.appendChild(noticeElement);
        }
        return noticeElement;
    };
    return ContactForm7;
}(frontend_1.FormBase));
exports.default = ContactForm7;
//# sourceMappingURL=contact-form-7.js.map