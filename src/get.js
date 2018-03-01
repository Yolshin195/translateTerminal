const https = require('https');

const { URL } = require('url');

function get(url, callback) {
  var body = '';
  const options = new URL(url);

  const req = https.request(options, (res) => {

    res.on('data', (d) => {
      body += d.toString();
    });

    res.on('end', function() {
      var t =JSON.parse(body);
      callback(t);
    })

  });


  req.on('error', (e) => {
    console.error(e);
  });
  
  req.end();
}

module.exports = get;

