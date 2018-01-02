const http = require('http');

var instances = {
    qa01:'http://core3-qa01.playtechgaming.com/html/version.json',
    qa02:'http://core3-qa02.playtechgaming.com/html/version.json',
    qa03:'http://core3-qa03.playtechgaming.com/html/version.json',
    qa04:'http://core3-qa04.playtechgaming.com/html/version.json',
    qa05:'http://core3-qa05.playtechgaming.com/html/version.json',
    qa06:'http://core3-qa06.playtechgaming.com/html/version.json',
    qa07:'http://core3-qa07.playtechgaming.com/html/version.json',
    qa08:'http://core3-qa08.playtechgaming.com/html/version.json',
    qa09:'http://core3-qa09.playtechgaming.com/html/version.json',
    qa10:'http://core3-qa10.playtechgaming.com/html/version.json',
    core01:'https://core01.playtechgaming.com/html/version.json',
    core02:'https://core02.playtechgaming.com/html/version.json',
    core03:'https://core03.playtechgaming.com/html/version.json',
    core04:'https://core04.playtechgaming.com/html/version.json',
    core05:'https://core05.playtechgaming.com/html/version.json',
    core06:'https://core06.playtechgaming.com/html/version.json',
    core07:'https://core07.playtechgaming.com/html/version.json',
    core08:'https://core08.playtechgaming.com/html/version.json',
    core09:'https://core09.playtechgaming.com/html/version.json',
    core10:'https://core10.playtechgaming.com/html/version.json'
};
for (var i = 0; i < Object.keys(instances).length; i++) {
    http.get(Object.values(instances)[i], (res) => {
        let data = '';

        res.on('data', chunk => data += chunk);
        res.on('end', () => console.log(JSON.parse(data)));
    });
}

// fetch(url).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   console.log(data);
// }).catch(function() {
//   console.log("Booo");
// });
