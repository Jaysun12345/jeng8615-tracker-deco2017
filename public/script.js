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

let animeList = [
    { title: "Frieren: Life Beyond Journey's End", seasonAndEps: "S 1 • EPS 28", image: "https://lh3.googleusercontent.com/pw/AP1GczNlD8zv_Eue7B6pvdbfjcoFj93Vbx-uM2tuJKaO6kjR_pbppD6zfyEp_nbSuwyoxEpaX96yNNwcJo6gm1v5C59EhcbbkGxObGtqEbLaLH4LEryrA4aL93jRu6VNP1S8BUyP2AqxYQaxEmjyGvXslfJO5jAsFJmGUXBBaQGZ29h7NnSlduO2TctzNbUNI8OdA3XMRxWs_PoBt2lnPYsl9j16hcTMULhpTOwLY9Ymbh6JQvpbZig5zkJamEEEWwUoyW0bwNKlYI5_xq-iy3rmyV2o1ZP5dvUru5yAhzNpMWZbk4NrBluaUoXMDIoI_IasQA-yu0VRMzl11IDqXvZnxCh7MvbA1IF3L9hip5byKLriKTgHJjYYq4pc8DKUE7KpssYiHwXyopySK1xZIvzzKTf4Dge00xcKZodmk_dJO_aWkcvxUIa2Fd1gErMtWe9A7MLN3okWxyNHw2NJd-saaS9R2YmincJsAGAfprXU-NFbY-XwFe6kM6HdJ4qlVK6IC49ahrV6eBQ4RA-inRGbgFAUFwuYhm8tNG_zWfIxVjDsm-3fxYIIBwkqTvjYdpsTT-7X559OHDljkzcwOrfqF7P4L2345CPK0HAcVaY05NRif2_nKT1O9VUXztQ43rLyM7EtLPyYaZDfUK-P3Y24ERnpsd6DBcAPTav5gSpOMJ2eqPmlyGddaB_fDp45GOaZN-B3JZqPlTBBmefE9yB7QodXZqYKr4qiPu-GHkSooosVINxFD2cwzqMBSA9dYHFsiQRbDpEaJubB3wtGaHSsF0q2bPqIkO18EJUnTI-By8IdpozQ08QEdSNKK-ogFEgZCluf433HMFnt7HvweKetRJ5bTDCsjZfdv4lekq4a_8xaDCY1z7fdyGNwsvE4ASSgCHfur1cUX80ycV4M5j79Li55vdk84LooCwInHoxZUhfiUSk0e3rMX8Vc1Q=w580-h820-s-no-gm?authuser=0", alt: "Frieren"},
    { title: "Demon Slayer", seasonAndEps: "S 4 • EPS 8", image: "https://lh3.googleusercontent.com/pw/AP1GczOi5-DaCez0p9mXFyEGYFMmElPRT7AGvVrqxzyB5fFV4C7QOa0Ro1EP0ivkmKLJ4h8AdrvqewvT40bREMf88Buol5vAOs18piX4E4xsabQo8RarL9HYFkx9-pzX7e017dTsmzDxbqAD3VY3CA_QRZEfA_9aEUfxKAwYR7cC0h0GPQbaimY8R48cOd81mm3ROAgH3puSfnBWg0uEjuNX89fBTOCjqpgdSDWjX8Tj-b59HnuTTqWLxPCMuv43Z6wBZXqAWq-aCX7tuqYxM2mEYtSqd8tF-IW_WKnzEzN-gOIiORZb4xYL_CEUBlNygpmSY56qUsO8HAOF6RY3VuQebRxOJnN32Vw0rIasVgRpKDqcFhHYPY5zVU5rK5C-sONHiavp0u0BJIbHsb1QIPoWypgxcEQeV8x95KBR8rs1Q2wOuKcaQ9kbBa8QxrdHmPXvfobHx3muuz8MZ_lFtRWlREGgQ-XB3znxs-t7aPqWvfi6MgFv3lj_2yluYQin1QeRLN3_PYMBgc3-mXPBrriZabhrJF14JSeur7Yr3gXfMjwy_zwP_5IH-4Rudr_DSVzGav2SpbmCzVB5MCP6B1EYzTMsE-kNQSc7K_lQ1Ull_79aePGc5GsmddQ8ilwsFPgOulW9Rm_ui1R9GwMLIvXt9nQUfktpNK6sZRSdIixVvScq4cP3Y0CTES1Y7WCUSkt9HO5n_08uKkMOeR5Mf2PtUcnAziSLLovI5qxTtUCq5qaPABQHev5Pek3Gn8pHpmx-EgGKh8ThM6H8KQrazWSGa1al4v59DhUzBNtetfzHesnCkjWVuH6hIzM-DWvAy-inDqQBtu40GK3r4Rw5-5zJcaq8KjojlMemM7v3Jj7PNlX6LHPaM6ThIeyOHjC0U_wTW-_cclrgtX1qk8_uDsPcXZBu9Mj2Jc4P1V13OEMkUT6wZ_bqHA5YfWBeKA=w580-h820-s-no-gm?authuser=0", alt:"Demon Slayer"},
    { title: "Attack on Titan: The Final Season", seasonAndEps: "S 4 • EPS 30", image: "https://lh3.googleusercontent.com/pw/AP1GczOK2wjOU7ja5AdQ-IdaI8pq6UCv2e0rRJoiooMn19lqqo4gNwjgGMjVXysikaz9p_sMWkptpF6hcfwAkwpchbDBK6O-MxEPDHQ5KbQkfFuM2wezXrTSOdj0Ow_m4Nt51IlGTRN8UR6DXK36bAPZpNhAYcpejo85UbRvtLEz76jQF-TRxa06SeiJ0FJM2KEgU3M1UL1cBpI4mLwtD1WHb9-XwDKSohCkDQZ1nf1CvMYUGBRaJfFQzj_vHLat_8dswNODwU1_zkMDOBtD3L_x11ig1D_eA9uPTxwVMYvGcbqubo_jlPL4Kv9G-cGEwkxWDE8ajNLIH6749XUny1USVsyN9HKkpSbbi80F2byBmPTRIyJ--0OPK_wQDwfEjzWr86_LCD4T2yzyodmfLKNrAFXephhHYcMy4ggn8dLek-wKcniCKGkzvEjVKRyMI5BUimF6Kdx5x-xSkF_iAQ0ZluuSHc4gnt22yn6i8AscUleHow-m6h-cjeXUCCCVdrgy_6T5mdxPhdW3AYbnj_T9VCLPpGmtSIgRwZsSslk8ffzuPOQBNCTy8Z3QLHpya82VtIzLKb1lfWpvUhE-bN9G4CDvKC_C0tbqeQ55mU3QEdKi-etr5v0BxoZdXnQ0qOSL2W_YWEU003vrxkvizP-IlqHyoSxV3FKG_vchPAFg_kTSmEUc43sVdixdGpijToUZZHshRMDJI8x5sIJ_AWx2u_N2B0cgSIpxre5MxofnnK-KErsRbAPk90By5UyRghdKMxvKfFtxLWayB0qKgLvusIE0NrZ1UQiQHqkSkMFE825JQsoRyt9mdq4ccVMvhSWtJSVRzP5snYg2vC2J67KgrMqHPMQfqzaZ8DbjtOEgLWGqkiUtj3tB0XB_RHl94QGMCnpr8Qj7K1RR57Cgdq8MYxI-YPGSny6Y5vMaygBpaiFVlfzfDLrZuTs56A=w580-h820-s-no-gm?authuser=0", alt:"Attack on Titan" }
];

let animeCards = document.querySelector(".anime-cards");

animeList.forEach(function(anime) {
    // console.log(anime.image);

    let card = document.createElement("div");
    card.setAttribute("class", "anime-button-div");

    let button = document.createElement("button");

    let displayImage = new Image();
    displayImage.src = anime.image;
    console.log(displayImage.src);
    displayImage.alt = anime.alt;

    let title = document.createElement("p");
    title.setAttribute("class", "anime-title");
    title.textContent = anime.title;

    let sAndEps = document.createElement("div");
    sAndEps.setAttribute("class", "season-and-eps");
    sAndEps.textContent = anime.seasonAndEps;

    let popupInfo = document.createElement("div");
    popupInfo.setAttribute("class", "anime-card-deets")

    card.appendChild(button);
    // card.appendChild(popupInfo);
    
    button.appendChild(displayImage);
    button.appendChild(title);
    button.appendChild(sAndEps);

    animeCards.appendChild(card);
});


