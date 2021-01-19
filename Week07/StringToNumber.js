/**
 * 字符串转数字
 */
function stringToNumber (str) {
  let prefix = str.toString().slice(0, 2);
  let value = str.toString().slice(2);
  if (prefix === '0b') {
    return parseInt(value, 2);
  }
  if (prefix === '0o') {
    return parseInt(value, 10);
  }
  if (prefix === '0x') {
    return parseInt(value, 16);
  }
  return val;
}