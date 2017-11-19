/**
 * Created by sudarshan on 13/11/17.
 */
function s_input() {
    this.UI = 'input';
    this.text = 'Value';
    this.href = '';
    this.methods = {};


    BaseElement.call(this);

}

s_input.prototype.applyAttributes = function (ele) {
    ele[this['text']] = this.attrs.value;
    ele.type= this.attrs.type;


}

s_input.applyMethods = function (ele) {
    debugger
    ele[this['text']] = this.attrs.value;

}
