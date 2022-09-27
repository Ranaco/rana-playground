const baseBody = document.getElementById("base")
const videoBody = document.querySelector("#base-video")

const logoList = ["flutter", "dart", "cpp", "python", "solidity", "vim", "android-studio", "polygon", "next", "js", "ts"]

var pageLogoList = []

window.addEventListener('DOMContentLoaded', () => {
  for(var i = 0; i < logoList.length; i++){
    pageLogoList[i] = document.querySelector(`#${logoList[i]}`)
    var xOffSet = (Math.random() * window.innerWidth) 
    var yOffSet = (Math.random() * window.innerHeight)
    pageLogoList[i].style.top = `${yOffSet}px` 
    pageLogoList[i].style.left = `${xOffSet}px` 
  }
  
})

const handleScroll = () => {
 const offSetY = window.scrollY;
 handlePageScroll({offSetY: offSetY})  
 handleLogoScroll({ offSetY: offSetY})
}

const handlePageScroll = ({ offSetY }) => {
  baseBody.style.transform = `translateY(${offSetY * 0.3}px)`
  videoBody.style.transform = `translateY(${offSetY * 0.8}px)`
}

const handleLogoScroll = ({offSetY}) => {
  //Control the scroll and position of all the logos using loop and random numbers generated programatically  
  const logoElement = document.querySelector("#img-container")
  logoElement.style.transform = `translateY(${offSetY * 0.3}px)`
}

window.addEventListener('scroll', handleScroll)
