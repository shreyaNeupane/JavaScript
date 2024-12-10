const accordains = document.querySelectorAll(`.accordain`);

accordains.forEach(accordain => {
  // Tries to find a child element within each accordain that has the class icon. If it exists, it stores it in the icon variable.
  const icon = accordain.querySelector('.icon');
  const answer = accordain.querySelector('.answer');

  accordain.addEventListener('click'  ,()=> {
    // icon.classList.toggle('active');
    // answer.classList.toggle('active');

    if(icon.classList.contains('active')){
       icon.classList.remove('active');
       answer.computedStyleMap.maxHeight = null;
    }else{
         icon.classList.add('active');
         answer.computedStyleMap.maxHeight = answer.scrollHeight + 'px';
    }
  })
})