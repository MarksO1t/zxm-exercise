//提示信息
var msg = {
  "names": {
    "tip": "必填，长度为4~16个字符",
    "empty": "名称不能为空",
    "error": "长度只能为4~16个字符",
    "success": "名称可用"
  },
  "psw": {
    "tip": "必填，长度为6及以上个字符",
    "empty": "密码不能为空",
    "error": "长度不能少于6位",
    "success": "密码可用"
  },
  "pswConfirm": {
    "tip": "再次输入相同密码",
    "empty": "请确认密码",
    "error": "密码输入不一致",
    "success": "密码输入一致"
  },
  "email": {
    "tip": "请输入邮箱",
    "empty": "请填写邮箱",
    "error": "邮箱格式错误",
    "success": "邮箱格式正确"
  },
  "tel": {
    "tip": "请输入手机号码",
    "empty": "请填写手机号码",
    "error": "手机格式错误",
    "success": "手机格式正确"
  }
};
var names = document.getElementById('names'),
    psw = document.getElementById('psw'),
    pswConfirm = document.getElementById('pswConfirm'),
    email = document.getElementById('email'),
    tel = document.getElementById('tel'),
    sub = document.getElementById('sub');
//获取数据的函数
function getValue(dom){
  var val = dom.value.trim();
  return val;
}
//名称校验
names.onfocus = function(){
  var tip = this.nextElementSibling;
  tip.innerHTML = msg.names.tip;
  tip.style.color = "#ddd";
};
names.onblur = function(){
  var val = getValue(this);
  var len = val.length;
  var tip = this.nextElementSibling;
  if(len === 0){
    tip.innerHTML = msg.names.empty;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else if ((len < 4) || (len > 16)) {
    tip.innerHTML = msg.names.error;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else{
    tip.innerHTML = msg.names.success;
    tip.style.color = "green";
    this.setAttribute('class', 'success');
  }
};
//密码校验
psw.onfocus = function(){
  var tip = this.nextElementSibling;
  tip.innerHTML = msg.psw.tip;
  tip.style.color = "#ddd";
};
psw.onblur = function(){
    var val = getValue(this);
    var len = val.length;
    var tip = this.nextElementSibling;
    if(len === 0){
      tip.innerHTML = msg.psw.empty;
      tip.style.color = "red";
      this.setAttribute('class', 'error');
    }else if ((len < 6)) {
      tip.innerHTML = msg.psw.error;
      tip.style.color = "red";
      this.setAttribute('class', 'error');
    }else{
      tip.innerHTML = msg.psw.success;
      tip.style.color = "green";
      this.setAttribute('class', 'success');
    }
};
psw.onchange = function(){
  pswConfirm.value = "";
  pswConfirm.nextElementSibling.innerHTML = msg.pswConfirm.error;
  pswConfirm.nextElementSibling.style.color = 'red';
  pswConfirm.setAttribute('class', 'error');
};
//确认密码
pswConfirm.onfocus = function(){
  var tip = this.nextElementSibling;
  tip.innerHTML = msg.pswConfirm.tip;
  tip.style.color = "#ddd";
};
pswConfirm.onblur = function(){
  var val = getValue(this);
  var valConfirm = getValue(psw);
  var len = val.length;
  var tip = this.nextElementSibling;
  if(len === 0){
    tip.innerHTML = msg.pswConfirm.empty;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else if (val !== valConfirm) {
    tip.innerHTML = msg.pswConfirm.error;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else{
    tip.innerHTML = msg.pswConfirm.success;
    tip.style.color = "green";
    this.setAttribute('class', 'success');
  }
};
//邮箱校验
email.onfocus = function(){
  var tip = this.nextElementSibling;
  tip.innerHTML = msg.email.tip;
  tip.style.color = "#ddd";
};
email.onblur = function(){
  var val = getValue(this);
  var len = val.length;
  var apos=val.indexOf("@");
  var dotpos=val.lastIndexOf(".");
  var tip = this.nextElementSibling;
  if(len === 0){
    tip.innerHTML = msg.email.empty;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else if ((apos<1)||(dotpos-apos<2)) {
    tip.innerHTML = msg.email.error;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else {
    tip.innerHTML = msg.email.success;
    tip.style.color = "green";
    this.setAttribute('class', 'success');
  }
};
//电话校验
tel.onfocus = function(){
  var tip = this.nextElementSibling;
  tip.innerHTML = msg.tel.tip;
  tip.style.color = "#ddd";
};
tel.onblur = function(){
  var val = getValue(this);
  var len = val.length;
  var tip = this.nextElementSibling;
  if(len === 0){
    tip.innerHTML = msg.tel.empty;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else if (len !== 11) {
    tip.innerHTML = msg.tel.error;
    tip.style.color = "red";
    this.setAttribute('class', 'error');
  }else{
    tip.innerHTML = msg.tel.success;
    tip.style.color = "green";
    this.setAttribute('class', 'success');
  }
};
//提交
sub.onclick = function(){
  var tips = document.getElementsByTagName('span');
  var flag = true;
  for(i = 0; i < tips.length; i++){
    if(tips[i].style.color !== "green"){
      flag = false;
    }
  }
  if(flag){
		alert("提交成功");
	}else alert("请按照提示填写表单！");
};
