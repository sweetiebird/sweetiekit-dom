class Audio {
  constructor(...args) {
    this.width = 1
    this.height = 1
    this.src = ''
    this.data = Buffer.alloc(1)
  }
  load(data, callback) {
    this.data = data;
    if (callback) {
      callback(null);
    }
  }
}
class Image {
  constructor(...args) {
    this.width = 1
    this.height = 1
    this.src = ''
    this.data = Buffer.alloc(1)
  }
  load(data, callback) {
    this.data = data;
    if (callback) {
      callback(null);
    }
  }
}
module.exports = {nativeAudio: { Audio }, nativeImage: Image }
