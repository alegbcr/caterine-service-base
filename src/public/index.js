const images = [
	"./public/images/home/atun.jpg",
	"./public/images/home/queque.jpg",
	"./public/images/home/sushi.jpg",
	"./public/images/home/products.jpg",
];

const picture = document.getElementById("carousel_container");
const img = document.createElement("img");
let index = 0;
img.src = images[index];
picture.appendChild(img);

const renderImage = () => {
	img.src = images[index];
	img.className = "image--item";
	picture.appendChild(img);
	index = (index + 1) % images.length;
};
setInterval(renderImage, 3000);

console.log(index);
