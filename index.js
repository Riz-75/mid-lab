const cups = document.getElementById('cups');
const bCup = document.getElementById('big-cup');
const rem = bCup.children[0].innerHTML;

cups.addEventListener("click", (event)=>{
  for(let i = 0; i<cups.children.length; i++){
    cups.children[i].classList.remove('full');
  }
  for(let i = 0; i<cups.children.length; i++){
    cups.children[i].classList.add('full');
    if(cups.children[i]==event.target){
      bCup.children[0].style.flex = 7-i;
      bCup.children[1].style.flex = i+1;
      if(i == 7){
        bCup.children[0].innerHTML = '';
        bCup.children[1].innerHTML = '100%';
      }
      else{
        bCup.children[0].innerHTML = rem;
        bCup.children[0].children[0].innerHTML = (2-(i+1)*0.25) + 'L';
        bCup.children[1].innerHTML = (12.5*(i+1)) + '%';
      }
      return;
    }
  }
})