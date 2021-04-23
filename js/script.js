
window.addEventListener("load",start)

function start (){

  const actions = document.querySelector(".actions")

  actions.addEventListener("click", (e) =>{
    if (!e) e=window.event

    const targetCN = e.target.className   
    const slider = document.querySelector(".slider")
    const dots = document.querySelector(".dots")      
    const icons = document.querySelector(".icons")

    if (targetCN == "btn prev"){

      actions.children[0].classList.remove("disabled")
      actions.children[2].classList.remove("disabled")
   
      const nums = ["one","two","three","four"] 

      for (let i = 0; i < nums.length; i++){

        const targetCNA = e.target.nextElementSibling.children[i].className

        if (`dots__dot ${nums[i]} active` == targetCNA){
                     
          slider.children[i].classList.remove("active")
          dots.children[i].classList.remove("active")
          icons.children[i].classList.remove("active")
   
          i = i-1 
   
          slider.children[i].classList.add("active")     
          dots.children[i].classList.add("active")
          icons.children[i].classList.add("active") 
         
          if (i<=0){
            actions.children[0].classList.add("disabled")
          }  
          continue; 
        }
        slider.children[i].classList.remove("active")
        dots.children[i].classList.remove("active")             
      }
    }  
 
    if (targetCN == "btn next"){

      actions.children[0].classList.remove("disabled")
      actions.children[2].classList.remove("disabled")

      const nums = ["one","two","three","four"]  

      for (let i = 0; i < nums.length; i++){

        const targetCNA = e.target.previousElementSibling.children[i].className 

        if (`dots__dot ${nums[i]} active` == targetCNA){
                        
          slider.children[i].classList.remove("active")
          dots.children[i].classList.remove("active")
          icons.children[i].classList.remove("active")
     
          i = i+1 

          slider.children[i].classList.add("active") 
          dots.children[i].classList.add("active")
          icons.children[i].classList.add("active") 

          if (i>=3){
            actions.children[2].classList.add("disabled")
          }  
          continue; 
        }
        slider.children[i].classList.remove("active")
        dots.children[i].classList.remove("active")
      }
    } 
  })
}




/* ===========================
    APP Int 14
============================ */
/* 
$('.actions .dots li').click(function () {
  $('.slider li:nth(' + $(this).index() + ') , .float p i:nth(' + $(this).index() + ')').addClass('active').siblings().removeClass('active');
  $(this).addClass('active').siblings().removeClass('active');
});

$('.actions .prev').click(function () {
  $(this).siblings('button').removeClass('disabled');
  var indx = $('.actions .dots li.active').index(); 
  if (indx == 0) {
      $('.actions .dots li:last-child, .slider li:last-child , .float p i:last-child').addClass('active').siblings().removeClass('active');
  }
  else{
      $('.actions .dots li:nth('+(indx - 1)+'), .slider li:nth('+(indx - 1)+') , .float p i:nth('+(indx - 1)+')').addClass('active').siblings().removeClass('active');        
  };
  if (indx == 1) {
      $(this).addClass('disabled');        
  }
  var deg = (360/$('.actions .dots li').length) * (indx-1);
  $('.float').css('transform','rotate('+deg+'deg)');
  $('.float .spans').css('transform','rotate('+-deg/3+'deg)');
  $('.p-icon').css('transform','rotate('+-deg+'deg)');
});

$('.actions .next').click(function () {
  $(this).siblings('button').removeClass('disabled');
  var indx = $('.actions .dots li.active').index(); 
  if (indx == $('.actions .dots li').length - 1) {
      $('.actions .dots li:first-child, .slider li:first-child , .float p i:first-child').addClass('active').siblings().removeClass('active');
  }
  else{
      $('.actions .dots li:nth('+(indx + 1)+'), .slider li:nth('+(indx + 1)+') , .float p i:nth('+(indx + 1)+')').addClass('active').siblings().removeClass('active');        
  };
  if (indx == $('.actions .dots li').length - 2) {
      $(this).addClass('disabled');        
  }
  var deg = (360/$('.actions .dots li').length) * (indx+1);
  $('.float').css('transform','rotate('+deg+'deg)');
  $('.float .spans').css('transform','rotate('+-deg/3+'deg)');
  $('.p-icon').css('transform','rotate('+-deg+'deg)');
}); */




