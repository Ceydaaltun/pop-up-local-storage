
// const rememberDiv = document.querySelector(".remember");
// const forgetDiv = document.querySelector(".forget");
// const form = document.querySelector("form");
// const nameInput = document.querySelector("#entername");
// const submitBtn = document.querySelector("#submitname");
// const forgetBtn = document.querySelector("#forgetname");
// const main = document.querySelector(".main");
// const header = document.querySelector(".hd");

// const h1 = document.querySelector("h1"); 
// const personalGreeting = document.querySelector(".personal-greeting");


// // const myTimeout = setTimeout(popUp, 5000);


// document.addEventListener("DOMContentLoaded", function () {
//     const storedName = localStorage.getItem("name");
//     const choice = localStorage.getItem("choice");

//     if (!storedName) {
//         // Load default content since no name is stored
//         loadDefaultContent();

//     } else {
//         // Name is stored, display personalized content
//         nameDisplayCheck();
//     }
//     if (choice === "no") {
//         clearTimeout(myTimeout);
//         nameDisplayCheck();
//     }

// });

// function loadDefaultContent() {
//     h1.textContent = "Our website";
//     personalGreeting.textContent = "Welcome to our website."

// }


// form.addEventListener("submit", (e) => e.preventDefault());

// submitBtn.addEventListener("click", () => {
//     localStorage.setItem("name", nameInput.value);
//     nameDisplayCheck();
// });

// forgetBtn.addEventListener("click", () => {
//     localStorage.removeItem("name");
//     nameDisplayCheck();

// });

// function popUp() {
//     const overlay = document.createElement("div");
//     const popUpDiv = document.createElement("div");
//     const para = document.createElement("p");
//     const yesBtn = document.createElement("button");
//     const noBtn = document.createElement("button");

//     yesBtn.setAttribute("type", "button");
//     noBtn.setAttribute("type", "button");
//     popUpDiv.setAttribute("class", "pop-up-div");
//     overlay.setAttribute("class", "overlay");

//     para.textContent = "Would you like to customise the website? "
//     yesBtn.textContent = "Yes, I would love to!";
//     noBtn.textContent = "No, thanks.";


//     popUpDiv.appendChild(para);
//     popUpDiv.appendChild(yesBtn);
//     popUpDiv.appendChild(noBtn);
//     main.appendChild(overlay);
//     main.appendChild(popUpDiv);



//     yesBtn.addEventListener("click", () => {

//         localStorage.setItem("choice", "yes");

//         overlay.style.display = "none";
//         popUpDiv.style.display = "none";
//         rememberDiv.style.display = "block";
//     });

//     noBtn.addEventListener("click", () => {

//         localStorage.setItem("choice", "no");

//         overlay.style.display = "none";
//         popUpDiv.style.display = "none";
//         nameDisplayCheck();

//     });


// }



// function nameDisplayCheck() {

//     if (localStorage.getItem("name")) {
//         clearTimeout(myTimeout);

//         const name = localStorage.getItem("name");
//         h1.textContent = `Welcome ${name}`;
//         personalGreeting.textContent = `Welcome to our website ${name}! We hope you have fun while you are here.`

//         forgetDiv.style.display = "block";
//         rememberDiv.style.display = "none";
//     } else {
//         h1.textContent = "Welcome to our website ";
//         personalGreeting.textContent = "Welcome to our website. We hope you have fun while you are  here.";

//         forgetDiv.style.display = "none";
//         rememberDiv.style.display = "none";

//         const changeChoiceDiv = document.createElement("div");
//         const para = document.createElement("p");
//         const yesBtn = document.createElement("button");

//         changeChoiceDiv.setAttribute("class", "change-choice-div");
//         para.textContent = "You can still customise the website!";
//         yesBtn.textContent = "Let's go!";

//         changeChoiceDiv.appendChild(para);
//         changeChoiceDiv.appendChild(yesBtn);
//         header.appendChild(changeChoiceDiv);

//         yesBtn.addEventListener("click", () => {
//             changeChoiceDiv.style.display = "none";
//             rememberDiv.style.display = "block";
//         });
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const storedName = localStorage.getItem('name');
    const choice = localStorage.getItem('choice');

    if (!storedName) {
        // Load default content since no name is stored
        loadDefaultContent();

    } else {
        // Name is stored, display personalized content
        nameDisplayCheck();
    }
    if (choice === 'no') {
        clearTimeout(myTimeout);
        nameDisplayCheck();
    }

});

function loadDefaultContent() {
    h1.textContent = "Our website";
    personalGreeting.textContent = "Welcome to our website."

}



const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');
const forgetDiv = document.querySelector('.forget');
const rememberDiv = document.querySelector('.remember');

const main = document.querySelector('.main');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

const myTimeout = setTimeout(popUp, 5000);

form.addEventListener('submit', (e) => e.preventDefault());

submitBtn.addEventListener('click', () => {
    localStorage.setItem('name', nameInput.value);
    nameDisplayCheck();
});

forgetBtn.addEventListener('click', () => {
    console.log('clicked');
    localStorage.removeItem('name');
    nameDisplayCheck();
})





function popUp() {

    const overlay = document.createElement('div');
    const popUpDiv = document.createElement('div');
    const para = document.createElement('p');
    const yesBtn = document.createElement('button');
    const noBtn = document.createElement('button');


    yesBtn.setAttribute('type', 'button');
    noBtn.setAttribute('type', 'button');
    popUpDiv.setAttribute('class', 'pop-up-div');
    overlay.setAttribute('class', 'overlay');


    para.textContent = 'Would you like to customise the website?'
    yesBtn.textContent = 'Yes, I would love to!';
    noBtn.textContent = 'No, thanks.';


    popUpDiv.appendChild(para);
    popUpDiv.appendChild(yesBtn);
    popUpDiv.appendChild(noBtn);
    main.appendChild(overlay);
    main.appendChild(popUpDiv);

    yesBtn.addEventListener('click', () => {

        localStorage.setItem('choice', 'yes');

        overlay.style.display = 'none';
        popUpDiv.style.display = 'none';
        rememberDiv.style.visibility = 'visible'
    });

    noBtn.addEventListener('click', () => {

        localStorage.setItem('choice', 'no');

        overlay.style.display = 'none';
        popUpDiv.style.display = 'none';
        nameDisplayCheck();

    });


}

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {

        const name = localStorage.getItem('name');
        h1.textContent = `Welcome ${name}!`;
        personalGreeting.textContent = `Welcome to our website ${name}! We hope you have fun while you are here.`

        forgetDiv.style.display = 'block';
        rememberDiv.style.visibility = 'hidden';
    } else {
        h1.textContent = 'Welcome to our website';
        personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are  here.';

        forgetDiv.style.display = 'none';
        rememberDiv.style.visibility = 'hidden';

    }

    const changeChoiceDiv = document.createElement('div');
    const para = document.createElement('p');
    const yesBtn = document.createElement('button');

    changeChoiceDiv.setAttribute('class', 'change-choice-div');
    para.textContent = 'You can still customise the website!';
    yesBtn.textContent = `Let's go!`;

    changeChoiceDiv.appendChild(para);
    changeChoiceDiv.appendChild(yesBtn);
    header.appendChild(changeChoiceDiv);

    yesBtn.addEventListener('click', () => {
        changeChoiceDiv.style.display = 'none';
        rememberDiv.style.visibility = 'visible';
    });

}