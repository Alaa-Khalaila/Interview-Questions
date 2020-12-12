export const data =[
    {
        question : `What is Node.js? Where can you use it?`,
        answer :`Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications  outside the client’s browser. It is used to create server-side web applications.
    
        Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use  I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.`
    },
    {
        question: 'Why use Node.js?',
        answer:`Node.js makes building scalable
         network programs easy. Some of its advantages include:

        It is generally fast
        It rarely blocks
        It offers a unified programming language and data type
        Everything is asynchronous 
        It yields great concurrency`
    },
    {
        question:`How does Node.js work?` ,
        answer:`Clients send requests to the webserver to interact with the web application. Requests can be non-blocking or blocking:
        Querying for data
        Deleting data 
        Updating the data
        Node.js retrieves the incoming requests and adds those to the Event Queue
        The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough not to require any external resources
        The Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients`
    },
    {
        question:`Why is Node.js Single-threaded?` ,
        answer:`Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.`
    },
    {
        question:` Explain callback in Node.js.` ,
        answer:`A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.`
    },
    {
        question:`How would you define the term I/O? ` ,
        answer:`The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium
        Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system`
    },
    {
        question:`How is Node.js most frequently used?` ,
        answer:`Real-time chats
        Internet of Things
        Complex SPAs (Single-Page Applications)
        Real-time collaboration tools
        Streaming applications
        Microservices architecture`
    },
    {
        question:`What is NPM?` ,
        answer:`NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.

        Node Package Manager provides two main functionalities:
        
        Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org
        Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies  `
    },
    {
        question:`Why is Node.js preferred over other backend technologies like Java and PHP?` ,
        answer:`Node.js is very fast
        Node Package Manager has over 50,000 bundles available at the developer’s disposal
        Perfect for data-intensive, real-time web applications, as Node.js never waits for an API to return data
        Better synchronization of code between server and client due to same code base
        Easy for web developers to start using Node.js in their projects as it is a JavaScript library`
    },
    {
        question: `Which database is more popularly used with Node.js?`,
        answer:`MongoDB is the most common database used with Node.js. It is a NoSQL, cross-platform, document-oriented database that provides high performance, high availability, and easy scalability.`
    },
    {
        question:`What are some of the most commonly used libraries in Node.js?` ,
        answer:`ExpressJS - Express is a flexible Node.js web application framework that provides a wide set of features to develop web and mobile applications.
        Mongoose - Mongoose is also a Node.js web application framework that makes it easy to connect an application to a database.`
    },
    {
        question:`What is the command used to import external libraries?` ,
        answer:`The “require” command is used for importing external libraries. For example - “var http=require (“HTTP”).”  This will load the HTTP library and the single exported object through the HTTP variable.

        Now that we have covered some of the important beginner-level Node.js interview questions let us look at some of the intermediate level Node.js interview questions.`
    },
    {
        question: `What does event-driven programming mean?`,
        answer:`An event-driven programming approach uses events to trigger various functions. An event can be anything, such as typing a key or clicking a mouse button. A call-back function is already registered with the element executes whenever an event is triggered.`
    },
    {
        question:`What is an Event Loop in Node.js?` ,
        answer:`Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.`
    },
    {
        question:`What is an EventEmitter in Node.js?` ,
        answer:`EventEmitter is a class that holds all the objects that can emit events
        Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously`
    },
    {
        question:`What are the two types of API functions in Node.js?` ,
        answer:`The two types of API functions in Node.js are:

        Asynchronous, non-blocking functions
        Synchronous, blocking functions`
    },
    {
        question:`What is the package.json file?` ,
        answer:`The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module

        This is what a package.json file looks like immediately after creating a Node.js project using the command: npm init
        
        You can edit the parameters when you create a Node.js project.`
    },
    {
        question:`How would you use a URL module in Node.js?` ,
        answer:`The URL module in Node.js provides various utilities for URL resolution and parsing. It is a built-in module that helps split up the web address into a readable format.`
    },
    {
        question:`What is the Express.js package?` ,
        answer:`Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications`
    },
    {
        question: `How do you create a simple Express.js application?`,
        answer:`The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
        The response object represents the HTTP response that an Express app sends when it receives an HTTP request`
    },
    {
        question:`What are streams in Node.js?` ,
        answer:`Streams are objects that enable you to read data or write data continuously.

        There are four types of streams:
        
        Readable – Used for reading operations
        
        Writable − Used for write operations
        
        Duplex − Can be used for both reading and write operations
        
        Transform − A type of duplex stream where the output is computed based on input`
    },
    {
        question: ` How do you create a simple server in Node.js that returns Hello World?`,
        answer:`Import the HTTP module
        Use createServer function with a callback function using request and response as parameters.
        Type “hello world." 
        Set the server to listen to port 8080 and assign an IP address`
    },
    {
        question:`Explain asynchronous and non-blocking APIs in Node.js.` ,
        answer:`All Node.js library APIs are asynchronous, which means they are also non-blocking
        A Node.js-based server never waits for an API to return data. Instead, it moves to the next API after calling it, and a notification mechanism from a Node.js event responds to the server for the previous API call`
    },
    {
        question:`How do we implement async in Node.js?` ,
        answer:`As shown below, the async code asks the JavaScript engine running the code to wait for the request.get() function to complete before moving on to the next line for execution.`
    },
    {
        question:`What is the purpose of module.exports?` ,
        answer:`A module in Node.js is used to encapsulate all the related codes into a single unit of code, which can be interpreted by shifting all related functions into a single file. You can export a module using the module.exports, which allows it to be imported into another file using a required keyword.`
    },
    {
        question:`What is a callback function in Node.js?` ,
        answer:`A callback is a function called after a given task. This prevents any blocking and enables other code to run in the meantime.

        In the last section, we will now cover some of the advanced-level Node.js interview questions.`
    },
    {
        question: `What is REPL in Node.js?`,
        answer:`REPL stands for Read Eval Print Loop, and it represents a computer environment. It’s similar to a Windows console or Unix/Linux shell in which a command is entered. Then, the system responds with an output`
    },
    {
        question:` What is the control flow function?` ,
        answer:`The control flow function is a piece of code that runs in between several asynchronous function calls.`
    },
    {
        question: `What is the buffer class in Node.js?`,
        answer:`Buffer class stores raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data`
    },
    {
        question:`What is piping in Node.js?` ,
        answer:`Piping is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve data from one stream and pass output to another stream`
    },
    {
        question: `What is callback hell?`,
        answer:`Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug
        improper implementation of the asynchronous logic causes callback hell`
    },
    {
        question:`What is a reactor pattern in Node.js?` ,
        answer:`A reactor pattern is a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation. As soon as an I/O request is generated, it is then submitted to a demultiplexer`
    },
    {
        question:`Explain the concept of middleware in Node.js.` ,
        answer:`Middleware is a function that receives the request and response objects. Most tasks that the middleware functions perform are:  

        Execute any code
        Update or modify the request and the response objects
        Finish the request-response cycle
        Invoke the next middleware in the stack`
    },
    {
        question: `What are the different types of HTTP requests?`,
        answer:`GET: Used to retrieve the data

        POST: Generally used to make a change in state or reactions on the server
        
        HEAD: Similar to the GET method, but asks for the response without the response body
        
        DELETE: Used to delete the predetermined resource`
    },
    {
        question:`How would you connect a MongoDB database to Node.js?` ,
        answer:`Start by creating a MongoClient object
        Specify a connection URL with the correct IP address and the name of the database you want to create`
    },
    
]