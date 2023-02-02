# Async/Await & Promise

you can use async/await when you want to wait for a callback function that returns a Promise to finish. The async/await syntax makes it easier to handle asynchronous code and makes your code look more like synchronous code, which can make it easier to understand and maintain.

For example, consider the following code that uses a callback function to fetch data from an API:

```js
fetch('https://some-api.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```
With async/await, the same code can be written as follows:

```js
async function getData() {
  try {
    const response = await fetch('https://some-api.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
```

In this code, the async keyword is used to declare an asynchronous function, and the await keyword is used to wait for the result of the fetch operation. The try/catch syntax is used to handle any errors that may occur during the operation.

In this way, async/await makes it easier to write and maintain code that uses callbacks with promises, as it makes your code look more like synchronous code and eliminates the need for chaining multiple then and catch statements.

<hr>

# .then() VS console.log()
The .then() method is not equivalent to console.log(), but it is often used to log the result of a Promise.

The .then() method is a method of a Promise that returns a new Promise. It takes two arguments: a success callback function, and an error callback function. The success callback function is called when the Promise is resolved, and it receives the resolved value as its argument. The error callback function is called when the Promise is rejected, and it receives the rejected reason as its argument.

Here's an example:

```js
getData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

In this code, the `.then()` method is used to log the resolved value of the getData Promise, and the `.catch()` method is used to log any errors that may occur during the operation.

So to answer the question, no, `.then()` is not equivalent to `console.log()`, but it is often used to log the result of a Promise.

The .then() method and console.log() both allow you to access the resolved value of a Promise, but they are used differently.

.then() is a method of a Promise that returns a new Promise. It takes two arguments: a success callback function, and an error callback function. The success callback function is called when the Promise is resolved, and it receives the resolved value as its argument. The error callback function is called when the Promise is rejected, and it receives the rejected reason as its argument.

Here's an example:

```js
getData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

In this code, the .then() method is used to log the resolved value of the getData Promise, and the .catch() method is used to log any errors that may occur during the operation.

console.log() is a global function in JavaScript that logs its argument to the console. When you pass a Promise to console.log(), it will log the Promise object, not its resolved value.

Here's an example:

```js
console.log(getData());
```

In this code, console.log() logs the getData Promise object, not its resolved value. To log the resolved value, you would need to use the .then() method, as shown in the previous example.

So to answer the question, .then() is a way to access the resolved value of a Promise, whereas console.log() logs its argument to the console, which may be a Promise object.


