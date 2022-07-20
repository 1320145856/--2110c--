// /* 
//     ---数字类型的定义
//     数字类型
//     1.语法使用的是es6的语法，Uploading:Uploading
//     2.自动添加指定索引符合
//     3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
// */
// enum Status{
//     Uploading,
//     Success,
//     Falied
// }
// console.log(Status.Falied);
// console.log(Status['Falied']);
// console.log(Status.Success);

// /* 
//     指定索引值
//     总结：每次手动添加索引的时候,下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
// */

// enum Anmimal{
//     Pig = 200,
//     Dog,
//     Cat,
//     Snake
// }
// console.log(Anmimal.Cat);
// console.log(Anmimal['Dog']);
// console.log(Anmimal.Snake);


// // -------------计算值
// const getvalue = () =>{
//     return 1
// }

// // 3.计算值和常量
// enum Constant{
//     a = getvalue(),
//     b,// 枚举成员必须具有初始化表达式。
//     c,
// }


// /* 
//     反向映射
// */

// enum Statuss{
//     Statuss = 200,
//     NotFound = 404,
//     Error = 500
// }
// console.log(Statuss.Error);
// console.log(Statuss[404]);
// console.log(Statuss.NotFound);

// /* 
//     字符串枚举
// */

// const getValue = () =>{
//     return 0
// }

// const names = '小明'
// enum Message{
//     // 错误信息
//     Error = 'error message',
//     /* 
//         成功的错误信息
//         枚举成员必须具有初始化表达式
//     */
//     SuccessError = 200,
//     // 含字符串值成员的枚举中不允许使用计算值。
//     ClientError = names
// }
// console.log(Message.SuccessError,'SuccessError');
// console.log(Message.Error);
// console.log(Message['ClientError']);

// /* 
//     异构枚举
// */
// enum Result{
//     Faild = 0,
//     Success = "Success"
// }

// /* 
//     枚举成员类型
// */
// enum Animal{
//     Dog=1,
//     Cat=2,
// }

// // 狗
// interface Dog{
//     type:Animal.Dog
// }
// // 猫
// interface Cat {
//     type:Animal.Cat
// }

// let cat1:Cat={
//     type:Animal.Dog// error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”。
    
// }
// let dog:Dog={
//     type:Animal.Dog
// }

// /* 
//     联合类型
// */
// enum Keys{
//     // 关闭
//     Off,
//     On
// }
 
// interface Light{
//     status:Keys
// }

// let light:Light= {
//     status:Keys.Off
// }

// /* 
//     运行时对象
// */
// enum E{
//     A,
//     B
// }
// const getIndex = (enumObj:{C:number}):number =>{
//     return enumObj.C
// }
// console.log(getIndex(E));

// /* 
//     const enum
// */

// enum Animal{
//     Rabbit,
//     Pig
// }

// const enum Light90{
//     Off,
//     On
// }

// const status45 = Animal.Pig
// const status57 = Light90.Off
// console.log(status45,status57);



/* 
//     ---数字类型的定义
//     数字类型
//     1.语法使用的是es6的语法，Uploading:Uploading
//     2.自动添加指定索引符合
//     3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
// */
// enum Status{
//     Uploading,
//     Success,
//     Falied
// }
// console.log(Status.Falied);
// console.log(Status['Falied']);
// console.log(Status.Success);

// /* 
//     指定索引值
//     总结：每次手动添加索引的时候,下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
// */

// enum Anmimal{
//     Pig = 200,
//     Dog,
//     Cat,
//     Snake
// }
// console.log(Anmimal.Cat);
// console.log(Anmimal['Dog']);
// console.log(Anmimal.Snake);


// // -------------计算值
// const getvalue = () =>{
//     return 1
// }

// // 3.计算值和常量
// enum Constant{
//     a = getvalue(),
//     b,// 枚举成员必须具有初始化表达式。
//     c,
// }


// /* 
//     反向映射
// */

// enum Statuss{
//     Statuss = 200,
//     NotFound = 404,
//     Error = 500
// }
// console.log(Statuss.Error);
// console.log(Statuss[404]);
// console.log(Statuss.NotFound);

// /* 
//     字符串枚举
// */

// const getValue = () =>{
//     return 0
// }

// const names = '小明'
// enum Message{
//     // 错误信息
//     Error = 'error message',
//     /* 
//         成功的错误信息
//         枚举成员必须具有初始化表达式
//     */
//     SuccessError = 200,
//     // 含字符串值成员的枚举中不允许使用计算值。
//     ClientError = names
// }
// console.log(Message.SuccessError,'SuccessError');
// console.log(Message.Error);
// console.log(Message['ClientError']);

// /* 
//     异构枚举
// */
// enum Result{
//     Faild = 0,
//     Success = "Success"
// }

// /* 
//     枚举成员类型
// */
// enum Animal{
//     Dog=1,
//     Cat=2,
// }

// // 狗
// interface Dog{
//     type:Animal.Dog
// }
// // 猫
// interface Cat {
//     type:Animal.Cat
// }

// let cat1:Cat={
//     type:Animal.Dog// error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”。
    
// }
// let dog:Dog={
//     type:Animal.Dog
// }

// /* 
//     联合类型
// */
// enum Keys{
//     // 关闭
//     Off,
//     On
// }
 
// interface Light{
//     status:Keys
// }

// let light:Light= {
//     status:Keys.Off
// }

// /* 
//     运行时对象
// */
// enum E{
//     A,
//     B
// }
// const getIndex = (enumObj:{C:number}):number =>{
//     return enumObj.C
// }
// console.log(getIndex(E));

// /* 
//     const enum
// */

// enum Animal{
//     Rabbit,
//     Pig
// }

// const enum Light90{
//     Off,
//     On
// }

// const status45 = Animal.Pig
// const status57 = Light90.Off
// console.log(status45,status57);







/* 
    ---数字类型的定义
    数字类型
    1.语法使用的是es6的语法，Uploading:Uploading
    2.自动添加指定索引符合
    3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
*/
enum Status{
    Uploading,
    Success,
    Falied
}
console.log(Status.Falied);
console.log(Status['Falied']);
console.log(Status.Success);

/* 
    指定索引值
    总结：每次手动添加索引的时候,下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
*/

enum Anmimal{
    Pig = 200,
    Dog,
    Cat,
    Snake
}
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);


// -------------计算值
const getvalue = () =>{
    return 1
}

// 3.计算值和常量
enum Constant{
    a = getvalue(),
    b,// 枚举成员必须具有初始化表达式。
    c,
}


/* 
    反向映射
*/

enum Statuss{
    Statuss = 200,
    NotFound = 404,
    Error = 500
}
console.log(Statuss.Error);
console.log(Statuss[404]);
console.log(Statuss.NotFound);

/* 
    字符串枚举
*/

const getValue = () =>{
    return 0
}

const names = '小明'
enum Message{
    // 错误信息
    Error = 'error message',
    /* 
        成功的错误信息
        枚举成员必须具有初始化表达式
    */
    SuccessError = 200,
    // 含字符串值成员的枚举中不允许使用计算值。
    ClientError = names
}
console.log(Message.SuccessError,'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);

/* 
    异构枚举
*/
enum Result{
    Faild = 0,
    Success = "Success"
}

/* 
    枚举成员类型
*/
enum Animal{
    Dog=1,
    Cat=2,
}

// 狗
interface Dog{
    type:Animal.Dog
}
// 猫
interface Cat {
    type:Animal.Cat
}

let cat1:Cat={
    type:Animal.Dog// error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”。
    
}
let dog:Dog={
    type:Animal.Dog
}

/* 
    联合类型
*/
enum Keys{
    // 关闭
    Off,
    On
}
 
interface Light{
    status:Keys
}

let light:Light= {
    status:Keys.Off
}

/* 
    运行时对象
*/
enum E{
    A,
    B
}
const getIndex = (enumObj:{C:number}):number =>{
    return enumObj.C
}
console.log(getIndex(E));

/* 
    const enum
*/

enum Animal{
    Rabbit,
    Pig
}

const enum Light90{
    Off,
    On
}

const status45 = Animal.Pig
const status57 = Light90.Off
console.log(status45,status57);

