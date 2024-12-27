// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
       let slideIndex = 0;
       let intervalId =null;

    //    initializeSlider();
    //  load the dom elements first and load first image
       document.addEventListener("DOMContentLoaded" , initializeSlider);

       function initializeSlider(){
        // if we do have slides display slide
        if(slides.length > 0){
            slides[slideIndex].classList.add("displaySlide");
            // time one image is hold on
            intervalId = setInterval(nextSlide, 5000);
        }
            
            
       }
       function showSlide(index){
        // Image should loop through 0 to 2 and again 2 to 0
        // Image should loop through 0 to slides.length - 1
        if(index >= slides.length){
            slideIndex = 0;

        }else if (index < 0){
            slideIndex = slides.length -1
        }
          slides.forEach(slide => {
            slide.classList.remove("displaySlide");
          })
          slides[slideIndex].classList.add("displaySlide");
       }
       function prevSlide(){
        // clearing interval beacuse image is holding only upto 5 sec
        clearInterval(intervalId);
          slideIndex--;
          showSlide(slideIndex);
       }
       function nextSlide(){
           slideIndex++;
           showSlide(slideIndex);
       }