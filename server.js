const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3033

// 传入配置初始化 Nuxt.js 实例
let config = require('./nuxt.config.js')

const nuxt = new Nuxt(config)

// 在开发模式下进行编译
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

// 监听指定端口
app.listen(port, '0.0.0.0')
console.log('服务器运行于 localhost:' + port)