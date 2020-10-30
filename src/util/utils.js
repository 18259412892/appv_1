/**
* @method
* @desc: 处理表单是否有布尔值类型 的 如果有布尔值 的进行转换
* @author:  zhangyunjiang
* @creatDate 2020-10-25 10:55:09
* @param {*}  values 对象
*/
export const BooleanNumber = function (values) {
  let parms = {};
  for (let key in values) {
    if (typeof values[key] === 'boolean') {
      if (values[key] == true) {
        values[key] = 1
      } else {
        values[key] = 2
      }
    }
  }

  return parms = {
    ...values
  }
};
export const locSetItem = function (set, values) {
  return localStorage.setItem(set, values)
}
export const locGetItem = function (value) {

  let _value;
  return localStorage.getItem(value)
    ?
    (typeof value == 'string' ? JSON.parse(localStorage.getItem(value))
      : localStorage.getItem(value)
    ) : '';
}