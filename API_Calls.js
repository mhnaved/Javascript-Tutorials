console.log("This is a tutorial of Api calls")

//Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// Example: 01

function getData(){
    console.log("Started  getData")
    url = "naved.text";
    fetch(url)
    .then((response)=>{
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);

    })
        
    }



// Example: 02

// function getData(){
//     console.log("Started  getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);

//     })
        
//     }

//     console.log("Before running getData");
//     getData();
//     console.log("After running getData");



    // function postData(){
    //     console.log("Started  getData")
    //     url = "	https://dummy.restapiexample.com/api/v1/create";
    //     data = '{"name":"Naved","salary":"123","age":"23"}'
    //     params = {
    //         method: 'post',
    //         headers: {
    //             'content-Type': 'application/json'
    //         },
    //         body: data
    //     }
    //     fetch(url,params)
    //     .then(response=> response.json())
    //     .then(data=> console.log(data))
    
    
            
    //     }

    //     postData()
