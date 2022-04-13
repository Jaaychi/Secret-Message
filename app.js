// Using array methods, you will transform an array of strings into a secret message!

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'Program')
console.log(secretMessage.length);
const indexOfEasily = secretMessage.indexOf('easily');
console.log(indexOfEasily)
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming')
console.log(secretMessage)
secretMessage.splice(6,5, 'know,')
console.log(secretMessage);
const newstring = secretMessage.join(' ')
console.log(newstring)
