const modalOverlay = document.querySelector(".modal-overlay")


var w = screen.width;
var h = screen.height;

window.addEventListener ('mouseout', function(e){
  if (e.x < 0 || e.x > w-300 ||  e.y < 0 || e.y > h){
    modalOverlay.classList.add('active')
  }
}) 
 
document.querySelector('.close-modal')
  .addEventListener('click', function(){
    modalOverlay.classList.remove('active')
  }
)
