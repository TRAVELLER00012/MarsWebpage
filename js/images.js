const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
]
let imgCount = 0;
const image = document.getElementById("main-img");
let imageGrid = document.getElementsByClassName("image-grid")[0];
let imageMoveRight = document.getElementById("image-move-right");
let imageMoveLeft = document.getElementById("image-move-left");

function moveImage(){
    image.src=images[imgCount];
}
function loadSubImages(){
    images.forEach(imgSrc =>{
        var img = new Image();
        img.src=imgSrc;
        imageGrid.appendChild(img)
    })
}
function setImageClass(selectedIndex){
    let imageGridImages = imageGrid.getElementsByTagName("img");
    let i = 0;
    for (let img of imageGridImages){
        if (i == selectedIndex) img.className = "selected";
        else img.className = "";
        i++;
    }
}
moveImage();
loadSubImages();
setImageClass(0);

imageMoveRight.onclick = () =>{
    imgCount++
    if (imgCount > images.length-1) imgCount = 0;
    console.log(imgCount);
    moveImage();
    setImageClass(imgCount)
};
imageMoveLeft.onclick = () =>{
    imgCount--;
    if (imgCount < 0) imgCount = images.length-1;
    console.log(imgCount);
    moveImage();
    setImageClass(imgCount)
}