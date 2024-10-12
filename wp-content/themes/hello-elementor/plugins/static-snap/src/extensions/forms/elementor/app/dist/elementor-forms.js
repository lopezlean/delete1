"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var frontend_1 = require("@staticsnap/frontend");
var ElementorForms = /** @class */ (function (_super) {
    tslib_1.__extends(ElementorForms, _super);
    function ElementorForms() {
        var _this = _super.call(this, '[data-static-snap-type="form"][data-static-snap-form-type="elementor"]') || this;
        _this.elementorMessagesClasses = {
            error: 'elementor-message-danger',
            field_error: 'elementor-message-danger',
            invalid_error: 'elementor-message-danger',
            success: 'elementor-message-success',
        };
        return _this;
    }
    ElementorForms.prototype.onSubmit = function (_e, form, _submitData) {
        //console.log('ElementorForms onSubmit', e, form, submitData);
        this.setMessage(form, 'success');
    };
    ElementorForms.prototype.onError = function (_e, form, _error) {
        //console.log('ElementorForms onError', e, form, error);
        this.setMessage(form, 'error');
    };
    ElementorForms.prototype.setMessage = function (form, type) {
        var noticeElement = this.getNoticeElement(form);
        var message = this.getNoticeMessageOrRedirect(form, type);
        noticeElement.textContent = message;
        noticeElement.classList.remove('elementor-message-success', 'elementor-message-error');
        var messageClass = this.elementorMessagesClasses[type];
        noticeElement.classList.add(messageClass);
    };
    ElementorForms.prototype.getNoticeElement = function (form) {
        var noticeElement = form.querySelector(' .elementor-message');
        if (!noticeElement) {
            noticeElement = document.createElement('div');
            noticeElement.classList.add('elementor-message');
            form.appendChild(noticeElement);
        }
        return noticeElement;
    };
    return ElementorForms;
}(frontend_1.FormBase));
exports.default = ElementorForms;
//# sourceMappingURL=elementor-forms.js.map