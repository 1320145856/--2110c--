# class类

### 类

传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

#### 类的定义

1.ES6中类的定义

```
// 声明人的类
class People {
						// 类的属性
            constructor(name, age) { // 构造器，实例化方法的时候触发
                this.name = name
                this.age = age
            }
            // 类的方法
            sport(){
                return this.name + '会运动'
            }
 }
 //对类进行实例化
 let p = new People('小明',18)
 //调用类的方法
 console.log(p.sport());
 //获取类的属性
 console.log(p.age);
```

2.TS中类的定义

```
class People {
    name: string
    age: number
    constructor(name:string,age){
        this.name = name
        this.age = age
    }
    sport():string{
        return `${this.name}会运动`
    }
}
//对类进行实例化
let p = new People('小明',18)
// 注意声明类的时候约束name属性为string类型，age属性为数字类型；实例化的时候要严格按照类型传参
//调用类的方法
console.log(p.sport()); //小明会运动
//获取类的属性
console.log(p.age); // 18
```

1.ES6中的继承

```
//声明一个动物的类
class Animal {
   constructor(name){
      this.name = name
   }
   run(){
      console.log(`${this.name}会跑步`);
   }
}
//声明 狗 类 继承动物类
class Dog extends Animal {
    constructor(name){
                super(name)
    }
}
let d = new Dog('哈士奇')
console.log(d.name); // 哈士奇
d.run(); // 哈士奇会跑步
```

2.TS中类的继承和ES6中的继承一样，只是添加了属性的数据类型

```
class Animal {
    name: string
    constructor(name){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
class Dog extends Animal {
    constructor(name){
        super(name)
    }
}
let d = new Dog('哈士奇')
console.log(d.name); // 哈士奇
console.log(d.getName());// 哈士奇
```

### 类的修饰符

定义属性的时候提供了三种修饰符 

public          公有，类里面、子类、类外面都可以访问 ------默认为公有的
protected   保护类型 类里面、子类可以访问  类外面不可以访问
private		私有类型 类里面可以访问，其他不行

### 静态属性和静态方法

1.静态属性

使用static修饰静态属性，静态属性不能在实例上获取

2.静态方法，静态方法不能在实例上获取

### 多态

#### 多态的定义

父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现

####  多态的实现

```typescript
1.首先声明一个父类，父类中声明一个方法，不去实现
class Animal {
    name:string
    constructor(name:string){
        this.name = name
    }
    // 父类定义了一个方法，不去实现
    eat(){}
}
2.声明一个类继承父类，并且实现 eat 方法
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}吃骨头`);
        
    }
}
3.再声明一个类继承父类，并且实现 eat 方法
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}吃鱼`);
        
    }
}
//1. 我们可以看到，父类 Animal 内声明了 eat 方法；但是没有去实现，而是有继承他的子类 Dog 和 Cat 去实现，每个子类有不同的表现，这就是多态的实现
```

### 抽象类

#### 抽象类的定义

提供其他类继承的基类，不能直接被实例化

#### 抽象类和抽象方法

1.定义抽象类的语法

```
abstract class 类名 {}
```

2.抽象类不能直接被实例化

抽象类不能直接被实例化，只是提供其他类继承的一个基类

3.抽象方法的语法：

```
abstract 方法名():{}
```

抽象方法不能脱离抽象类使用ts,抽象方法只能出现在抽象类中,抽象方法不能有具体体现，只能在派生类中实现