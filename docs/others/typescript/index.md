# TypeScript 简要总结

## 协变 (co-variant) 和抗变 (contra-variant)

### 说明

协变是指按照缩小类型范围的方向改变，抗变则相反

对于一个普通的函数 `(params: A): B`

- 参数位置的类型 (`A`) 可以缩小范围，即协变
- 返回位置的类型 (`B`) 可以扩大范围，即抗变

若参数类型 (`A`) 是一个函数 (`(params: C): D`)， 作为一个整体，其协变应满足:

- 参数位置的类型 (`C`) 可以扩大范围，即抗变
- 返回位置的类型 (`D`) 可以缩小范围，即协变

对于继承派生，需满足里氏替换原则 (Liskov Substitution Principle LSP)

- 子类完全拥有父类的方法，且具体子类必须实现父类的抽象方法
- 子类中可以增加自己的方法
- 当子类覆盖或实现父类的方法时，方法的形参比父类的更加宽松，即抗变
- 当子类覆盖或实现父类的方法时，方法的返回值比父类的更加严格，即协变

### 应用

- 将联合类型转换为交叉类型

  ```typescript
  type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
  ```

  1. `U extends any` 将永远返回 `true`，即 `U extends any ? (k: U) => void : never` 可获得 `(k: U) => void`

  2. `U` 代表一个联合类型，经过上一步转换成一个函数类型的联合，使用 `infer` 提取其参数 `I`

  3. 利用 `extends` 和 `infer` 的 [`inference from conditional types`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types) 的特性

  ::: tip
  在**抗变**位置上，可以将多个有相同类型的候选项推导出**交叉类型**；在**协变**位置上，可以推导出**联合类型**。
  :::

  4. 其中 `I` 位于抗变位置，最终获得交叉类型

- 将元组类型转换为联合类型

  ```typescript
  type TupleToUnion<T> = T extends Array<infer U> ? U : never;

  // or
  type TupleToUnion<T extends any[]> = T[number];
  ```

  `U` 位于协变位置，最终获得联合类型

## 参考链接

- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)
