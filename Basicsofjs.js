//Notes of js brash up the js basics


//let,const,var,string,number
// let a=6;
// var b=8;
// var ans= a+b;
// console.log("our expected answer is:",ans);
// const name="Khushi";
// console.log(name);



//type of
// console.log(typeof(name));
// console.log(typeof(ans));


//Array
// const arr=["Khushi","Baishali","Chatterjee"];
// console.log(arr);
// arr.push("Neha");
// arr.push("MA");
// arr.push("Baba");
// console.log(arr);
// console.log(arr[4]);


//if else conditional loop
// var hour = 10;
// if(hour < 12){
//     console.log("We are not allowed");
// }else{
//     console.log("We are  allowed");
// }



//for loop
// let  cnt=10;
// for(let i=1;i<=cnt;i++){
//     console.log(i);
// }



//object in js
// const people = {
//     name:"Baishali Chatterjee",
//     age:20,
//     student : true,
//     roll_no:68,
//     cgpa:9.33
// };
// console.log(people);
// console.log(people.name);
// console.log(people.age);
// console.log(people.student);
// console.log(!people.student);
// console.log(people.roll_no);
// console.log(people.cgpa);



//functions

//filter function
// const ages = [23,34,45,12,56,67,78,89,90,01];
// const result = ages.filter(checkage);
// function checkage(age){
//     return age > 18;
// }
// if(result){
//     console.log(`You are now ${result} eligible for voting`);
// }else{
//     console.log(`You are now ${result} means under 18 that's why not eligible for voting.`);
// }


//Arrow functions
// const handlecheck = () =>{
//     console.log("Hello world");
// }
// handlecheck();


//Map function


//Taking user inputs
// var prompt = require('prompt-sync')();
// const age = prompt("Enter your age:");
// if(age >= 18){
//     console.log(`AGE is:${age} now eligible for voting`);
// }else{
//     console.log(`AGE is:${age}`);
// }


//Rest and Spread Operator
//Rest Example
// function addnumbers(a,b,c,...other){
//     console.log(other);
//     return a+b+c;
// }
// const res = addnumbers(2,6,4,6,7,1,2,3,4,55,66,7,7,8,9,1000);
// console.log(res);


//Spread Example
// var arr = ["Khushi","Baishali","Archana","Rajesh","Chatterjee"];
// function getnames(name1,name2,name3){
//     console.log(name1);
//     console.log(name2);
//     console.log(name3);
// }
// getnames(arr[0],arr[1],arr[2]);
// console.log("...........");
// getnames(...arr);
// getnames(arr);


//for combining use rest operator
//playing with rest and spread operator
// var student={
//     name:"Baishali",
//     age:20,
//     occupation:"Software Engineer"
// }
//in simple js
// console.log(student.age);
// //in array destructuring
// const {name,age,occupation} =student;
// console.log(name,age,occupation);
// //array destruturing using rest operator
// const {age,...rest} = student;
// console.log(rest);
// const {...rest} = student;
// console.log(rest);

//spread
//value override
// const newstudent={
//     ...student,
//     age:21
// }
// console.log(newstudent);


//async,await,promises
//callback
// const datas = [
//     {name:"Baishali Chatterjee",age:20},
//     {name:"Khushi Chatterjee", age:19}
// ]
// function getata(){
//     let output="";
//     setTimeout(() => {
//         datas.forEach((data,index)=>{
//             output+=`${data.name}\n`
//         })
//        console.log(output);
//     },1000);
// }

// function createdata(newdata,getata){
//     setTimeout(() => {
//         datas.push(newdata);
//         getata();
//     },2000);
// }
// createdata({name:"Archana Chatterjee",age:21},getata);


//promise
//takes two things resolve and reject
// function createdata(newdata){
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//         datas.push(newdata);
//         error=false;
//         if(!error){
//             resolve();
//         }else{
//             reject("nothing is normal.....");
//         }
//        }, 2000);
//     })

// }
// createdata({name:"Baishali Chatterjee",age:21}).then(getata).catch(err=>console.log(err));


//async await
//synchronous -> step by step execution
//asynchronous -> randomly excution it doesnot maintain any sequence

// const name=[{name:"khushi"},{name:"Baishali"},{name:"Neha"},{name:"archana"},{name:"rajesh"},{name:"chatterjee"}];
// function getvalue(){
//     let output="";
//     setTimeout(() => {
//         name.forEach((data,index)=>{
//             output+=`${data.name}\n`;
//         })
//         console.log(output);
//     }, 1000);
// }
// function createvalue(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             name.push(newdata);
//             error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 2000);
//     })
// }

// async function newfunc(){
//     await createvalue({name:"monika"});
//     getvalue();
// }
// newfunc();


// const jsonString = '{"name":"Baishali","age":20,"city":"purulia"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);
// console.log(jsonObject.age);
// console.log(jsonObject.city);

// const jsonObject = {
//     name:"Baishali",
//     age:20,
//     city:"PURULIYA"
// };
// console.log(jsonObject.name);
// console.log(jsonObject.age);
// console.log(jsonObject.city);
// console.log(typeof(jsonObject));
// const jsonString = JSON.stringify(jsonObject);
// console.log(jsonString);
// console.log(typeof(jsonString));

// const jsonobject = {
//     name:"BAISHALI CHATTERJEE",
//     age:20,
//     email:"baishalichatterjee991@gmail.com",
//     city:"JHALDA"
// }
// console.log(typeof(jsonobject));
// console.log("THE DETAILS OF THE PERSON IS WHICH IS IN THE FORM OF OBJECT:");
// console.log(jsonobject);
// console.log(jsonobject.name);
// console.log(jsonobject.age);
// console.log(jsonobject.city);
// console.log(jsonobject.email);
// const jsonString = JSON.stringify(jsonobject);
// console.log(jsonString);

// const jsonstring = '{"name" : "BAISHALI CHATTERJEE","AGE":"20","CITY":"PURULIYA"}';
// const jsonObject = JSON.parse(jsonstring);
// console.log(typeof(jsonObject));
// console.log(jsonObject);



//closure->values are retain here even though the functions are called we have lexical scope in this example a and c have the lexical scope..
//anonymous function-> function without name
// var sum = function(a){
//     console.log("Hello live viewers...." + a);
//     var c=4;
//     return function(b){
//         return a+b+c;
//     }
// }
// var store = sum(2);
// console.log(store(5));

// var sum=function(a,b,c,d,e){
//     return {
//         getSumTwo:function(){
//             return a+b;
//         },
//         getSumThree:function(){
//             return a+b+c;
//         },
//         getsUmFour:function(){
//             return a+b+c+d;
//         },
//         getSumFive:function(){
//             return a+b+c+d+e;
//         }
//     }
// }

// var store = sum(1,2,3,4,5);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());
// console.log(store.getsUmFour());
// console.log(store.getSumFive());


//Apply ,Call & Bind in  js
//call
// let user1={
//     name:"Baishali Chatterjee",
//     age:20,
//     designation:"software engineer",
//     printdetails:function(){
//         console.log(this);
//     }
// }
// user1.printdetails();
// let user2={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }
// let user3={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }
// //function borrowing
// user1.printdetails.call({user2,user3});


//if the function is generic
// let user1={
//     name:"Baishali Chatterjee",
//     age:20,
//     designation:"software engineer"
// }
//  let printdetails = function(state,country){
//     console.log(this.name+" "+state+" "+country);
// }
// let user2={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }
// let user3={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }

// printdetails.call(user1,"DELHI","INDIA");
// printdetails.call(user2,"DELHI","INDIA");
// printdetails.call(user3,"DELHI","INDIA");


//Apply
// let user1={
//     name:"Baishali Chatterjee",
//     age:20,
//     designation:"software engineer"
// }
//  let printdetails = function(state,country){
//     console.log(this.name+" "+state+" "+country);
// }
// let user2={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }
// let user3={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }

// printdetails.apply(user1,["DELHI","INDIA"]);
// printdetails.apply(user2,["DELHI","INDIA"]);
// printdetails.apply(user3,["DELHI","INDIA"]);


//Bind
// let user1={
//     name:"Baishali Chatterjee",
//     age:20,
//     designation:"software engineer"
// }
//  let printdetails = function(state,country){
//     console.log(this.name+" "+state+" "+country);
// }
// let user2={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }
// let user3={
//     name:"Khushi Chatterjee",
//     age:21,
//     designation:"Student of BTECH"
// }

// let store1=printdetails.bind(user1,"DELHI","INDIA");
// let store2=printdetails.bind(user2,"DELHI","INDIA");
// let store3=printdetails.bind(user3,"DELHI","INDIA");
// store1();
// store2();
// store3();



//High order functions
//map,reduce,filter,sort,for Each
// const companies = [
//     {name:"Google",category:"Product Based",start:1981,end:2004},
//     {name:"Amazon",category:"Product Based",start:1992,end:2008},
//     {name:"Paytm",category:"Product Based",start:1999,end:2007},
//     {name:"Coforge",category:"Service Based",start:1989,end:2010},
//     {name:"Mindtree",category:"Service Based",start:1989,end:2010}
// ];

// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


//forEach

// companies.forEach(function(company,index){
// console.log(company.name);
// });

// companies.forEach((company,index)=>{
//     console.log(company.start);
// });

// companies.forEach((company,index)=>(console.log(company.end)));
//normal function
// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }




//filter
// const store = ages.filter(function(age,index){
//     if(age >= 20){
//         return true;
//     }
// })
// console.log(store);

// const str = ages.filter((age,index)=>{
//     if(age >= 30){
//         return true;
//     }
// });
// console.log(str);

// const str = ages.filter(age => age >=20);
// console.log(str);

//simple function
// for(let i=0;i<ages.length;i++){
//     if(ages[i] >= 30){
//         console.log(ages[i]);
//     }
// }
 

//practice problem
//print all service based companies using filter,forEach

// const store = companies.filter(function(company,index){
//     if(company.category === "Service Based "){
//         return true;
//     }
// })
// console.log(store);

// const str = companies.filter((arr,i) =>{
//     if(arr.category === "Product Based"){
//         return true;
//     }
// });
// console.log(str);

// const st=companies.filter(company=> company.category === "Service Based");
// console.log(st);

//map
// companies.map(function(company,index){
//     console.log(company);
// });

// companies.map((company,index)=>{
//     console.log(company);
// });


//string literal
// const store = companies.map(function(company,index){
//     return `${company.name} ${company.category}`;
// })
// console.log(store);


//sort->this takes two values 1 and -1
//ascending order
// const sorted = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sorted);

//descending order
// const descen = companies.sort(function(c1,c2){
//     if(c1.start < c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(descen);

//sort the end date in ascending order 
// const ascensort = companies.sort((c1,c2)=> (c1.end > c2.end) ? 1 : -1 );
// console.log(ascensort);

//sort the end date in descending order
// const descensort = companies.sort((c1,c2)=>{
//     if(c1.end < c2.end){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(descensort);

// const ascendingsorted = ages.sort(function(c1,c2){
//     if(c1 > c2){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(ascendingsorted);

// const descendingsorted = ages.sort((c1,c2) => {
//     if(c1 < c2){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(descendingsorted);

// const descendingsorted = ages.sort((c1,c2) => (c1 < c2) ? 1 : -1);
// console.log(descendingsorted);





//normal function
// var sum=0;
// for(let i=0;i<ages.length;i++){
//     sum = sum + ages[i];
// }
// console.log(sum);

//Reduce
// const sumage = ages.reduce(function(total,age){
//     return total+age;
// },0);
// console.log(sumage);

// const sumage = ages.reduce((total,age)=> total+age ,0);
// console.log(sumage);




//Not defined or Undefined in JS
//at first when variable is declared it has undefined 
//after excution it gets value whatever it is assigned
// console.log(a);
// var a=5;
// console.log(a);


// //Not defined -> it does not get any memory space
// var b;
// // console.log(b);



//Memoization
//Memoization is an optimization technique that can be used to reduce
//time-consuming calculations by saving previous input to something called cache and 
//returning the result from it

// let sum=0;
// const calc= (n)=>{
//     for(let i=0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }

// const memoize = (fun)=>{
//     let cache ={};
//     return function(...agrs){
//         let n=agrs[0];
//         if(n in cache){
//             console.log("cache");
//             console.log(cache);
//             return cache[n];
//         }else{
//             console.log("calculating first time..");
//             let res = fun(n);
//             cache[n]=res;
//             return res;
//         }
//     }
// }

// const store = memoize(calc);
// console.log(store(6));
// console.log(store(6));
// console.time();
// console.log(calc(5));
// console.timeEnd();



// let fact=1;
// const factorial = (n)=>{
//     for(let i=1;i<=n;i++){
//         fact=fact*i;
//     }
//     return fact;
// }

// const memoization = (fun) =>{
//     let cache={};
//     return function(...args){
//         let n=args[0];
//         if(n in cache){
//             console.log("cache");
//             console.log(cache);
//             return cache[n];
//         }else{
//             console.log("calculating first time..");
//             let res=fun(n);
//             cache[n]=res;
//             return res;
//         }
//     }
// }
// const store = memoization(factorial)
// console.log(store(5));
// console.log(store(5));
// console.log(store(8));
// console.log(store(5));

// let sqrt = 1;
// const squareroot = function(n){
//     for(let i=1;i<=n;i++){
//         sqrt = sqrt * i * i;
//     }
//     return sqrt;
// }

// const memos = (func) =>{
//     let cache = {};
//     return function(...args){
//         let n=args[0];
//         if(n in cache){
//             console.log("cache");
//             console.log(cache);
//             console.log(cache[n]);
//         }else{
//             console.log("calculating first time");
//             let res=func(n);
//             cache[n]=res;
//             return res;
//         }
//     }
// }

// const store = memos(squareroot);
// console.log(store(5));
// console.log(store(5));
// console.log(store(5));
// console.log(store(3));



//debouncing-> is used to prevent the calling of unwanted functions
//here we use settimeout function


//Throttling
// const mythrottle=(fn,d)=>{
//     return function(...args){
//         document.getElementById("myid").disabled=true;
//         setTimeout(() => {
//             fn();
//         }, d);
//     }
// }
// const newFunc = mythrottle(()=>{
//     document.getElementById("myid").disabled=false;
//     console.log('user clicked');
// },5000)

// const thorttle=(fn,d)=>{
//     return function(...args){
//         document.getElementById("myid").disabled = true;
//         setTimeout(() => {
//             fn();
//         }, d);
//     }
// }
// const newFunc= thorttle(()=>{
//     document.getElementById("myid").disabled=false;
//     console.log("user clicked");
// },5000);





//Infinite currying in js

// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(2)(3)(4)(1)());



// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(6)(8)(8)(6)(1)());



//currying function in js
// function multiplication(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }
// console.log(multiplication(6)(8)(5))


// userobj={
//     name:"khushi",
//     age:20
// }

// function userinfo(obj){
//     return function(userinfo){
//         return obj[userinfo];
//     }
// }

// let res = userinfo(userobj);
// console.log(res[age]);


//event bubbling & capturing
//stop propagation , immediadte propagation & prevent default
//child to parent



//prototypes
//object
// const obj= new Object({
//     name:"khushi"
// })
// const str={
//     name:"Baishali",
//     getname:function(){
//         return this.name;
//     },
//     getage:function(){
//         return this.age;
//     }
// }
// console.log(str);

// const obj = {
//     age:20,
//     name:"khushi",
//    __proto__:str
// }
// console.log(obj.getage());
// const obj3={
//     class:"BTECH",
//     roll:68,
//     __proto__:obj
// }
// console.log(obj3.name);
// console.log(obj3.age);
// console.log(obj3.roll);


//array
// const array = ["Baishali","Khushi","Chatterjee"];
// console.log(array);
// const array2 = new Array();


// Array.prototype.show = function(){
//     return this;
// }
// const cities = ["Purulia","Jhalda"];
// console.log(cities.show());


// Array.prototype.convertIntoObject = function(){
//     let newobj = {};
//     this.forEach(element=>{
//         newobj[element]=element;
//     })
//     return newobj;
// }
// console.log(cities.convertIntoObject());

// function MyPrototype(name){
//     this.name=name;
// }
// MyPrototype.prototype=obj;

// const myproto = new MyPrototype("Aritra");
// console.log(myproto.getname());





//Set,Map,WeakSet,WeakMap
//Set->
//It contains only unique values
//Object constructor


// let myArray = [1,2,3,4,68,4,5,68];
// let obj = new Set(myArray);
// obj.add(69);
// const store={
//     name:"Baishai Chatterjee"
// }
// obj.add(store);
// obj.add(store);
// // obj.clear();
// // console.log(obj);
// console.log(obj.has(store));

// for (const new1 of obj) {
//     console.log(new1);
// }
// obj.forEach((ele)=>{
//     console.log(ele);
// })




//Map-> datas are represented as key value pair 
//here keys are unique but values may be duplicate
// let myMap = new Map([["1",'one'],["2","two"],["6",'one'],["3","three"]]);
// console.log(myMap);
// myMap.delete("2");
// console.log(myMap);
// console.log(myMap.get("2"));
// myMap.forEach((key,value)=>{
//     console.log(key,value);
// })
// for (let [key,value] of myMap) {
//     console.log(`key: ${key}  values: ${value}`);
// }




//WeakSet:-> 
//only store objects
//cann't itrate over it
// let ws=new WeakSet();
// var obj1={"name":"khushi"};
// var obj2={};
// ws.add(obj1);
// ws.add(obj2);
// console.log(ws);
// console.log(ws.has(obj1));


//WeakMap
// let wm= new WeakMap();
// var obj1={"name":"khushi"};
// var obj2={"name":"khui"};
// var obj3={"name":"shi"};
// wm.set(obj1,"private");
// wm.set(obj2,"public");
// wm.set(obj3,"protected");
// console.log(wm.has(obj1));




//Revise yourself with some random questions
//1. Write code to getarray of names from a given array of users
//2. Get back only active users
//3. sort users by age descending


// const users=[
//     {
//         id:1,
//         name:"Ajay",
//         isActive:true,
//         age:20
//     },
//     {
//         id:2,
//         name:"Akash",
//         isActive:true,
//         age:18
//     },
//     {
//         id:3,
//         name:"Fraz",
//         isActive:false,
//         age:34
//     },
//     {
//         id:4,
//         name:"Vipin",
//         isActive:false,
//         age:30
//     }
// ]

//solution:1
// const names = [];
// for(let i=0;i<users.length;i++){
//     names.push(users[i].name);
// }
// console.log(names);
// users.forEach(Array=>{
//     names.push(Array.name);
// })
// console.log(names);
// for (const element of users) {
//     names.push(element.name);
// }
// console.log(names);


//solution:2
// const Active = [];
// users.filter((array,index)=>{
//     if(array.isActive == true){
//         Active.push(array.name);
//     }
// })
// console.log(Active);



//using map
// const name1 = users.filter((array)=>array.isActive).map((array)=>array.name);
// console.log(name1);


/*Important Notes:-> 
The map() method returns a new array , where as the forEach() method does not return anything
The forEach() method is similar to the for loop, but it does not have a return value
The map() method is similar to the forEach() method, but it returns a new array
*/


//sort
//solution:->
// const store = users.sort((a,b)=>{
//     if(a.age<b.age) return 1;
//     if(a.age>b.age) return -1;
// })
// console.log(store);


//production wise code written
// const result = users.filter((array)=>(array.isActive))
// .sort((a,b)=>a.age > b.age ? 1 : -1)
// .map(array => array.name);
// console.log(result);



//sort them according to their id in reverse order means descending
// const names = users.sort((a,b)=>(a.id < b.id) ? 1 : -1);
// console.log(names);
//find the inactive people 
// const inactive = users.filter((array)=>{
//     if(array.isActive == false){
//         console.log(array.name);
//     }
// })
// const inactive = users.map((array)=>{
//         if(array.isActive == false){
//             console.log(array.name);
//         }
//     })




//Today's Goal:-> Object,Includes(),some(),push()
//reduce(),find(),findIndex(),concat()
// const users=[
//     {
//         id:1,
//         name:"Ajay",
//         isActive:true,
//         age:20
//     },
//     {
//         id:2,
//         name:"Akash",
//         isActive:true,
//         age:18
//     },
//     {
//         id:3,
//         name:"Fraz",
//         isActive:false,
//         age:34
//     },
//     {
//         id:4,
//         name:"Vipin",
//         isActive:false,
//         age:30
//     }
// ]


//1. Check If User with such name Exists
//2. Adding element to the Array
//3. Remove Duplicates Element in the Array
//4. Concatenating the Array



//solution 1:->
// const isname = (name,users)=>{
//     let exist = false;
//     for(let i=0;i<users.length;i++){
//         if(users[i].name == name){
//             exist=true;
//         }
//     }
//     return exist;
// }
// console.log(isname("Fraz",users));
// console.log(isname("Farhan",users));

//find function
// const isnameexist = (name,users)=>{
//     const user = users.find((user)=> user.name == name);
//     return Boolean(user);
// }
// console.log(isnameexist("Fraz",users));
// console.log(isnameexist("Farhan",users));

// const isnameexist = (name,users)=>{
//     const index = users.findIndex((user) => user.name == name);
//     return index;
// }
// console.log(isnameexist("Ajay",users));
// console.log(isnameexist("Vipin",users));

//some -> it returns true or false;
// const isnameexists = (name,users)=>{
//     const user =  users.some((user) => user.name == name);
//     return user;
// }
// console.log(isnameexists("Farhan",users));
// console.log(isnameexists("Vipin",users));



//solution:2->
// const arr=[1,2];
// const append = (arr,ele)=>{
//     return [...arr,ele]


//     // arr.push(ele);
//     // return arr;
// }

// console.log(append(arr,3));
// console.log(arr);



//solution:3->
/*important notes->
The set object is a built-in javascript data structure that allows you to store unique values of any array
The spread operator is used to expand the array into individual arguments
The includes method is used to check if it already exists in the uniqueElements array.
*/

// const arr=[1,2,2,3,3,4,5,5,6,7,8,9,10,10];
// function uniqueArray(){
//     const uniqueElement=[];
//     arr.forEach((ele)=>{
//         if(!uniqueElement.includes(ele)){
//             uniqueElement.push(ele);
//         }
//     })
//     return uniqueElement;
// }
// console.log(uniqueArray(arr));


//set
// const arr=[1,2,2,3,3,4,5,5,6,7,8,9,10,10];
// function uniqueArray(arr){
//     return [...new Set(arr)];
// }
// console.log(uniqueArray(arr));


//reduce
// const arr=[1,2,2,3,3,4,5,5,6,7,8,9,10,10];
// const uniqueArray=(arr)=>{
//     return arr.reduce((acc,ele)=>{
//         return acc.includes(ele) ? acc : [...acc,ele]
//     },[]);
// }
// console.log(uniqueArray(arr));


//concat
// const arr1 = [1,2,3,4,10];
// const arr2 =[5,6,7,8,9];
// const mergearray = (arr1,arr2)=>{
//     // arr1.push(...arr2);
//     // return arr1;
//     // return [...arr1,...arr2];
//     return arr1.concat(...arr2);
// }
// const result = mergearray(arr1,arr2);
// console.log(result,arr1,arr2);

