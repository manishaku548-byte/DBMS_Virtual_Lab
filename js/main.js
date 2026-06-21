const menuBtn =
document.getElementById("menuBtn");

const sidebar =
document.getElementById("sidebar");

const overlay =
document.getElementById("overlay");

menuBtn.addEventListener(
"click",
() => {

sidebar.classList.add("active");

overlay.classList.add("active");

}
);

overlay.addEventListener(
"click",
() => {

sidebar.classList.remove("active");

overlay.classList.remove("active");

}
);

document.addEventListener(
"keydown",
(event) => {

if(event.key === "Escape"){

sidebar.classList.remove("active");

overlay.classList.remove("active");

}

}
);

console.log(
"DBMS Virtual Lab Loaded Successfully"
);