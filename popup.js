var btn = document.getElementById("btn");
btn.onclick = () =>{
   const modal = document.getElementById("modal");
   document.querySelector(".modal-content").classList.remove("animate-modal");
   let allDiv = document.querySelectorAll(".modal-content > div");
   allDiv.forEach(div => {
    div.style.display = "none";
   })
   modal.style.display = "flex";
   allDiv[0].style.display = "flex";
   document.querySelector(".modal-content").classList.add("animate-modal");

}