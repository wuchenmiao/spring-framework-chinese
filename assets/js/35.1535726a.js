(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{389:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-4-the-resourceloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-the-resourceloader"}},[t._v("#")]),t._v(" 2.4. The ResourceLoader")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ResourceLoader")]),t._v(" interface is meant to be implemented by objects that can return (that is, load) "),a("code",[t._v("Resource")]),t._v(" instances. The following listing shows the "),a("code",[t._v("ResourceLoader")]),t._v(" interface definition:")]),t._v(" "),a("SwitchCode",{scopedSlots:t._u([{key:"java",fn:function(){return[a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResourceLoader")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0},{key:"kotlin",fn:function(){return[a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" ResourceLoader "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Resource\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("All application contexts implement the "),a("code",[t._v("ResourceLoader")]),t._v(" interface. Therefore, all application contexts may be used to obtain "),a("code",[t._v("Resource")]),t._v(" instances.")]),t._v(" "),a("p",[t._v("When you call "),a("code",[t._v("getResource()")]),t._v(" on a specific application context, and the location path specified doesn’t have a specific prefix, you get back a "),a("code",[t._v("Resource")]),t._v(" type that is appropriate to that particular application context. For example, assume the following snippet of code was executed against a "),a("code",[t._v("ClassPathXmlApplicationContext")]),t._v(" instance:")]),t._v(" "),a("SwitchCode",{scopedSlots:t._u([{key:"java",fn:function(){return[a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0},{key:"kotlin",fn:function(){return[a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("Against a "),a("code",[t._v("ClassPathXmlApplicationContext")]),t._v(", that code returns a "),a("code",[t._v("ClassPathResource")]),t._v(". If the same method were executed against a "),a("code",[t._v("FileSystemXmlApplicationContext")]),t._v(" instance, it would return a "),a("code",[t._v("FileSystemResource")]),t._v(". For a "),a("code",[t._v("WebApplicationContext")]),t._v(", it would return a "),a("code",[t._v("ServletContextResource")]),t._v(". It would similarly return appropriate objects for each context.")]),t._v(" "),a("p",[t._v("As a result, you can load resources in a fashion appropriate to the particular application context.")]),t._v(" "),a("p",[t._v("On the other hand, you may also force "),a("code",[t._v("ClassPathResource")]),t._v(" to be used, regardless of the application context type, by specifying the special "),a("code",[t._v("classpath:")]),t._v(" prefix, as the following example shows:")]),t._v(" "),a("SwitchCode",{scopedSlots:t._u([{key:"java",fn:function(){return[a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:some/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0},{key:"kotlin",fn:function(){return[a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:some/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("Similarly, you can force a "),a("code",[t._v("UrlResource")]),t._v(" to be used by specifying any of the standard "),a("code",[t._v("java.net.URL")]),t._v("prefixes. The following pair of examples use the "),a("code",[t._v("file")]),t._v(" and "),a("code",[t._v("http")]),t._v(" prefixes:")]),t._v(" "),a("SwitchCode",{scopedSlots:t._u([{key:"java",fn:function(){return[a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file:///some/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0},{key:"kotlin",fn:function(){return[a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file:///some/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("SwitchCode",{scopedSlots:t._u([{key:"java",fn:function(){return[a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://myhost.com/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0},{key:"kotlin",fn:function(){return[a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://myhost.com/resource/path/myTemplate.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("The following table summarizes the strategy for converting String objects to Resource objects:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Prefix")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Example")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Explanation")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("classpath:")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("classpath:com/myapp/config.xml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Loaded from the classpath.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("file:")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("file:///data/config.xml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Loaded as a URL from the filesystem. See also FileSystemResource Caveats.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("http:")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("https://myserver/logo.png")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Loaded as a URL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("(none)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/config.xml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Depends on the underlying ApplicationContext.")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-5-the-resourceloaderaware-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-the-resourceloaderaware-interface"}},[t._v("#")]),t._v(" 2.5.The "),a("code",[t._v("ResourceLoaderAware")]),t._v(" interface")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);