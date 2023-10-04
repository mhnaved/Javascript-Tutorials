const name =  'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name)

let html;
html = "<h1> This is heading</h1>"+
       "<p> This is my paragraph</p>" ;
html =html.concat('this',' str2');
console.log(html);
// console.log(html.length)       
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[10]);
// console.log(html.indexOf('h'));
// console.log(html.lastIndexOf('h'));
// console.log(html.charAt(5));
// console.log(html.endsWith('str2'));
console.log(html.concat('Naved',' Ashi'));
console.log(html.includes('is'));
console.log(html.substring(1,5));
console.log(html.slice(0,4));
console.log(html.split('is'));
console.log(html.replace('This', 'It'));




let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
               <h1> You are so beautiful lady. </h1>
               <p> you like ${fruit1} and ${fruit2}</p>`;
 document.body.innerHTML = myHtml;              
       
