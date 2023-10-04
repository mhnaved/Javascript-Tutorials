var globalEC = "added";
function a(){
    var fa = "2nd function op1";
    console.log(fa);
    debugger;
    b();
    console.log("lets see when i will be on console."); }

    function b(){ 
        debugger;
        console.log("2nd function op2");
        c(); }

        function c(){
            debugger;
            console.log("3rd function op3");  }
            debugger;
            a();
 