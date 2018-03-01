const translate = require('./src/translate');

if(process.argv.length <= 3) {
  defolt();
  return;
}

switch(process.argv[2].slice(1)) {
  case 'ru':
    translate.ru( joinWorlds(process.argv) );
    break;
  case 'en':
    translate.en( joinWorlds(process.argv) );
    break;
  default:
    defolt()
}

function defolt() {
  console.log('-ru Russia text');
  console.log('-en English text');
}

function joinWorlds(params) {
   
  return params.slice(3)
    .filter( (el)=> !el.includes('-') )
    .join('\ ');  

}
