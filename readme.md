# 基于 webpack 的后端服务
使用 webpack 开发 nodejs 后端，将所有的后端代码打包到一个文件中 `build/app.js`

## 使用方法
  
```
npm i && npm start
```

### 开发阶段

```
npm start
``` 
每当修改文件后，会自动编译文件，并会把编译的文件放在 `build/app.js`，并重启服务器，使修改的代码立即生效，而且编译有缓存，编译速度很可观。由于基于 webpack，可以完全使用 es6 语法。

### 打包

```
npm run build
```
