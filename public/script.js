//Adjusting username when profile picture is clicked and logi dropdown is displayed 
function returnName() {
    let inputtedName = document.getElementById("input-name").value;
    //if "submit" button is clicked without an imputted name, the follwoing text is displayed on the main page
    if (inputtedName === "") {
        document.getElementById("default-name").innerText = ", welcome to ViewVault";
    } else {
        document.getElementById("default-name").innerText = ", " + inputtedName;
    }
    localStorage.setItem("name", inputtedName);
    document.getElementById("login").style.display = "none";
}
//If name is saved, then displays saved name
document.getElementById("default-name").innerHTML = localStorage.getItem("name");

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