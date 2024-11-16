let z=document.getElementById("hello");
z.style.backgroundColor="yellow"
let pChildElem=document.createElement("div");
let teddyImage=document.createElement("img")
teddyImage.src="http://www.unigreet.com/wp-content/uploads/2019/10/Yellow-teddy-bear-980x1024.jpg"
pChildElem.textContent="this is div tag in  p tag"
teddyImage.width="300"
z.append(pChildElem,teddyImage)
//creating and modifying
// z.remove(pChildElem,teddyImage)
//modifying element content
let flowerImage=document.createElement("iframe")
flowerImage.frameBorder=1;
flowerImage.src="https://tse1.mm.bing.net/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&pid=Api&P=0&h=180"
z.replaceChild(flowerImage,teddyImage)

//clone
const clonedElem=z.cloneNode(true);
document.body.append(clonedElem)
//modify attributes
let naturepic=document.createElement("img")
naturepic.setAttribute("src","https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg")
naturepic.setAttribute("width","400")
naturepic.setAttribute("backgroundColor","pink")
naturepic.style.padding="10px"
console.log(naturepic.getAttribute("backgroundColor"));
document.body.append(naturepic);
// console.log(naturepic.removeAttribute("backgroundColor"))
//working with classes
let divTag=document.createElement("div")
divTag.className="container"
divTag.classList.add("samyu")
divTag.classList.add("antagiri")
divTag.classList.remove("samyu")
divTag.classList.replace("antagiri","rakesh")
console.log(divTag)

//event handling
naturepic.addEventListener("click",function(){
    alert("naturepic is clicked")
    naturepic.style.borderRadius="50%"
})

//navigating the DOMTree
let p=document.querySelector("p")
console.log(p.parentElement)
let div=document.querySelector("div")
console.log(div.children);
console.log(div.firstElementChild);

console.log(div.lastElementChild);
let thirdp=document.querySelector(".three")
console.log(thirdp.nextSibling)
console.log(thirdp.nextElementSibling)
let t=document.querySelector(".three")
t.insertAdjacentElement("beforebegin",teddyImage)