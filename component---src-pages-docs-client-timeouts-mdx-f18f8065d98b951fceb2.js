(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},"81ph":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"nodes":[{"tableOfContents":{"items":[{"url":"#requestcontext-custom-attributes","title":"RequestContext custom attributes"}]},"excerpt":"RequestContext  custom attributes When you are using multiple decorators, you might want to pass some value to the next decorator.\\nYou can do this by attaching attributes to a  type://RequestContext . To attach an attribute,\\nyou need to define an  Attribu…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-custom-attributes"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-dropwizard","title":"Using Armeria with Dropwizard"}]},"excerpt":"Using Armeria with Dropwizard Visit  armeria-examples  to find a fully \\nworking example. Dropwizard provides many features which are necessary for building a web application, such as metrics,\\nmodel validation, externalized and extensible configuration, et…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-dropwizard-integration"}},{"tableOfContents":{"items":[{"url":"#logging-contextual-information","title":"Logging contextual information"}]},"excerpt":"Logging contextual information With Armeria\'s  Logback  integration, you can log the properties of the\\n type://RequestContext  of the request being handled.  type://RequestContextExportingAppender  is\\na Logback appender that exports the properties of the …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-logging"}},{"tableOfContents":{"items":[{"url":"#saml-single-sign-on","title":"SAML Single Sign-On"}]},"excerpt":"SAML Single Sign-On Visit  armeria-examples  to find a fully working example. What is SAML? Security Assertion Markup Language (SAML) \\nis an open standard for exchanging authentication and authorization data between an identity provider and\\na service prov…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-saml"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-spring-webflux","title":"Using Armeria with Spring WebFlux"}]},"excerpt":"Using Armeria with Spring WebFlux Visit  armeria-examples  to find a fully working example. Spring framework provides powerful features which are necessary for building a web application, such as\\ndependency injection, data binding, AOP, transaction, etc. …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-spring-webflux-integration"}},{"tableOfContents":{"items":[{"url":"#structured-logging","title":"Structured logging"}]},"excerpt":"Structured logging Although traditional logging is a useful tool to diagnose the behavior of an application, it has its own\\nproblem; the resulting log messages are not always machine-friendly. This section explains the Armeria API for\\nretrieving the infor…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging"}},{"tableOfContents":{"items":[{"url":"#unit-testing-client-and-service","title":"Unit-testing Client and Service"}]},"excerpt":"Unit-testing  Client  and  Service A unit test of a client or a service will require you to prepare two objects: type://ClientRequestContext  or  type://ServiceRequestContext type://HttpRequest  or  type://RpcRequest type://ClientRequestContext  or  type:…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-unit-testing"}},{"tableOfContents":{"items":[{"url":"#production-checklist","title":"Production checklist"}]},"excerpt":"Production checklist Note that the advices in this page are not always applicable for every use case and thus should be\\napplied with caution. Do not apply the changes you really do not need. You may want to consider the following options before putting yo…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-production-checklist"}},{"tableOfContents":{"items":[{"url":"#structured-logging-with-kafka","title":"Structured logging with Kafka"}]},"excerpt":"Structured logging with Kafka TBW - See  type://KafkaAccessLogWriter .","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging-kafka"}},{"tableOfContents":{"items":[{"url":"#zipkin-integration","title":"Zipkin integration"}]},"excerpt":"Zipkin integration If you want to troubleshoot latency problems in microservice architecture, you will want to use distributed\\ntracing system such as  Zipkin . It gathers timing data and shows which component is\\nfailing or taking more time than others in …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zipkin"}},{"tableOfContents":{"items":[{"url":"#service-discovery-with-zookeeper","title":"Service discovery with ZooKeeper"}]},"excerpt":"Service discovery with ZooKeeper Automatic service registration Use  type://ZooKeeperUpdatingListener  and  type://ZooKeeperRegistrationSpec  to register your server\\nto a ZooKeeper cluster: The  type://ZooKeeperRegistrationSpec  is used to convert the inf…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zookeeper"}},{"tableOfContents":{"items":[{"url":"#sending-custom-http-headers","title":"Sending custom HTTP headers"}]},"excerpt":"Sending custom HTTP headers When sending an RPC request, it is sometimes required to send HTTP headers with it, such as an authentication token.\\nThere are four ways to customize the HTTP headers of your RPC request: Using the  type://Clients#withHttpHeade…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-custom-http-headers"}},{"tableOfContents":{"items":[{"url":"#circuit-breaker","title":"Circuit breaker"}]},"excerpt":"Circuit breaker In microservice architecture, it\'s common that various services running on different machines are connected to\\neach other through remote calls. If one of the services becomes unreachable somehow such as due to network\\nissues, the client wh…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-circuit-breaker"}},{"tableOfContents":{"items":[{"url":"#decorating-a-client","title":"Decorating a client"}]},"excerpt":"Decorating a client A \'decorating client\' (or a \'decorator\') is a client that wraps another client to intercept an outgoing\\nrequest or an incoming response. As its name says, it is an implementation of  the decorator pattern .\\nClient decoration takes a cr…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-decorator"}},{"tableOfContents":{"items":[{"url":"#calling-a-grpc-service","title":"Calling a gRPC service"}]},"excerpt":"Calling a gRPC service Visit  armeria-examples  to find a fully working example. Let\'s assume we have the following  gRPC  service definition, served at  http://127.0.0.1:8080/ , just like\\nwhat we used in  Running a gRPC service : Making a call starts fro…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-grpc"}},{"tableOfContents":{"items":[{"url":"#calling-an-http-service","title":"Calling an HTTP service"}]},"excerpt":"Calling an HTTP service See also Retrofit integration","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-http"}},{"tableOfContents":{"items":[{"url":"#automatic-retry","title":"Automatic retry"}]},"excerpt":"Automatic retry When a client gets an error response, it might want to retry the request depending on the response.\\nThis can be accomplished using a  decorator , and Armeria provides the following\\nimplementations out-of-the box. type://RetryingClient type…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retry"}},{"tableOfContents":{"items":[{"url":"#client-side-load-balancing-and-service-discovery","title":"Client-side load balancing and service discovery"}]},"excerpt":"Client-side load balancing and service discovery You can configure an Armeria client to distribute its requests to more than one server autonomously, unlike\\ntraditional server-side load balancing where the requests go through a dedicated load balancer suc…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-service-discovery"}},{"tableOfContents":{"items":[{"url":"#overriding-client-timeouts","title":"Overriding client timeouts"}]},"excerpt":"Overriding client timeouts Sometimes, the default timeouts used by the Armeria clients do not suit a particular scenario well.\\nIn these cases, you might want to override the timeout settings. Using  ClientBuilder Adjusting connection-level timeouts You ne…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-timeouts"}},{"tableOfContents":{"items":[{"url":"#retrofit-integration","title":"Retrofit integration"}]},"excerpt":"Retrofit integration Retrofit  is a library that simplifies the access to RESTful services\\nby turning an HTTP API into a Java interface. Armeria provides a builder class called  type://ArmeriaRetrofit  that builds an alternative\\n Retrofit  implementation …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retrofit"}},{"tableOfContents":{"items":[{"url":"#writing-an-access-log","title":"Writing an access log"}]},"excerpt":"Writing an access log Configuring logging framework To write an access log, you need to configure a logging framework first. The following configurations are\\nsimple examples of  logback.xml  and  log4j2.xml  respectively. logback log4j2 Customizing a log …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-access-log"}},{"tableOfContents":{"items":[{"url":"#user-manual","title":"User manual"}]},"excerpt":"User manual What is Armeria? Armeria  is your go-to microservice framework for any situation. You can build any type of\\nmicroservice leveraging your favorite technologies, including  gRPC ,\\n Thrift ,  Kotlin ,\\n Retrofit ,  Reactive Streams ,\\n Spring Boot …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"index"}},{"tableOfContents":{"items":[{"url":"#calling-a-thrift-service","title":"Calling a Thrift service"}]},"excerpt":"Calling a Thrift service Let\'s assume we have the following Thrift IDL, served at  http://127.0.0.1:8080/hello , just like what we\\nused in  Running a Thrift service : Making a call starts from creating a client: Note that we added the serialization format…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-thrift"}},{"tableOfContents":{"items":[{"url":"#annotated-services","title":"Annotated services"}]},"excerpt":"Annotated services Visit  armeria-examples  to find a fully working example. Armeria provides a way to write an HTTP service using annotations. It helps a user make his or her code\\nsimple and easy to understand. A user is able to run an HTTP service by fe…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-annotated-service"}},{"tableOfContents":{"items":[{"url":"#configuring-cors","title":"Configuring CORS"}]},"excerpt":"Configuring CORS Armeria provides a way to configure Cross-origin resource sharing (CORS) policy for specific origins or\\nany origin via  type://CorsServiceBuilder . For more information about CORS,\\nvisit  Wikipedia\'s CORS page . Allowing any origin To con…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-cors"}},{"tableOfContents":{"items":[{"url":"#browsing-and-invoking-services-with-docservice","title":"Browsing and invoking services with DocService"}]},"excerpt":"Browsing and invoking services with  DocService type://DocService  is a single-page web application which provides the following useful features: Browsing the list of gRPC, Thrift or annotated services and their operations available in the server Invoking…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-docservice"}},{"tableOfContents":{"items":[{"url":"#server-basics","title":"Server basics"}]},"excerpt":"Server basics To start a server, you need to build it first. Use  type://ServerBuilder : Ports To serve anything, you need to specify which TCP/IP port you want to bind onto: Services Even if we opened a port, it\'s of no use if we didn\'t bind any services…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-basics"}},{"tableOfContents":{"items":[{"url":"#running-a-grpc-service","title":"Running a gRPC service"}]},"excerpt":"Running a gRPC service Visit  armeria-examples  to find a fully working example. Let\'s assume we have the following  gRPC  service definition: The Protobuf compiler will produce some Java code under the  com.example.grpc.hello  package.\\nThe most noteworth…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-grpc"}},{"tableOfContents":{"items":[{"url":"#embedding-a-servlet-container","title":"Embedding a servlet container"}]},"excerpt":"Embedding a servlet container You can make Armeria serve your JEE web application on the same JVM and TCP/IP port by embedding\\n Apache Tomcat  or  Jetty .\\nNeither Tomcat nor Jetty will open a server socket or accept an incoming connection.\\nAll HTTP reques…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-servlet"}},{"tableOfContents":{"items":[{"url":"#serving-server-sent-events","title":"Serving Server-Sent Events"}]},"excerpt":"Serving Server-Sent Events Visit  armeria-examples  to find a fully working example. A traditional web page has to send a request to the server in order to receive new data.\\nWith  Server-Sent Events , however, it is possible for a server to push a new dat…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-sse"}},{"tableOfContents":{"items":[{"url":"#running-a-thrift-service","title":"Running a Thrift service"}]},"excerpt":"Running a Thrift service Let\'s assume we have the following Thrift IDL: The Apache Thrift compiler will produce some Java code under the  com.example.thrift.hello  package.\\nThe most noteworthy one is  HelloService.java  which defines the service interface…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-thrift"}},{"tableOfContents":{"items":[{"url":"#serving-static-files","title":"Serving static files"}]},"excerpt":"Serving static files Visit  armeria-examples  to find a fully working example. Use  type://FileService  to serve static files under a certain directory.  type://FileService  supports\\n GET  and  HEAD  HTTP methods and will auto-fill  Date ,  Last-Modified …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-http-file"}},{"tableOfContents":{"items":[{"url":"#decorating-a-service","title":"Decorating a service"}]},"excerpt":"Decorating a service A \'decorating service\' (or a \'decorator\') is a service that wraps another service\\nto intercept an incoming request or an outgoing response. As its name says, it is an implementation of\\n the decorator pattern . Service decoration takes…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-decorator"}},{"tableOfContents":{"items":[{"url":"#setting-up-a-project","title":"Setting up a project"}]},"excerpt":"Setting up a project Requirements Java 8 (or later)  is required to build and run an application based on Armeria. Use Java 13 (or later) if you are a contributor who tries to build Armeria itself.\\nSee  CONTRIBUTING.md  for more information. Choosing the …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"setup"}}]}}}')},wxwE:function(e,t,i){"use strict";i.r(t),i.d(t,"pageTitle",(function(){return s})),i.d(t,"_frontmatter",(function(){return c})),i.d(t,"default",(function(){return p}));var n,a=i("8o2o"),r=(i("q1tI"),i("7ljp")),o=i("xCMr"),s="Overriding client timeouts",c={},l=(n="Warning",function(e){return console.warn("Component '"+n+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),m={pageTitle:s,_frontmatter:c},u=o.a;function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)(u,Object.assign({},m,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"overriding-client-timeouts",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h1"},{href:"#overriding-client-timeouts","aria-label":"overriding client timeouts permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Overriding client timeouts"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#using-clientbuilder"}),"Using ClientBuilder")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#adjusting-connection-level-timeouts"}),"Adjusting connection-level timeouts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#using-jvm-system-properties"}),"Using JVM system properties"))),Object(r.b)("p",null,"Sometimes, the default timeouts used by the Armeria clients do not suit a particular scenario well.\nIn these cases, you might want to override the timeout settings."),Object(r.b)("h2",{id:"using-clientbuilder",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientbuilder","aria-label":"using clientbuilder permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h2"},"ClientBuilder")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import java.time.Duration;\n\nimport com.linecorp.armeria.client.Clients;\n\nint responseTimeout = 30;\nint writeTimeout = 10;\n\nHelloService.Iface client =\n    Clients.builder("tbinary+http://example.com/hello")\n           .responseTimeout(Duration.ofSeconds(responseTimeout))\n           .writeTimeout(Duration.ofSeconds(writeTimeout))\n           .build(HelloService.Iface.class);\n')),Object(r.b)("h2",{id:"adjusting-connection-level-timeouts",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#adjusting-connection-level-timeouts","aria-label":"adjusting connection level timeouts permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Adjusting connection-level timeouts"),Object(r.b)("p",null,"You need to build a non-default ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"}),"type://ClientFactory")," using ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactoryBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryBuilder.html"}),"type://ClientFactoryBuilder")," to override the default\nconnection-level timeouts such as connect timeout and idle timeout programmatically:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.client.ClientFactory;\n\nClientFactory factory =\n    ClientFactory.builder()\n                 // Increase the connect timeout from 3.2s to 10s.\n                 .connectTimeout(Duration.ofSeconds(10))\n                 // Shorten the idle connection timeout from 10s to 5s.\n                 .idleTimeout(Duration.ofSeconds(5))\n                 // Note that you can also adjust other connection-level\n                 // settings such as enabling HTTP/1 request pipelining.\n                 .useHttp1Pipelining(true)\n                 .build();\n")),Object(r.b)("p",null,"Note that ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"}),"type://ClientFactory")," implements ",Object(r.b)("inlineCode",{parentName:"p"},"java.lang.AutoCloseable")," and thus needs to be closed when you\nterminate your application. On ",Object(r.b)("inlineCode",{parentName:"p"},"close()"),", ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"}),"type://ClientFactory")," will close all the connections it manages\nand abort any requests in progress."),Object(r.b)("h2",{id:"using-jvm-system-properties",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#using-jvm-system-properties","aria-label":"using jvm system properties permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using JVM system properties"),Object(r.b)("p",null,"You can override the default client timeouts by specifying the following JVM system properties if you do not\nprefer setting it programmatically:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultClientIdleTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side idle timeout of a connection for keep-alive in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10000")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultConnectTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side timeout of a socket connection attempt in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"3200")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultWriteTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side timeout of a socket write attempt in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1000")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultResponseTimeoutMillis=<integer>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the default client-side timeout of a response in milliseconds. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"15000"))))),Object(r.b)(l,{mdxType:"Warning"},Object(r.b)("p",null,"The JVM system properties have effect only when you did not specify them programmatically.\nSee ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://Flags:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Flags.html"}),"type://Flags")," for the complete list of JVM system properties in Armeria.")))}p.isMDXComponent=!0},xCMr:function(e,t,i){"use strict";var n=i("81ph"),a=i("q1tI"),r=i.n(a),o=i("/94A"),s=i("+ejy");t.a=function(e){var t=n.data.allMdx.nodes;return r.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-timeouts-mdx-f18f8065d98b951fceb2.js.map