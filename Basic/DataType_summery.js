// primitive =>
    // 7 types:: Number,String,Boolean,null,undefined,symbol(for making it unique), bigint(bigger values)

//Reference type::(Non-primitive)
//Array,Object,Function

//Is js is static or dynamic type language.

//const score = 100; //number
const scoreNew = 100.3; // Number

const isLoggedIn = false;
const outsidetemp = null;
let userEmail ; // undefined

const id =Symbol('123');
const newId = Symbol('123');
console.log(id===newId);
console.log(id);
console.log(newId);


//const bigNumber = 9856234785n;
console.log(typeof bigNumber);

const hreos =["shaktiman","krrish"];

 let myObj={
    name:"utpal",
    agr:22,
 }
// things under {} is object

//Function
const myFunction = function(){
    console.log("function");
}
console.log(typeof hreos);
console.log(typeof myObj);
console.log(typeof score)


//return type of non-primitive datatype is "function" but for function is called "object function"

//**********************************************************************************************************
//Stack(primitive)-> got copy , Heap(non-primitive)-> referance of original value
let emailId="abc@gmail.com";
let newmail=emailId;
newmail="apple@gmail.com"

console.log(newmail);
console.log(emailId);

let user={
    email: "utpal@gmail.com",
    upi:"123@ybl"
}
let user2=user;
user2.email="new@abc.c"
console.log(user2.email);

