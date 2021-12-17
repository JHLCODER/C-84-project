canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image; 
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed alphabet key";
		console.log("Alphabet key");
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=48 && keyPressed<=57)|| (keyPressed >=65 && keyPressed<=90)){
		numberkey();
		document.getElementById("d1").innerHTML="You pressed number key";
		console.log("Number key");
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=37 && keyPressed<=40)|| (keyPressed >=65 && keyPressed<=90)){
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed arrow key";
		console.log("Arrow key");
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="arrkey.png";
	add();
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}