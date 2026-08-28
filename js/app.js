const menuBtn = document.querySelector(".menu_toggle");
const navMenu = document.querySelector(".nav_menu");
const menuIcon = document.querySelector(".menu_toggle i");


menuBtn.addEventListener("click",()=>{
    // Menu Show/Hide
    navMenu.classList.toggle("show");

    // Icon Change
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
});

const navLink = document.querySelectorAll(".nav_menu a");
navLink.forEach(function(link){
    link.addEventListener("click",function(){
        navMenu.classList.remove("active");
        // Icon Back to Hamburger
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    })
});


const navbar = document.querySelector(".navbar");
window.addEventListener("scroll",function(){
    if(this.window.scrollY>50){
        navbar.classList.add("sticky");
    }else{
        navber.classList.remove("sticky");
    }
});

const progressBar = document.querySelector(".progress_bar");
window.addEventListener("scroll",()=>{
    const scroll = document.documentElement.scrollTop;
    const height = documentElement.scrollHeight-document.documentElement.clientHeight;
    const progress =(scroll/height)*100;
    progressBar.computedStyleMap.width=progress+"%";
})
//  Hero Typing Effect
const words =["Premium Coffee","Fresh Espresso","Orgainc Beans","Best Cappuccino"];
let wordIndex = 0;
let letterIndex = 0;
const typing = document.getElementById("typing");
function typWord(){
    if(letterIndex<words[wordIndex].length){
        typing.textContent+=words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typWord,100);
    }else{
        setTimeout(deleteWord,1500);
    } 
}
function deleteWord(){
    if(letterIndex>0){
        typing.textContent = words[wordIndex].substring(0,letterIndex-1);
        letterIndex--;
        setTimeout(deleteWord,50);
    }
    else{
        wordIndex++;
        if(wordIndex >= words.length){
            wordIndex = 0;
        }
        setTimeout(typWord,300)
    }

}
typWord();


// Scroll Reveal Animation(Vanilla Javascript) start
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll",revealSection);
function revealSection(){
    reveals.forEach((item)=>{
    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;
    if(revealTop<windowHeight-100){
        item.classList.add("active")
    }

   });

}
revealSection();
// End
// Experience Counter Animation
// const counters = document.querySelector(".counter");
// counters.forEach(counter=>{
//     const updateCounter = ()=>{
//     const target = +counter.dataset.target;
//     const current = +counter.innerText;
//     const increment = Math.ceil(target/100);
//     if(current < target){
//         counter.innerText = current + increment;
//         setTimeout(updateCounter,30);
//     }else{
//         counter.innerText = target + "+";
//     }
//   };
//   updateCounter();
// });


const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const target = Number(counter.dataset.target);
    let current = 0;
    const updateCounter = ()=>{
        if(current<target){
            current++;
            counter.textContent = current;
            setTimeout(updateCounter,150)
        }else{
            counter.textContent = target+"+";
        }

    };
    updateCounter();
});



