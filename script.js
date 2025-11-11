// Theme toggle 
// ye code extensions ke according yane ki system ke according theme badlega 
function setDarkorLight(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.body.classList.add('dark');
    document.body.classList.remove('light');
}else{
    document.body.classList.add('light');
    document.body.classList.remove('dark');
}
}
setDarkorLight();

// yaha se hamara main code shuru hoga manually button se change akrne wala


//FUCNTION 1
// to ye fucntion 1 hai jo pehle dekhega ki konsi theme lagi undono ko hata dega aur function mai
//  theme varibale pass kiya hai abb uss variable ko jo bhi theme assign karege hum dark ya light vo theme vo  add karega
function applyTheme(theme){
    document.body.classList.remove('dark','light');
    document.body.classList.add(theme);
}

//FUNcTION 2 
// when page reloads 
window.addEventListener('DOMContentLoaded', function(){
 const savedTheme = this.localStorage.getItem("theme")
 if(savedTheme){
    applyTheme(savedTheme);
 }
 else{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        applyTheme('dark');
    }else{
        applyTheme('light');
    }
 }
});


//Funciton 3 
// when user clicks on toggle button
let toggle = document.getElementById("toggle-btn")
toggle.addEventListener("click", function(){
    
    if(document.body.classList.contains("dark")){
        applyTheme("light");
        localStorage.setItem("theme","light");
    }else{
        applyTheme("dark");
        localStorage.setItem("theme","dark");
    }
  
})