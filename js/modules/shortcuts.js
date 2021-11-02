export default function shortCuts(e) {
 
    /*   console.log(e.type)
    console.log(e)      
    console.log(e.key)      
    console.log(e.ctrlKey)      
    console.log(e.altKey)      
    console.log(e.shiftKey)      
    console.log(e.keyCode)      */
   
    
    if (e.key === "a" && e.altKey) {
        alert("hola soy alt + a = this alert");
    } 
    
    if (e.key === "c" && e.altKey) {
        confirm("hola soy alt + c = this confirm");
    } 
    
    if (e.key === "p" && e.altKey) {
        prompt("hola soy alt + p = this prompt");
    } 
}