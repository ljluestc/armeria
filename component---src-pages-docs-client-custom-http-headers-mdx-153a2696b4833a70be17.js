(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},"81ph":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"nodes":[{"tableOfContents":{"items":[{"url":"#requestcontext-custom-attributes","title":"RequestContext custom attributes"}]},"excerpt":"RequestContext  custom attributes When you are using multiple decorators, you might want to pass some value to the next decorator.\\nYou can do this by attaching attributes to a  type://RequestContext . To attach an attribute,\\nyou need to define an  Attribu…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-custom-attributes"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-dropwizard","title":"Using Armeria with Dropwizard"}]},"excerpt":"Using Armeria with Dropwizard Visit  armeria-examples  to find a fully \\nworking example. Dropwizard provides many features which are necessary for building a web application, such as metrics,\\nmodel validation, externalized and extensible configuration, et…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-dropwizard-integration"}},{"tableOfContents":{"items":[{"url":"#logging-contextual-information","title":"Logging contextual information"}]},"excerpt":"Logging contextual information With Armeria\'s  Logback  integration, you can log the properties of the\\n type://RequestContext  of the request being handled.  type://RequestContextExportingAppender  is\\na Logback appender that exports the properties of the …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-logging"}},{"tableOfContents":{"items":[{"url":"#saml-single-sign-on","title":"SAML Single Sign-On"}]},"excerpt":"SAML Single Sign-On Visit  armeria-examples  to find a fully working example. What is SAML? Security Assertion Markup Language (SAML) \\nis an open standard for exchanging authentication and authorization data between an identity provider and\\na service prov…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-saml"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-spring-webflux","title":"Using Armeria with Spring WebFlux"}]},"excerpt":"Using Armeria with Spring WebFlux Visit  armeria-examples  to find a fully working example. Spring framework provides powerful features which are necessary for building a web application, such as\\ndependency injection, data binding, AOP, transaction, etc. …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-spring-webflux-integration"}},{"tableOfContents":{"items":[{"url":"#structured-logging","title":"Structured logging"}]},"excerpt":"Structured logging Although traditional logging is a useful tool to diagnose the behavior of an application, it has its own\\nproblem; the resulting log messages are not always machine-friendly. This section explains the Armeria API for\\nretrieving the infor…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging"}},{"tableOfContents":{"items":[{"url":"#unit-testing-client-and-service","title":"Unit-testing Client and Service"}]},"excerpt":"Unit-testing  Client  and  Service A unit test of a client or a service will require you to prepare two objects: type://ClientRequestContext  or  type://ServiceRequestContext type://HttpRequest  or  type://RpcRequest type://ClientRequestContext  or  type:…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-unit-testing"}},{"tableOfContents":{"items":[{"url":"#production-checklist","title":"Production checklist"}]},"excerpt":"Production checklist Note that the advices in this page are not always applicable for every use case and thus should be\\napplied with caution. Do not apply the changes you really do not need. You may want to consider the following options before putting yo…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-production-checklist"}},{"tableOfContents":{"items":[{"url":"#structured-logging-with-kafka","title":"Structured logging with Kafka"}]},"excerpt":"Structured logging with Kafka TBW - See  type://KafkaAccessLogWriter .","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging-kafka"}},{"tableOfContents":{"items":[{"url":"#zipkin-integration","title":"Zipkin integration"}]},"excerpt":"Zipkin integration If you want to troubleshoot latency problems in microservice architecture, you will want to use distributed\\ntracing system such as  Zipkin . It gathers timing data and shows which component is\\nfailing or taking more time than others in …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zipkin"}},{"tableOfContents":{"items":[{"url":"#service-discovery-with-zookeeper","title":"Service discovery with ZooKeeper"}]},"excerpt":"Service discovery with ZooKeeper Automatic service registration Use  type://ZooKeeperUpdatingListener  and  type://ZooKeeperRegistrationSpec  to register your server\\nto a ZooKeeper cluster: The  type://ZooKeeperRegistrationSpec  is used to convert the inf…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zookeeper"}},{"tableOfContents":{"items":[{"url":"#sending-custom-http-headers","title":"Sending custom HTTP headers"}]},"excerpt":"Sending custom HTTP headers When sending an RPC request, it is sometimes required to send HTTP headers with it, such as an authentication token.\\nThere are four ways to customize the HTTP headers of your RPC request: Using the  type://Clients#withHttpHeade…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-custom-http-headers"}},{"tableOfContents":{"items":[{"url":"#circuit-breaker","title":"Circuit breaker"}]},"excerpt":"Circuit breaker In microservice architecture, it\'s common that various services running on different machines are connected to\\neach other through remote calls. If one of the services becomes unreachable somehow such as due to network\\nissues, the client wh…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-circuit-breaker"}},{"tableOfContents":{"items":[{"url":"#decorating-a-client","title":"Decorating a client"}]},"excerpt":"Decorating a client A \'decorating client\' (or a \'decorator\') is a client that wraps another client to intercept an outgoing\\nrequest or an incoming response. As its name says, it is an implementation of  the decorator pattern .\\nClient decoration takes a cr…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-decorator"}},{"tableOfContents":{"items":[{"url":"#calling-a-grpc-service","title":"Calling a gRPC service"}]},"excerpt":"Calling a gRPC service Visit  armeria-examples  to find a fully working example. Let\'s assume we have the following  gRPC  service definition, served at  http://127.0.0.1:8080/ , just like\\nwhat we used in  Running a gRPC service : Making a call starts fro…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-grpc"}},{"tableOfContents":{"items":[{"url":"#calling-an-http-service","title":"Calling an HTTP service"}]},"excerpt":"Calling an HTTP service See also Retrofit integration","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-http"}},{"tableOfContents":{"items":[{"url":"#automatic-retry","title":"Automatic retry"}]},"excerpt":"Automatic retry When a client gets an error response, it might want to retry the request depending on the response.\\nThis can be accomplished using a  decorator , and Armeria provides the following\\nimplementations out-of-the box. type://RetryingClient type…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retry"}},{"tableOfContents":{"items":[{"url":"#client-side-load-balancing-and-service-discovery","title":"Client-side load balancing and service discovery"}]},"excerpt":"Client-side load balancing and service discovery You can configure an Armeria client to distribute its requests to more than one server autonomously, unlike\\ntraditional server-side load balancing where the requests go through a dedicated load balancer suc…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-service-discovery"}},{"tableOfContents":{"items":[{"url":"#overriding-client-timeouts","title":"Overriding client timeouts"}]},"excerpt":"Overriding client timeouts Sometimes, the default timeouts used by the Armeria clients do not suit a particular scenario well.\\nIn these cases, you might want to override the timeout settings. Using  ClientBuilder Adjusting connection-level timeouts You ne…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-timeouts"}},{"tableOfContents":{"items":[{"url":"#retrofit-integration","title":"Retrofit integration"}]},"excerpt":"Retrofit integration Retrofit  is a library that simplifies the access to RESTful services\\nby turning an HTTP API into a Java interface. Armeria provides a builder class called  type://ArmeriaRetrofit  that builds an alternative\\n Retrofit  implementation …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retrofit"}},{"tableOfContents":{"items":[{"url":"#writing-an-access-log","title":"Writing an access log"}]},"excerpt":"Writing an access log Configuring logging framework To write an access log, you need to configure a logging framework first. The following configurations are\\nsimple examples of  logback.xml  and  log4j2.xml  respectively. logback log4j2 Customizing a log …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-access-log"}},{"tableOfContents":{"items":[{"url":"#user-manual","title":"User manual"}]},"excerpt":"User manual What is Armeria? Armeria  is your go-to microservice framework for any situation. You can build any type of\\nmicroservice leveraging your favorite technologies, including  gRPC ,\\n Thrift ,  Kotlin ,\\n Retrofit ,  Reactive Streams ,\\n Spring Boot …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"index"}},{"tableOfContents":{"items":[{"url":"#calling-a-thrift-service","title":"Calling a Thrift service"}]},"excerpt":"Calling a Thrift service Let\'s assume we have the following Thrift IDL, served at  http://127.0.0.1:8080/hello , just like what we\\nused in  Running a Thrift service : Making a call starts from creating a client: Note that we added the serialization format…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-thrift"}},{"tableOfContents":{"items":[{"url":"#annotated-services","title":"Annotated services"}]},"excerpt":"Annotated services Visit  armeria-examples  to find a fully working example. Armeria provides a way to write an HTTP service using annotations. It helps a user make his or her code\\nsimple and easy to understand. A user is able to run an HTTP service by fe…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-annotated-service"}},{"tableOfContents":{"items":[{"url":"#configuring-cors","title":"Configuring CORS"}]},"excerpt":"Configuring CORS Armeria provides a way to configure Cross-origin resource sharing (CORS) policy for specific origins or\\nany origin via  type://CorsServiceBuilder . For more information about CORS,\\nvisit  Wikipedia\'s CORS page . Allowing any origin To con…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-cors"}},{"tableOfContents":{"items":[{"url":"#browsing-and-invoking-services-with-docservice","title":"Browsing and invoking services with DocService"}]},"excerpt":"Browsing and invoking services with  DocService type://DocService  is a single-page web application which provides the following useful features: Browsing the list of gRPC, Thrift or annotated services and their operations available in the server Invoking…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-docservice"}},{"tableOfContents":{"items":[{"url":"#server-basics","title":"Server basics"}]},"excerpt":"Server basics To start a server, you need to build it first. Use  type://ServerBuilder : Ports To serve anything, you need to specify which TCP/IP port you want to bind onto: Services Even if we opened a port, it\'s of no use if we didn\'t bind any services…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-basics"}},{"tableOfContents":{"items":[{"url":"#running-a-grpc-service","title":"Running a gRPC service"}]},"excerpt":"Running a gRPC service Visit  armeria-examples  to find a fully working example. Let\'s assume we have the following  gRPC  service definition: The Protobuf compiler will produce some Java code under the  com.example.grpc.hello  package.\\nThe most noteworth…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-grpc"}},{"tableOfContents":{"items":[{"url":"#embedding-a-servlet-container","title":"Embedding a servlet container"}]},"excerpt":"Embedding a servlet container You can make Armeria serve your JEE web application on the same JVM and TCP/IP port by embedding\\n Apache Tomcat  or  Jetty .\\nNeither Tomcat nor Jetty will open a server socket or accept an incoming connection.\\nAll HTTP reques…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-servlet"}},{"tableOfContents":{"items":[{"url":"#serving-server-sent-events","title":"Serving Server-Sent Events"}]},"excerpt":"Serving Server-Sent Events Visit  armeria-examples  to find a fully working example. A traditional web page has to send a request to the server in order to receive new data.\\nWith  Server-Sent Events , however, it is possible for a server to push a new dat…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-sse"}},{"tableOfContents":{"items":[{"url":"#running-a-thrift-service","title":"Running a Thrift service"}]},"excerpt":"Running a Thrift service Let\'s assume we have the following Thrift IDL: The Apache Thrift compiler will produce some Java code under the  com.example.thrift.hello  package.\\nThe most noteworthy one is  HelloService.java  which defines the service interface…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-thrift"}},{"tableOfContents":{"items":[{"url":"#serving-static-files","title":"Serving static files"}]},"excerpt":"Serving static files Visit  armeria-examples  to find a fully working example. Use  type://FileService  to serve static files under a certain directory.  type://FileService  supports\\n GET  and  HEAD  HTTP methods and will auto-fill  Date ,  Last-Modified …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-http-file"}},{"tableOfContents":{"items":[{"url":"#decorating-a-service","title":"Decorating a service"}]},"excerpt":"Decorating a service A \'decorating service\' (or a \'decorator\') is a service that wraps another service\\nto intercept an incoming request or an outgoing response. As its name says, it is an implementation of\\n the decorator pattern . Service decoration takes…","parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-decorator"}},{"tableOfContents":{"items":[{"url":"#setting-up-a-project","title":"Setting up a project"}]},"excerpt":"Setting up a project Requirements Java 8 (or later)  is required to build and run an application based on Armeria. Use Java 13 (or later) if you are a contributor who tries to build Armeria itself.\\nSee  CONTRIBUTING.md  for more information. Choosing the …","parent":{"__typename":"File","sourceInstanceName":"docs","name":"setup"}}]}}}')},pWDZ:function(e,t,n){"use strict";n.r(t),n.d(t,"pageTitle",(function(){return o})),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n("8o2o"),i=(n("q1tI"),n("7ljp")),r=n("xCMr"),o="Sending custom HTTP headers",s={},c={pageTitle:o,_frontmatter:s},l=r.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(l,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sending-custom-http-headers",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h1"},{href:"#sending-custom-http-headers","aria-label":"sending custom http headers permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Sending custom HTTP headers"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-clientswithhttpheaders"}),"Using Clients.withHttpHeaders()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-clientoptionhttp_headers"}),"Using ClientOption.HTTP_HEADERS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-clientbuilderdecorator"}),"Using ClientBuilder.decorator()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-a-derived-client"}),"Using a derived client"))),Object(i.b)("p",null,"When sending an RPC request, it is sometimes required to send HTTP headers with it, such as an authentication token.\nThere are four ways to customize the HTTP headers of your RPC request:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://Clients#withHttpHeaders(Consumer):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Clients.html#withHttpHeaders(java.util.function.Consumer)"}),"type://Clients#withHttpHeaders(Consumer)")," method"),Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://ClientOption#HTTP_HEADERS:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientOption.html#HTTP_HEADERS"}),"type://ClientOption#HTTP_HEADERS")," option"),Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://ClientBuilder#decorator(Function):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html#decorator(java.util.function.Function)"}),"type://ClientBuilder#decorator(Function)")," method"),Object(i.b)("li",{parentName:"ul"},"Using a derived client")),Object(i.b)("h2",{id:"using-clientswithhttpheaders",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientswithhttpheaders","aria-label":"using clientswithhttpheaders permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"Clients.withHttpHeaders()")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import static com.linecorp.armeria.common.HttpHeaderNames.AUTHORIZATION;\nimport com.linecorp.armeria.common.util.SafeCloseable;\nimport com.linecorp.armeria.client.Clients;\n\nHelloService.Iface client = Clients.newClient("tbinary+http://example.com/hello",\n                                               HelloService.Iface.class);\ntry (SafeCloseable ignored = Clients.withHttpHeaders(\n        headers -> headers.set(AUTHORIZATION, credential))) {\n    client.hello("authorized personnel");\n}\n')),Object(i.b)("p",null,"If you are setting only a single header,\nyou can use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Clients#withHttpHeader(CharSequence,String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Clients.html#withHttpHeader(java.lang.CharSequence,java.lang.String)"}),"type://Clients#withHttpHeader(CharSequence,String)")," simply:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'try (SafeCloseable ignored = Clients.withHttpHeader(AUTHORIZATION, credential)) {\n    client.hello("authorized personnel");\n}\n')),Object(i.b)("p",null,"You can also nest ",Object(i.b)("inlineCode",{parentName:"p"},"withHttpHeader(s)"),". The following example will send both ",Object(i.b)("inlineCode",{parentName:"p"},"user-agent")," header and\n",Object(i.b)("inlineCode",{parentName:"p"},"authorization")," header when calling ",Object(i.b)("inlineCode",{parentName:"p"},"client.hello()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import static com.linecorp.armeria.common.HttpHeaderNames.USER_AGENT;\n\ntry (SafeCloseable ignored1 = Clients.withHttpHeader(USER_AGENT, myUserAgent)) {\n    for (String cred : credentials) {\n        try (SafeCloseable ignored2 = Clients.withHttpHeaders(AUTHORIZATION, cred)) {\n            client.hello("authorized personnel");\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"using-clientoptionhttp_headers",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientoptionhttp_headers","aria-label":"using clientoptionhttp_headers permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"ClientOption.HTTP_HEADERS")),Object(i.b)("p",null,"If you have a custom HTTP header whose value does not change often, you can use\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ClientOption#HTTP_HEADERS:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientOption.html#HTTP_HEADERS"}),"type://ClientOption#HTTP_HEADERS")," which is more efficient:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import static com.linecorp.armeria.common.HttpHeaderNames.AUTHORIZATION;\nimport com.linecorp.armeria.common.HttpHeaders;\nimport com.linecorp.armeria.client.ClientBuilder;\nimport com.linecorp.armeria.client.ClientOption;\n\nClientBuilder cb = Clients.builder("tbinary+http://example.com/hello");\ncb.setHttpHeader(AUTHORIZATION, credential);\n// or:\n// cb.option(ClientOption.HTTP_HEADERS, HttpHeaders.of(AUTHORIZATION, credential));\nHelloService.Iface client = cb.build(HelloService.Iface.class);\nclient.hello("authorized personnel");\n')),Object(i.b)("h2",{id:"using-clientbuilderdecorator",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientbuilderdecorator","aria-label":"using clientbuilderdecorator permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"ClientBuilder.decorator()")),Object(i.b)("p",null,"If you want more freedom on how you manipulate the request headers, use a decorator:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ClientBuilder cb = Clients.builder("tbinary+http://example.com/hello");\n\n// Add a decorator that inserts the custom header.\ncb.decorator((delegate, ctx, req) -> { // See DecoratingHttpClientFunction and DecoratingRpcClientFunction.\n    HttpRequest newReq = req.withHeaders(req.headers().toBuilder().set(AUTHORIZATION, credential));\n    ctx.updateRequest(newReq);\n    return delegate.execute(ctx, newReq);\n});\n\nHelloService.Iface client = cb.build(HelloService.Iface.class);\nclient.hello("authorized personnel");\n')),Object(i.b)("p",null,"Note that this method is as efficient as the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ClientOption#HTTP_HEADERS:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientOption.html#HTTP_HEADERS"}),"type://ClientOption#HTTP_HEADERS")," option.\nChoose whichever you prefer."),Object(i.b)("h2",{id:"using-a-derived-client",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-a-derived-client","aria-label":"using a derived client permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using a derived client"),Object(i.b)("p",null,"Although not as simple as using ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Clients#withHttpHeader(CharSequence,String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Clients.html#withHttpHeader(java.lang.CharSequence,java.lang.String)"}),"type://Clients#withHttpHeader(CharSequence,String)"),",\nyou can create a derived client to add more custom headers to an existing client:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HelloService.Iface client = ...;\nHelloService.Iface derivedClient = Clients.newDerivedClient(client, options -> {\n    return ClientOptions.builder()\n                        .options(options)\n                        .decorator(...)  // Add a decorator.\n                        .httpHeader(AUTHORIZATION, credential)  // Add an HTTP header.\n                        .build();\n});\n")))}d.isMDXComponent=!0},xCMr:function(e,t,n){"use strict";var a=n("81ph"),i=n("q1tI"),r=n.n(i),o=n("/94A"),s=n("+ejy");t.a=function(e){var t=a.data.allMdx.nodes;return r.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-custom-http-headers-mdx-153a2696b4833a70be17.js.map