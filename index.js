const sweetiekit = module.exports = require('./src/core.js')

if (require.main === module) {
  if (process.argv.length >= 3) {
    process.nextTick(async () => {
      const baseUrl = 'file://' + __dirname + '/';
      const u = new URL(process.argv[2], baseUrl).href;
      const v = await sweetiekit.load(u, {sandbox: global, beforeRun({window, code, filename, sandbox, options}) {
        sandbox.navigator = window.navigator
        sandbox.document = window.document
      }})
      console.log(v.document)
    })
  }
}
