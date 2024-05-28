//Adjusting username when profile picture is clicked and logi dropdown is displayed 
function returnName() {
    let inputtedName = document.getElementById("input-name").value;
    //if "submit" button is clicked without an imputted name, the follwoing text is displayed on the main page
    if (inputtedName === "") {
        document.getElementById("default-name").innerText = ", welcome to ViewVault";
    } else {
        document.getElementById("default-name").innerText = ", " + inputtedName;
        document.getElementById("profile-name").innerText = inputtedName;
    }
    localStorage.setItem("name", inputtedName);
    document.getElementById("login").style.display = "none";
}
//If name is saved, then displays saved name
document.getElementById("default-name").innerHTML = ", " + localStorage.getItem("name");
document.getElementById("profile-name").innerHTML = localStorage.getItem("name");

// Function to get the current date and time
function getCurrentDateAndTime() {
    const weekdayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    let weekday = weekdayArray[date.getDay()];
    let day = date.getDate();
    let month = monthArray[date.getMonth()];
    let year = date.getFullYear();
    let currentDate = weekday + ", " + day + " " + month + ", " + year;
    return currentDate.toLocaleString();
  }
// Target an HTML element to display the current date and time
const dateDisplay = document.getElementById("date-container");
// Set the innerHTML of the element to the current date and time returned by the function
dateDisplay.innerHTML = getCurrentDateAndTime();

//Making the bar graph 
var xValues = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var yValues = [55, 49, 44, 24, 15];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', ' '],
        datasets: [{
            label: "Monitor your watching habits",
            data: [30, 85, 65, 20, 50, 30, 55, 30, 0],
            backgroundColor: '#FFA745',
            borderWidth: 1,
            barThickness: 40,
            borderRadius: 50
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
              display: false
            }
        }
    }
});

//Array of anime with their details
let animeList = [
    { title: "Frieren: Life Beyond Journey's End", year: "2023", seasonAndEps: "S 1 • EPS 28", category1: "Fantasy", category2: "Adventure", description: "An elf and her friends defeat a demon king in a great war; but the war is over, and the elf must search for a new way of life.", categoryTag1: "https://lh3.googleusercontent.com/pw/AP1GczN1F1KT4R4oBGvwUm5ozwujcCmEaMmMoIFINcj3tFmwmaN4Ncy-ZsRunynIB8wpXEa1JBG987sEMOXdInCi5ErYdyliUoUYD4pOC0ymcIYYoe0lcm_IPAnhpclojBefV7MzBKvFy73nLVEphW_XEmIn=w455-h190-s-no-gm?authuser=0", categoryTag2: "https://lh3.googleusercontent.com/pw/AP1GczMbTwOHySKl91ZqD-r7ygieAbrJpmufKcU9irggAdVPx0Kg8HxIfiuMkqaIX6UWUMnM0kvwEtHa5yZofIa6J7cKyW284utl6xSf15BMbGRZNjmUJsd-hJZ-nNwVGXZhK1fLQjEQOCbXRIzdGpKYOoLu=w515-h190-s-no-gm?authuser=0", image: "https://live.staticflickr.com/65535/53752065375_b76fdf6f9f_m.jpg", alt: "Frieren"},
    { title: "Demon Slayer: Kimetsu no Yaiba", year: "2024", seasonAndEps: "S 4 • EPS 8", category1: "Adventure", category2: "Horror", description: "A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.", categoryTag1: "https://lh3.googleusercontent.com/pw/AP1GczMbTwOHySKl91ZqD-r7ygieAbrJpmufKcU9irggAdVPx0Kg8HxIfiuMkqaIX6UWUMnM0kvwEtHa5yZofIa6J7cKyW284utl6xSf15BMbGRZNjmUJsd-hJZ-nNwVGXZhK1fLQjEQOCbXRIzdGpKYOoLu=w515-h190-s-no-gm?authuser=0", categoryTag2: "https://lh3.googleusercontent.com/pw/AP1GczMzaupaOVLfqoiKqNfoAxHtsY-B1QDSet6moKmyk2s699rC9eSSrslrSF_KO2u4OMmyzqRwVt7MHikM8NdcYyBwZ0x9kELAuZA3uWKPidHCMiQOp4hkOemThoLESrDxvS4pjdO5NwvNvwaOo5_ppHFy=w435-h190-s-no-gm?authuser=0", image: "https://live.staticflickr.com/65535/53751978499_5c9f36e663_m.jpg", alt:"Demon Slayer"},
    { title: "Attack on Titan: The Final Season", year: "2023", seasonAndEps: "S 4 • EPS 30", category1: "Scifi", category2: "Drama", description: "Humankind constructs lofty walls to safeguard itself from immense creatures, the Titans. It battles to regain its land captured by the Titans which is not easy.", categoryTag1: "https://lh3.googleusercontent.com/pw/AP1GczN9wFX0xDLiMfIy9i30uEUwi_xOM60HLvNCK-OmqWtoUxErIVkkYkaOLM4zrFlApiLiTc_IoMCyNwW3QOywqu5u0bNLDli0hK7Aj2Oh_k6WOYgHH3BmKB9C-WPgxztXBLWO74SYjmrcfvbG9OMiWwVO=w400-h190-s-no-gm?authuser=0", categoryTag2: "https://lh3.googleusercontent.com/pw/AP1GczNdQv44RhLVRpZ7VDGJY6V7eSi-O_YYzGMP2kSe2PHel0BTkL9KqSc1BPfoeAkgpEtXzO-P8bjyDXeNsEWxsZygCzxdBM1_DjHrBD6TKxQH8RyYsT33JC9e6_uyEKjt_eaLK3pKWg9tXlB1NC0lL_9N=w430-h190-s-no-gm?authuser=0", image: "https://live.staticflickr.com/65535/53751840513_2bbfdd8434_m.jpg", alt:"Attack on Titan" }
];

let animeCards = document.querySelector(".anime-search-cards");
let viewVault = document.querySelector(".view-vault-cards");

animeList.forEach(function(anime) {

    //Creating the cards for each anime 
    let card = document.createElement("div");
    card.setAttribute("class", "anime-button-div");

    //Each anime card is a button that has the image, title and season and eps within it
    let button = document.createElement("button");

    //Display image
    let displayImage = new Image();
    displayImage.src = anime.image;
    displayImage.alt = anime.alt;
    //Anime title
    let title = document.createElement("p");
    title.setAttribute("class", "anime-title");
    title.textContent = anime.title;
    //Season and number of episodes
    let sAndEps = document.createElement("p");
    sAndEps.setAttribute("class", "season-and-eps");
    sAndEps.textContent = anime.seasonAndEps;

    //Appending the display image, title and episodes to the button 
    button.appendChild(displayImage);
    button.appendChild(title);
    button.appendChild(sAndEps);

    //Appending the button to the card 
    card.appendChild(button);

    //When the card is clicked, a popup with the anime's details appear
    card.addEventListener("click", function() {
        showPopup(anime);
        let added = document.querySelector(".add-to-watchlist");
        added.addEventListener("click", function() {
            viewVault.appendChild(card);
            localStorage.setItem('viewVaultList', viewVault.innerHTML);
        })
    });
    //Anime cards are displayed in search section
    animeCards.appendChild(card);
});

//Collects the stored cards in Viewvault from local storage and displays them on login
viewVault.innerHTML = localStorage.getItem("viewVaultList");

// document.getElementById("profile-name").innerHTML = localStorage.getItem("name");

// CODE FOR EACH POPUP
function showPopup(anime) {
    let popup = document.querySelector(".popup");
    let overlay = document.querySelector(".overlay");
    let popupContent = document.querySelector(".popup-intro-content");

    // Populate popup content
    popupContent.innerHTML = `
        <div class="popup-info">
            <h2>${anime.title}</h2>
            <p style="font-size: 18px;">${anime.year}</p>
            <p>${anime.seasonAndEps}</p>
            <p class="anime-description">${anime.description}</p>
            <div class="category-tags">
                <img src="${anime.categoryTag1}"/>
                <img src="${anime.categoryTag2}"/>         
            </div>
            <button class="add-to-watchlist">
                <img class="add-button" src="https://live.staticflickr.com/65535/53751921893_ee725459d7_m.jpg" alt="plus symbol"/>
                <span>Add to ViewVault</span>
            </button>
        </div>
        <img class="popup-display-image" src="${anime.image}" alt="${anime.alt}"/>
    `;

    // Show popup and overlay
    popup.style.display = "block";
    overlay.style.display = "block";
}

// Close popup when overlay or close button is clicked
document.querySelector(".overlay").addEventListener("click", hidePopup);
document.querySelector(".close-popup").addEventListener("click", hidePopup);

function hidePopup() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}
