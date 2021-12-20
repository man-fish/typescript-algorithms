let reg;
// 匹配连续出现的四组以 . 连接的字符串
// + abc.dss.sds.wer
reg = /^(...\.){3}...$/;
console.log(reg.test('255.255.255.255')); // true
reg = /^(.{3}\.){3}.{3}$/;
console.log(reg.test('255.255.255.255')); // true

// 匹配十六进制颜色
reg = /^#?[a-fA-F0-9]{6}|[a-fA-F0-9]{3}$/;
console.log(reg.test('#FFFFFF'));

// 邮箱
reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
console.log(reg.test('893930581@weixin.qq.com'));
