# Pretend this is the root of the project

1. Package name: default = folder name. But if you want to publish this then the name should be unique

2. Version: Default (1.0.0) for now
3. Description: default or anything is fine
4. Entry point: Default for now
5. Test command, git repository, keywords: go for default for now
6. Authors:


Yes to make package.json

<hr>

You can always manually change the values in the json file later
so 
```
npm init -y
```
is the way to go

<hr>

# Q: why do we need package.json
## A: If we want to install local packages as dependencies

### Example: install lodash locally
### Note: lodash doesn't have any real uses for this web project
#### This is just for demo
```
npm i lodash
```

Notice a new "dependencies" object inside package.json named lodash

# You will notice a folder named node_module

## This folder is where all the dependencies are located

## If you don't have this folder, npm create it

## More example of larger dependencies
```
npm i bootstrap
```
also we don't use bootstrap, this is just for demo.

Also note that bootstrap use popperjs and others, they are also installed along with it

<hr>

Note that when we ran 
```
npm i <packagename>
``` 
node_modules and package-lock.json will be created

# It is recommended to .gitignore node_modules but KEEP package-lock.json in source control

<hr>

When developing in a new environment and we want to install dependencies (remember, no node_modules in the repository), we can ```cd``` to the same folder where package.json AND package-lock.json exists and run either
```
npm install
```
OR
```
npm ci
```
to make npm reads package.json and install every dependencies listed in package.json


## Q: 
Differences between 

```
npm install
```
 
and 
```
npm ci
``` 

and when to use them?

## A: 
```
npm install
```
will install the latest "safe" version of all the dependencies specified in the package.json file (with stuff relating to node_modules, but we don't commit that folder anyway). 
On the other hand,
```
npm ci
```
installs the EXACT SAME version as specified in the package-lock.json file.

It provides more reliability than 
```
npm install
```
and thus, should be used for deployment.

<hr>
