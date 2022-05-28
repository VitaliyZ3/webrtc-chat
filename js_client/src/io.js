const iconv = require('iconv-lite');
module.exports = class io {
  constructor(encoding = 'UTF-8') {
    this.encoding =  encoding
    this.log = console.log
  }
  send(text){
    process.stdout.write(iconv.decode(`${text}`, this.encoding));
  }
  isCommand(text) {
      return (text?.length > 1 && text.charAt(0) === prefix) ? true : false;
  }
  parseCommand(text, prefix = "/"){
    if (this.isCommand(text)) {
      // delete all double and more spaces and brake line simbols
      text = text.trim();
      // text to arr
      text = text.split(" ")
      // delete prefix
      text[0] = text[0].replace( prefix , '')
      return text
    } else {
      return false;
    }
  }
  onInput(fn){
    process.stdin.on("data", buffer => fn(buffer.toString().trim()))
  }
}