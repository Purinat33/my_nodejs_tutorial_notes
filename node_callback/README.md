
# Callback functions

<p>A callback function is a function that is passed as an argument to another function and is executed at a later time. It is used to perform some action after another action has completed.</p>
<hr>
<p>Asynchronous refers to the ability to run multiple tasks at the same time, without waiting for one task to finish before starting another. In programming, asynchronous means that a function can run in the background while other code continues to execute. This allows for multiple operations to be performed simultaneously, improving efficiency and responsiveness.</p>
<hr>

### Here's a simple example to illustrate the concept: 

<ul>
<li>
<p>
Imagine you're cooking dinner and you need to boil water for pasta. You fill a pot with water and put it on the stove, then set a timer for 10 minutes. While the water is boiling, you can continue with other tasks, such as preparing the sauce or cutting vegetables. When the timer goes off, it's a reminder that the pasta is ready and you can drain the water and serve the meal. In this example, the timer is like a callback function - it's a reminder to do something after a specific event has completed (the water has finished boiling). And boiling the water in the background while you continue with other tasks is an example of asynchronous behavior.
</p>
</li>
</ul>

<hr>

## Q: Are callback functions asynchronous?

### A:
<p>A callback function can be asynchronous or synchronous, depending on how it's used.

A synchronous callback function is executed immediately, blocking the code that follows it until the callback function has completed. This means that the code after the callback function won't run until the callback function has finished executing.

An asynchronous callback function, on the other hand, runs in the background and does not block the code that follows it. This means that the code after the asynchronous operation can continue to execute, even if the callback function takes a long time to complete. When the callback function is finished, it will be added back to the event queue and executed, allowing the program to continue handling other events and operations efficiently and without any delays.

So whether a callback function is asynchronous or synchronous depends on how it's used and the context in which it's executed.</p>

A callback function refers to the function that is passed as an argument to another function. The argument function is executed at a later time, typically when an event occurs or a task has been completed. The term "callback" refers to the idea that the argument function is being "called back" at a later time.

Here's an example to illustrate the concept:
```js
function greeting(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}
```
`greeting("John", sayGoodbye);`
In this example, the sayGoodbye function is being passed as an argument to the greeting function. It is being referred to as a "callback" function because it will be "called back" by the greeting function. The greeting function logs a greeting and then executes the sayGoodbye function.



<p>synchronous callback functions allow NodeJS to perform other operations while it is waiting for the callback function to complete. The event loop will continue to handle other events and operations while the callback function is running in the background.</p>

```js
function sayHi(){
    console.log('Hi');
}

function greeting(func){
    console.log("Welcome");
    func(); //Callback function execution
}

greeting(sayHi); //sayHi is the callback function
```

# What is Asynchronous:

<p>Asynchronous programming in JavaScript refers to the ability to run multiple tasks in parallel, without waiting for one task to finish before starting another. It allows for efficient and responsive programs by allowing multiple operations to run at the same time.

In JavaScript, asynchronous operations are typically executed using callback functions, promises, or async/await.

A callback function is a function that is passed as an argument to another function and is executed at a later time. For example, when making an API request, you can pass a callback function that will be executed when the response is received, allowing the program to continue executing while the request is being processed.</p>
<hr>
<p>Promises are a more recent addition to JavaScript and provide a cleaner and more flexible way to handle asynchronous operations. A Promise represents the result of an asynchronous operation and can be in one of three states: Pending, Fulfilled, or Rejected.</p>
<hr>

<p>Async/await is a more recent addition to JavaScript and provides a simpler way to write asynchronous code. It allows you to write asynchronous code that looks like synchronous code, making it easier to read and write.</p>

<hr>
<p>In general, asynchronous programming in JavaScript is used to handle events, perform long-running operations, and interact with APIs, among other things. It allows for efficient and responsive programs by allowing multiple operations to run at the same time, improving overall performance and user experience.</p>

### Q: Does callback function refer to the function that takes function(s) as arguments, or does callback function refers to the arguments themselves.

### A:
<p>A callback function refers to the function that is passed as an argument to another function. The argument function is executed at a later time, typically when an event occurs or a task has been completed. The term "callback" refers to the idea that the argument function is being "called back" at a later time.

Here's an example to illustrate the concept:</p>

```js
function greeting(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greeting("John", sayGoodbye);
```

In this example, the `sayGoodbye` function is being passed as an argument to the greeting function. It is being referred to as a "callback" function because it will be "called back" by the `greeting` function. The `greeting` function logs a greeting and then executes the `sayGoodbye` function.



