const get = require('./get');
const conf = require('./conf');

class Translate {
  constructor(conf) {
    this.url = conf.url;
    this.params = {
      key : conf.key,
      text : conf.text,
      lang : conf.lang,
    }
  }
  
  setText(text){
    this.params.text = text;
  }

  setLang(lang) {
    this.params.lang = lang;
  }
  
  getRequestURL() {
    var url = this.url + '?'; 

    for(var key in this.params) {
      if(this.params[key] !== undefined) {
        url += '&' + key + '=' + this.params[key];
      }
    }
    return url; 
  }

  ru(text) {
    this.setText(text);
    this.setLang('ru-en');
    get(this.getRequestURL(), (t)=>console.log(t.text[0]));
  }

  en(text) {
    this.setText(text);
    this.setLang('en-ru');
    get(this.getRequestURL(), (t)=>console.log(t.text[0]));
  }
}

module.exports = new Translate(conf);
