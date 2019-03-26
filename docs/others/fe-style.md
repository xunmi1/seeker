# 代码风格

::: tip
范围: FE，Node，miniProgram;
说明: 规则分为三类: **必须**、**推荐**、**禁止**。
:::
[[TOC]]

## JavaScript

> 适用版本: [ECMAScript 2018](https://tc39.github.io/ecma402/)

### 类型 (Types)

::: tip
截至 ES9,  JavaScript 拥有 [6 种基本数据类型和 1 种引用类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)
:::

1. **禁止**使用 `var` 声明，对于变量 (属性) 使用 `let` 声明, 常量使用 `const` 声明
2. **禁止**声明从未使用的变量 (属性)
3. **禁止**在赋值语句 `=` 前后换行
4. **推荐**使用`Object.prototype.toString.call` 来实现类型校验，`typeof`仅适合基本类型的校验

### 对象 (Object)

 1. **禁止**使用`Object`构造函数来声明对象

    ```javascript
    // bad
    const obj = new Object();
    
    // good
    const obj = {};
    const emptyObj = Object.created(null);
    ```

2. **推荐**使用对象属性、方法简写

    ```javascript
    const value = 1;
    // bad
    const obj = {
        value: value,
        addValue: function (value) {
            return atom.value + value;
        }
    };
    
    // good
    const obj = {
        value,
        addValue(value) {
            return obj.value + value;
        }
    };
    ```

3. 属性为无效标识符时**必须**使用单引号，动态属性使用中括号

    ```javascript
    // bad
    const bad = {
        'foo': 3,
        'data-blah': 5
    };
    
    // good
    const good = {
        foo: 3,
        'data-blah': 5
    };
    ```

4. **禁止**修改`JavaScript`内置对象及其原型链上的任何属性或方法

   ```javascript
   // bad
   Object.prototype.toString = function () {
       return JSON.stringify(this);
   }
   ```

5. **禁止**使用`for...of`遍历对象

6. **必须**在`for...in`循环体中，使用[`obj.hasOwnProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)方法来筛选`obj`的属性, 除非该对象无`prototype`

    ```javascript
    const obj = {
        name: 'PHP',
        abstract: 'PHP is the best programming language in the world'
    }
    // bad
    for (let prop in obj) {
        console.log(property);
    }
    
    // good
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(property);
        }
    }
    
    // best
    Object.keys(obj).forEach(console.log)
    ```

 7. **必须**访问对象属性时使用点符号

    ```javascript
    const luke = {
        age: 28
    };
    // bad
    const age = luke['age'];
    
    // good
    const age = luke.age;
    ```


### 数组 (Array)

1. **禁止**使用`Array`构造函数来声明数组

   ```javascript
   // bad
   const arr = new Array();
   
   // good
   const arr = [];
   ```

2. 将类数组对象转换成数组， **必须**使用数组解构 `...` 代替 [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

   ```js
   const foo = document.querySelectorAll('div');
   
   // bad
   const nodes = Array.from(foo);
   
   // good
   const nodes = [...foo];
   ```

3. **推荐**使用数组内置的迭代器函数代替 `for`语句或 `for...of`

4. **必须**在数组回调方法中进行返回操作 (不包括`arr.forEach`方法)

   ```javascript
   const arr = [1, 2, 3]
   // bad
   arr.map(x => {
       x = x + 1;
   })
   
   // good
   arr.map(x => x + 1);
   ```

5. **推荐**使用 [`arr.push`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 代替直接赋值来给数组添加元素。

   ```javascript
   const someStack = [];
   
   // bad
   someStack[someStack.length] = 'A Bad Way';
   
   // good
   someStack.push('A Good Way');
   ```

6. **推荐**使用数组解构赋值

   ```javascript
   const arr = [1, 2, 3, 4];
   
   // bad
   const first = arr[0];
   const second = arr[1];
   
   // good
   const [first, second] = arr;
   ```
### 字符串 (string)

1. **必须**在最外层使用单引号 (`HTML`模板中使用双引号内部使用单引号)

   ```javascript
   // bad
   const name = "bad";
   
   // good
   const name = 'good';
   ```

2. 当存在字符串多次拼接时，**推荐**使用[字符串模板](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)

3. **禁止**对字符串使用`eval()`

   > `eval()` 是一个危险的函数，拥有很高的访问和执行权限，`eval()` 运行的字符串代码容易被恶意修改，最终可能会在网页/扩展程序中运行恶意代码，同理禁止使用`with`

4. **禁止**对字符串使用不必要的转义字符

   > 反斜杠严重损害可读性，因此他们只有在必须的时候使用

   | '      | "      | \      | \n     | \r     | \t     | \b     | \f     |
   | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
   | 单引号 | 双引号 | 反斜杠 | 换行符 | 回车符 | 制表符 | 退格符 | 换页符 |

### 函数 (Function)

1. **禁止**在一个非函数代码块中声明一个函数

   ```javascript
   // bad
   if (true) {
       function foo() {
           return 'first';
       }
   } else {
       function foo() {
           return 'second';
       }
   }
   foo();
   ```

2. **禁止**将形参命名为 `arguments`

::: warning
会覆盖原来函数作用域内的 arguments 对象
:::

3. **推荐**使用数组解构`...`代替`arguments`

   ```javascript
   // good
   function concatenateAll(...args) {
     return args.join();
   }
   ```

4. **必须**将拥有默认值或可选的形参放到最后

   ```javascript
   // good
   function handleThings(name, opts = {}) {
       // ...
   }
   ```

5. **禁止**使用函数构造器去创建一个函数

   > 通过这种途径创建函数与 eval() 类似
   ```javascript
   // bad
   const add = new Function('a', 'b', 'return a + b');
   
   // still bad
   const subtract = Function('a', 'b', 'return a - b');
   ```

6. **推荐**使用命名函数表达式而不是函数声明

7. 使用匿名函数时 (传递内联函数)， **必须**使用箭头函数，不要保存 `this`引用

   > 箭头函数内部的`this`将直接指向函数声明时的上下文，避免再写蠢萌的 `const that = this;`
   ```javascript
   // good
   [1, 2, 3].map(x => x + 1);
   ```

8. 如果函数体仅有一个单独的语句，返回一个无副作用的 [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)，**推荐**省略括号并使用隐式返回

9. **推荐**链式调用时使用换行缩进对齐 (超过两个方法链)

### 数字 (number)

1. **推荐**使用`Number()`或`~~`进行类型转换

2. 拥有小数位的数字计算，若需处理精度，**推荐**使用 `Math.floor()`或 `Math.round()`, 或判断计算误差是否在可容忍范围

   ```javascript
   let result = 0.1 + 0.2;
   // bad
   result = parseInt(result, 10);
   
   // good
   result = Math.floor(result);
   ```

### 布尔 (boolean)

1. **推荐**使用`!!`或 `!`运算符进行类型转换

   ```javascript
   let language = 'PHP';
   // bad
   if (language !== undefined) console.log(language + 'is the best language');
   
   // good
   if (language) console.log(language + 'is the bad language');
   ```

### 运算符 (Operator)

1. **必须**使用 `===` 或 `!==`，而非`==`或`!=`

2. **禁止**使用位运算符，不包括`!`、`!!`、`~~`

3. **禁止**使用不必要的三目表达式

   ```javascript
   // bad
   const foo = a ? a : b;
   const bar = c ? true : false;
   
   // good
   const foo = a || b;
   const bar = !!c;
   ```

4. 使用混合运算符时，**必须**使用括号进行区分

   ```javascript
   // bad
   const foo = a && b < 0 || c > 0 || d + 1 === 0;
   
   // good
   const foo = (a && b < 0) || c > 0 || (d + 1 === 0);
   ```

### 符号 (Punctuation)

1. **必须**在正常语句结尾处有分号 '**;**'

   > 通常情况不需要分号，但是若在 `return`、IIFE 等受 [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) 规则影响的语句后不处理，可能出现未预期结果，若有良好编码习惯，也是可以避免，但是为规避潜在风险，必须加分号

2. **推荐**逗号 '**,**' 出现在行结尾，当对象的属性多于一个时，每个属性结尾有逗号

### 空白 (Blocks)

1. **必须**使用四个空格进行缩进

   > 虽然 FE 发展趋势是**两个空格**缩进，但是考虑到和大部分语言保持一致及`Node`端，统一使用四个空格

2. **必须**使用一个空格分离操作符

3. **必须**在控制语句的括号两边放置一个空格

   ```javascript
   const [isPHP, isJS] = [true, true];
   const good = function () {};
   // bad
   if(isPHP) {
       good();
   }
      
   // good
   if (isJS) {
       good();
   }
   ```

4. **必须**在文件末尾放置一空白行

5. **禁止**在逗号、分号之前放置空格，逗号之后需要放置空格

   ```javascript
   // bad
   let foo = 1 ;
   let arr = [1 , 2];
       
   // good
   let foo = 1;
   let arr = [1, 2];
   ```

6. **推荐**在同行大括号内两侧放置一个空格

   ```javascript
    const obj = { name: 'obj' }; 
   ```

7. **推荐**在行的末尾不使用空格

8. 在函数声明、函数表达式、函数调用、对象创建、数组创建、for语句等场景中，**禁止**在 , 或 ; 前换行；

9. 不同行为或逻辑的语句集，**推荐**空行隔开，更易阅读；

10. 对于 `if...else...` 、 `try...catch...finally` 等语句，**推荐**使用在 } 号后添加一个换行。

### 命名 (Naming Conventions)

1. 命名对象、函数和实例时**必须**使用小驼峰命名法 (camelCase)

   ```javascript
   // bad
   const PHP_is_GOOD = {};
   function phpisgood() {}
   
   // good
   const thisIsMyObject = {};
   function thisIsMyFunction() {}
   ```

2. 命名构造器函数或者类 (`class`) 时**必须**大驼峰命名法 (PascalCase)

   ```javascript
   // bad
   function user(options) {
       this.name = options.name;
   }
   const bad = new user({ name: 'bad' });
   
   // good
   class User {
       constructor(options) {
           this.name = options.name;
       }
   }
   const good = new User({ name: 'good' });
   ```

3. **禁止**保存`this`的引用，特殊情况使用 [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)、[`call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)等等

4. 缩写或省略词**必须**全部大写

5. 如果属性/方法的类型/返回值是一个 `boolean`，**必须**使用 `is`、`not` 或 `has`为前缀

6. **推荐**文件名和默认导出 (`export default`) 保持一致

## Vue

> 适用版本: 高于 [v2.6.0](https://github.com/vuejs/vue)

### 组件 (Component)

1. 单文件组件**必须**是以`<template>`、`<script>`及`<style>`标签的顺序排列

2. **禁止**声明与 `Vue`及其原型上冲突的属性和方法名

3. 组件的选项**推荐**是以下面的顺序排列，其中加粗选项为**必须**

   `el`, **`name`**, `parent`, `functional`, **`components`**, `directives`, `filters`, `extends`, `mixins`, **`model`**, **`props`**, **`data`**, **`computed`**, `watch`, **生命周期钩子**, **`methods`**, `template/render`

4. **推荐**无响应数据的简单组件声明为函数式组件

### 组件名 (Name)

1. 组件名**必须**使用大驼峰命名法 (`PascalCase`)，在字符串模板中使用大驼峰名称，在`DOM`模板中使用`kebab-case`

   > 1. 避免与现有及未来可能出现的原生 HTML 标签冲突
   > 2. 与`JS/JSX`中组件名的要求保持一致

2. **推荐**文件名和组件名保持一致

3. **紧密耦合**的子组件**推荐**使用父级组件的组件名为前缀

### Props

1. **禁止**`props`使用数组声明，`prop`**必须**显性定义其数据类型

   ```javascript
   // bad
   props: ['size']
   
   // good
   props: {
       size: {
           type: String,
           required: true,
           validator: value => ['small', 'default', 'large'].includes(value)
       }
   }
   ```

2. **必须**使用小驼峰命名法 (`camelCase`) 来命名`prop`，在模板和`JSX `中**必须**使用 `kebab-case`

   ```vue
   // good
   props: {
     greetingText: String
   }
   template: `<WelcomeMessage greeting-text="hi"/>`
   ```

### 组件依赖 (Components) 

1. **禁止**引入模板中未使用的子组件
2. **推荐**组件名和实际引用的组件名保持一致
3. **推荐**未直接使用的组件采用懒加载方式引入

### 指令 (Directives)

1. **必须**在使用`v-for` 时设置`key`属性

   ```vue
   <!-- bad -->
   <ul>
       <li v-for="todo in todos">{{ todo.text }}</li>
   </ul>
   
   <!-- good -->
   <ul>
       <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
   </ul>
   ```

2. **禁止**`v-for`和`v-if`同时在同一元素上使用

   ```vue
   <!-- bad -->
   <ul>
       <li 
           v-for="todo in todos"
           v-if="todo.id !== 1"
           :key="todo.id"
       >
           {{ todo.text }}
       </li>
   </ul>
   ```

3. `v-for`出现多层嵌套时，**禁止**使用相同的迭代变量名

   ```vue
   <!-- bad -->
   <div>
       <div v-for="i in list" :key="i.id">
           <div v-for="i in data" :key="i.id">{{ i.text }}</div>
       </div>
   </div>
   ```

4. **推荐**使用缩写指令 (`@`、`:`、`#`) 代替完整的指令名

### 响应数据 (Data)

1. 组件的 `data`选项**必须**是一个函数，不包括根组件

   ```javascript
   // bad
   export default {
       data: { foo: 'bar' }
   }
   
   // good
   export default {
       data () {
           return { foo: 'bar' }
       }
   }
   ```

2. 未与视图绑定的复杂数据，**推荐**避免声明在`data`中
::: warning
会严重损害组件生成、渲染的性能
:::
### 计算属性 (Computed)

1. 计算属性**必须**有返回值
2. 计算属性**禁止**修改组件内部状态数据，即无副作用
3. **推荐**使用计算属性代替`watch` 属性

### 组件模板 (Template)

1. **必须**使用四个空格缩进组件标签

2. **禁止**为`<template>` 设置`key`值

   ```html
   <!-- bad -->
   <template key="PHP"> ... </template>
   
   <!-- good -->
   <template> ... </template>
   ```

3. **禁止**在根元素上使用`v-for`指令、`<slot>`等

4. 在字符串模板中空内容的组件**必须**自闭合，不包含原生`HTML`标签

   ```vue
   <template>
       <!-- bad -->
       <MyComponent></MyComponent>
   
       <!-- good -->
       <MyComponent />
   </template>
   ```

5. 组件传递的特性超过四个时，**必须**换行缩进对齐，尾部闭合符换行和头部对齐

   ```vue
   <!-- bad -->
   <MyComponent php="good" symfony="good" Laravel="good" ThinkPHP="good" yii="good" />
   
   <!-- good -->
   <MyComponent
        php="bad"
        symfony="bad"
        laravel="bad"
        think-php="bad"
        yii="bad"
   />
   ```

6. **禁止**模板中传递重复的组件特性

7. 非空 HTML 特性值的外层**必须**始终带双引号

   ```vue
   <!-- bad -->
   <AppSidebar :style={width:sidebarWidth+'px'} />
   
   <!-- good -->
   <AppSidebar :style="{ width: sidebarWidth + 'px' }" />
   ```

8. **推荐**元素 (包括组件) 的特性应该有统一的顺序

   顺序是：`is`, `v-for`, `v-if`, `v-else-if`, `v-else`, `v-show`, `v-cloak`, `v-pre`, `v-once`, `id`, `ref`, `key`, `slot`, `v-model`, 普通特性, `v-on`, `v-html`, `v-text`

9. **推荐**模板中等于号 "**=**" 两边无空格

10. **推荐**模板只包含简单的表达式，复杂表达式应重构为计算属性或方法

### 组件样式 (Style)

1. 单文件组件的样式**必须**加上 `scoped`，根组件，需要修改组件库样式等情况排除在外

### 组件通信 (Communication)

1. 触发的事件名**必须**使用`kebab-case`方式命名

   > 在`DOM`模板中，`camelCase` 或 `PascalCase`的事件名会被[自动转换为全小写](https://vuejs.org/v2/guide/components-custom-events)

   ```javascript
   // bad
   this.$emit('myEvent');
   
   // good
   this.$emit('my-event');
   ```

2. **禁止**使用`this.$parent`来修改父级组件的数据 (会破环数据流)

### 路由 (Router)

1. 路由跳转**必须**通过`name`属性实现跳转

   ```javascript
   // bad
   this.$router.push('main/home');
   this.$router.push({ path:'main/home' });
   
   // good
   this.$router.push({ name: 'home' });
   ```

2. 路由传参**推荐**同时使用`props: true`和`params`，实现解耦

3. 注册路由时，`path`属性**推荐**使用`kebab-case`方式命名
