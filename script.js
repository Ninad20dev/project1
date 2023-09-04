var crsr = document.querySelector("#crsr")
var blur = document.querySelector("#blur")
document.addEventListener("mousemove", (event)=>{
    crsr.style.left = event.x-12.5+"px"
    crsr.style.top = event.y-12.5+"px"
    blur.style.left = event.x-200+"px"
    blur.style.top = event.y-200+"px"
    
})


gsap.to("#nav", {
    backgroundColor : "#000",
    duration : 0.5,
    height: "100px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        markers : true,
        start : "top -10%",
        end : "top -8%",
        scrub : 1
    }
})

gsap.to("#main", {
    backgroundColor : "#000",
    duration : 0.5,
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        start : "top -50%",
        end : "top -80%",
        scrub : 1
    }
})

gsap.from("#colon1", {
    y: -70,
    x:-70,
    scrollTrigger : {
        trigger:"#colon1",
        scroller : "body",
        start : "top 50%",
        end : "top 47%",
        scrub : 5

    }
})
gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger : {
        trigger:"#colon1",
        scroller : "body",
        start : "top 55%",
        end : "top 47%",
        scrub : 5

    }
})