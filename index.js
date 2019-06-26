const sweetiekit = module.exports = require('./src/core.js')

if (require.main === module) {
  if (process.argv.length >= 3) {
    process.nextTick(async () => {
      const baseUrl = 'file://' + __dirname + '/';
      const u = require('fs').existsSync(process.argv[2]) ? new URL(process.argv[2], baseUrl).href : new URL(process.argv[2]).href;
      const v = await sweetiekit.load(u)
      setTimeout(() => {
        console.log(v.document)
      }, 1000);
    })
  }
}
