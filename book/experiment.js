const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log("Yearly rent" , yearlyRent);

const timesToRepeat = 10;
const character = 'h';
let answer = '';
for (i=0 ; i<timesToRepeat; i++)
{
    answer = answer + character;
}
//console.log("".padStart(timesToRepeat,character));