
// A union type is a type formed from two or more other types, representing values that may be any one of those types.

//                        :::::  Union with Variables

console.log('Below Union with Variales')


let rollNum : string | number // declaring union types
rollNum = 'PIAIC-194849';// assign string
console.log(rollNum)
rollNum = 194849; // assign number
console.log(rollNum)
// rollNum = true // showing error on boolean beacause it is not defined.



//-------------------------------------------------------------------
let code : string | number ;
code = 'pak123';
console.log(code)
console.log(code.toUpperCase()); // PAK123

code = 12345;
console.log(code)
// console.log(code.toUpperCase()) // error --> Number can't be upper/Lower Case;


//______________________________________________________________________________________________________________________
//                       :::::   Union with type 

console.log('Below Union with Type')

// define user role
type user = {
    name:string;
    id:number
}
// define Admin role
type Admin = {
    username: string;
    id:number
}

// abid as a union type user / Admin
let abid : user | Admin ;

abid = {name:'Abid kk', id:1948149 } // as a user 
console.log(abid)

abid = {username:'Abid Ali Khokhar',id: 4545} // as an Admin
console.log(abid);




//__________________________________________________________________________________________________________
//                      ::::: Union with function 


console.log('Below Union with function')

function getId(id:number | string){
    console.log(`MY_Id is ${id}`)
}
console.log(getId(12345));// 
console.log(getId('PIAIC-194849')) // 

// _________________________________________________________________________________________________________
//                      ::::: Union with Array

console.log('Below Union with Array');

let data1 : number[] = [11, 22, 33, 44, 55]; // only number

let data2 : string[] = ['one', 'two', 'three']; // only string values

let data3 : string[] | number[]  = [10, 20,] // only number Or only string values 

// if want both multiple types
// let data4 : string | number [] = [20,30,'ten'] // error 

let data5 : (string | number )[] = [10,20,'ten','twenty']// both number & stirng













// Union Naworing