### Dark_Light_Toggle_Button

##Part 1 — Automatic theme detection
function setDarkorLight(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
}
setDarkorLight();


This function checks your system theme (dark or light).

If your OS is in dark mode → the website applies the .dark class.

If your OS is in light mode → .light class is applied.

Then setDarkorLight() runs immediately when the page loads to match your system’s current mode.

##Part 2 — Function to apply theme
function applyTheme(theme){
    document.body.classList.remove('dark','light');
    document.body.classList.add(theme);
}


This helper function resets the body by removing both themes first.

Then it adds whichever theme name (dark or light) is passed in as a parameter.

You’ll use this function every time you need to switch or load a theme.

##Part 3 — When the page reloads
window.addEventListener('DOMContentLoaded', function(){
 const savedTheme = this.localStorage.getItem("theme")
 if(savedTheme){
    applyTheme(savedTheme);
 } else {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
 }
});


When the page fully loads, it first checks localStorage for a previously saved theme.

If found → it uses applyTheme() to restore that saved theme.

If not found → it again checks your system preference and applies dark or light accordingly.

This ensures your chosen theme stays the same even after reloading the page.

##Part 4 — When user clicks the toggle button
let toggle = document.getElementById("toggle-btn")
toggle.addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
        applyTheme("light");
        localStorage.setItem("theme","light");
    } else {
        applyTheme("dark");
        localStorage.setItem("theme","dark");
    }
})


This listens for a click on the toggle button.

It checks which theme is active (.dark or .light).

Then it switches to the opposite theme.

It also saves the selected theme in localStorage, so the next time you open the page, it remembers your choice.
