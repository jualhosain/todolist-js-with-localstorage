if(localStorage.any==null){
  localStorage.any=JSON.stringify(["Welcome"]);
  updateList();
  location.reload();

}else{
  updateList();
  document.querySelector(".iput").addEventListener("keyup",function(b){
    if(b.keyCode == 13){
      datacollect();
      updateList();
    }
  });

  document.querySelector(".button").addEventListener("click",function(){

    datacollect();
    updateList();
  });

}




function datacollect(){
  var inputBox= document.querySelector("#iput");
  var inputt=JSON.parse(localStorage.any);

  if(inputBox.value == "" || inputBox.value == " " ){
    alert("Please Write Something");
  }else{
    inputt.push(inputBox.value);
    localStorage.any=JSON.stringify(inputt);
    inputBox.value="";
  }
}



function updateList(){
  var inputMain=JSON.parse(localStorage.any);
  var html="";
  var length=inputMain.length;

  var length=inputMain.length-1;
  for(var m=length; m>=0; m--){
      html+=`<li id="${m}">${inputMain[m]}<button class='buttonLi removebtn' onclick='remove(this)'>Remove</button></li>`  }
      document.querySelector("#listO").innerHTML=html;
}

function remove(indexNum){

  var sel=indexNum.parentElement.id;
  var inputMain=JSON.parse(localStorage.any);
  inputMain.splice(sel,1);
  localStorage.any=JSON.stringify(inputMain);
  updateList();
}











//+++++++++++++++++++ MAIN +++++++++++++++++++++++++++++++//

//
// updateList();
//
// document.querySelector(".button").addEventListener("click",function(){
//
//   var inputBox= document.querySelector("#iput");
//   var inputt=JSON.parse(localStorage.any);
//
//     inputt.push(inputBox.value);
//   localStorage.any=JSON.stringify(inputt);
//   inputBox.value="";
//   updateList();
// });
//
// function updateList(){
//   var inputMain=JSON.parse(localStorage.any);
//   var html="";
//   var length=inputMain.length;
//
//   var length=inputMain.length-1;
//   for(var m=length; m>=0; m--){
//     html+= "<li id="+ m +"> "+inputMain[m]+"<button class='buttonLi removebtn' onclick='remove(this)'>Remove</button></li>"
//   }
//
//
//
//   document.querySelector("#listO").innerHTML=html;
// }
//
// function remove(indexNum){
//
//   var sel=indexNum.parentElement.id;
//   var inputMain=JSON.parse(localStorage.any);
//   inputMain.splice(sel,1);
//   localStorage.any=JSON.stringify(inputMain);
//   updateList();
// }
