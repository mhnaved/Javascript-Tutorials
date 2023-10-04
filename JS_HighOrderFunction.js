
// EXample : 01
const greet = function(name){
    return function(m){
        // console.log(` Hi ${name}, ${m}`)
    }
}
greet("naved")("Welcome to Sambhal");
const greet_message = greet('Ashi');
greet_message("Welcome to Delhi.");


// EXample : 02

const interviewQuestions = (name) =>{
    if(name=== "naved"){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic}?. Plz explain us.`)
        }
    }  if(name=== "jamshed"){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic}?. Plz explain us.`)
        }
    }  if(name=== "ashi"){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic}?. Plz explain us.`)
        }
    }else{
        return function(){
            console.log("Welcome to Interview.");
        }
    }
}
interviewQuestions("naved")("HTML");
interviewQuestions("jamshed")("CSS");
interviewQuestions("ashi")("JavaScript");
interviewQuestions("mugeer")("React");

const cand1 = interviewQuestions("ashi");
cand1("html");