//Event bubbling
//child to parent
// var div = document.querySelector("div");
// var button = document.querySelector("button");
// div.addEventListener("click",()=>{
//     console.log("div");
// })
// button.addEventListener("click",()=>{
//     console.log("button");
// })


//event capturing
//parent to child
// var div = document.querySelector("div");
// var button = document.querySelector("button");
// div.addEventListener("click",()=>{
//     console.log("div");
// },true)
// button.addEventListener("click",()=>{
//     console.log("button");
// },true)



//stop propagation
// var div = document.querySelector("div");
// var button = document.querySelector("button");
// div.addEventListener("click",()=>{
//     console.log("div");
// })
// button.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("button");
// })


//imediadate propagation
// var button = document.querySelector("button");
// button.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("button");
// })
// button.addEventListener("click",(e)=>{
//     e.stopImmediatePropagation();
//     console.log("button1");
// })
// button.addEventListener("click",()=>{
//     console.log("button2");
// })
// button.addEventListener("click",()=>{
//     console.log("button3");
// })



//prevent default
// const a=document.querySelector("a");
// a.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("button");
// })

//hoisting
// console.log(getname());
// console.log(a);
// var a=5;
// function getname(){
//     console.log("Baishali Chatterjee");
// }
