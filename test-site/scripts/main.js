let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.jpg') {
      myImage.setAttribute('src','images/logo2.jpg');
    } else {
      myImage.setAttribute('src','images/logo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/*
document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});
*/

/*
^ is equal to:

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

OR

document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!');
});

where  => replaces function()
*/
