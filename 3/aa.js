// /* 
//     interface
//     我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName 和 lastName,也就是英文的名和姓，然后返回一个拼接后的完整名字
// */
// /* interface Persion{
//     firstName:string,
//     lastName:string,
//     age:number,
//     sex:boolean,
//     color:string
// } */
// /* @param param0
// @returns */
// function getFullName({firstName,lastName,age,sex}:Persion):string{
//     return `My name${lastName}${firstName},My age is ${age},like smoke,${sex}`
// }
// let result = getFullName({firstName:'world',lastName:'hello'})
// console.log(result);
// let result = getFullName({firstName:'三',lastName:'张',age:20,sex:false})
// document.body.innerHTML = result
// console.log(result);
// /* 
//     可选属性 ?
// */
// interface Persion {
//     firstName:string,
//     lastName:string,
//     age:number,
//     sex:boolean,
//     colors?:string,
//     [prop:string]:any
// }
// let result = getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})
// /* 
//     绕开多余属性的检查，类型断言   !!!!
//     1.类型断言 as <>
//     2.[props:string]:any
// */
// // interface Vegetables{
// //     color?:string
// //     type:string
// // }
// // const getVegetables = ({color,type}:Vegetables):string => {
// //     return `A ${color? color + "":""}${type}`
// // }
// // getVegetables({
// //     type:'tomato',
// //     size:12,
// //     price:1.2
// // } as Vegetables)
// interface Vegetables{
//     color?:string,
//     type:string,
//     [props:string]:any
// }
// // const getVegetables = ({color,type}:Vegetables):string =>{
// //     return `A ${color? color+"":""}${type}`
// // }
// // getVegetables({
// //     type:'tomato',
// //     size:12,
// //     price:1.2
// // })
// /* 
//     利用类型兼容性
// */
// interface Vegetables{
//     type:string;
// }
// const getVegetables = ({type}:Vegetables)=>{
//     return `A ${type}`;
// }
// const option = {type:"tomato",size:12};
// getVegetables(option)
// /* 
//     只读属性
//     readonly
// */
// interface Role{
//     readonly 0:string;
//     readonly 1:string;
// }
// const role:Role = {
//     0:'super_admin',
//     1:'admin'
// }
// role[1] = '我是快乐的';// 无法分配到 "1" ，因为它是只读属性。
// /* 
//     const和readonly  对比
// */
// const obj = {
//     name:'张三'
// }
// obj.name="李四"
// interface Info{
//     readonly name:string
// }
// const info: Info={
//     name:'张三'
// }
// info['name'] = '李四'// 无法分配到 "name" ，因为它是只读属性。
// /* 
//     类型别名
// */
// interface AddFunc{
//     (num1:number,num2:number):number
// }
// const add:AddFunc = (n1,n2) => n1+n2;
// const join:AddFunc = (n1,n2) => `${n1}${n2}`;// 不能将类型“string”分配给类型“number”。
// add('a',2);// 类型“string”的参数不能赋给类型“number”的参数。
// /* 
//     interface
//     我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName 和 lastName,也就是英文的名和姓，然后返回一个拼接后的完整名字
// */
// /* interface Persion{
//     firstName:string,
//     lastName:string,
//     age:number,
//     sex:boolean,
//     color:string
// } */
// /* @param param0
// @returns */
// function getFullName({firstName,lastName,age,sex}:Persion):string{
//     return `My name${lastName}${firstName},My age is ${age},like smoke,${sex}`
// }
// let result = getFullName({firstName:'world',lastName:'hello'})
// console.log(result);
// let result = getFullName({firstName:'三',lastName:'张',age:20,sex:false})
// document.body.innerHTML = result
// console.log(result);
// /* 
//     可选属性 ?
// */
// interface Persion {
//     firstName:string,
//     lastName:string,
//     age:number,
//     sex:boolean,
//     colors?:string,
//     [prop:string]:any
// }
// let result = getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})
// /* 
//     绕开多余属性的检查，类型断言   !!!!
//     1.类型断言 as <>
//     2.[props:string]:any
// */
// // interface Vegetables{
// //     color?:string
// //     type:string
// // }
// // const getVegetables = ({color,type}:Vegetables):string => {
// //     return `A ${color? color + "":""}${type}`
// // }
// // getVegetables({
// //     type:'tomato',
// //     size:12,
// //     price:1.2
// // } as Vegetables)
// interface Vegetables{
//     color?:string,
//     type:string,
//     [props:string]:any
// }
// // const getVegetables = ({color,type}:Vegetables):string =>{
// //     return `A ${color? color+"":""}${type}`
// // }
// // getVegetables({
// //     type:'tomato',
// //     size:12,
// //     price:1.2
// // })
// /* 
//     利用类型兼容性
// */
// interface Vegetables{
//     type:string;
// }
// const getVegetables = ({type}:Vegetables)=>{
//     return `A ${type}`;
// }
// const option = {type:"tomato",size:12};
// getVegetables(option)
// /* 
//     只读属性
//     readonly
// */
// interface Role{
//     readonly 0:string;
//     readonly 1:string;
// }
// const role:Role = {
//     0:'super_admin',
//     1:'admin'
// }
// role[1] = '我是快乐的';// 无法分配到 "1" ，因为它是只读属性。
// /* 
//     const和readonly  对比
// */
// const obj = {
//     name:'张三'
// }
// obj.name="李四"
// interface Info{
//     readonly name:string
// }
// const info: Info={
//     name:'张三'
// }
// info['name'] = '李四'// 无法分配到 "name" ，因为它是只读属性。
// /* 
//     类型别名
// */
// interface AddFunc{
//     (num1:number,num2:number):number
// }
// const add:AddFunc = (n1,n2) => n1+n2;
// const join:AddFunc = (n1,n2) => `${n1}${n2}`;// 不能将类型“string”分配给类型“number”。
// add('a',2);// 类型“string”的参数不能赋给类型“number”的参数。
/*
    interface
    我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName 和 lastName,也就是英文的名和姓，然后返回一个拼接后的完整名字
*/
/* interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    color:string
} */
/* @param param0
@returns */
function getFullName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName, age = _a.age, sex = _a.sex;
    return "My name".concat(lastName).concat(firstName, ",My age is ").concat(age, ",like smoke,").concat(sex);
}
var result = getFullName({ firstName: 'world', lastName: 'hello' });
console.log(result);
var result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false });
document.body.innerHTML = result;
console.log(result);
var result = getFullName({ firstName: '三', lastName: '张', age: 20, sex: false, height: 123 });
var getVegetables = function (_a) {
    var type = _a.type;
    return "A ".concat(type);
};
var option = { type: "tomato", size: 12 };
getVegetables(option);
var role = {
    0: 'super_admin',
    1: 'admin'
};
role[1] = '我是快乐的'; // 无法分配到 "1" ，因为它是只读属性。
/*
    const和readonly  对比
*/
var obj = {
    name: '张三'
};
obj.name = "李四";
var info = {
    name: '张三'
};
info['name'] = '李四'; // 无法分配到 "name" ，因为它是只读属性。
var add = function (n1, n2) { return n1 + n2; };
var join = function (n1, n2) { return "".concat(n1).concat(n2); }; // 不能将类型“string”分配给类型“number”。
add('a', 2); // 类型“string”的参数不能赋给类型“number”的参数。
