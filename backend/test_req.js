const https = require('https');

const data = JSON.stringify({
  name: 'Test',
  email: 'test@test.com',
  message: 'Test'
});

const options = {
  hostname: 'portfolio-ritik-w2fq.onrender.com',
  port: 443,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
