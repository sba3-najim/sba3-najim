var originalText = "Hover over an image below to display here!";
function upDate(previewPec){
    document.getElementById("image").style.backgroundImage = "url('"+ previewPec.src + "')";
    document.getElementById("image").innerHTML = previewPec.alt;
}

function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = originalText;
    console.log("Mouse left the image.");
}

function showImage(image) {
    display = document.getElementById('image');
    display.style.backgroundImage = "url('" + image.src + "')";
    display.innerHTML = image.alt;
}
function resetImage() {
    display = document.getElementById('image');
    display.style.backgroundImage = '';

    display.innerHTML = 'Hover over an image below to display here!';
}

function afterLoad(action)
	{
  		document.getElementById("image").innerHTML = action;
	}

function addTabFocus() {
    images = document.querySelectorAll('.pics');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}
function showImage(image) {
    displayImg = document.getElementById('image');
    displayImg.style.backgroundImage = "url('" + image.src + "')";
    displayImg.innerHTML = image.alt;
    console.log('Show');
}
function resetImage() {
    displayImg = document.getElementById('image');
    displayImg.style.backgroundImage = '';
    displayImg.innerHTML = 'Hover over an image below to display here!';
    console.log('Reset');
addTabFocus();
}