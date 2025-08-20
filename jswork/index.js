// var a=12;
// console.log(typeof(a));
// const a=12;
// a=30;
// console.log(a);
// let a=12;
// a=30;
// console.log(a);
//function expression
// const data=function(){
//     console.log("hi");
// }
// data();
//arrow function
// const data=()=>{
//  return "hi i am arrow"
// }
// console.log(data());
// const sum=(a,b)=>a+b;
// add(4,5);
//IIFE
// (()=>{
//     console.log("hello")
// })();
// (function(){
//     console.log("hello");
// })();
// function fun(msg="hello"){console.log("hi"+msg);
// }
// console.log(fun("satwik"));

function language(lang){
    let data;
    if (lang="java"){
        function compiler(){
            console.log("java compiler is executed");
        }
        data =compiler();
    }
    else if(lang=="(c"){
        function cCompiler(){
            console.log("c compiler");
        }
        data=cCompiler();
    }
    else{
        console.log("selected language not found");
    }
    return data;
}
language("python");