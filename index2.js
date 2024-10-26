const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        const animation5 = entry.target.querySelector(".animation5")
        const animation4 = entry.target.querySelector(".animation4")

        if(entry.isIntersecting){
            animation4.classList.add("animate3");
            animation5.classList.add("animate4");
        }else{
            animation4.classList.remove("animate3");
            animation5.classList.remove("animate4");
        }

    })
})

observer2.observe(document.querySelector('.welcome'));