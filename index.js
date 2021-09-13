//1.WAYS to print in js
//if anyone wants to print anything in console
//alert("me");
//document.write("this is document write")

//2.javascript console API

// console.log("hello world", 4 + 6, "another log");
// console.warn("this is warning");
// console.error("this is a error");
//id can not be duplicate it is used to identify.
//3.javascript variables
//it is a container to store data value
var number = 34;
var num = 3;
// console.log(num+number);

/* hefranv screen
 efcinkaev
all comment (ctrl+forward+/)*/

//4. data type in js

//numbers
var a = 344;
var b = 24.24;

//string
var str1 = "this is a string";
var str2 = "this is also a string";

//objects
var marks = {
    ravi: 34,
    shuvam: 78,
    harry: 99.977

}
// console.log(marks);
//boolean
var x = true;
var y = false;
// console.log(a,b);

var und = undefined;
var u;
// console.log(u);
// console.log(undefined);

var n = null;
// console.log(null);
// At a very high level, there are two types of datatypes in js
// 1.primitive : undefined,null,number,string,symbol,boolean
// 2.reference : arrays and objects
var arr = [1, 2, "sd", 3, 4];
// console.log(arr)

//operator in js
//arithmatic operator
var m = 100;
var n = 5;
console.log("the value of a+b is", a + b);
console.log("the value of a-b is", a - b)
console.log("the value of a*b is", a * b)
console.log("the value of a/b is", a / b)
//assignment operator
var c = m;
// c+=2 ; c-=2; c*=2 c/=2;
// console.log(c)
//comparison operator
//>= <= > <
var p = 23;
var q = 34;
//console.log(p==q);
//logical operator
//multiple cursor alt click
console.log(true && true)
console.log(true && false)
console.log(false && false)
// console.log(true||true)
// console.log(true||false)
// console.log(false||false)

//logical not
console.log(!false)
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
//chrome console blue color means number , black means string
//if else same as c++
for(var i=0;i<arr.length;i++)
{
    if(i==2){
        //break; loop break
        //continue; only condition break and continue in other conditions
    }
    console.log(arr[i]);
}
// arr.forEach(function (element) {
//     console.log(element);
// })
//const ac = 0;if can be used when we don't what to override a varriable
//ac++; it will give an erro because we can not change const variable
//let j = 0;
// while(j<arr.length)
// {
//     console.log(arr[i]);
//     j++;
// }
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length)

//array methods in js
let myarr = ["fan","camera",34,null,true];
console.log(myarr.length);
//myarr.pop();
//myarr.push("s");
//myarr.shift();//remove 1st element of array
const newlen = myarr.unshift("Harry")
console.log(newlen);
//console.log(myarr);
//myarr.toString() (in console)
//myarr.sort() (in console,It will convert everything into string then sort it)
//[] is dictionary

//string method in js
let mystr ="i am a good girl good";
console.log(mystr.length); //length 16 with space
console.log(mystr.indexOf("good")); //index 7 because bydefault print 1st index value
console.log(mystr.lastIndexOf("good"));
console.log(mystr.slice(0,3)); //it cut the string
f= mystr.replace("girl","boy")
f = f.replace("good","bad");//replace only replace the first occurance
console.log(f);

//date in js
let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());//GETS VALUE IN MILISEC
// console.log(mydate.getFullYear());
// console.log(mydate.getDay()); //week starts from sunday
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());

//DOM = Document Object Model
// document.getElementById('click').click()
// document.getElementById('click').style.border = 'blue'
// document.getElementById('click').style.border = '2px solid blue'

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container'); //if i write gebcn then getelementbyclassname will come
console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add ("bg-primary"); // adding class into class (adding bg-primary into elemClass)
elemClass[0].classList.add ("text-success");//we can add a class which we didn't create  
//elemClass[0].classList.remove("text-success"); //In console it can remove that class 
// console.log(elem.innerHTML);
// console.log(elem.innerText); //shortcut ierxt
// //ctrl d shortcut in visual studio code in setting

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('button') //gebtn
console.log(tn);
tmn = document.getElementsByTagName('div') //gebtn
console.log(tmn);
//class 'ELEMENTS' but tag only element
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tmn[0].appendChild(createdElement); //1st div

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tmn[0].replaceChild(createdElement2,createdElement);
// removeChild(element); removes an element
//mdn source

// Selecting using Query
sel = document.querySelector('.container')
console.log(sel);

sel = document.querySelectorAll('.container')
console.log(sel);

//Events in JS
function clicked(){
    console.log('the button was clicked');
}

window.onload = function(){
    console.log('the document was clicked');
}

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>"
//     console.log("click done")
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("click on container")
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("click out container")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up click on container")
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>";
//     console.log("mouse down click on container")
// })

//set timeout and setinterval
//Arrow function
// function summ(a,b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
} // arrow function is used when we need to insert a function
login = () =>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>set timeout</b>"
    console.log("I am your log");
}
// setTimeout(login,2000);
//if we want to use set interval repeatedly then we have to use setInterval
//clr = setInterval(login,2000);
//use clearInterval(clr) or clearTimeout(clr); it will clear interval

//js local storage
//localStorage.setItem('name','Harry')
//localStorage.getItem('name')
//localStorage.clear()
//localStorage.removeItem('name')


//json = js object notation which used to exchange data
//obj = {name : "harry", length : 1,a : {this:'tha\"t'}} //json standard requires double quote
obj = {name : "harry", length : 1,a : {this:'that'}}
jso = JSON.stringify(obj) // object would convert in a json string
// console.log(jso);
// console.log(typeof jso);
parsed = JSON.parse(`{"name": "harry", "length" : 1,"a" : {"this":"that"}}`)
//if we want to know the type of obj we have to use typeof 
console.log(parsed);

a = 34;
console.log(`this is my ${a}`)
 //ecmascript edition