let navButton = document.querySelector(".button"),
    myIcons = document.getElementById('icon'),
    mylinks = document.getElementById('link'),
    interval = 4000;
    let banner = document.querySelector('.banner')

    navButton.onclick =  clickButton

function clickButton() {
    myIcons.classList.toggle('clicked');
    mylinks.classList.toggle('clicked');

}


/* carousel */ 

let carouselSlide = Array.from(document.querySelectorAll('.carousel .slides')),
    carousel = document.querySelector(".carousel")
    index = 1,
    index = 1,
    next = document.querySelector('.arrow-right'),
    prev = document.querySelector('.arrow-left')
    duration = 1000

console.log(carouselSlide);

function addClass() {
    carouselSlide[0].classList.add('first')
    carouselSlide[1].classList.add('second')
    carouselSlide[2].classList.add('third')
}

addClass() 

next.onclick = ()=> {

    sliderNext()
    

}

prev.onclick = ()=> {
    slidePrev()
    
}



/*function removeClss() {
    carouselSlide[0].classList.remove('first')
    carouselSlide[1].classList.remove('second')
    carouselSlide[2].classList.remove('third')
}*/


function sliderNext() {
 
    index++

    if(index === 2) {
        carouselSlide.forEach(slide =>{
            slide.style.transform = "translatex(-100%)"
            slide.style.transition = "all 0.5s ease-in-out"
            slide.addEventListener('transitionend',()=>{
                carousel.append(carouselSlide[0])
                slide.style.transition = "none"
                slide.style.transform ="none"
            })
        })
    }else if(index === 3) {
        
        carouselSlide.forEach(slide => {
            slide.style.transform = "translatex(-100%)"
            slide.style.transition = "all 0.5s ease-in-out"
            slide.addEventListener('transitionend',()=>{
                carousel.append(carouselSlide[1])
                slide.style.transition = "none"
                slide.style.transform ="none"
            })
        })
   
    }else if (index === 4) {
        carouselSlide.forEach(slide =>{
            slide.style.transition = "all 0.5s ease-in-out"
            slide.style.transform = "translatex(-100%)"
            slide.addEventListener('transitionend',()=>{
                carousel.append(carouselSlide[2])
                slide.style.transition = "none"
                slide.style.transform ="none"
            })
        })
    } else {
        carouselSlide.forEach(slide =>{
            slide.style.transform = "translatex(-100%)"
            slide.style.transition = "all 0.5s ease-in-out"
            slide.addEventListener('transitionend',()=>{
                carousel.append(carouselSlide[0])
                slide.style.transition = "none"
                slide.style.transform ="none"
            })
        })
        index = 2  
    }
    console.log(index)
}

function slidePrev() {

    if(carousel.firstElementChild.classList.contains('first')) {
        carouselSlide.forEach(slide =>{
            slide.style.transform = "translatex(100%)"
            slide.style.transition = "all 0.5s ease-in-out"
            slide.addEventListener('transitionend',()=>{
                carousel.prepend(carouselSlide[2])
                slide.style.transition = "none"
                slide.style.transform ="none"
            })
        })

        index=3
    }else if(carousel.firstElementChild.classList.contains('third')) {
        carouselSlide.forEach(slide =>{
            slide.style.transform = "translatex(100%)"
            slide.style.transition = "all 0.5s ease-in-out"
            slide.addEventListener('transitionend',()=>{
                carousel.prepend(carouselSlide[1])
                slide.style.transition = "none"
                slide.style.transform ="none"
            })
        })

        index=2
    }else if(carousel.firstElementChild.classList.contains('second')) {
        carouselSlide.forEach(slide =>{
            slide.style.transform = "translatex(100%)"
            slide.style.transition = "all 0.5s ease-in-out"
            slide.addEventListener('transitionend',()=>{
                carousel.prepend(carouselSlide[0])
                slide.style.transition = "none"
                slide.style.transform ="none"
            })
        })

        index=1
    }
   
}

/* static width */

let all = document.querySelector('.all'),
    graphic = document.querySelector('.graphic'),
    ux = document.querySelector('.ulux'),
    branding = document.querySelector('.branding'),
    hiddenDivs = Array.from(document.querySelectorAll('.our-work .our-work-child')),
    parentOurWork = document.querySelector(".buttons .container")

    let matchxl =window.matchMedia("(max-width: 1918px)")
    if(matchxl.matches) {

        BasicPosition19018()
      
    }

    let matchx2 =window.matchMedia("(max-width: 1399px)")
    if(matchx2.matches) {
        screen1400()
        
    }

    let matchx3 =window.matchMedia("(max-width: 1199px)")
    if(matchx3.matches) {
        
       screen1200() 
    }

    let matchx4 =window.matchMedia("(max-width: 991px)")
    if(matchx4.matches) {
       screen991() 
    }

    let matchx5 =window.matchMedia("(max-width: 767px)")
    if(matchx5.matches) {
       screen767() 
    }

    let matchx6 =window.matchMedia("(max-width: 575px)")
    if(matchx6.matches) {
       screen565() 
    }
    
    window.addEventListener("resize" , ()=> {
        
         matchxl =window.matchMedia("(max-width: 1918px)")
        if(matchxl.matches) {
            BasicPosition19018()
            if (graphic.classList.contains("active")) {
                parentOurWork.style.height = "382px"
                hiddenDivs[1].style.left = '0'
                hiddenDivs[1].style.top = '0'
    
                hiddenDivs[3].style.left = '336px'
                hiddenDivs[3].style.top = '0'
    
                hiddenDivs[4].style.left = '672px' // marketing
                hiddenDivs[4].style.top = '0'
                
                hiddenDivs[7].style.left = '1008px' // graphic
                hiddenDivs[7].style.top = '0';
            }

            if (ux.classList.contains("active")) {
                parentOurWork.style.height = "688px"
                hiddenDivs[1].style.left = '336px'
                hiddenDivs[1].style.top = '0'

                hiddenDivs[3].style.left = '672px' // marketing
                hiddenDivs[3].style.top = '0'

                hiddenDivs[4].style.left = '1008px' // graphic
                hiddenDivs[4].style.top = '0'
                
                hiddenDivs[7].style.left = '0'
                hiddenDivs[7].style.top = '336px'
            }

            if (branding.classList.contains("active")) {
                parentOurWork.style.height = "688px"
                hiddenDivs[2].style.left = '336px' //social
                hiddenDivs[2].style.top = '0'
            
                hiddenDivs[5].style.left = '672px' // marketing
                hiddenDivs[5].style.top = '0'
            
                hiddenDivs[6].style.left = '1008px' 
                hiddenDivs[6].style.top = '0'
            
                hiddenDivs[7].style.left = '0'
                hiddenDivs[7].style.top = '336px'
            }
        
        }

         matchx2 =window.matchMedia("(max-width: 1399px)")
             if(matchx2.matches) {
            screen1400()

            if (graphic.classList.contains("active")) {
                parentOurWork.style.height = "307px"
                hiddenDivs[1].style.left = '0'
                hiddenDivs[1].style.top = '0'

                hiddenDivs[3].style.left = '291px'
                hiddenDivs[3].style.top = '0'

                hiddenDivs[4].style.left = '582px' // marketing
                hiddenDivs[4].style.top = '0'
                
                hiddenDivs[7].style.left = '873px' // graphic
                hiddenDivs[7].style.top = '0'
            }

            if (ux.classList.contains("active")) {
                parentOurWork.style.height = "598px"
                hiddenDivs[1].style.top = '0'

                hiddenDivs[3].style.left = '582px' 
                hiddenDivs[3].style.top = '0'

                hiddenDivs[4].style.left = '873px' 
                hiddenDivs[4].style.top = '0'
                
                hiddenDivs[7].style.left = '0'
                hiddenDivs[7].style.top = '291px'
            }

            if (branding.classList.contains("active")) {
                parentOurWork.style.height = "598px"
                hiddenDivs[2].style.left = '291px'
                hiddenDivs[2].style.top = '0'

                hiddenDivs[5].style.left = '582px' 
                hiddenDivs[5].style.top = '0'

                hiddenDivs[6].style.left = '873px' 
                hiddenDivs[6].style.top = '0'
                
                hiddenDivs[7].style.left = '0'
                hiddenDivs[7].style.top = '291px'
            }
            
            matchx3 =window.matchMedia("(max-width: 1199px)")
            if(matchx3.matches){
                screen1200() 
                if (graphic.classList.contains("active")) {
                    parentOurWork.style.height = "671.968px"
                    hiddenDivs[1].style.left = '0'
                    hiddenDivs[1].style.top = '0'

                    hiddenDivs[3].style.left = '327.984px'
                    hiddenDivs[3].style.top = '0'

                    hiddenDivs[4].style.left = '655.984px' // marketing
                    hiddenDivs[4].style.top = '0'
                    
                    hiddenDivs[7].style.left = '0' // graphic
                    hiddenDivs[7].style.top = '327.984px'
                }

                if (ux.classList.contains("active")) {
                    parentOurWork.style.height = "671.968px"
                    hiddenDivs[1].style.left = '327.984px'
                    hiddenDivs[1].style.top = '0'
        
                    hiddenDivs[3].style.left = '655.984px' 
                    hiddenDivs[3].style.top = '0'
        
                    hiddenDivs[4].style.left = '0' 
                    hiddenDivs[4].style.top = '327.984px'
                    
                    hiddenDivs[7].style.left = '327.984px'
                    hiddenDivs[7].style.top = '327.984px'
                }

                if (branding.classList.contains("active")) {
                    parentOurWork.style.height = "671.968px"
                    hiddenDivs[2].style.left = '327.984px'
                    hiddenDivs[2].style.top = '0'
        
                    hiddenDivs[5].style.left = '655.984px' 
                    hiddenDivs[5].style.top = '0'
        
                    hiddenDivs[6].style.left = '0' 
                    hiddenDivs[6].style.top = '327.984px'
                    
                    hiddenDivs[7].style.left = '327.984px'
                    hiddenDivs[7].style.top = '327.984px'
                }

                let matchx4 =window.matchMedia("(max-width: 991px)")
                if(matchx4.matches) {
                   screen991() 
                   if (graphic.classList.contains("active")) {
                        parentOurWork.style.height = "520.656px"
                        hiddenDivs[1].style.left = '0'
                        hiddenDivs[1].style.top = '0'
            
                        hiddenDivs[3].style.left = '237.328px'
                        hiddenDivs[3].style.top = '0'
            
                        hiddenDivs[4].style.left = '474.656px' // marketing
                        hiddenDivs[4].style.top = '0'
                        
                        hiddenDivs[7].style.left = '0' // graphic
                        hiddenDivs[7].style.top = '237.328px'
                    }   

                    if (ux.classList.contains("active")) {
                        parentOurWork.style.height = "520.656px"
                        hiddenDivs[1].style.left = '237.328px'
                        hiddenDivs[1].style.top = '0'
            
                        hiddenDivs[3].style.left = '474.656px' 
                        hiddenDivs[3].style.top = '0'
            
                        hiddenDivs[4].style.left = '0' 
                        hiddenDivs[4].style.top = '237.328px'
                        
                        hiddenDivs[7].style.left = '237.328px'
                        hiddenDivs[7].style.top = '237.328px'
                    }

                    if (branding.classList.contains("active")) {
                        parentOurWork.style.height = "520.656px"
                        hiddenDivs[2].style.left = '237.328px'    
                        hiddenDivs[2].style.top = '0'
            
                        hiddenDivs[5].style.left = '474.656px' 
                        hiddenDivs[5].style.top = '0'
            
                        hiddenDivs[6].style.left = '0' 
                        hiddenDivs[6].style.top = '237.328px'
                        
                        hiddenDivs[7].style.left = '237.328px'
                        hiddenDivs[7].style.top = '237.328px'
                    }

                }
            }

                let matchx5 =window.matchMedia("(max-width: 767px)")
                if(matchx5.matches) {
                    screen767()
                    if (graphic.classList.contains("active")) {
                        parentOurWork.style.height = "588px"
                        hiddenDivs[1].style.left = '0'
                        hiddenDivs[1].style.top = '0'
            
                        hiddenDivs[3].style.left = '266px'
                        hiddenDivs[3].style.top = '0'
            
                        hiddenDivs[4].style.left = '0' // marketing
                        hiddenDivs[4].style.top = '266px'
                        
                        hiddenDivs[7].style.left = '266px' // graphic
                        hiddenDivs[7].style.top = '266px'
                    }
                    if (ux.classList.contains("active")) {
                        parentOurWork.style.height = "844px"
                        hiddenDivs[1].style.left = '266px'
                        hiddenDivs[1].style.top = '0'

                        hiddenDivs[3].style.left = '0' 
                        hiddenDivs[3].style.top = '266px'

                        hiddenDivs[4].style.left = '266px' 
                        hiddenDivs[4].style.top = '266px'
                        
                        hiddenDivs[7].style.left = '0'
                        hiddenDivs[7].style.top = '532px'
                    }

                    if (branding.classList.contains("active")) {
                        parentOurWork.style.height = "844px"
                        hiddenDivs[2].style.left = '266px'
                        hiddenDivs[2].style.top = '0'
            
                        hiddenDivs[5].style.left = '0' 
                        hiddenDivs[5].style.top = '266px'
            
                        hiddenDivs[6].style.left = '266px' 
                        hiddenDivs[6].style.top = '266px'
                        
                        hiddenDivs[7].style.left = '0'
                        hiddenDivs[7].style.top = '532px'   
                    } 
            }

            let matchx6 =window.matchMedia("(max-width: 575px)")
                if(matchx6.matches) {
                    screen565()
                    if (graphic.classList.contains("active")) {
                        parentOurWork.style.height = "1786px"
                        hiddenDivs[1].style.left = '50px'
                        hiddenDivs[1].style.top = '0'

                        hiddenDivs[3].style.left = '50px'
                        hiddenDivs[3].style.top = '454px'

                        hiddenDivs[4].style.left = '50px' // marketing
                        hiddenDivs[4].style.top = '908px'
                        
                        hiddenDivs[7].style.left = '50px' // graphic
                        hiddenDivs[7].style.top = '1362px'
                    }
    
                    if (ux.classList.contains("active")) {
                        parentOurWork.style.height = "2266px"
                        hiddenDivs[1].style.left = '50px'
                        hiddenDivs[1].style.top = '454px'
            
                        hiddenDivs[3].style.left = '50px' 
                        hiddenDivs[3].style.top = '908px'
            
                        hiddenDivs[4].style.left = '50px' 
                        hiddenDivs[4].style.top = '1362px'
                        
                        hiddenDivs[7].style.left = '50px'
                        hiddenDivs[7].style.top = '1816px'
                    }
    
                    if (branding.classList.contains("active")) {
                        parentOurWork.style.height = "2266px" 
                        hiddenDivs[2].style.left = '50px'
                        hiddenDivs[2].style.top = '454px'

                        hiddenDivs[5].style.left = '50px' 
                        hiddenDivs[5].style.top = '908px'

                        hiddenDivs[6].style.left = '50px' 
                        hiddenDivs[6].style.top = '1362px'
                        
                        hiddenDivs[7].style.left = '50px'
                        hiddenDivs[7].style.top = '1816px'
                    }
    
                }
                        
         }
    })



    function BasicPosition19018() {
        parentOurWork.style.height = "700px"
        hiddenDivs.forEach(wdithH => {
            wdithH.style.width = "288px"
            wdithH.style.height = "288px"
        })
        hiddenDivs[0].style.left = '0'
        hiddenDivs[0].style.top = '0'

        hiddenDivs[1].style.left = '336px'
        hiddenDivs[1].style.top = '0'
        
        hiddenDivs[3].style.left = '1008px'
        hiddenDivs[3].style.top = '0'

        hiddenDivs[2].style.left = '672px' // marketing
        hiddenDivs[2].style.top = '0'

        hiddenDivs[4].style.left = '0' // marketing
        hiddenDivs[4].style.top = '336px'

        hiddenDivs[5].style.left = '336px' // research
        hiddenDivs[5].style.top = '336px'

        hiddenDivs[6].style.left = '672px' // buisness
        hiddenDivs[6].style.top = '336px'
        
        hiddenDivs[7].style.left = '1008px' // graphic
        hiddenDivs[7].style.top = '336px'

        all.onclick = ()=> {
            parentOurWork.style.height = "700px"
            all.classList.add('active')
            graphic.classList.remove('active')
            ux.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[7].classList.remove('scale')

            hiddenDivs[1].style.left = '336px'
            hiddenDivs[1].style.top = '0'
            
            hiddenDivs[3].style.left = '1008px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[2].style.left = '672px' // marketing
            hiddenDivs[2].style.top = '0'

            hiddenDivs[4].style.left = '0' // marketing
            hiddenDivs[4].style.top = '336px'

            hiddenDivs[5].style.left = '336px' // research
            hiddenDivs[5].style.top = '336px'

            hiddenDivs[6].style.left = '672px' // buisness
            hiddenDivs[6].style.top = '336px'
            
            hiddenDivs[7].style.left = '1008px' // graphic
            hiddenDivs[7].style.top = '336px'

        }

        graphic.onclick = ()=>{
            parentOurWork.style.height = "382px"
            all.classList.remove('active')
            branding.classList.remove('active')
            ux.classList.remove('active')
            graphic.classList.add('active')
            hiddenDivs[0].classList.add('scale')
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')

            hiddenDivs[1].style.left = '0'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '336px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '672px' // marketing
            hiddenDivs[4].style.top = '0'
            
            hiddenDivs[7].style.left = '1008px' // graphic
            hiddenDivs[7].style.top = '0';

           
        }

        ux.onclick =()=> {
            parentOurWork.style.height = "688px"
            ux.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale');
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')

            hiddenDivs[1].style.left = '336px'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '672px' // marketing
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '1008px' // graphic
            hiddenDivs[4].style.top = '0'
            
            hiddenDivs[7].style.left = '0'
            hiddenDivs[7].style.top = '336px'
        }
        
        branding.onclick = ()=> {
            parentOurWork.style.height = "688px"
            branding.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            ux.classList.remove('active')
            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[1].classList.add('scale')
            hiddenDivs[3].classList.add('scale')
            hiddenDivs[4].classList.add('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')
        
            hiddenDivs[2].style.left = '336px' //social
            hiddenDivs[2].style.top = '0'
        
            hiddenDivs[5].style.left = '672px' // marketing
            hiddenDivs[5].style.top = '0'
        
            hiddenDivs[6].style.left = '1008px' 
            hiddenDivs[6].style.top = '0'
        
            hiddenDivs[7].style.left = '0'
            hiddenDivs[7].style.top = '336px' // digital marketing
        }
    }

   

    function screen1400() {
        parentOurWork.style.height = "620px"
        hiddenDivs.forEach(wdithH => {
            wdithH.style.width = "243px"
            wdithH.style.height = "243px"
        })

        hiddenDivs[0].style.left = '0'
        hiddenDivs[0].style.top = '0'

        hiddenDivs[1].style.left = '291px'
        hiddenDivs[1].style.top = '0'
        
        hiddenDivs[3].style.left = '582px'
        hiddenDivs[3].style.top = '0'

        hiddenDivs[2].style.left = '873px' // marketing
        hiddenDivs[2].style.top = '0'

        hiddenDivs[4].style.left = '0' // marketing
        hiddenDivs[4].style.top = '291px'

        hiddenDivs[5].style.left = '291px' // research
        hiddenDivs[5].style.top = '291px'

        hiddenDivs[6].style.left = '582px' // buisness
        hiddenDivs[6].style.top = '291px'
        
        hiddenDivs[7].style.left = '873px' // graphic
        hiddenDivs[7].style.top = '291px';

        all.onclick = ()=> {
            parentOurWork.style.height = "620px"
            all.classList.add('active')
            graphic.classList.remove('active')
            ux.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[7].classList.remove('scale')

            hiddenDivs[1].style.left = '291px'
            hiddenDivs[1].style.top = '0'
            
            hiddenDivs[3].style.left = '582px'
            hiddenDivs[3].style.top = '0'
    
            hiddenDivs[2].style.left = '873px' // marketing
            hiddenDivs[2].style.top = '0'
    
            hiddenDivs[4].style.left = '0' // marketing
            hiddenDivs[4].style.top = '291px'
    
            hiddenDivs[5].style.left = '291px' // research
            hiddenDivs[5].style.top = '291px'
    
            hiddenDivs[6].style.left = '582px' // buisness
            hiddenDivs[6].style.top = '291px'
            
            hiddenDivs[7].style.left = '873px' // graphic
            hiddenDivs[7].style.top = '291px';
        }

        graphic.onclick = ()=>{
            
            parentOurWork.style.height = "307px"
            all.classList.remove('active')
            branding.classList.remove('active')
            ux.classList.remove('active')
            graphic.classList.add('active')
            hiddenDivs[0].classList.add('scale')
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')

            hiddenDivs[1].style.left = '0'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '291px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '582px' // marketing
            hiddenDivs[4].style.top = '0'
            
            hiddenDivs[7].style.left = '873px' // graphic
            hiddenDivs[7].style.top = '0'
        }
        ux.onclick =()=> {
            parentOurWork.style.height = "598px"
            ux.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale');
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')

            hiddenDivs[1].style.left = '291px'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '582px' 
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '873px' 
            hiddenDivs[4].style.top = '0'
            
            hiddenDivs[7].style.left = '0'
            hiddenDivs[7].style.top = '291px'
        }
        
        branding.onclick = ()=> {

            parentOurWork.style.height = "598px"
            branding.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            ux.classList.remove('active')
            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[1].classList.add('scale')
            hiddenDivs[3].classList.add('scale')
            hiddenDivs[4].classList.add('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')

            hiddenDivs[2].style.left = '291px'
            hiddenDivs[2].style.top = '0'

            hiddenDivs[5].style.left = '582px' 
            hiddenDivs[5].style.top = '0'

            hiddenDivs[6].style.left = '873px' 
            hiddenDivs[6].style.top = '0'
            
            hiddenDivs[7].style.left = '0'
            hiddenDivs[7].style.top = '291px'
        }

    }

    function screen1200() {
        parentOurWork.style.height = "1020px"
        hiddenDivs.forEach(wdithH => {
            wdithH.style.width = "288px"
            wdithH.style.height = "288px"
        })

        hiddenDivs[0].style.left = '0'
        hiddenDivs[0].style.top = '0'

        hiddenDivs[1].style.left = '327.984px'
        hiddenDivs[1].style.top = '0'
        
        hiddenDivs[3].style.left = '655.984px'
        hiddenDivs[3].style.top = '0'

        hiddenDivs[2].style.left = '0' // marketing
        hiddenDivs[2].style.top = '327.984px'

        hiddenDivs[4].style.left = '327.984px' // marketing
        hiddenDivs[4].style.top = '327.984px'

        hiddenDivs[5].style.left = '655.984px' // research
        hiddenDivs[5].style.top = '327.984px'

        hiddenDivs[6].style.left = '0' // buisness
        hiddenDivs[6].style.top = '655.984px'
        
        hiddenDivs[7].style.left = '327.984px' // graphic
        hiddenDivs[7].style.top = '655.984px';

        all.onclick = ()=> {
            parentOurWork.style.height = "1020px"
            all.classList.add('active')
            graphic.classList.remove('active')
            ux.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[7].classList.remove('scale')
            
            hiddenDivs[0].style.left = '0'
            hiddenDivs[0].style.top = '0'

            hiddenDivs[1].style.left = '327.984px'
            hiddenDivs[1].style.top = '0'
            
            hiddenDivs[3].style.left = '655.984px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[2].style.left = '0' // marketing
            hiddenDivs[2].style.top = '327.984px'

            hiddenDivs[4].style.left = '327.984px' // marketing
            hiddenDivs[4].style.top = '327.984px'

            hiddenDivs[5].style.left = '655.984px' // research
            hiddenDivs[5].style.top = '327.984px'

            hiddenDivs[6].style.left = '0' // buisness
            hiddenDivs[6].style.top = '655.984px'
            
            hiddenDivs[7].style.left = '327.984px' // graphic
            hiddenDivs[7].style.top = '655.984px';
        }
        
        graphic.onclick = ()=>{
            parentOurWork.style.height = "671.968px"
            all.classList.remove('active')
            branding.classList.remove('active')
            ux.classList.remove('active')
            graphic.classList.add('active')
            hiddenDivs[0].classList.add('scale')
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')

            hiddenDivs[1].style.left = '0'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '327.984px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '655.984px' // marketing
            hiddenDivs[4].style.top = '0'
            
            hiddenDivs[7].style.left = '0' // graphic
            hiddenDivs[7].style.top = '327.984px'
        }

        ux.onclick =()=> {
            parentOurWork.style.height = "671.968px"
            ux.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale');
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')

            hiddenDivs[1].style.left = '327.984px'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '655.984px' 
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '0' 
            hiddenDivs[4].style.top = '327.984px'
            
            hiddenDivs[7].style.left = '327.984px'
            hiddenDivs[7].style.top = '327.984px'
        }

        branding.onclick = ()=> {
            parentOurWork.style.height = "671.968px"
            branding.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            ux.classList.remove('active')
            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[1].classList.add('scale')
            hiddenDivs[3].classList.add('scale')
            hiddenDivs[4].classList.add('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')

            hiddenDivs[2].style.left = '327.984px'
            hiddenDivs[2].style.top = '0'

            hiddenDivs[5].style.left = '655.984px' 
            hiddenDivs[5].style.top = '0'

            hiddenDivs[6].style.left = '0' 
            hiddenDivs[6].style.top = '327.984px'
            
            hiddenDivs[7].style.left = '327.984px'
            hiddenDivs[7].style.top = '327.984px'
        }
    }

    function screen991() {
        parentOurWork.style.height = "787.984px"
        hiddenDivs.forEach(wdithH => {
            wdithH.style.width = "221.33px"
            wdithH.style.height = "221.33px"
        })

            hiddenDivs[0].style.left = '0'
            hiddenDivs[0].style.top = '0'

            hiddenDivs[1].style.left = '237.328px'
            hiddenDivs[1].style.top = '0'
            
            hiddenDivs[3].style.left = '474.656px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[2].style.left = '0' // marketing
            hiddenDivs[2].style.top = '237.328px'

            hiddenDivs[4].style.left = '237.328px' // marketing
            hiddenDivs[4].style.top = '237.328px'

            hiddenDivs[5].style.left = '474.656px' // research
            hiddenDivs[5].style.top = '237.328px'

            hiddenDivs[6].style.left = '0' // buisness
            hiddenDivs[6].style.top = '474.656px'
            
            hiddenDivs[7].style.left = '237.328px' // graphic
            hiddenDivs[7].style.top = '474.656px';

        all.onclick = ()=> {
            parentOurWork.style.height = "787.984px"
            all.classList.add('active')
            graphic.classList.remove('active')
            ux.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[7].classList.remove('scale')
            
            hiddenDivs[0].style.left = '0'
            hiddenDivs[0].style.top = '0'
    
            hiddenDivs[1].style.left = '237.328px'
            hiddenDivs[1].style.top = '0'
            
            hiddenDivs[3].style.left = '474.656px'
            hiddenDivs[3].style.top = '0'
    
            hiddenDivs[2].style.left = '0' // marketing
            hiddenDivs[2].style.top = '237.328px'
    
            hiddenDivs[4].style.left = '237.328px' // marketing
            hiddenDivs[4].style.top = '237.328px'
    
            hiddenDivs[5].style.left = '474.656px' // research
            hiddenDivs[5].style.top = '237.328px'
    
            hiddenDivs[6].style.left = '0' // buisness
            hiddenDivs[6].style.top = '474.656px'
            
            hiddenDivs[7].style.left = '237.328px' // graphic
            hiddenDivs[7].style.top = '474.656px';
        }

        graphic.onclick = ()=>{
            parentOurWork.style.height = "520.656px"
            all.classList.remove('active')
            branding.classList.remove('active')
            ux.classList.remove('active')
            graphic.classList.add('active')
            hiddenDivs[0].classList.add('scale')
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')

            hiddenDivs[1].style.left = '0'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '237.328px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '474.656px' // marketing
            hiddenDivs[4].style.top = '0'
            
            hiddenDivs[7].style.left = '0' // graphic
            hiddenDivs[7].style.top = '237.328px'
        }

        ux.onclick =()=> {
            parentOurWork.style.height = "520.656px"
            ux.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale');
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')

            hiddenDivs[1].style.left = '237.328px'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '474.656px' 
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '0' 
            hiddenDivs[4].style.top = '237.328px'
            
            hiddenDivs[7].style.left = '237.328px'
            hiddenDivs[7].style.top = '237.328px'
        }

        branding.onclick = ()=> {
            parentOurWork.style.height = "520.656px"
            branding.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            ux.classList.remove('active')
            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[1].classList.add('scale')
            hiddenDivs[3].classList.add('scale')
            hiddenDivs[4].classList.add('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')

            hiddenDivs[2].style.left = '237.328px'    
            hiddenDivs[2].style.top = '0'

            hiddenDivs[5].style.left = '474.656px' 
            hiddenDivs[5].style.top = '0'

            hiddenDivs[6].style.left = '0' 
            hiddenDivs[6].style.top = '237.328px'
            
            hiddenDivs[7].style.left = '237.328px'
            hiddenDivs[7].style.top = '237.328px'
        }
    }
  
    function screen767() {
        parentOurWork.style.height = "1114px"
        hiddenDivs.forEach(wdithH => {
            wdithH.style.width = "250px"
            wdithH.style.height = "250px"
        })

        hiddenDivs[0].style.left = '0'
        hiddenDivs[0].style.top = '0'

        hiddenDivs[1].style.left = '266px'
        hiddenDivs[1].style.top = '0'
        
        hiddenDivs[3].style.left = '0'
        hiddenDivs[3].style.top = '266px'

        hiddenDivs[2].style.left = '266px' // marketing
        hiddenDivs[2].style.top = '266px'

        hiddenDivs[4].style.left = '0' // marketing
        hiddenDivs[4].style.top = '532px'

        hiddenDivs[5].style.left = '266px' // research
        hiddenDivs[5].style.top = '532px'

        hiddenDivs[6].style.left = '0' // buisness
        hiddenDivs[6].style.top = '798px'
        
        hiddenDivs[7].style.left = '266px' // graphic
        hiddenDivs[7].style.top = '798px';

        all.onclick = ()=> {
            parentOurWork.style.height = "1114px"
            all.classList.add('active')
            graphic.classList.remove('active')
            ux.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[7].classList.remove('scale')
            
            hiddenDivs[0].style.left = '0'
            hiddenDivs[0].style.top = '0'
    
            hiddenDivs[1].style.left = '266px'
            hiddenDivs[1].style.top = '0'
            
            hiddenDivs[3].style.left = '0'
            hiddenDivs[3].style.top = '266px'
    
            hiddenDivs[2].style.left = '266px' // marketing
            hiddenDivs[2].style.top = '266px'
    
            hiddenDivs[4].style.left = '0' // marketing
            hiddenDivs[4].style.top = '532px'
    
            hiddenDivs[5].style.left = '266px' // research
            hiddenDivs[5].style.top = '532px'
    
            hiddenDivs[6].style.left = '0' // buisness
            hiddenDivs[6].style.top = '798px'
            
            hiddenDivs[7].style.left = '266px' // graphic
            hiddenDivs[7].style.top = '798px';
        }

        graphic.onclick = ()=>{
            parentOurWork.style.height = "588px"
            all.classList.remove('active')
            branding.classList.remove('active')
            ux.classList.remove('active')
            graphic.classList.add('active')
            hiddenDivs[0].classList.add('scale')
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')

            hiddenDivs[1].style.left = '0'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '266px'
            hiddenDivs[3].style.top = '0'

            hiddenDivs[4].style.left = '0' // marketing
            hiddenDivs[4].style.top = '266px'
            
            hiddenDivs[7].style.left = '266px' // graphic
            hiddenDivs[7].style.top = '266px'
        }

        ux.onclick =()=> {
            parentOurWork.style.height = "844px"
            ux.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale');
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')

            hiddenDivs[1].style.left = '266px'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '0' 
            hiddenDivs[3].style.top = '266px'

            hiddenDivs[4].style.left = '266px' 
            hiddenDivs[4].style.top = '266px'
            
            hiddenDivs[7].style.left = '0'
            hiddenDivs[7].style.top = '532px'
        }

        branding.onclick = ()=> {
            parentOurWork.style.height = "844px"
            branding.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            ux.classList.remove('active')
            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[1].classList.add('scale')
            hiddenDivs[3].classList.add('scale')
            hiddenDivs[4].classList.add('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')

            hiddenDivs[2].style.left = '266px'             
            hiddenDivs[2].style.top = '0'

            hiddenDivs[5].style.left = '0' 
            hiddenDivs[5].style.top = '266px'

            hiddenDivs[6].style.left = '266px' 
            hiddenDivs[6].style.top = '266px'
            
            hiddenDivs[7].style.left = '0'
            hiddenDivs[7].style.top = '532px'
        }

    }

    function screen565()  {
        parentOurWork.style.height = "3646px"
        hiddenDivs.forEach(wdithH => {
            wdithH.style.width = "401px"
            wdithH.style.height = "401px"
        })

        hiddenDivs[0].style.left = '50px'
        hiddenDivs[0].style.top = '0'

        hiddenDivs[1].style.left = '50px'
        hiddenDivs[1].style.top = '454px'
        
        hiddenDivs[3].style.left = '50px'
        hiddenDivs[3].style.top = '1362px'

        hiddenDivs[2].style.left = '50px' // marketing
        hiddenDivs[2].style.top = '908px'

        hiddenDivs[4].style.left = '50px' // marketing
        hiddenDivs[4].style.top = '1816px'

        hiddenDivs[5].style.left = '50px' // research
        hiddenDivs[5].style.top = '2270px'

        hiddenDivs[6].style.left = '50px' // buisness
        hiddenDivs[6].style.top = '2724px'
        
        hiddenDivs[7].style.left = '50px' // graphic
        hiddenDivs[7].style.top = '3178px';

        all.onclick = ()=> {
            parentOurWork.style.height = "3646px"
            all.classList.add('active')
            graphic.classList.remove('active')
            ux.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[7].classList.remove('scale')
            
            hiddenDivs[0].style.left = '50px'
            hiddenDivs[0].style.top = '0'
    
            hiddenDivs[1].style.left = '50px'
            hiddenDivs[1].style.top = '454px'
            
            hiddenDivs[3].style.left = '50px'
            hiddenDivs[3].style.top = '1362px'
    
            hiddenDivs[2].style.left = '50px' // marketing
            hiddenDivs[2].style.top = '908px'
    
            hiddenDivs[4].style.left = '50px' // marketing
            hiddenDivs[4].style.top = '1816px'
    
            hiddenDivs[5].style.left = '50px' // research
            hiddenDivs[5].style.top = '2270px'
    
            hiddenDivs[6].style.left = '50px' // buisness
            hiddenDivs[6].style.top = '2724px'
            
            hiddenDivs[7].style.left = '50px' // graphic
            hiddenDivs[7].style.top = '3178px';
        }

        
        graphic.onclick = ()=>{
            parentOurWork.style.height = "1786px"
            all.classList.remove('active')
            branding.classList.remove('active')
            ux.classList.remove('active')
            graphic.classList.add('active')
            hiddenDivs[0].classList.add('scale')
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')

            hiddenDivs[1].style.left = '50px'
            hiddenDivs[1].style.top = '0'

            hiddenDivs[3].style.left = '50px'
            hiddenDivs[3].style.top = '454px'

            hiddenDivs[4].style.left = '50px' // marketing
            hiddenDivs[4].style.top = '908px'
            
            hiddenDivs[7].style.left = '50px' // graphic
            hiddenDivs[7].style.top = '1362px'
        }

        ux.onclick =()=> {
            parentOurWork.style.height = "2266px"
            ux.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            branding.classList.remove('active')

            hiddenDivs[0].classList.remove('scale');
            hiddenDivs[2].classList.add('scale')
            hiddenDivs[5].classList.add('scale')
            hiddenDivs[6].classList.add('scale')
            hiddenDivs[1].classList.remove('scale')
            hiddenDivs[3].classList.remove('scale')
            hiddenDivs[4].classList.remove('scale')

            hiddenDivs[1].style.left = '50px'
            hiddenDivs[1].style.top = '454px'

            hiddenDivs[3].style.left = '50px' 
            hiddenDivs[3].style.top = '908px'

            hiddenDivs[4].style.left = '50px' 
            hiddenDivs[4].style.top = '1362px'
            
            hiddenDivs[7].style.left = '50px'
            hiddenDivs[7].style.top = '1816px'
        }

        branding.onclick = ()=> {
            parentOurWork.style.height = "2266px"
            branding.classList.add('active')
            graphic.classList.remove('active')
            all.classList.remove('active')
            ux.classList.remove('active')
            hiddenDivs[0].classList.remove('scale')
            hiddenDivs[1].classList.add('scale')
            hiddenDivs[3].classList.add('scale')
            hiddenDivs[4].classList.add('scale')
            hiddenDivs[2].classList.remove('scale')
            hiddenDivs[5].classList.remove('scale')
            hiddenDivs[6].classList.remove('scale')

           
            hiddenDivs[2].style.left = '50px'
            hiddenDivs[2].style.top = '454px'

            hiddenDivs[5].style.left = '50px' 
            hiddenDivs[5].style.top = '908px'

            hiddenDivs[6].style.left = '50px' 
            hiddenDivs[6].style.top = '1362px'
            
            hiddenDivs[7].style.left = '50px'
            hiddenDivs[7].style.top = '1816px'
        }

    }

  
  



