(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{371:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_2-3-built-in-resource-implementations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-built-in-resource-implementations"}},[e._v("#")]),e._v(" 2.3. Built-in Resource Implementations")]),e._v(" "),s("p",[e._v("Spring includes the following "),s("code",[e._v("Resource")]),e._v(" implementations:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("UrlResource")])]),e._v(" "),s("li",[s("p",[e._v("ClassPathResource")])]),e._v(" "),s("li",[s("p",[e._v("FileSystemResource")])]),e._v(" "),s("li",[s("p",[e._v("ServletContextResource")])]),e._v(" "),s("li",[s("p",[e._v("InputStreamResource")])]),e._v(" "),s("li",[s("p",[e._v("ByteArrayResource")])])]),e._v(" "),s("h2",{attrs:{id:"_2-3-1-urlresource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-urlresource"}},[e._v("#")]),e._v(" 2.3.1. UrlResource")]),e._v(" "),s("p",[s("code",[e._v("UrlResource")]),e._v(" wraps a "),s("code",[e._v("java.net.URL")]),e._v(" and can be used to access any object that is normally accessible with a URL, such as files, an HTTP target, an FTP target, and others. All URLs have a standardized "),s("code",[e._v("String")]),e._v(" representation, such that appropriate standardized prefixes are used to indicate one URL type from another. This includes "),s("code",[e._v("file:")]),e._v(" for accessing filesystem paths, "),s("code",[e._v("http:")]),e._v(" for accessing resources through the HTTP protocol, "),s("code",[e._v("ftp:")]),e._v(" for accessing resources through FTP, and others.")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("UrlResource")]),e._v(" is created by Java code by explicitly using the "),s("code",[e._v("UrlResource")]),e._v(" constructor but is often created implicitly when you call an API method that takes a "),s("code",[e._v("String")]),e._v(" argument meant to represent a path. For the latter case, a JavaBeans "),s("code",[e._v("PropertyEditor")]),e._v(" ultimately decides which type of "),s("code",[e._v("Resource")]),e._v(" to create. If the path string contains well-known (to it, that is) prefix (such as "),s("code",[e._v("classpath:")]),e._v("), it creates an appropriate specialized "),s("code",[e._v("Resource")]),e._v(" for that prefix. However, if it does not recognize the prefix, it assume the string is a standard URL string and creates a "),s("code",[e._v("UrlResource")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"_2-3-2-classpathresource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-classpathresource"}},[e._v("#")]),e._v(" 2.3.2.ClassPathResource")]),e._v(" "),s("p",[e._v("This class represents a resource that should be obtained from the classpath. It uses either the thread context class loader, a given class loader, or a given class for loading resources.")]),e._v(" "),s("p",[e._v("This "),s("code",[e._v("Resource")]),e._v(" implementation supports resolution as "),s("code",[e._v("java.io.File")]),e._v(" if the class path resource resides in the file system but not for classpath resources that reside in a jar and have not been expanded (by the servlet engine or whatever the environment is) to the filesystem. To address this, the various "),s("code",[e._v("Resource")]),e._v(" implementations always support resolution as a "),s("code",[e._v("java.net.URL")]),e._v(".")]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("ClassPathResource")]),e._v(" is created by Java code by explicitly using the "),s("code",[e._v("ClassPathResource")]),e._v(" constructor but is often created implicitly when you call an API method that takes a "),s("code",[e._v("String")]),e._v(" argument meant to represent a path. For the latter case, a JavaBeans "),s("code",[e._v("PropertyEditor")]),e._v(" recognizes the special prefix, "),s("code",[e._v("classpath:")]),e._v(", on the string path and creates a "),s("code",[e._v("ClassPathResource")]),e._v(" in that case.")]),e._v(" "),s("h2",{attrs:{id:"_2-3-3-filesystemresource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-filesystemresource"}},[e._v("#")]),e._v(" 2.3.3.FileSystemResource")]),e._v(" "),s("p",[e._v("This is a "),s("code",[e._v("Resource")]),e._v(" implementation for "),s("code",[e._v("java.io.File")]),e._v(" and "),s("code",[e._v("java.nio.file.Path")]),e._v(" handles. It supports resolution as a "),s("code",[e._v("File")]),e._v(" and as a "),s("code",[e._v("URL")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"_2-3-4-servletcontextresource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-servletcontextresource"}},[e._v("#")]),e._v(" 2.3.4.ServletContextResource")]),e._v(" "),s("p",[e._v("This is a "),s("code",[e._v("Resource")]),e._v(" implementation for "),s("code",[e._v("ServletContext")]),e._v(" resources that interprets relative paths within the relevant web application’s root directory.")]),e._v(" "),s("p",[e._v("It always supports stream access and URL access but allows "),s("code",[e._v("java.io.File")]),e._v(" access only when the web application archive is expanded and the resource is physically on the filesystem. Whether or not it is expanded and on the filesystem or accessed directly from the JAR or somewhere else like a database (which is conceivable) is actually dependent on the Servlet container.")]),e._v(" "),s("h2",{attrs:{id:"_2-3-5-inputstreamresource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-5-inputstreamresource"}},[e._v("#")]),e._v(" 2.3.5.InputStreamResource")]),e._v(" "),s("p",[e._v("An "),s("code",[e._v("InputStreamResource")]),e._v(" is a "),s("code",[e._v("Resource")]),e._v(" implementation for a given "),s("code",[e._v("InputStream")]),e._v(". It should be used only if no specific "),s("code",[e._v("Resource")]),e._v(" implementation is applicable. In particular, prefer "),s("code",[e._v("ByteArrayResource")]),e._v(" or any of the file-based "),s("code",[e._v("Resource")]),e._v(" implementations where possible.")]),e._v(" "),s("p",[e._v("In contrast to other "),s("code",[e._v("Resource")]),e._v(" implementations, this is a descriptor for an already-opened resource. Therefore, it returns "),s("code",[e._v("true")]),e._v(" from "),s("code",[e._v("isOpen()")]),e._v(". Do not use it if you need to keep the resource descriptor somewhere or if you need to read a stream multiple times.")]),e._v(" "),s("h2",{attrs:{id:"_2-3-6-bytearrayresource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-bytearrayresource"}},[e._v("#")]),e._v(" 2.3.6.ByteArrayResource")]),e._v(" "),s("p",[e._v("This is a "),s("code",[e._v("Resource")]),e._v(" implementation for a given byte array. It creates a "),s("code",[e._v("ByteArrayInputStream")]),e._v(" for the given byte array.")]),e._v(" "),s("p",[e._v("It is useful for loading content from any given byte array without having to resort to a single-use "),s("code",[e._v("InputStreamResource")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);