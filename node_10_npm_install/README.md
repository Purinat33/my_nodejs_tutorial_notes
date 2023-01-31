# Before:
1. package-lock.json
2. package.json
3. .gitignore

<hr>

```
npm ci
```
(base) ➜  node_10_npm_install git:(master) ✗ npm ci 

added 3 packages, and audited 4 packages in 725ms

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

<hr>

# After:
1. node_modules
2. package-lock.json
3. package.json
4. .gitignore