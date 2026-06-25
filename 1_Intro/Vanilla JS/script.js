let count = 0;
const h1 = document.getElementById("count")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    count++;
    h1.innerText = count; // Manually Update DOM Every Time changing element
})