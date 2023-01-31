# DevDependencies
Dependencies that are needed during DEVELOPMENT (will not be installed during production/deployment) and will not be install when
```
npm ci
```
is executed. Though 
```
npm install
```
will install DevDependencies as well

Example:
1. Testing modules
2. Build Tools

<hr>

To install a package as devDependencies add -D or --save-dev to normal package install

```
npm i nodemon -D
```

or 

```
npm i nodemon --save-dev
```

<hr>

## Summary:
DevDependencies, Dependencies and
```
npm install
```
for development purposes 
# BUT

Dependencies and 
```
npm ci
```
for RELEASE/DEPLOYMENT purposes.