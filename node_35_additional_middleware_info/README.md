# Additional info on middleware

Since it's everywhere in Express.js

## Q: 
Use case for middleware with app.use() vs. adding middleware manually to each routes (app.get)

## A: 
If we don't want to apply app.use() to all the routes (only want it/them on some routes), then we add the functions/middlewares to the one we want (add via array [mid1, mid2]). If we want it on all routes then we could use app.use().

<hr>

## Q:
Options to implementing middlewares?

## A:
1. Make our own and pass them with app.use() or to each routes manually
2. Built-in Middlewares with nodejs. Example:
```js
//static is one of the middleware built in with express
app.use(express.static('./public'));
```
3. Third-party (need to install with npm). Example
    - `morgan` (logging tool on npm)
