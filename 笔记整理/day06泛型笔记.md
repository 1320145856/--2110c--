## 泛型

**泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性, 使用标识符号**<T>

我们既要允许传入任意类型的值，又要正确指定返回值类型，就要使用泛型。

```
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value);
};
getArray<number[]>([1, 2], 3).forEach(item => {
  console.log(item.length);
});
getArray<number>(2, 3).forEach(item => {
  console.log(item.length); // 类型“number”上不存在属性“length”
});
getArray(2, 3).forEach(item => {
  console.log(item.length); // 类型“number”上不存在属性“length”
});
```



### 泛型变量

当我们使用泛型的时候，你必须在处理类型涉及到泛型的数据的时候，把这个数据当做任意类型来处理。这就意味着不是所有类型都能做的操作不能做，不是所有类型都能调用的方法不能调用。

```
const getLength = <T>(param: T): number => {
  return param.length; // error 类型“T”上不存在属性“length”
};
const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
  return new Array(times).fill([param1, param2]);
};
getArray(1, "a", 3).forEach(item => {
  console.log(item[0].length); // error 类型“number”上不存在属性“length”
  console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
});
```

### 泛型函数类型

我们可以定义一个泛型函数类型，给一个函数定义函数类型

```
// ex1: 简单定义
const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
  return new Array(times).fill(arg);
};
// ex2: 使用类型别名
type GetArray = <T>(arg: T, times: number) => T[];
const getArray: GetArray = <T>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg);
};
//当然了，我们也可以使用接口的形式来定义泛型函数类型：
interface GetArray {
  <T>(arg: T, times: number): T[];
}
const getArray: GetArray = <T>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg);
};
interface GetArray<T> {
  (arg: T, times: number): T[];
  tag: T;
}
const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
  // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
  // 属性“tag”的类型不兼容。
  return new Array(times).fill(arg);
};
getArray.tag = "a"; // 不能将类型“"a"”分配给类型“number”
getArray("a", 1); // 不能将类型“"a"”分配给类型“number”
```

### 泛型约束

当我们使用了泛型时，就意味着这个这个类型是任意类型。但在大多数情况下，我们的逻辑是对特定类型处理的。当访问一个泛型类型的参数的 length 属性时，会报错"类型“T”上不存在属性“length”"，是因为并不是所有类型都有 length 属性。所以我们在这里应该对 T 有要求，那就是类型为 T 的值应该包含 length 属性。

```typescript
interface ValueWithLength {
  length: number;
}
const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'
//泛型约束就是使用一个类型和`extends`对泛型进行约束
interface ValueWithLength {
  length: number;
}
const getLength = <T extends ValueWithLength>(param: T): number => {
  return param.length;
};
getLength("abc"); // 3
getLength([1, 2, 3]); // 3
getLength({ length: 3 }); // 3
getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数
```

### 在泛型约束中使用类型参数

当我们定义一个对象，想要对只能访问对象上存在的属性做要求时

```
const getProps = (object, propName) => {
  return object[propName];
};
const obj = { a: "aa", b: "bb" };
getProps(obj, "c"); // undefined
const getProp = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
};
const obj = { a: "aa", b: "bb" };
getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数
```

这里我们使用让`K`来继承索引类型`keyof T`，你可以理解为`keyof T`相当于一个由泛型变量T的属性名构成的联合类型，在这里 K 就被约束为了只能是"a"或"b"，所以当我们传入字符串"c"想要获取对象*obj*的属性"c"时就会报错。

### 小结

本小节我们学习了泛型的相关知识；学习了使用泛型来弥补使用any造成的类型信息缺失；当我们的类型是灵活任意的，又要准确使用类型信息时，就需要使用泛型来关联类型信息，其中离不开的是泛型变量；泛型变量可以是多个，且命名随意；如果需要对泛型变量的类型做进一步的限制，则需要用到我们最后讲的泛型约束；使用泛型约束通过`extends`关键字指定要符合的类型，从而满足更多场景的需求。