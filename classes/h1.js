/**
 * Created by sudarshan on 13/11/17.
 */
function s_h1() {
    this.UI = 'h1';
    this.text = 'innerText';

    BaseElement.call(this);

}

s_h1.prototype.applyAttributes = function (ele) {
    ele[this['text']] = this.attrs.value;

}
