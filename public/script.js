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
    { title: "Frieren: Life Beyond Journey's End", year: "2023", seasonAndEps: "S 1 • EPS 28", category1: "Fantasy", category2: "Adventure", description: "An elf and her friends defeat a demon king in a great war; but the war is over, and the elf must search for a new way of life.", categoryTag1: "https://lh3.googleusercontent.com/pw/AP1GczN1F1KT4R4oBGvwUm5ozwujcCmEaMmMoIFINcj3tFmwmaN4Ncy-ZsRunynIB8wpXEa1JBG987sEMOXdInCi5ErYdyliUoUYD4pOC0ymcIYYoe0lcm_IPAnhpclojBefV7MzBKvFy73nLVEphW_XEmIn=w455-h190-s-no-gm?authuser=0", categoryTag2: "https://lh3.googleusercontent.com/pw/AP1GczMbTwOHySKl91ZqD-r7ygieAbrJpmufKcU9irggAdVPx0Kg8HxIfiuMkqaIX6UWUMnM0kvwEtHa5yZofIa6J7cKyW284utl6xSf15BMbGRZNjmUJsd-hJZ-nNwVGXZhK1fLQjEQOCbXRIzdGpKYOoLu=w515-h190-s-no-gm?authuser=0", image: "https://lh3.googleusercontent.com/pw/AP1GczNYrdJ3IFs0vBA3KYenDOpAgp4D2sASyjqBnd8BEifWbeNsfcBtlwzT3TE0TGdEqJbf1gOEVSpeMXYNaarMkJmRysPP3L_elfeFpAzvbfzbrHYlXze8u3Z4kEhOfEiCoFHIEdgIL5yfPZq22wAnKcre1Eh4Uq5MH1a_Bh06FzerHg3hKrqPZNyxYypmdqSdIFwLMWky5fadvecJxcNqRnwbeYn71KUj2Q3q8xOZ9MArqfqbKJsdipbMGx9l91HmgUH08KEPPYwwsoKh_JWzWXj8cHop0EBvrYtCGN60jrI-M1TrGsCI8ZjSGXDMyIE75AuxLnAZPkqQ6Qqf88vTi_jYRLDTCBljS_es0YzjLNJI5J7YKAHaN3lBGK6zaGzFO4nOvd-LQNXacMnscoCBb1-8Ji0v0Tr-vhQbZr488_-6IgIkexNX4xM7HDjxTPjANCC0rUlQ5F9fsICEVjiaGhNeURsNElf1FSd73aCWiK0Qp3rTi9RG_FCXtrzhVybk_JIxoEs8Mf_rPzwDW2rQnCINEQxihRrBD5bot_wZbzNcbIufl6q2nux9Uf9zCeQoMNwwqO9Q-qkMgIR3kFFJdKBdwQScdJVMjdG_vWf_RdZnbz587QErYpkVNJPJcAhsYBtBBZzDAeAQc0FD7piMHP3IXsKW7EvnZG3l7rTlftOp-LO-zpmIadymC3b4JyB6VWZVbtcGv9hM1IYbv2F6DamtBZ1W9Pax9tZMz20oRs39nB8bDCWVYAvN-as-4mGG_Gk8VrzMRMA6x-s9LYE1wx_BR4BEp8W0elgjkFlKTr4ar6Aw4MkPWfpN8paJYa9RN16vs1uZ5QotoGJkbYpVyA4chmSJjKkBDWf54hG7TnHTOOYVHvQCemZrEfZH6tuqyaq1S2eZNiR7gQXpnkVKKtniunhYJl1R_6T82PTAx_JhOye_F1mUk_t6nA=w430-h608-s-no-gm?authuser=0", alt: "Frieren"},
    { title: "Demon Slayer: Kimetsu no Yaiba", year: "2024", seasonAndEps: "S 4 • EPS 8", category1: "Adventure", category2: "Horror", description: "A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.", categoryTag1: "https://lh3.googleusercontent.com/pw/AP1GczMbTwOHySKl91ZqD-r7ygieAbrJpmufKcU9irggAdVPx0Kg8HxIfiuMkqaIX6UWUMnM0kvwEtHa5yZofIa6J7cKyW284utl6xSf15BMbGRZNjmUJsd-hJZ-nNwVGXZhK1fLQjEQOCbXRIzdGpKYOoLu=w515-h190-s-no-gm?authuser=0", categoryTag2: "https://lh3.googleusercontent.com/pw/AP1GczMzaupaOVLfqoiKqNfoAxHtsY-B1QDSet6moKmyk2s699rC9eSSrslrSF_KO2u4OMmyzqRwVt7MHikM8NdcYyBwZ0x9kELAuZA3uWKPidHCMiQOp4hkOemThoLESrDxvS4pjdO5NwvNvwaOo5_ppHFy=w435-h190-s-no-gm?authuser=0", image: "https://lh3.googleusercontent.com/pw/AP1GczOi5-DaCez0p9mXFyEGYFMmElPRT7AGvVrqxzyB5fFV4C7QOa0Ro1EP0ivkmKLJ4h8AdrvqewvT40bREMf88Buol5vAOs18piX4E4xsabQo8RarL9HYFkx9-pzX7e017dTsmzDxbqAD3VY3CA_QRZEfA_9aEUfxKAwYR7cC0h0GPQbaimY8R48cOd81mm3ROAgH3puSfnBWg0uEjuNX89fBTOCjqpgdSDWjX8Tj-b59HnuTTqWLxPCMuv43Z6wBZXqAWq-aCX7tuqYxM2mEYtSqd8tF-IW_WKnzEzN-gOIiORZb4xYL_CEUBlNygpmSY56qUsO8HAOF6RY3VuQebRxOJnN32Vw0rIasVgRpKDqcFhHYPY5zVU5rK5C-sONHiavp0u0BJIbHsb1QIPoWypgxcEQeV8x95KBR8rs1Q2wOuKcaQ9kbBa8QxrdHmPXvfobHx3muuz8MZ_lFtRWlREGgQ-XB3znxs-t7aPqWvfi6MgFv3lj_2yluYQin1QeRLN3_PYMBgc3-mXPBrriZabhrJF14JSeur7Yr3gXfMjwy_zwP_5IH-4Rudr_DSVzGav2SpbmCzVB5MCP6B1EYzTMsE-kNQSc7K_lQ1Ull_79aePGc5GsmddQ8ilwsFPgOulW9Rm_ui1R9GwMLIvXt9nQUfktpNK6sZRSdIixVvScq4cP3Y0CTES1Y7WCUSkt9HO5n_08uKkMOeR5Mf2PtUcnAziSLLovI5qxTtUCq5qaPABQHev5Pek3Gn8pHpmx-EgGKh8ThM6H8KQrazWSGa1al4v59DhUzBNtetfzHesnCkjWVuH6hIzM-DWvAy-inDqQBtu40GK3r4Rw5-5zJcaq8KjojlMemM7v3Jj7PNlX6LHPaM6ThIeyOHjC0U_wTW-_cclrgtX1qk8_uDsPcXZBu9Mj2Jc4P1V13OEMkUT6wZ_bqHA5YfWBeKA=w430-h608-s-no-gm?authuser=0", alt:"Demon Slayer"},
    { title: "Demon Slayer: Kimetsu no Yaiba", year: "2024", seasonAndEps: "S 4 • EPS 8", category1: "Adventure", category2: "Horror", description: "A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.", categoryTag1: "https://lh3.googleusercontent.com/pw/AP1GczMbTwOHySKl91ZqD-r7ygieAbrJpmufKcU9irggAdVPx0Kg8HxIfiuMkqaIX6UWUMnM0kvwEtHa5yZofIa6J7cKyW284utl6xSf15BMbGRZNjmUJsd-hJZ-nNwVGXZhK1fLQjEQOCbXRIzdGpKYOoLu=w515-h190-s-no-gm?authuser=0", categoryTag2: "https://lh3.googleusercontent.com/pw/AP1GczMzaupaOVLfqoiKqNfoAxHtsY-B1QDSet6moKmyk2s699rC9eSSrslrSF_KO2u4OMmyzqRwVt7MHikM8NdcYyBwZ0x9kELAuZA3uWKPidHCMiQOp4hkOemThoLESrDxvS4pjdO5NwvNvwaOo5_ppHFy=w435-h190-s-no-gm?authuser=0", image: "https://lh3.googleusercontent.com/pw/AP1GczPTaY0H63jzJWSSzDkFBRQjdGZGSOMKcrX8lmVtIBChfY5q_jmv-X-tmrZKazLgga3NPx9in89O5Tq-a2-KHFM0bhDLRlGJeY84UCt5ZdufFwByp_sIlbwvKJC43RTG5MXDTGscD9uNoFOqzrQ3Qsf6fHoaMm0hyG0keS8omvz8Lgo2JvLjTjJngSUe9O0rh-Bzsge9Na6h_aBhHodJMdIDgwMKk7IOB6T18AS60AhphD5qxCHrkKWtNbbVbvW7CPYE8xRqHiot9w-7AYJUvHN1V_2rnqI-OThRIo6xPaKLRZ4Z1KEGqRHBhFof7-BoQ4a8OOI55esBzAyzZRcH1126Ic1QrbsCTjoJkUCw-J853XCLPFnl8PgSzVYPsiVnjZzIrWofomqHVLfEZrBJnz6TOPqFplW6LuG0L7Blvbh9ergSoqe0rEMOiZ4YrAaca2gW-ZOKgq38Cl2UCq8OYcsT5qAsvW0Olb3Ccpjb0X0jQR9Qwgen80b-TJpPOIM7y5Dp3q7J0BBEccrSiCsJOTNZ-iZzSU42eZ9atARXet8No2QQkIZCd0ViXiV-91wuYyHBza8SBlH4UBnXcPAj8nnIyhQRGtfS3NjcYuQaIBSmIuRwmMy3pH8BzMo_C5KuzHf-2U0wPMxPwZ1vnmMHU1NqyTx9xdtp8y5EWaNo05JNeHZhz5odV0_Mn6s4spNb_djKBfPIMmPksJjK7FLC9UqWbC8RfAF3ogK89XDN3lLoy3pR3rfvw7Hjsr13p9oBvGVFkM8PcUmN5ZhciTSsXfmgbOWcwnQbKDiXZYxoI_bQr6-ya05Mhjxa__RvVHsGULU-OQcJhqud7gHQmlhMAXRQsYmiDVDXLuvqlIlTKaCnPfUULnmPm-nHhGfXX7HHVTavIOGh_5qZVDMIoQo6-88JSn80M8sfn9h1ngc9m3xnauyRW6QTHItZYA=w430-h608-s-no-gm?authuser=0", alt:"Demon Slayer"},
    { title: "Attack on Titan: The Final Season", year: "2023", seasonAndEps: "S 4 • EPS 30", category1: "Scifi", category2: "Drama", description: "Humankind constructs lofty walls to safeguard itself from immense creatures, the Titans. It battles to regain its land captured by the Titans which is not easy.", categoryTag1: "https://lh3.googleusercontent.com/pw/AP1GczN9wFX0xDLiMfIy9i30uEUwi_xOM60HLvNCK-OmqWtoUxErIVkkYkaOLM4zrFlApiLiTc_IoMCyNwW3QOywqu5u0bNLDli0hK7Aj2Oh_k6WOYgHH3BmKB9C-WPgxztXBLWO74SYjmrcfvbG9OMiWwVO=w400-h190-s-no-gm?authuser=0", categoryTag2: "https://lh3.googleusercontent.com/pw/AP1GczNdQv44RhLVRpZ7VDGJY6V7eSi-O_YYzGMP2kSe2PHel0BTkL9KqSc1BPfoeAkgpEtXzO-P8bjyDXeNsEWxsZygCzxdBM1_DjHrBD6TKxQH8RyYsT33JC9e6_uyEKjt_eaLK3pKWg9tXlB1NC0lL_9N=w430-h190-s-no-gm?authuser=0", image: "https://lh3.googleusercontent.com/pw/AP1GczNR55C8tqy3T-_wC3cXPfqLg9RR0kwMeiIvAhkZVNGC3ySfopdjSlJAdJYJPZE5SsnxcQjF1H-45clTadGJ7HJGCAdTiVHeWD7ItMgqqMZyFhUqa9ZA96OGigabEYthQxW90cGGcLaR8iSP-kDahlgMWyFmSyBojQ-eySdIe9Qnx_xRIMHLsbUWYApAHp2Sr-vKNCsyWC9szgl3YP0zeju6yEwsSCEEpJmSrbznG-vcQSYc_GSSYOJcc2jgZy9qHokiFA49QeGX2rQwZyorbM--Nutp2tqYIwVNT3hnuyRk0NcF9vehbS12lC07pPKLh-mADqsq8j_0goqU4szZD_WuLtP3D2jhL1Mz06hgzP4vpRDpbm1_ap4NwHe-SphY_I48ISEDb8Gc67sDs0TJB1FhIbttwFqy4TXKZiqgSzSRByohak55O1YTPANR_EDdlPQ-5egaMYKgTNohBOc745B_Fx0yPBcyUBTKf8vE48LF3CR3oNGX-G3vsP2JprIo64MmlfwruP-mWdHaIwQrit8PMikZPc6ipYo8cHxfNRbiPNYHJc0WOmDmvieOLec9mkC27zAIrtEjpG1Aa1w-j3IVlEI1t1jVs64I8zeHCvgnaKL3VYTLd_wS4VZGw5_4qPhQt2VTJ0mww4FqjHd4fhPTxpKqY4-YSUh1iUrNmilQDwt7xdCpS8tVFoetugWl2toKVavPFfKKV7LZhxMODdle0K0DtMH_DK0cRIFuXGrNgEcZ0Ovo4I2lL6Cu_Q9FuTq6fR50cxF2ZC25wZULklCXzH_-vmkWhTYAfP_kyFTLzPKkJiWjEMFJSlNAphUdG4zt2AyfKPpNx2x7fvgma7N1PGEMWKX-SYP3fmKJQQerFTAW7sSzmeL5UcRV3rjOsP82TAcyuYbx6lQmbsogSqyAFc-IzjUP8kjIzmzM30zQ2e-bE7T9rVZGKA=w430-h608-s-no-gm?authuser=0", alt:"Attack on Titan" }
];

let animeCards = document.querySelector(".anime-search-cards");
let viewVault = document.querySelector(".view-vault-cards");

animeList.forEach(function(anime) {

    //Creating the cards for each anime 
    let card = document.createElement("div");
    card.setAttribute("class", "anime-button-div");

    //button has the image, title and season and eps within it
    let button = document.createElement("button");

    //Display image
    let displayImage = new Image();
    displayImage.src = anime.image;
    console.log(displayImage.src);
    displayImage.alt = anime.alt;

    //Anime title
    let title = document.createElement("p");
    title.setAttribute("class", "anime-title");
    title.textContent = anime.title;

    //Season and number of episodes
    let sAndEps = document.createElement("p");
    sAndEps.setAttribute("class", "season-and-eps");
    sAndEps.textContent = anime.seasonAndEps;

    //Appending the button and pop-up to the card 
    card.appendChild(button);
    
    //Appending the display image, title and episodes to the button 
    button.appendChild(displayImage);
    button.appendChild(title);
    button.appendChild(sAndEps);

    //When the card is clicked, a popup with the anime's details appear
    card.addEventListener("click", function() {
        showPopup(anime);
        let addToWatchlist = document.querySelector(".add-to-watchlist");
        let addRemoveButton = document.querySelector(".add-remove-button");
        let addRemoveText = document.querySelector(".add-remove-text");
        addToWatchlist.addEventListener("click", function() {
            count++;
            if (count % 2 === 0) {
                
                viewVault.appendChild(card);
            }
        })
    });

    animeCards.appendChild(card);
});

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
                <img class="add-remove-button" src="https://lh3.googleusercontent.com/pw/AP1GczNgLQDZa8WotbhCjlbD7h2GBxmYOTJna6rEq0LhTu8-FC3jW51kT1XeeF0yY5t0XOfwv_gHUYZ14CF-wH5CKQcLzQbzz2NzU29KvEdJ0StVV0De8fPlhnznxrajy-3xIzPuVJ_nfDFH6yI1n2alQM39=w180-h180-s-no-gm?authuser=0" alt="plus button">
                <span class="add-remove-text">Add to ViewVault</span>
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

// function buttonChange() {
//     let addButton = document.querySelector(".add-button");
//     let addOrRemoveText = document.querySelector(".add-remove-text");
//     addButton.src = "https://lh3.googleusercontent.com/pw/AP1GczMFCOW7eAugchw810RUTBe8equFoMfK46cu8id7W6iRFbQ8Z3xf4Zs_JwDdFkTf2rgvmKPkr__vqfKvNldsVx819GIzxU8506pdOc8gPCsc3BTVmacKJr6kW1gj2itnU_iirvhQ5sNAwtc2XfeOUq3k=w180-h180-s-no-gm?authuser=0";
//     addOrRemoveText.textContent = "Remove from ViewVault";
// }
