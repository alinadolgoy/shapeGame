
// create random color of shape
const randomColor = () => {
	let rgbObj = {
		r : Math.round(Math.random()* 255),
 		g : Math.round(Math.random()* 255),
 		b : Math.round(Math.random()* 255)
	}
 return (rgbObj);
}


// figure out positions (margin? take into consideration it cannot be too close to any border, 
// calculation needs to make sure to put the position at padding minus the size) 



// create variable of random positions
const randomPosition = (size) => {
	// vertical 0-maxMarginVertical
	let maxMarginvertical = 700 - size;
	//random number between 0 and maxmarginvertical
	let positionVertical = Math.random() * maxMarginvertical;
	// horizontal 0-maxMarginHorizontal
	let maxMarginHorizontal = 1000 - size;
	let positionHorizontal = Math.random() * maxMarginHorizontal;
	return ({
		horizontal: positionHorizontal,
		vertical: positionVertical
	})
}




let shapeOnPage = document.getElementById("catch-box");
let initiationTime = new Date().getTime();
let bestTime= initiationTime;
let averageTime = 0;
let timesArray = [];

const averageTimeFunc = (timesArray) => {
	averageTime = timesArray.reduce((sum, value) => sum + value)/timesArray.length;
	
}

//create new shape
const createNewShape = () => {
	let shapeColor = randomColor();
	let shapeSize = Math.random()*400;
	let shapePosition = randomPosition(shapeSize);
	let shapeShape = [];

	shapeOnPage.style.backgroundColor=`rgb(${shapeColor.r}, ${shapeColor.g}, ${shapeColor.b})`;
	shapeOnPage.style.height=`${shapeSize}px`;
	shapeOnPage.style.width=`${shapeSize}px`;
	if (Math.random() > 0.5) {
		shapeOnPage.style.borderRadius = '50%';
	}
	console.log(shapePosition.horizontal);
	shapeOnPage.style.marginTop = `${shapePosition.vertical}px`;
	shapeOnPage.style.marginLeft = `${shapePosition.horizontal}px`;
	initiationTime = new Date().getTime();
	console.log(initiationTime);


}

createNewShape();
//





// click shape and make it disappear
const hideBox = () => {
	shapeOnPage.removeAttribute('style');
	let time = (new Date().getTime()-initiationTime)/1000;
	if (time < bestTime) {
		bestTime=time;
	}
	timesArray.push(time);
	averageTimeFunc(timesArray);
	document.getElementById("timer").innerHTML = time;
	document.getElementById("best"). innerHTML = bestTime;
	document.getElementById("average").innerHTML = averageTime;

	setTimeout(createNewShape, 500);
	//create new shape

}







