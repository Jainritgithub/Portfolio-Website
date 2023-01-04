function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    var parent = document.createElement("span")
    var child = document.createElement("span")

    parent.classList.add("parent")
    child.classList.add("child")

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem .innerHTML = "";
    elem.appendChild(parent);
})
}
function valueSetters(){
    gsap.set("#nav a", {y:"-100%", opacity: 0 });
    gsap.set("#home .parent .child", {y: "100%"})
    gsap.set("#home .row img", {opacity: 0})

    document.querySelectorAll(".c-visual>d").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
        
    })
}
function loaderAnimation(){
    var tl = gsap.timeline();
tl
.from("#loader .child span",{
    x: 100,
    stagger: .2,
    duration: 1.4,
    ease: Power3.easeInOut
})
.to("#loader .parent .child",{
    y: "-110%",
    duration: 1,
    delay: 1,
    ease: Circ.easeInOut
})

.to("#loader",{
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green",{
    height: "100%",
    top: "0%",
    duration: 1,
    delay: -.8,
    ease: Circ.easeInOut
})
.to("#green",{
    height: "0%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
    onComplete: function(){
        animateHomepage();
    }
})
.to("#loader",{
    height: 0,
})
}
function animateSvg(){
   
    gsap.to(".c-visual>d>d>path, .c-visual>d>d>polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: 5
    })
}
function animateHomepage(){

    var tl = gsap.timeline();

    tl.to("#nav a",{
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut

    })
    tl.to("#home .parent .child",{
        y: 0,
        stagger: .1,
        duration: 1,
        ease: Expo.easeInOut,
        

    })
    tl.to("#home .row img",{
        opacity: 1,
        delay: -.5,
        ease: Expo.easeInOut,
        onComplete: function(){
            animateSvg();
        }

    })
}
function locoInitialize(){
    let scrollcontainer = document.querySelector("#main")
    const scroll = new LocomotiveScroll({
        el: scrollcontainer,
        smooth: true
    });   
}

revealToSpan();
valueSetters();
locoInitialize();
loaderAnimation();

