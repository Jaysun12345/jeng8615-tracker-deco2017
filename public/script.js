// Adjusting username when profile picture is clicked and login dropdown is displayed 
function returnName() {
    let inputtedName = document.getElementById("input-name").value;
    // If no name is inputted
    if (inputtedName === "") { 
        // Display this
        document.getElementById("default-name").innerText = ", ViewVaulter!"; 
    } else { 
        // Otherwise display the inputted name
        document.getElementById("default-name").innerText = ", " + inputtedName;
        document.getElementById("profile-name").innerText = inputtedName;
    }
    // Store the name so on reload, stays logged in
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
let todayScreentime = parseInt(localStorage.getItem("todayScreentime")) || 0;

// Making the bar graph gotten from chat.js
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
        ep1Length: 24,
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
        ep1Description: "An Upper Rank Demon has been defeated for the first time in a hundred years by Uzui, Tanjiro, and his comrades' effort. This news causes a ripple effect not only among the members of the Demon Slayer Corps, but also the Upper Rank Demons.",
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
        ep1Description: "Marley besieges Fort Slava, aiming to end their four-year conflict with the Mid-East Allied Forces sparked by their defeat in Shiganshina.",
        ep2Title: "Ep 2: Midnight Train",
        ep2Image: "https://live.staticflickr.com/65535/53756547871_b85a69fd36_c.jpg",
        ep2Length: 24,
        ep2Description: "It is clear to Marley's military leaders that the era of their country's domination via Titan warfare is coming to an end. Marley plans to revive the Paradis Island Operation to capture the Founding Titan."
    },
    {
        id: 4,
        title: "Hunter X Hunter",
        year: "2011",
        seasonAndEps: "S 1 • EPS 26",
        category1: "Fantasy",
        category2: "Adventure",
        description: "Gon Freecss is on a mission to train himself as a hunter just like his father. He reunites with his father, who is alive and an accomplished hunter too.",
        categoryTag1: "https://live.staticflickr.com/65535/53754482194_6493806959.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754349228_5e1db76bb2.jpg",
        image: "https://live.staticflickr.com/65535/53767445917_21d2679b58_n.jpg",
        alt: "Hunter x hunter",
        ep1Title: "Ep 1: Departure x and x Friends",
        ep1Image: "https://live.staticflickr.com/65535/53768797480_c352dae71c_c.jpg",
        ep1Length: 23,
        ep1Description: "Young Gon must prove his ability to his aunt Mito before he's allowed to follow in his father's footsteps and take the Hunter Exam.",
        ep2Title: "Ep 2: Test x of x Tests",
        ep2Image: "https://live.staticflickr.com/65535/53768797470_782ea19745.jpg",
        ep2Length: 23,
        ep2Description: "On their way to take the Hunter Exam, Gon, Leorio, and Kurapika must pass an old woman's test and answer a question correctly."
    },
    {
        id: 5,
        title: "Food Wars",
        year: "2015",
        seasonAndEps: "S 1 • EPS 24",
        category1: "Comedy",
        category2: "Drama",
        description: "Soma Yukihira battles some of the world's best chefs to prove himself and refine his skills.",
        categoryTag1: "https://live.staticflickr.com/65535/53754349183_e0ee3af035.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754482204_3f60e2d93f_w.jpg",
        image: "https://live.staticflickr.com/65535/53768381141_538e984d2d_w.jpg",
        alt: "Food wars",
        ep1Title: "Ep 1: An Endless Wasteland",
        ep1Image: "https://live.staticflickr.com/65535/53768797435_847218bed9.jpg",
        ep1Length: 25,
        ep1Description: "Soma constantly battles his father Joichiro to see who is the best chef at their family restaurant. When his father goes away, an urban developer seeks to get rid of the restaurant.",
        ep2Title: "Ep 2: God Tongue",
        ep2Image: "https://live.staticflickr.com/65535/53768797450_40052945ee_c.jpg",
        ep2Length: 25,
        ep2Description: "Soma cooks against Erina, the owner of the God's Tongue. During this challenge, Soma must alter his plans and puts together a superior egg dish."
    },
    {
        id: 6,
        title: "Apothecary Diaries",
        year: "2023",
        seasonAndEps: "S 1 • EPS 24",
        category1: "Romance",
        category2: "Drama",
        description: "Maomao, an apothecary's daughter, has been plucked from her peaceful life and sold to the lowest echelons of the imperial court. Now merely a maid, Maomao settles into her new mundane life and hides her extensive knowledge of medicine in order to avoid any unwanted attention.",
        categoryTag1: "https://live.staticflickr.com/65535/53754574045_995985e51a.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754482204_3f60e2d93f_w.jpg",
        image: "https://live.staticflickr.com/65535/53768552248_30898dcc60_w.jpg",
        alt: "Apothecary Diaries",
        ep1Title: "Ep 1: Maomao",
        ep1Image: "https://live.staticflickr.com/65535/53768591698_01bf8bc0ef.jpg",
        ep1Length: 23,
        ep1Description: "Maomao becomes an imperial palace maid and investigates a rumored curse causing the princes' deaths, spurred by her insatiable curiosity when she overhears two consorts arguing about medicine and poison",
        ep2Title: "Ep 2: Buaisô na kusushi",
        ep2Image: "https://live.staticflickr.com/65535/53767483707_f14a35b44f.jpg",
        ep2Length: 23,
        ep2Description: "Maomao, who became the High Consort Gyokuyou's pharmaceutical attendant and poison tester, is tasked by Jinshi to create an unusual medicine."
    },
    {
        id: 7,
        title: "One Piece",
        year: "1999",
        seasonAndEps: "S 1 • EPS 90",
        category1: "Fantasy",
        category2: "Adventure",
        description: "The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit.",
        categoryTag1: "https://live.staticflickr.com/65535/53754482194_6493806959.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754349228_5e1db76bb2.jpg",
        image: "https://live.staticflickr.com/65535/53767445897_3186376179_n.jpg",
        alt: "One piece",
        ep1Title: "Ep 1: I'm Luffy! The Man Who Will Become the Pirate King!",
        ep1Image: "https://live.staticflickr.com/65535/53768737816_a56fa42726_c.jpg",
        ep1Length: 24,
        ep1Description: "Luffy is found floating at sea by a cruise ship. After repelling an invasion by the Alvida Pirates, he meets a new ally, their chore boy Koby.",
        ep2Title: "Ep 2: The Great Swordsman Appears! Pirate Hunter Roronoa Zoro",
        ep2Image: "https://live.staticflickr.com/65535/53767825757_15971b7a10.jpg",
        ep2Length: 24,
        ep2Description: "Luffy and Koby find Zoro captured in Shells Town's Marine base, with the Marines intending to execute him."
    },
    {
        id: 8,
        title: "Spy X Family",
        year: "2022",
        seasonAndEps: "S 1 • EPS 28",
        category1: "Comedy",
        category2: "Drama",
        description: "Agent Twilight, the greatest spy of the nation of Westalis, assembles a fake family in order to infiltrate an elite private school, not realizing he recruited a psychic child and a legendary assassin also in need of a cover family.",
        categoryTag1: "https://live.staticflickr.com/65535/53754349183_e0ee3af035.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754482204_3f60e2d93f_w.jpg",
        image: "https://live.staticflickr.com/65535/53768773860_bd0abf2d79_w.jpg",
        alt: "Spy x family",
        ep1Title: "Ep 1: Operation Strix",
        ep1Image: "https://live.staticflickr.com/65535/53769159405_c0ffd48373_c.jpg",
        ep1Length: 24,
        ep1Description: "Twilight is an agent that works for WISE, Westalis's intelligence agency; he is tasked with investigating Desmond of Ostania; Twilight disguises himself as Loid Forger and adopts a girl named Anya.",
        ep2Title: "Ep 2: Secure a Wife",
        ep2Image: "https://live.staticflickr.com/65535/53768934333_e5bf12dc77_c.jpg",
        ep2Length: 24,
        ep2Description: "Loid needs someone to act as Anya's mum for an interview at the college, so he looks for a wife; civil servant Yor Briar has a secret identity."
    },
    {
        id: 9,
        title: "The Promised Neverland",
        year: "2019",
        seasonAndEps: "S 1 • EPS 12",
        category1: "Scifi",
        category2: "Horror",
        description: "Emma and Norman reside in an orphanage under Isabella's care. However, they discover that it is a breeding ground for them to become food for demons and try to escape their fate.",
        categoryTag1: "https://live.staticflickr.com/65535/53754157026_1258fa9894_w.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754574040_e1aba4b8e8_w.jpg",
        image: "https://live.staticflickr.com/65535/53768967953_ee613ace62_w.jpg",
        alt: "The promised neverland",
        ep1Title: "Ep 1: 121045",
        ep1Image: "https://live.staticflickr.com/65535/53768968038_9791eceb58_c.jpg",
        ep1Length: 21,
        ep1Description: "While attempting to return a stuffed animal to a fellow orphan who left for a new home, Emma and Norman stumble upon a shocking revelation that changes their view of their orphanage and their caretaker, Isabella.",
        ep2Title: "Ep 2: 131045",
        ep2Image: "https://live.staticflickr.com/65535/53769192530_1782701752_c.jpg",
        ep2Length: 21,
        ep2Description: "Emma and Norman look for a way to escape the orphanage as they learn more about Mom and become suspicious of her behavior and actions."
    },
    {
        id: 10,
        title: "Fruits Basket",
        year: "2001",
        seasonAndEps: "S 1 • EPS 26",
        category1: "Romance",
        category2: "Comedy",
        description: "While living with the Somas, Tohru learns about their connection to the animals of the Chinese Zodiac. As she grows closer to the clan, she strives to unearth the secret of their curse and free them.",
        categoryTag1: "https://live.staticflickr.com/65535/53754574045_995985e51a.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754349183_e0ee3af035.jpg",
        image: "https://live.staticflickr.com/65535/53769099379_d81dc4e2e0_w.jpg",
        alt: "Fruits basket anime",
        ep1Title: "Ep 1: The Strangest Day",
        ep1Image: "https://live.staticflickr.com/65535/53767859337_ee6a6650e0_c.jpg",
        ep1Length: 23,
        ep1Description: "While her Grandfather's house is under construction, Tohru Honda decides to live in a tent in the woods.",
        ep2Title: "Ep 2: The Sohma Curse",
        ep2Image: "https://live.staticflickr.com/65535/53769099409_8ac158518c_c.jpg",
        ep2Length: 23,
        ep2Description: "Tohru learns about the Sohma family curse after only one night of staying with them."
    },
    {
        id: 11,
        title: "No Game No Life",
        year: "2014",
        seasonAndEps: "S 1 • EPS 12",
        category1: "Fantasy",
        category2: "Scifi",
        description: "Online gamer siblings are thrust into a new realm where they must play to take over the world.",
        categoryTag1: "https://live.staticflickr.com/65535/53754482194_6493806959.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754157026_1258fa9894_w.jpg",
        image: "https://live.staticflickr.com/65535/53769099459_ffbcc8d852_w.jpg",
        alt: "No game no life anime",
        ep1Title: "Ep 1: Beginner",
        ep1Image: "https://live.staticflickr.com/65535/53770884280_09499f8455_z.jpg",
        ep1Length: 23,
        ep1Description: "Sora and Shiro, a pair of anti-social NEET gamers, suddenly find themselves in a new world where games decide every facet of life, something that they take to immediately.",
        ep2Title: "Ep 2: Challenger",
        ep2Image: "https://live.staticflickr.com/65535/53770464501_2d91fc8432.jpg",
        ep2Length: 23,
        ep2Description: "Sora and Shiro's new friend Steph makes a foolish bet that ends with Sora the victor; as the new king of Elkia is crowned, Steph details the fall of the Imanity race and her desperate struggle to prove her father, the former king, right."
    },
    {
        id: 12,
        title: "Vampire Night",
        year: "2008",
        seasonAndEps: "S 2 • EPS 13",
        category1: "Romance",
        category2: "Horror",
        description: "Yuki's oldest memory is that of a winter night, when she was attacked by a vampire and rescued by another. Ten years later, Yuki, the adopted daughter of the director of the Cross Academy, has grown up and now acts as a guardian of the Day Class.",
        categoryTag1: "https://live.staticflickr.com/65535/53754574045_995985e51a.jpg",
        categoryTag2: "https://live.staticflickr.com/65535/53754574040_e1aba4b8e8_w.jpg",
        image: "https://live.staticflickr.com/65535/53770464531_369dc37373_w.jpg",
        alt: "Vampire night",
        ep1Title: "Ep 1: Burden of Sinners",
        ep1Image: "https://live.staticflickr.com/65535/53770464516_97f7e0ec46.jpg",
        ep1Length: 23,
        ep1Description: "After the death of Shizuka Hio, peace returns to the academy. However, when Zero returns, the vampires of the Senate label him as a murderer.",
        ep2Title: "Ep 2: The Eternal Promise",
        ep2Image: "https://live.staticflickr.com/65535/53770668708_ab1a296789_z.jpg",
        ep2Length: 23,
        ep2Description: "Yuki has a lot on her mind after Zero almost kisses her; she asserts that she will not speak to Kaname until he admits to Zero's innocence; Yuki and Sayori find a lost boy."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    let animeCards = document.querySelector(".anime-search-cards");
    let viewVault = document.querySelector(".view-vault-cards");

    // Retrieve the stored view vault cards from localStorage
    viewVault.innerHTML = localStorage.getItem("viewVaultCards");

    // Function to display anime cards
    function displayAnimeCards(animeList) {
        animeCards.innerHTML = '';
        animeList.forEach(function (anime) {
            // Creating the cards for each anime 
            let card = document.createElement("div");
            card.setAttribute("class", "anime-button-div");
            card.setAttribute("data-anime-id", anime.id); // Setting each anime card with their own id

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
            popup.setAttribute("data-popup-id", anime.id);
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
                        <img class="add-button" src="https://live.staticflickr.com/65535/53754160146_b10bb221c6_m.jpg" alt="plus symbol"/>
                        <span>Add to ViewVault</span>
                    </button>
                    <button class="remove-from-viewvault" style="display:none; margin-top:10px; margin-left:-10px;" data-anime-id="${anime.id}">
                        <img class="remove-button" style="height:35px; margin-top:4px;" src="https://live.staticflickr.com/65535/53766019078_20ac210e42_m.jpg" alt="minus symbol"/>
                        <span>Remove from ViewVault</span>
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
                        <label class="container">
                            <input type="checkbox" class="watchedCheckbox" data-anime-id="${anime.id}" data-episode="1" value="${anime.ep1Length}">
                            <span class="checkmark"></span>
                        </label>
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
                        <label class="container">
                            <input type="checkbox" class="watchedCheckbox" data-anime-id="${anime.id}" data-episode="2" value="${anime.ep2Length}">
                            <span class="checkmark"></span>
                        </label>
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
        // Attach event listeners to new anime cards
        attachCardListeners();
    }
    
    displayAnimeCards(animeList); // Initial display of all anime cards

    // Function to attach event listeners to anime cards
    function attachCardListeners() {
        // Finding all anime cards 
        let allAnime = document.querySelectorAll(".anime-button-div");
        for (let card of allAnime) {
            card.addEventListener("click", function(event) {
                let animeId = event.currentTarget.dataset.animeId; // Identifying each card by their id and appending it to ViewVault
                let popupCard = document.querySelector(`[data-popup-id="${animeId}"].popup`);
                let overlay = popupCard.nextElementSibling;
                popupCard.style.display = "block";
                overlay.style.display = "block";
            });
        }

        const addToViewVault = document.querySelectorAll(".add-to-watchlist");
        for (let button of addToViewVault) {
            button.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent triggering the card click event
                // Adds the card to viewVault
                let animeId = event.currentTarget.dataset.animeId; // Identifying each card by their id and appending it to ViewVault
                let popupCard = document.querySelector(`[data-anime-id="${animeId}"].anime-button-div`);
                viewVault.appendChild(popupCard);

                // Add button display becomes none
                let addButton = document.querySelector(`[data-anime-id="${animeId}"].add-to-watchlist`);
                addButton.style.display = "none";

                // Remove button appears 
                let removeButton = document.querySelector(`[data-anime-id="${animeId}"].remove-from-viewvault`);
                removeButton.style.display = "block";
                localStorage.setItem("viewVaultCards", viewVault.innerHTML);
            });
        }

        const removeFromViewvault = document.querySelectorAll(".remove-from-viewvault");
        for (let button of removeFromViewvault) {
            button.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent triggering the card click event
                let animeId = event.currentTarget.dataset.animeId; // Identifying each card by their id and appending it to ViewVault
                let popupCard = document.querySelector(`[data-anime-id="${animeId}"].anime-button-div`);
                // Removing the child card from viewvault
                viewVault.removeChild(popupCard)
                localStorage.setItem("viewVaultCards", viewVault.innerHTML);
            });
        }
    }

    // When the page is loaded, popup and overlay are display = none
    let popup = document.querySelectorAll(".popup");
    let overlay = document.querySelectorAll(".overlay");
    // "popup" was recognised as node lists and therefore this layout was effective in making them display = none
    popup.forEach(function(el) { 
        el.style.display = "none";
    });
    overlay.forEach(function(el) {
        el.style.display = "none";
    });

    // Attach event listeners to anime cards initially
    attachCardListeners();
    attachExitButtonListeners();

    // Search bar code
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function () {
        // Converts letters to lowercase before comparing the texts
        const searchText = searchBar.value.toLowerCase();
        const filteredAnime = animeList.filter(anime => anime.title.toLowerCase().includes(searchText));
        displayAnimeCards(filteredAnime);
    });

    // Category filtering functionality using radio buttons
    const radioButtons = document.querySelectorAll('.category-filters input[type="radio"]');
    // For each filter button...
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', function () {
            const selectedCategory = radioButton.value;
            const searchText = searchBar.value.toLowerCase();
            let filteredAnime;

            // If the category is "All Anime" display all
            if (selectedCategory === 'all') {
                filteredAnime = animeList;
            } else {
                // Compares the category of the anime with the radio button title
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
    // Update chart everytime to see live movement in the graph everytime checkbox is checked
    myChart.update();
});

// Update watch average
updateAverage();

// Calculate weekly average on graph
function updateAverage() {
    let weeklyAverage = document.querySelector(".graph-container p strong span");
    weeklyAverage.innerHTML = Math.round((30 + 85 + 65 + 20 + 50 + 30 + 55 + todayScreentime) / 8);
}

// Filter categories as radio buttons 
const radioButtons = document.querySelectorAll('input[name="category"]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        const selectedCategory = this.value;
        filterAnimeCards(selectedCategory);
    });
});

// Display cards with selected filters 
function filterAnimeCards(category) {
    // Filter anime in the search section 
    const cards = document.querySelectorAll(".anime-search-cards.anime-button-div");
    cards.forEach(card => {
        const cardCategory1 = card.getAttribute("data-category1");
        const cardCategory2 = card.getAttribute("data-category2");

        if (category === "all" || cardCategory1 === category || cardCategory2 === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
        attachExitButtonListeners();
    });
}

// Function for the exit buttons after refreshing the page
function attachExitButtonListeners() {
    let exitButtons = document.querySelectorAll(".exit-button");
    exitButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent triggering the card click event
            let popup = button.closest('.popup');
            let overlay = popup.nextElementSibling;
            popup.style.display = "none";
            overlay.style.display = "none";
        });
    });
}
