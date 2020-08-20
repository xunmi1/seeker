(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{202:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-简要总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-简要总结"}},[t._v("#")]),t._v(" TypeScript 简要总结")]),t._v(" "),a("h2",{attrs:{id:"协变-co-variant-和抗变-contra-variant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协变-co-variant-和抗变-contra-variant"}},[t._v("#")]),t._v(" 协变 (co-variant) 和抗变 (contra-variant)")]),t._v(" "),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("p",[t._v("协变是指按照缩小类型范围的方向改变，抗变则相反")]),t._v(" "),a("p",[t._v("对于一个普通的函数 "),a("code",[t._v("(params: A): B")])]),t._v(" "),a("ul",[a("li",[t._v("参数位置的类型 ("),a("code",[t._v("A")]),t._v(") 可以缩小范围，即协变")]),t._v(" "),a("li",[t._v("返回位置的类型 ("),a("code",[t._v("B")]),t._v(") 可以扩大范围，即抗变")])]),t._v(" "),a("p",[t._v("若参数类型 ("),a("code",[t._v("A")]),t._v(") 是一个函数 ("),a("code",[t._v("(params: C): D")]),t._v(")， 作为一个整体，其协变应满足:")]),t._v(" "),a("ul",[a("li",[t._v("参数位置的类型 ("),a("code",[t._v("C")]),t._v(") 可以扩大范围，即抗变")]),t._v(" "),a("li",[t._v("返回位置的类型 ("),a("code",[t._v("D")]),t._v(") 可以缩小范围，即协变")])]),t._v(" "),a("p",[t._v("对于继承派生，需满足里氏替换原则 (Liskov Substitution Principle LSP)")]),t._v(" "),a("ul",[a("li",[t._v("子类完全拥有父类的方法，且具体子类必须实现父类的抽象方法")]),t._v(" "),a("li",[t._v("子类中可以增加自己的方法")]),t._v(" "),a("li",[t._v("当子类覆盖或实现父类的方法时，方法的形参比父类的更加宽松，即抗变")]),t._v(" "),a("li",[t._v("当子类覆盖或实现父类的方法时，方法的返回值比父类的更加严格，即协变")])]),t._v(" "),a("h3",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将联合类型转换为交叉类型")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnionToIntersection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" infer "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",[a("li",[a("p",[a("code",[t._v("U extends any")]),t._v(" 将永远返回 "),a("code",[t._v("true")]),t._v("，即 "),a("code",[t._v("U extends any ? (k: U) => void : never")]),t._v(" 可获得 "),a("code",[t._v("(k: U) => void")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("U")]),t._v(" 代表一个联合类型，经过上一步转换成一个函数类型的联合，使用 "),a("code",[t._v("infer")]),t._v(" 提取其参数 "),a("code",[t._v("I")])])]),t._v(" "),a("li",[a("p",[t._v("利用 "),a("code",[t._v("extends")]),t._v(" 和 "),a("code",[t._v("infer")]),t._v(" 的 "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("inference from conditional types")]),a("OutboundLink")],1),t._v(" 的特性")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在"),a("strong",[t._v("抗变")]),t._v("位置上，可以将多个有相同类型的候选项推导出"),a("strong",[t._v("交叉类型")]),t._v("；在"),a("strong",[t._v("协变")]),t._v("位置上，可以推导出"),a("strong",[t._v("联合类型")]),t._v("。")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("其中 "),a("code",[t._v("I")]),t._v(" 位于抗变位置，最终获得交叉类型")])])]),t._v(" "),a("li",[a("p",[t._v("将元组类型转换为联合类型")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TupleToUnion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("infer "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TupleToUnion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("code",[t._v("U")]),t._v(" 位于协变位置，最终获得联合类型")])])]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jkchao.github.io/typescript-book-chinese/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 TypeScript"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);