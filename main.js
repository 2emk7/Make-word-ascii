const figlet = require('figlet');

const text = 'ENTER TEXT HERE';

figlet.text(text, (error, data) => {
if (error) {
console.error(error);
} else {
console.log(data);
}
});
