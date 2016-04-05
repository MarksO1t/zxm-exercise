var names = document.getElementById('names'),
    btn = document.getElementById('test'),
    tip = document.getElementById('tip');
btn.onclick = function(){
  var data = getValue();
  console.log(data);
  test(data);
};
//获取数据并进行处理
function getValue(){
  var val = names.value.trim();
  return val;
}
function test(val){
  var len = val.length;
  console.log(len);
  if(len === 0){
    names.style.border = "2px solid red";
    tip.innerHTML = "姓名不能为空";
    tip.style.color = "red";
  }else if ((len < 4) || (len > 16)) {
    names.style.border = "2px solid red";
    tip.innerHTML = "字符数应为4-16位";
    tip.style.color = "red";
  }else{
    names.style.border = "2px solid green";
    tip.innerHTML = "名称格式正确";
    tip.style.color = "green";
  }
}
