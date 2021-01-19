//参考网上资料
//1.encodeURIComponent 方法
function encodeUtf8(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for(var i = 0; i < code.length; i++) {
    const c = code.charAt(i);
    if(c === '%') {
      const hex = code.charAt(i + 1) + code.charAt(i + 2);
      const hexVal = parseInt(hex, 16);
      bytes.push(hexVal);
      i += 2;
    } else {
      bytes.push(c.charCodeAt(0));
    }
  }
  return bytes;
}
console.log(encodeUtf8("zzz"));
console.log(new Buffer(encodeUtf8("zzz")));

//2.
var wirteUTF = function(str, isGetBytes) {
  var back = [];
  var byteSize = 0;
  for(var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if(0x00 <= code && code <= 0x7f) {
      byteSize += 1;
      back.push(code);
    } else if(0x80 <= code && code <= 0x7ff) {
      byteSize += 2;
      back.push((192 | (31 & (code >> 6))));
      back.push((128 | (63 & code)));
    } else if ((0x800 <= code && code <= 0xd7ff)
            || (0xe000 <= code && code <= 0xffff)) {
      byteSize += 3;
      back.push((224 | (15 & (code >> 12))));
      back.push((128 | (63 & (code >> 6))));
      back.push((128 | (63 & code)));
    }
  }
  for(i = 0; i < back.length; i++) {
    back[i] &= 0xff;
  }
  if(isGetBytes) {
    return back;
  }
  if(byteSize <= 0xff) {
    return [0, byteSize].concat(back);
  } else {
    return [byteSize >> 8, byteSize & 0xff].concat(back);
  }
}

console.log(wirteUTF('中'));

//正则表达式匹配单双引号的字符串
function matchStr(str) {
  var quotaRegx = new RegExp(/^$/);
}