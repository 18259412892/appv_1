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

/**
* @method
* @desc:  设置本地缓存
* @author:  zhangyunjiang
* @creatDate 2020-10-31 01:07:44
* @param {*}  val
*/
export const locSetItem = function (set, values) {
  let _parms;
  if(typeof values == 'object'){
    _parms = JSON.stringify(values)
  } else{
    _parms = values
  }
  return localStorage.setItem(set, _parms)
}
/**
* @method
* @desc:  设置本地缓存
* @author:  zhangyunjiang
* @creatDate 2020-10-31 01:07:44
* @param {*}  val
*/
export const locGetItem = function (value) {
  let _value = '';
  if(localStorage.getItem(value)){
    if(typeof value == 'string'){
      _value =  JSON.parse(localStorage.getItem(value))
    }else{
      _value = localStorage.getItem(value)
    }
  }
  return _value;
}