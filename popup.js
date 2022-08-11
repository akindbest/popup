var btn = document.getElementById("btn");
btn.onclick = () =>{
   showModal(0)
}

const showModal = (index)=>{
   const modal = document.getElementById("modal");
   document.querySelector(".modal-content").classList.remove("animate-modal");
   let allDiv = document.querySelectorAll(".modal-content > div");
   allDiv.forEach(div => {
    div.style.display = "none";
   })
   modal.style.display = "flex";
   allDiv[index].style.display = "flex";
   document.querySelector(".modal-content").classList.add("animate-modal");
}

const closeModal = () =>{
   document.getElementById("modal").style.display = "none";
   document.querySelector('.modal-content').classList.remove('animate-modal');
   let allDiv = document.querySelectorAll(".modal-content > div");
   allDiv.forEach(div =>{
      div.style.display = "none";
   })

const responseStatus = () =>{
   
}  
}