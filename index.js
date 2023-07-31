const fs = require('fs');

fs.writeFileSync('./data.txt', 'Hello ninja')
fs.writeFileSync('./data.txt', 'How are you doing?')

//It was placed next to the line 

fs.appendFileSync('./data.txt', '\nJason Ryan Barron');

