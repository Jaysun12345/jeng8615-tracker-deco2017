// Adjusting username when profile picture is clicked and login dropdown is displayed 
function returnName() {
    let inputtedName = document.getElementById("input-name").value;
    if (inputtedName === "") {
        document.getElementById("default-name").innerText = ", ViewVaulter!";
    } else {
        document.getElementById("default-name").innerText = ", " + inputtedName;
        document.getElementById("profile-name").innerText = inputtedName;
    }
    localStorage.setItem("name", inputtedName);
    document.getElementById("login").style.display = "none";
}

// If name is saved, then displays saved name
document.getElementById("default-name").innerHTML = ", " + (localStorage.getItem("name") || "ViewVaulter!");
document.getElementById("profile-name").innerHTML = localStorage.getItem("name") || "";

// Function to get the current date and time
function getCurrentDateAndTime() {
    const weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

// Establishing today's screentime
// let todayScreentime = localStorage.getItem("todayScreentime", todayScreentime) || 0;
// let todayScreentime = 0;
let todayScreentime = parseInt(localStorage.getItem("todayScreentime")) || 0;

// Making the bar graph 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', ' '],
        datasets: [{
            label: "Monitor your watching habits",
            data: [30, 85, 65, 20, 50, 30, 55, todayScreentime, 0],
            backgroundColor: ['#FFA745', '#FFA745', '#FFA745', '#FFA745', '#FFA745', '#FFA745', '#FFA745', '#9671FF'],
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

// Array of anime with their details
let animeList = [
    {
        id: 1,
        title: "Frieren: Life Beyond Journey's End",
        year: "2023",
        seasonAndEps: "S 1 • EPS 28",
        category1: "Fantasy",
        category2: "Adventure",
        description: "An elf and her friends defeat a demon king in a great war; but the war is over, and the elf must search for a new way of life.",
        categoryTag1: "https://live.staticflickr.com/65535/53754482194_6493806959_m.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754349228_5e1db76bb2_m.jpg",
        image: "https://live.staticflickr.com/65535/53753245482_5437fdba1a_m.jpg",
        alt: "Frieren",
        ep1Title: "Ep 1: The Journey's End",
        ep1Image: "https://live.staticflickr.com/65535/53754846765_be34476144_c.jpg",
        ep1Length: 25,
        ep1Description: "The world celebrates the Demon King's defeat at the hands of the Hero and his companions. Now that their great adventure is over, what will Frieren the mage do next?",
        ep2Title: "Ep 2: It Didn't Have to be Magic",
        ep2Image: "https://live.staticflickr.com/65535/53754756524_6e63a63f1a.jpg",
        ep2Length: 24,
        ep2Description: "Frieren instructs Fern in the use of magic while deciphering a grimoire for Heiter."
    },
    {
        id: 2,
        title: "Demon Slayer: Kimetsu no Yaiba",
        year: "2023",
        seasonAndEps: "S 3 • EPS 11",
        category1: "Adventure",
        category2: "Horror",
        description: "A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.",
        categoryTag1: "https://live.staticflickr.com/65535/53754349228_5e1db76bb2_m.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754574040_e1aba4b8e8_n.jpg",
        image: "https://live.staticflickr.com/65535/53754483744_22574a1dc2_m.jpg",
        alt: "Demon Slayer",
        ep1Title: "Ep 1: Someone's Dream",
        ep1Image: "https://live.staticflickr.com/65535/53754970309_063288006a.jpg",
        ep1Length: 23,
        ep1Description: "An Upper Rank Demon has been defeated for the first time in a hundred years by Uzui, Tanjiro, and his comrades' effort. This news causes a ripple effect not only among the members of the Demon Slayer Corps, but also the Upper Rank Demons, who have been summoned by Muzan Kibutsuji.",
        ep2Title: "Ep 2: Yoriichi Type Zero",
        ep2Image: "https://live.staticflickr.com/65535/53754838348_dd330ab102.jpg",
        ep2Length: 23,
        ep2Description: "Tanjiro encounters Mist Hashira Muichiro Tokito and Kotetsu, a boy from the village, arguing. Muichiro is demanding that a “certain key” be handed over to him from Kotetsu."
    },
    {
        id: 3,
        title: "Attack on Titan: The Final Season",
        year: "2023",
        seasonAndEps: "S 4 • EPS 30",
        category1: "Scifi",
        category2: "Drama",
        description: "Humankind constructs lofty walls to safeguard itself from immense creatures, the Titans. It battles to regain its land captured by the Titans which is not easy.",
        categoryTag1: "https://live.staticflickr.com/65535/53754157026_1258fa9894_n.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754482204_3f60e2d93f_n.jpg",
        image: "https://live.staticflickr.com/65535/53754350773_efb45774f3_m.jpg",
        alt: "Attack on Titan",
        ep1Title: "Ep 1: The Other Side of the Sea",
        ep1Image: "https://live.staticflickr.com/65535/53756747408_87fd6ab641_c.jpg",
        ep1Length: 24,
        ep1Description: "Marley besieges Fort Slava, aiming to end their four-year conflict with the Mid-East Allied Forces sparked by their defeat in Shiganshina. Warrior candidate Falco Grice is saved by his brother Colt, who returns him to the trenches nearby.",
        ep2Title: "Ep 2: Midnight Train",
        ep2Image: "https://live.staticflickr.com/65535/53756547871_b85a69fd36_c.jpg",
        ep2Length: 24,
        ep2Description: "It is clear to Marley's military leaders that the era of their country's domination via Titan warfare is coming to an end. Marley plans to revive the Paradis Island Operation to capture the Founding Titan."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    let animeCards = document.querySelector(".anime-search-cards");
    let viewVault = document.querySelector(".view-vault-cards");

    // Retrieve the stored view vault cards from localStorage
    viewVault.innerHTML = localStorage.getItem("viewVaultCards") || "";

    // Function to display anime cards
    function displayAnimeCards(animeList) {
        animeCards.innerHTML = '';
        animeList.forEach(function (anime) {
            // Creating the cards for each anime 
            let card = document.createElement("div");
            card.setAttribute("class", "anime-button-div");
            card.setAttribute("data-anime-id", anime.id) // Setting each anime card with their own id

            // Each anime card is a button that has the image, title, season, and eps within it
            let button = document.createElement("button");

            // Display image
            let displayImage = new Image();
            displayImage.src = anime.image;
            displayImage.alt = anime.alt;

            // Anime title
            let title = document.createElement("p");
            title.setAttribute("class", "anime-title");
            title.textContent = anime.title;

            // Season and number of episodes
            let sAndEps = document.createElement("p");
            sAndEps.setAttribute("class", "season-and-eps");
            sAndEps.textContent = anime.seasonAndEps;

            // Appending the display image, title, and episodes to the button 
            button.appendChild(displayImage);
            button.appendChild(title);
            button.appendChild(sAndEps);

            // Appending the button to the card 
            card.appendChild(button);

            // Creating the popup
            let popup = document.createElement("div");
            popup.setAttribute("class", "popup");
            popup.style.display = "none";

            // Creating an overlay
            let overlay = document.createElement("div");
            overlay.setAttribute("class", "overlay");
            overlay.style.display = "none";

            // Creating the popup content
            let popupIntroContent = document.createElement("div");
            popupIntroContent.setAttribute("class", "popup-intro-content");

            // Populate popup content
            popupIntroContent.innerHTML = `
                <div id="${anime.id}-popup" class="popup-info">
                    <h2>${anime.title}</h2>
                    <p style="font-size: 18px;">${anime.year}</p>
                    <p>${anime.seasonAndEps}</p>
                    <p class="anime-description">${anime.description}</p>
                    <div class="category-tags">
                        <img src="${anime.categoryTag1}" alt="Category Tag 1"/>
                        <img src="${anime.categoryTag2}" alt="Category Tag 2"/>         
                    </div>
                    <button class="add-to-watchlist" data-anime-id="${anime.id}">
                        <img class="add-button" src="https://live.staticflickr.com/65535/53754160146_b10bb221c6_s.jpg" alt="plus symbol"/>
                        <span>Add to ViewVault</span>
                    </button>
                </div>
                <img class="popup-display-image" src="${anime.image}" alt="${anime.alt}"/>
            `;

            let popupEps = document.createElement("div");
            popupEps.setAttribute("class", "popup-eps");

            popupEps.innerHTML = `
                <div class="popupEps">
                    <div class="episodesAndWatched">
                        <p>Episodes</p>
                        <p>Watched</p>
                    </div>
                    <container class="episode-container">
                        <div class="ep-section">
                            <img class="ep-image" src="${anime.ep1Image}"/>
                            <span class="ep-information">
                                <p class="ep-title">${anime.ep1Title}</p>
                                <p>${anime.ep1Length}min</p>
                                <p class="ep-description">${anime.ep1Description}</p>
                            </span>
                        </div>
                        <input type="checkbox" class="watchedCheckbox" data-anime-id="${anime.id}" data-episode="1" value="${anime.ep1Length}">
                    </container>
                    <container class="episode-container">
                        <div class="ep-section">
                            <img class="ep-image" src="${anime.ep2Image}"/>
                            <span class="ep-information">
                                <p class="ep-title">${anime.ep2Title}</p>
                                <p>${anime.ep2Length}min</p>
                                <p class="ep-description">${anime.ep2Description}</p>
                            </span>
                        </div>
                        <input type="checkbox" class="watchedCheckbox" data-anime-id="${anime.id}" data-episode="2" value="${anime.ep2Length}">
                    </container>
                </div>
                <div class="load-more">
                    Load More
                    <img class="down-arrow" src="https://live.staticflickr.com/65535/53754920189_1214919b40_s.jpg" alt="arrow down"/>
                </div>
            `;

            // Exit button for each popup
            let exitButton = new Image();
            exitButton.src = "https://live.staticflickr.com/65535/53754577185_53e54741e3_s.jpg";
            exitButton.setAttribute("class", "exit-button");
            exitButton.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent triggering the card click event
                popup.style.display = "none";
                overlay.style.display = "none";
            });

            // Appending the exitButton and popup content into the popup
            popup.appendChild(exitButton);
            popup.appendChild(popupIntroContent);
            popup.appendChild(popupEps);

            // Appending popup and overlay to the card
            card.appendChild(popup);
            card.appendChild(overlay);

            // Show popup and overlay when the card is clicked
            card.addEventListener("click", function () {
                popup.style.display = "block";
                overlay.style.display = "block";
            });

            // Prevent closing popup when clicking inside it
            popup.addEventListener("click", function (event) {
                event.stopPropagation();
            });

            // Close popup when clicking outside of it (on the overlay)
            overlay.addEventListener("click", function () {
                popup.style.display = "none";
                overlay.style.display = "none";
            });
            animeCards.appendChild(card);
        });
    }
    
    displayAnimeCards(animeList); // Initial display of all anime cards
    
    // When the "Add to ViewVault" button is clicked, anime card is added to ViewVault
    const addToViewVault = document.querySelectorAll(".add-to-watchlist");
    for (let button of addToViewVault) {
        button.addEventListener("click", function(event) {
            let animeId = event.currentTarget.dataset.animeId; // Identifying each card by their id and appending it to ViewVault
            let popupCard = document.querySelector(`[data-anime-id="${animeId}"].anime-button-div`);
            viewVault.appendChild(popupCard);
            localStorage.setItem("viewVaultCards", viewVault.innerHTML);
        });
    }

    // When the page is loaded, popup and overlay are display = none
    let popup = document.querySelectorAll(".popup");
    let overlay = document.querySelectorAll(".overlay");
    popup.forEach(function(el) {
        el.style.display = "none";
    })
    overlay.forEach(function(el) {
        el.style.display = "none";
    });
    // When the exit button is clicked on each popup, the popup and overlay disappears
    let exitButton = document.querySelectorAll(".exit-button");
    for (let button of exitButton) {
        button.addEventListener("click", function(event) {
            popup.forEach(function(el) {
                el.style.display = "none";
            })
            overlay.forEach(function(el) {
                el.style.display = "none";
            });
            let allAnime = document.querySelectorAll(".anime-button-div")
            allAnime.addEventListener("click", function(event) {
                popup.forEach(function(el) {
                    el.style.display = "block";
                })
                overlay.forEach(function(el) {
                    el.style.display = "block";
                });
                console.log("clicked");
            })
        });
    }


    // Search bar code
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function () {
        const searchText = searchBar.value.toLowerCase();
        const filteredAnime = animeList.filter(anime => anime.title.toLowerCase().includes(searchText));
        displayAnimeCards(filteredAnime);
    });

    // Category filtering functionality
    const radioButtons = document.querySelectorAll('.category-filters input[type="radio"]');
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', function () {
            const selectedCategory = radioButton.value;
            const searchText = searchBar.value.toLowerCase();
            let filteredAnime;

            if (selectedCategory === 'all') {
                filteredAnime = animeList;
            } else {
                filteredAnime = animeList.filter(anime =>
                    anime.category1.toLowerCase() === selectedCategory.toLowerCase() ||
                    anime.category2.toLowerCase() === selectedCategory.toLowerCase()
                );
            }

            filteredAnime = filteredAnime.filter(anime => anime.title.toLowerCase().includes(searchText));
            displayAnimeCards(filteredAnime);
        });
    });

    // Adding anime episode lengths to screentime
    const checkboxes = document.querySelectorAll('.watchedCheckbox');
    checkboxes.forEach(checkbox => {
        const animeId = checkbox.getAttribute('data-anime-id');
        const episode = checkbox.getAttribute('data-episode');
        const savedState = localStorage.getItem(`anime-${animeId}-ep-${episode}`);

        if (savedState === 'checked') {
            checkbox.checked = true;
        }
    });

    // Event listener for each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const animeId = checkbox.getAttribute('data-anime-id');
            const episode = checkbox.getAttribute('data-episode');

            if (checkbox.checked) {
                // Add the checkbox value to the total when checked
                todayScreentime += parseInt(checkbox.value);
                localStorage.setItem(`anime-${animeId}-ep-${episode}`, 'checked');
            } else {
                // Subtract the checkbox value from the total when unchecked
                todayScreentime -= parseInt(checkbox.value);
                localStorage.setItem(`anime-${animeId}-ep-${episode}`, 'unchecked');
            }
            // Save today's screentime to localStorage
            localStorage.setItem("todayScreentime", todayScreentime);
            // Update the chart
            myChart.data.datasets[0].data[7] = todayScreentime;
            myChart.update();
            updateAverage();
        });
    });
    myChart.update();
});

// Calculate weekly average on graph
function updateAverage() {
    let weeklyAverage = document.querySelector(".graph-container p strong span");
    weeklyAverage.innerHTML = Math.round((30 + 85 + 65 + 20 + 50 + 30 + 55 + todayScreentime) / 8);
}

const radioButtons = document.querySelectorAll('input[name="category"]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        const selectedCategory = this.value;
        filterAnimeCards(selectedCategory);
    });
});

function filterAnimeCards(category) {
    const cards = document.querySelectorAll(".anime-button-div");
    cards.forEach(card => {
        const cardCategory1 = card.getAttribute("data-category1");
        const cardCategory2 = card.getAttribute("data-category2");

        if (category === "all" || cardCategory1 === category || cardCategory2 === category) {
                card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
