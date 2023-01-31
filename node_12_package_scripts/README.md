# What is "scripts": {} in package.json

It is just to specify behaviour with keywords.

Example:
By appending
```
"start" : "node app.js"
```
in the "scripts" part of package.json,

then instead of running
```
node app.js
```
We can instead run
```
npm start
```

<hr>

Note that some of them you have to specify `run` command
Example:
```
npm run dev
```
You can pretty much use
```
npm run <commandname>
```
for every single command in the scripts section of package.json