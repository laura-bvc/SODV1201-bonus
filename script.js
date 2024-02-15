/* 
Create a web page to show image gallery (10 points)
	1. Create a folder with a Html file (name it as index.html), a Css file and a Js file. (1 points)
	2. In html file, there is img tag and two buttons. (1 points)
	3. In Js file, save image links in object or array, and show one image in img tag. When you click left button
	the image switch to the previous one and when you click the right button, the image switch to the next one. (5 points)
	(If the current image is the last one, it should switch to the first one when click next button. If the current 
	image is the first one, when click the previous button, it should switch to the last one) (2 points)
	4. Style your page by add Css into your Css file. (1 points)
*/

var indexImg = 0; // current index for image array

var arrayImgName = ["pic01.jpg", "pic02.jpg", "pic03.jpg"];

var maxImg = arrayImgName.length; // total number of images
var tagImg = document.getElementById("curr_img");
displayImg(indexImg);

var btnPrev = document.getElementById("prev");
var btnNext = document.getElementById("next");

btnPrev.addEventListener("click", function(){nextImg(-1);} );
btnNext.addEventListener("click", function(){nextImg(1);} );

function displayImg(n) { // show image at index name
	indexImg = n;
	tagImg.src = arrayImgName[n];
}

function nextImg(n) { // move to next (n=1) or prev image (n=-1);

	indexImg += n;
	if (indexImg < 0) {
		indexImg += maxImg;
	}
	else if (indexImg >= maxImg) {
		indexImg -= maxImg;
	}
	displayImg(indexImg);
}
