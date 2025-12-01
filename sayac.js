
let c = 0;   
let ci = 0;  
let cd = 0;  


const count       = document.getElementById("count");
const incCount    = document.getElementById("incCount");
const decCount    = document.getElementById("decCount");
const incButton   = document.getElementById("incBtn");
const decButton   = document.getElementById("decBtn");
const resetButton = document.getElementById("resetBtn");
const themeButton = document.getElementById("themeBtn");
const counterElement = document.getElementById("count"); 


function triggerAnimation() {
    counterElement.classList.add("animate");
    setTimeout(() => {
        counterElement.classList.remove("animate");
    }, 200);
}


function update() {
    count.textContent = c;
    incCount.textContent = ci;
    decCount.textContent = cd;
}


function inc() {
    c++;
    ci = ci >= 10 ? 0 : ci + 1;   
    update();
    triggerAnimation();
}


function dec() {
    if (c > 0) {
        c--;
        cd = cd >= 10 ? 0 : cd + 1;
        update();
        triggerAnimation();
    }
}


function reset() {
    c = 0;
    ci = 0;
    cd = 0;
    update();
    triggerAnimation();
}


themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Açık Mod";
    } else {
        themeButton.textContent = "Koyu Mod";
    }

    
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});


if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Açık Mod";
} else {
    themeButton.textContent = "Koyu Mod";
}


incButton.addEventListener("click", inc);
decButton.addEventListener("click", dec);
resetButton.addEventListener("click", reset);




 
document.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {        
        e.preventDefault();
        inc();
    } else if (e.key === "-" || e.key === "ArrowDown") { 
        dec();
    } else if (e.key === "r" || e.key === "R") {     
        reset();
    }
});