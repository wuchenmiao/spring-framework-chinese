(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{385:function(e,t,n){"use strict";n.r(t);var o=n(43),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_1-1-introduction-to-the-spring-ioc-container-and-beans"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-introduction-to-the-spring-ioc-container-and-beans"}},[e._v("#")]),e._v(" 1.1. Introduction to the Spring IoC Container and Beans")]),e._v(" "),n("p",[e._v("This chapter covers the Spring Framework implementation of the Inversion of Control (IoC) principle. IoC is also known as dependency injection (DI). It is a process whereby objects define their dependencies (that is, the other objects they work with) only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. The container then injects those dependencies when it creates the bean. This process is fundamentally the inverse (hence the name, Inversion of Control) of the bean itself controlling the instantiation or location of its dependencies by using direct construction of classes or a mechanism such as the Service Locator pattern.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("org.springframework.beans")]),e._v(" and "),n("code",[e._v("org.springframework.context")]),e._v(" packages are the basis for Spring Framework’s IoC container. The "),n("RouterLink",{attrs:{to:"/en/core/beans-beanfactory/"}},[e._v("BeanFactory")]),e._v(" interface provides an advanced configuration mechanism capable of managing any type of object. "),n("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/5.2.6.RELEASE/javadoc-api/org/springframework/context/ApplicationContext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ApplicationContext"),n("OutboundLink")],1),e._v(" is a sub-interface of "),n("code",[e._v("BeanFactory")]),e._v(". It adds:")],1),e._v(" "),n("ul",[n("li",[e._v("Easier integration with Spring’s AOP features")]),e._v(" "),n("li",[e._v("Message resource handling (for use in internationalization)")]),e._v(" "),n("li",[e._v("Event publication")]),e._v(" "),n("li",[e._v("Application-layer specific contexts such as the "),n("code",[e._v("WebApplicationContext")]),e._v(" for use in web applications.")])]),e._v(" "),n("p",[e._v("In short, the "),n("code",[e._v("BeanFactory")]),e._v(" provides the configuration framework and basic functionality, and the "),n("code",[e._v("ApplicationContext")]),e._v(" adds more enterprise-specific functionality. The "),n("code",[e._v("ApplicationContext")]),e._v(" is a complete superset of the "),n("code",[e._v("BeanFactory")]),e._v(" and is used exclusively in this chapter in descriptions of Spring’s IoC container. For more information on using the "),n("code",[e._v("BeanFactory")]),e._v(" instead of the "),n("code",[e._v("ApplicationContext")]),e._v(", see "),n("RouterLink",{attrs:{to:"/en/core/beans-beanfactory/"}},[e._v("The BeanFactory")]),e._v(".")],1),e._v(" "),n("p",[e._v("In Spring, the objects that form the backbone of your application and that are managed by the Spring IoC container are called beans. A bean is an object that is instantiated, assembled, and otherwise managed by a Spring IoC container. Otherwise, a bean is simply one of many objects in your application. Beans, and the dependencies among them, are reflected in the configuration metadata used by a container.")])])}),[],!1,null,null,null);t.default=a.exports}}]);