function HelloWorld(){
  let hello = "Hello World";
  let str1 = "Hello";
  let str2 = "World!!";
  alert(hello);
  alert(str1 + str2);
}
//HelloWorld()

function OrangeApple(){
  let orange = 100;
  let apple = 120;
  if(orange < apple){
    alert("みかんの値段がりんごより安い");
  }else if(orange == apple){
    alert("みかんとりんごが同じ値段");
  }else{
    alert("みかんの値段がりんごより高い");
  }
}
//OrangeApple()

function _While(){
  let max = 100;
  let num = 1;
  let count = 0;
  while(num < max){
    num = num * 2;
    count += 1;
  }
  alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");
}
//_While()

function _For(){
  let num = 0;
  for(i=1; i<11; i++){
    num += i;
  }
  alert("1から10まで足し算した結果は"+num+"です");
}
//_For()

let alertString;
alertString = addString("WebCamp");

console.log(alertString);

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

function practice_Prompt(){
  let promptStr = prompt("何か好きな文字を入力してください。");
  alert(promptStr);
}


