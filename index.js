//数据类型number
var nums = 78;
var num2 = 1;
// num="ddd"  不能将类型string给number
var sum = nums + num2;
console.log(sum);
//字符串string
var name1 = "halo";
var age = 24;
//造个句子
var persinInfo = "my name is ".concat(name1, ",age is ").concat(age);
document.body.innerHTML = persinInfo;
console.log(persinInfo);
//boolean类型
var boolean = false;
//js创建数组的方式
// 1字面量创建[] 2new Array
// 第一种：字面量创建方式
var array = [];
//第二种
var Arry = [];
//------
//不能将类型“string”分配给类型“number”。
// let numArry:number[]=['1']
var numArry = [1, 2, 3, 4, 5];
// 不能将类型“number”分配给类型“string”。ts(2322)
// let stringArry:Array<string>=[12,23,32]
var stringArry = ["12", "23"];
//对象object
// ---字面量创建方法
var obj4;
var obj5;
var obj6;
obj4 = { name: "哈", age: 27 };
obj6 = { name: "嘻嘻", age: 22 };
//undefind和null类型
var undefind = undefined;
var null1 = null;
//元组
var person = ["师福齐", 24, true, 180];
console.log(person[2]);
person.push(49);
console.log(person);
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["green"] = 2] = "green";
    Color[Color["Blue2"] = 3] = "Blue2";
})(Color || (Color = {}));
var a = Color.Blue2;
console.log(a);
//any
var value1;
value1 = 123;
value1 = "abc";
value1 = false;
//void类型
function alertName2() {
    console.log('我是void');
}
// 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
function alertNames2() {
    console.log('我不是void');
    return 'hallo';
}
//never
// 返回never的函数必须存在无法达到的终点
function error2(message) {
    throw new Error(message);
}
var persion = { name: "hahaha", age: 21, sex: 1 };
//联合类型(|)
var aas;
aas = 1;
aas = "哈喽 发动机";
// 不能将类型“boolean”分配给类型“string | number”。
// aas=false
//类型断言
var abc;
abc = 123;
abc = 'abcd';
var abcd = abc.length;
var xx;
xx = 123;
xx = 'abcd';
var axx = xx.length;
//数据枚举enum 详情
var Status1;
(function (Status1) {
    Status1[Status1["Uploading"] = 0] = "Uploading";
    Status1[Status1["Success"] = 1] = "Success";
    Status1[Status1["Failed"] = 2] = "Failed";
})(Status1 || (Status1 = {}));
console.log(Status1.Uploading);
console.log(Status1["Success"]);
console.log(Status1.Failed);
// //数据类型number
// let nums:number=aa
// let num2:number=1
// // num="ddd"  不能将类型string给number
// let sum=nums+num2
// console.log(sum);
// //字符串string
// let name1:string="halo"
// let age:number=24
// //造个句子
// let persinInfo=`my name is ${name1},age is ${age}`
// document.body.innerHTML=persinInfo
// console.log(persinInfo);
// //boolean类型
// let boolean:boolean=false
// //js创建数组的方式
// // 1字面量创建[] 2new Array
// // 第一种：字面量创建方式
// let array:[]=[]
// //第二种
// let Arry:Array <[]>=[]
// //------
// //不能将类型“string”分配给类型“number”。
// // let numArry:number[]=['1']
// let numArry:number[]=[1,2,3,4,5]
// // 不能将类型“number”分配给类型“string”。ts(2322)
// // let stringArry:Array<string>=[12,23,32]
// let stringArry:Array<string>=["12","23"]
// //对象object
// // ---字面量创建方法
// let obj4:{name:string,age:number}
// let obj5:{name:"哇哇",age:20}
// let obj6:{name:string,age:number}
// obj4={name:"哈",age:27}
// obj6={name:"嘻嘻",age:22}
// //undefind和null类型
// let undefind:undefined=undefined;
// let null1:null=null
// //元组
// let person:[name:string,age:number,sex:boolean,height:number]=["师福齐",24,true,180]
// console.log(person[2]);
// person.push(49)
// console.log(person);
// //枚举
// enum Color{
//     Red=1,
//     green=2,
//     Blue2=3
// }
// let a:Color=Color.Blue2
// console.log(a);
// //any
// let value1: any;
// value1 = 123;
// value1 = "abc";
// value1 = false;
// //void类型
//  function alertName2(): void  {
//     console.log('我是void');  
// }
// // 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
//  function alertNames2(): string{
//     console.log('我不是void');  
//     return 'hallo'
// }
// //never
// // 返回never的函数必须存在无法达到的终点
// function error2(message: string): never {
//     throw new Error(message);
// }
// // 推断的返回值类型为never
// // function fail2() {
// //     return error("Something failed");
// // }
// //交叉类型
//   interface use {
//     name: string,
//     age: number
// }
//   interface per {
//     sex: number
// }
// type sss = use & per
// let persion: sss = {name: "hahaha",age: 21,sex:1}
// //联合类型(|)
// let aas:number|string;
// aas=1
// aas="哈喽 发动机"
// // 不能将类型“boolean”分配给类型“string | number”。
// // aas=false
// //类型断言
// let abc:any;
// abc=123;
// abc='abcd';
// let abcd=(<string>abc).length
// let xx:any;
// xx=123;
// xx='abcd';
// let axx=(xx as string).length
// //数据枚举enum 详情
// enum Status1{
//     Uploading,
//     Success,
//     Failed
//    }
//     console.log(Status1.Uploading);
//     console.log(Status1["Success"]);
//     console.log(Status1.Failed);
//数据类型number
// let nums:number=aa
// let num2:number=1
// // num="ddd"  不能将类型string给number
// let sum=nums+num2
// console.log(sum);
// //字符串string
// let name1:string="halo"
// let age:number=24
// //造个句子
// let persinInfo=`my name is ${name1},age is ${age}`
// document.body.innerHTML=persinInfo
// console.log(persinInfo);
// //boolean类型
// let boolean:boolean=false
// //js创建数组的方式
// // 1字面量创建[] 2new Array
// // 第一种：字面量创建方式
// let array:[]=[]
// //第二种
// let Arry:Array <[]>=[]
// //------
// //不能将类型“string”分配给类型“number”。
// // let numArry:number[]=['1']
// let numArry:number[]=[1,2,3,4,5]
// // 不能将类型“number”分配给类型“string”。ts(2322)
// // let stringArry:Array<string>=[12,23,32]
// let stringArry:Array<string>=["12","23"]
// //对象object
// // ---字面量创建方法
// let obj4:{name:string,age:number}
// let obj5:{name:"哇哇",age:20}
// let obj6:{name:string,age:number}
// obj4={name:"哈",age:27}
// obj6={name:"嘻嘻",age:22}
// //undefind和null类型
// let undefind:undefined=undefined;
// let null1:null=null
// //元组
// let person:[name:string,age:number,sex:boolean,height:number]=["师福齐",24,true,180]
// console.log(person[2]);
// person.push(49)
// console.log(person);
// //枚举
// enum Color{
//     Red=1,
//     green=2,
//     Blue2=3
// }
// let a:Color=Color.Blue2
// console.log(a);
// //any
// let value1: any;
// value1 = 123;
// value1 = "abc";
// value1 = false;
// //void类型
//  function alertName2(): void  {
//     console.log('我是void');  
// }
// // 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
//  function alertNames2(): string{
//     console.log('我不是void');  
//     return 'hallo'
// }
// //never
// // 返回never的函数必须存在无法达到的终点
// function error2(message: string): never {
//     throw new Error(message);
// }
// // 推断的返回值类型为never
// // function fail2() {
// //     return error("Something failed");
// // }
// //交叉类型
//   interface use {
//     name: string,
//     age: number
// }
//   interface per {
//     sex: number
// }
// type sss = use & per
// let persion: sss = {name: "hahaha",age: 21,sex:1}
// //联合类型(|)
// let aas:number|string;
// aas=1
// aas="哈喽 发动机"
// // 不能将类型“boolean”分配给类型“string | number”。
// // aas=false
// //类型断言
// let abc:any;
// abc=123;
// abc='abcd';
// let abcd=(<string>abc).length
// let xx:any;
// xx=123;
// xx='abcd';
// let axx=(xx as string).length
// //数据枚举enum 详情
// enum Status1{
//     Uploading,
//     Success,
//     Failed
//    }
//     console.log(Status1.Uploading);
//     console.log(Status1["Success"]);
//     console.log(Status1.Failed);
