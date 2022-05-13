//BASEURL

//HTML
const wrapper = query(".wrapper"),
      btn = query(".btn"),
      input = query(".urlCode"),
      img = query(".CodeImg")



btn.addEventListener("click",()=>{
    let value = input.value
    if(!value) return;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${value}`
    wrapper.classList.add("active")
})

function query(element){
    return document.querySelector(element)
}