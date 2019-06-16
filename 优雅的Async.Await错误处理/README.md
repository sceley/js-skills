# Async/Await 错误处理

## Try/Catch 方法处理

```js
const fetchDataA = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fetch data is A')
        }, 1000)
    })
}

const fetchDataB = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fetch data is B')
        }, 1000)
    })
}

const fetchDataC = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fetch data is C')
        }, 1000)
    })
}

(async () => {
    try {
        const dataA = await fetchDataA()
        console.log('dataA is: ', dataA)
    } catch(err) {
        console.log('err is: ', err)
    }

    try {
        const dataB = await fetchDataB()
        console.log('dataB is: ', dataB)
    } catch(err) {
        console.log('err is: ', err)
    }

    try {
        const dataC = await fetchDataC()
        console.log('dataC is: ', dataC)
    } catch(err) {
        console.log('err is: ', err)
    }
})()
```

try/catch 的确可以来解决错误异常的处理，但是让代码非常的不干净，原本 async/await 的优势就是让代码更佳的简约，这样一来又违背了它的初衷

## Go-lang 的错误处理

 Go 语言中处理异常的方式：

```go
f, err := os.Open("filename.txt")

if err != nil { return err }
```

## 优雅的 Async/Await错误处理

```js
async function errorCaptured(asyncFunc) {
    try {
        const data = await asyncFunc();
        return [null, data];
    } catch (e) {
        return [e, null];
    }
};

async function errorPromiseCaptured(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err, null]);
};
```

## 另一个思路

使用了 webpack 可以编写一个 loader，分析 AST 语法树，遇到 await 语法，自动注入 try/catch，这样连辅助函数都不需要使用