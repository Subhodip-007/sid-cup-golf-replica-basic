gsap.to("#nav",{ 
   backgroundColor: "rgba(0, 0, 0, 0.5)",
   duration: 0.5,
   height: "100px",
   scrollTrigger: {
      trigger: "#nav",
      scroller:"body",
      
      start: "top -10%",
      end: " top -11%",
      scrub:1,
   }
})
gsap.to(".main",{
    backgroundColor: "rgb(0, 0, 0)",
    scrollTrigger: {
        trigger: ".main",
        scroller:"body",
      
        start: "top -30%",
        end: " top -80%",
        scrub:2,
    }    
})
var blur= document.querySelector("#cursorblr")
var crsr= document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets) {
   crsr.style.left = dets.x +30 + "px";
   crsr.style.top = dets.y + "px";
   
})


document.addEventListener("mousemove", function(dets) {
   blur.style.left = dets.x -250+ "px";
   blur.style.top = dets.y -250+ "px";
   
})

var allh4 = document.querySelectorAll("#nav h4");

allh4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });

    elem.addEventListener("mouseleave", function() {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid limegreen";
        crsr.style.backgroundColor = "lightgreen";
    });
});
gsap.from(".about img,abtin",{
   y:50,
   opacity:0,
   duration: 2,
stagger:0.4,
   scrollTrigger: {
      trigger: ".about",
      scroller:"body",
      
      start: "top 70%",
      end: "top 65%",
      scrub:3,
   }
})

gsap.from(".card",{
scale:0.8,
   opacity:0,
   duration: 2,
stagger:0.4,
   scrollTrigger: {
      trigger: ".card",
      scroller:"body",
     
      start: "top 80%",
      end: "top 50%",
      scrub:3,
   }
})
gsap.from("#colo1",{
y:-70,
x:-70,
scrollTrigger: {
   trigger: "#colo1",
   scroller:"body",
   
   start: "top 70%",
   end: "top 45%",
   scrub:3,
}

})
gsap.from("#colo2",{
y:70,
x:70,
scrollTrigger: {
   trigger: "#colo1",
   scroller:"body",
  
   start: "top 70%",
   end: "top 45%",
   scrub:3,
}

})

gsap.from("#page4 h1",{
y:50,
   scrollTrigger: {
      trigger: ".page4 h1",
      scroller:"body",
     
      start: "top 100%",
      end: "top 70%",
      scrub:3,
   }
})