const textBertambah = document.querySelector('.second-title')
const imageClick = document.getElementById('img-click')
const navigation = document.getElementById('navigation')
const home = document.querySelector('.container-all')
const objeckNav = document.getElementById('navigation-a')
const header = document.getElementById("onOf")
const hamburger = document.getElementById('menu-hamburger')
const hamburgerX = document.querySelector('.hamburger-x')
const mobbileOverlay = document.querySelector('.mobile_overlay')

const textLoad = () => {
    setTimeout(() => {
        textBertambah.textContent = "Front'end Development"
    }, 0);
    setTimeout(() => {
        textBertambah.textContent = 'Achmad Aris hermawan'
    }, 8000);
}
textLoad();
setInterval(textLoad, 16000);

const handleClickImage = (show)=> show ?
imageClick.style.display = 'flex' : 
  imageClick.style.display = 'none';

const handleClickMobile = (show)=> show ?
  mobbileOverlay.style.display = 'block' :
   mobbileOverlay.style.display ="none";
 
function hamburgerMenu(){
    if(navigation.style.display === 'flex'){
        navigation.style.display = 'none'
    }else{
        navigation.style.display = 'flex'
      }
      setTimeout(() => {
        document.location.reload();
      }, 5000);
};

window.onscroll = function () {
  if (window.scrollY > 22) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};
