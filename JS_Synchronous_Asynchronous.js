// JS Synchronous

// document.write("Hi");
// document.write("<br>");

// document.write("Ashi");
// document.write("<br>");

// document.write("How are you");

// JS ASynchronous

// document.write("Hi");
// document.write("<br>");

// setTimeout(()=> {
//     document.write("Let us see what happens");
// },2000);


// document.write("<br>");
// document.write("End");
// document.write("<br>");



const fun2 = ()=> {
    setTimeout(() => {
        console.log('fun2 is starting');
    },3000)
}
const fun1 = () => {
    console.log('fun1 is starting');
    fun2();
    console.log('fun1 is ending');
}
fun1();