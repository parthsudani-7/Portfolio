const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}else{
entry.target.classList.remove("show");
}
});
},{threshold:0.25});

document.querySelectorAll(".fade-in,.fade-up,.slide-up,.slide-left,.slide-right,.scale-in,.rotate-in,.zoom-in").forEach(el=>{
observer.observe(el);
});


window.addEventListener("scroll",()=>{
let scrollTop=document.documentElement.scrollTop;
let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let progress=(scrollTop/scrollHeight)*100;
document.getElementById("scroll-bar").style.width=progress+"%";
});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
if(window.scrollY>400){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});

topBtn.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});