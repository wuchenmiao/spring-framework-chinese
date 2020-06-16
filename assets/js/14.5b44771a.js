(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(n,e,o){"use strict";o.r(e);var t=o(43),r=Object(t.a)({},(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"_1-1-spring-ioc-容器和-beans-介绍"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-spring-ioc-容器和-beans-介绍"}},[n._v("#")]),n._v(" 1.1. Spring IoC 容器和 Beans 介绍")]),n._v(" "),o("p",[n._v("本章涵盖了 Spring 框架控制反转（Ioc）实现的原理。\nIoC 也叫依赖注入（DI）。\n在此过程中，对象只能通过构造函数参数，工厂方法的参数，工厂方法返回的或构造的对象实例属性来定义其依赖项（即与之一起使用的其他对象）。\n容器创建bean时，会注入bean的依赖。\n从根本上讲，这个过程是由 Bean 通过使用类的直接构造器或诸如服务定位器模式的机制来控制其依赖的实例化和位置的逆过程（因此称为控制反转）。")]),n._v(" "),o("p",[o("code",[n._v("org.springframework.beans")]),n._v(" 和 "),o("code",[n._v("org.springframework.context")]),n._v(" 是 Spring 框架IoC容器的基础 。\n"),o("RouterLink",{attrs:{to:"/en/core/beans-beanfactory/"}},[n._v("BeanFactory")]),n._v(" 接口提供了一种高级配置机制，能够管理任何类型的对象。\n"),o("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/5.2.6.RELEASE/javadoc-api/org/springframework/context/ApplicationContext.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("ApplicationContext"),o("OutboundLink")],1),n._v(" 是\n"),o("code",[n._v("BeanFactory")]),n._v(" 的子接口，它增加了：")],1),n._v(" "),o("ul",[o("li",[n._v("易于和Spring AOP 功能集成")]),n._v(" "),o("li",[n._v("Message resource 处理（在国际化中使用）")]),n._v(" "),o("li",[n._v("事件发布")]),n._v(" "),o("li",[n._v("Application 层特定的context，例如在web 应用中使用"),o("code",[n._v("WebApplicationContext")])])]),n._v(" "),o("p",[n._v("简单来说，"),o("code",[n._v("BeanFactory")]),n._v(" 提供了配置框架和基础功能，而"),o("code",[n._v("ApplicationContext")]),n._v(" 添加了更多特定的企业级功能。\n"),o("code",[n._v("ApplicationContext")]),n._v("是 "),o("code",[n._v("BeanFactory")]),n._v(" 的完整超集，在本章中专门用于对 Spring 的 IoC 容器的描述。\n获取更多使用 "),o("code",[n._v("BeanFactory")]),n._v(" 而不是"),o("code",[n._v("ApplicationContext")]),n._v(" 的信息，请查看 "),o("RouterLink",{attrs:{to:"/core/beans-beanfactory/"}},[n._v("BeanFactory")]),n._v(" 。")],1),n._v(" "),o("p",[n._v("在 Spring 中，对象构成了应用的支柱，这些被Spring IoC 容器管理的对象集，我们称之为beans。\nbean 是一个由 Spring IoC 容器实例化、组装并管理的对象。\n除此之外，bean 只是应用中众多普通对象中的一员，\n容器使用的配置元数据反应了 beans 以及它们之间的依赖关系.")])])}),[],!1,null,null,null);e.default=r.exports}}]);