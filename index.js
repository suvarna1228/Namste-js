function attachEventListeners(){
    let count=0;
    document.querySelector("#clickme").addEventListener("click", function x(){
        console.log("Button clicked",++count);
    
    });
}
attachEventListeners();