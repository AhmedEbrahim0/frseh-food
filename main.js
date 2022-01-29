var link=document.querySelectorAll(".nav-item");
var a=document.querySelector("a");
Array.from(link).forEach((item)=>{
    item.addEventListener("click",function(){
        var listMenu=document.querySelector(".active");
        item.classList.add("active")
        listMenu.classList.remove("active");
    })
}) 
a.addEventListener("click",function(e){
    e.defaultPrevented
})

// this for small navbar opening
var btnNavbar=document.querySelector(".btn-navbar1");
var btnNavbar2=document.querySelector(".btn-navbar2");
var nav=document.querySelector(".nav");
btnNavbar2.style.display="none"

btnNavbar.addEventListener("click",function(){
    nav.style.clipPath= "circle(141.7% at 100% 0)"
    btnNavbar.style.display="none"
    btnNavbar2.style.display="block"
})

btnNavbar2.addEventListener("click",function(){
    nav.style.clipPath= " circle(4.6% at 100% 0)"
    btnNavbar.style.display="block"
    btnNavbar2.style.display="none"
})

// add active class when i click
var btnMenu=document.querySelectorAll(".btn-menu");
var btnMenuActivE= document.querySelector(".btn-menu-active");
Array.from(btnMenu).forEach(item=>{
    item.addEventListener("click",function(){
        var btnMenuActive= document.querySelector(".btn-menu-active");
        btnMenuActive.classList.remove("btn-menu-active")
        item.classList.add("btn-menu-active");
    })
})


// hide and show button up 
var btnUp=document.querySelector(".btn-up")
btnUp.style.display="none"
btnUp.addEventListener("click",function(){
    document.documentElement.scrollTop=0
})
window.addEventListener("scroll",function(){
    if(window.pageYOffset>200) btnUp.style.display="block";
        else btnUp.style.display="none"
})

// smooth scrolling 
var navItem=document.querySelectorAll(".nav-item")
Array.from(navItem).forEach(item=>{
    item.addEventListener("click",function(){
        
        var id=item.getAttribute("data")
        var section=document.getElementById(id)
        section.scrollIntoView({
            behavior:"smooth",
            block:"center"
        })
        console.log(section);
    })
})
// add class when i scroll
var sections=document.querySelectorAll("section");
onscroll=function(){
    var top =document.documentElement.scrollTop
    Array.from(sections).forEach(item=>{
        if(top>=item.offsetTop  &&  top< (item.offsetHeight+item.getBoundingClientRect().height)){
                let  dataId=item.getAttribute("id");
                var link=document.querySelector(`.${dataId}`)
            // here you make all links remove active then  only onr section add class active 
                var AllLinks=document.querySelectorAll("ul li")
                AllLinks.forEach(link1=>{
                    link1.classList.remove("active")
                })

                link.classList.add("active")

        }  
    })
}
