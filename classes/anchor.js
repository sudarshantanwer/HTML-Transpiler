/**
 * Created by sudarshan on 13/11/17.
 */
function s_anchor() {
    this.UI = 'a';
    this.text = 'innerText';
    this.href = '';

    BaseElement.call(this);

}

s_anchor.prototype.applyAttributes = function (ele) {
    ele[this['text']] = this.attrs.value;
    ele.href= this.attrs.href;


}
