const container = document.querySelector("div");
const resize = document.querySelector(".resize");
const reset = document.querySelector(".reset");

var SIZE = 8;
const CONTAINERSIZE = 60;

function sizeResize(SIZE) {
    SIZE = SIZE**2
    for (let i = 0; i < SIZE; i++) {
        const div = document.createElement("div");
        container.appendChild(div);  
    };
    
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    
    const pixelSize = document.querySelectorAll(".container div");
    
    pixelSize.forEach((element)=>{
        
        element.style.boxSizing = "border-box";
        element.style.width = `${CONTAINERSIZE/(SIZE**(1/2))}vh`;
        element.style.height = `${CONTAINERSIZE/(SIZE**(1/2))}vh`;
        element.style.border = ".1px solid";
        element.style.backgroundColor = "#ee82ee78";
    });
};

function clear() {
    const pixelSize = document.querySelectorAll(".container div");

    pixelSize.forEach((elemnt)=> {
        elemnt.remove()
    });
};

sizeResize(SIZE);

resize.addEventListener("click", () => {
    const newSize = prompt("Enter new size (8 - 64):");

    if (newSize < 8 || newSize > 64) {
        return;
    };
    clear()
    sizeResize(newSize);
});

reset.addEventListener("click", () => {
    const pixelSize = document.querySelectorAll(".container div");

    pixelSize.forEach((element)=>{
        element.style.backgroundColor = "#ee82ee78";
    });
});
