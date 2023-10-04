// Event Bubbling

var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click",()=>{
    console.log("div")
})
button.addEventListener("click",()=>{
    console.log("button")
})


// Event Capturing

var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click",()=>{
    console.log("div")
},true)
button.addEventListener("click",()=>{
    console.log("button")
},true)

// for stop propagation
// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click",()=>{
//     console.log("div")
// })
// button.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("button")
// })

// for Immediate stop propagation
// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click",()=>{
//     console.log("div")
// })
// button.addEventListener("click",(event)=>{
//     console.log("button")
// })
// button.addEventListener("click",(event)=>{
//     event.stopImmediatePropagation();
//     console.log("button1")
// })



// Prevent Default
// var div = document.querySelector("div");
// var a = document.querySelector("a");

// a.addEventListener("click",(event)=>{
    // event.preventDefault();
//     console.log("button")
// })




// Practice spot
// div.addEventListener("click",()=>{
//     console.log("div")
// })
// button.addEventListener("click",()=>{
//     console.log("button")
// })

// var div = document.querySelector("div");

// var button = document.querySelector("button");
// div.addEventListener("click",()=>{
//     console.log("div");
// })
// button.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("button");
// })


div.addEventListener("click",()=>{
    console.log("div")
})
button.addEventListener("click",()=>{
    console.log("button")
})
var div = document.querySelector("div");
