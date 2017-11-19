/**
 * Created by sudarshan on 13/11/17.
 */
function s_div() {
    this.UI = 'div';
    this.text = 'innerHTML';

    BaseElement.call(this);

}

s_div.prototype.applyAttributes = function (ele) {
    ele[this['text']] = this.attrs.text;

}