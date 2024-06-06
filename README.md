# jeng8615-tracker-deco2017

# DECO2017 Final Assignment: Website App Prototype

![Logo](/img/screenshots/viewvault-logo.png)

ViewVault - a way to keep track of your anime 

## Table of Contents

- [Introduction](##introduction)
- [Usage](##usage)
- [Features](##features)
- [Comparisons between Mockups and Prototypes](##comparisons)
- [Refinements and Iterations](##refinements-and-iterations)
- [Acknowledgements and References](##acknowledgements-and-references)
- [Author](##author)

## Introduction

The purpose of ViewVault is to find and track the anime that you have watched. In addition to this, the app also tracks your screentime, allowing you to keep track of what you watched whilst keeping you conscious of how long you have been watching anime.

Notes for marker: the best view of the website is when there is only room for 4 anime cards in each row

## Features

I have already used github pages to publish something previously so it will not allow me to publish this site. 

To open the website, download the zip and get the file.

Open the file in VS code and open the terminal and type in "cd jeng8615-tracker-2017" to find the file in your downloads. In the following image, my file is on my desktop so it is as follows:

![how to find my file](/img/screenshots/finding-file.png)

type in "npm run dev" in the terminal once inside the file 

copy and paste the server link that appears (for example: "http://localhost:1234")

![launching the website](/img/screenshots/launching-the-website.png)

## Features

* Login

At the top of the page with the profile pic and the dropdown arrow, this can be clicked to see a "login" modal. The typed name is stored in local storage so when the page is refreshed, it will stay "logged in".

![image of login modal](/img/screenshots/login.png)

* Anime Cards

These cards represent real animes and upon clicking, a modal will appear with the anime's details and episodes. These can be "added to ViewVault" meaning that it will be stored in another section of the site for easier access if you would like to continue watching the series. These anime can also be removed once added.

![image of viewvault](/img/screenshots/your-viewvault.png)

* Episode checklist

Once an anime episode is watched, on each anime card modal, you can tick off watched episodes to demonstrate to the user that they have watched it 

![episode checklist](/img/screenshots/episode-checklist.png)

* Screentime graphs

Once a checkbox is checked, the episode length is added to the screentime graph and updates instantly with every checkbox that is marked off along with the weekly average. The screentime graphs on the side are static, but are meant to be dynamic with large changes in data. Therefore since this project is small, these data changes would not change a lot and therefore the functionality would not be seen as clearly. 

![screentime graph main](/img/screenshots/screentime-main.png)
![screentime aside graphs](/img/screenshots/screentime-aside.png)

* Search Features 

The search bar and category filters aid in helping users find what anime they would want to find

![search features](/img/screenshots/search-features.png)

* Explore Button

A large button within the "Your ViewVault" section was placed there to compell users to interact with it and take users to the search section where they can add anime to their viewVault

![explore button](/img/screenshots/explore-button.png)

## Comparisons between Mockups and Prototypes

From the hi-fidelity mockups, the project was narrowed down to its main features for the web prototype. 

![hi-fidelity mockups](/img/screenshots/hi-fidelity-mockups.png)

Features that added little to the prototype were removed for exampple: 

Action bar:
![action bar](/img/screenshots/action-bar.png)

More anime details:
![more anime details](/img/screenshots/more-anime-details.png)

## Refinements and Iterations

A major iteration that took place was the narrowing down of the prototype to demonstrate only the main features. The first iteration of the website was going to be a translation of the app which meant it would carry over the tabs and navigation bar that appears at the bottom of the mobile display.  

However, we decided to remove the navigation tab from the desktop display was a practical decision due to the narrowing down of mt prototype as well as an aesthetic one as the navigation bar felt extremely out of place on destop. This is an image of the previous layout:

![desktop previous layout](/img/screenshots/desktop-previous-layout.png)

An aesthetic choice was to change the look of the checkboxes on each anime card modal as they were small and did not match the aesthetic of the website. Code was inspired from W3 schools to change the aesthetic of the checkboxes.

![old checkboxes](/img/screenshots/checkboxes.png)
![old checkbox checked](/img/screenshots/checked-checkbox.png)
![new checkbox](/img/screenshots/new-checkbox.png)

One of the final refinements of the code was the search function and category filters. When using these features, they would search through all the anime cards including the ones that were meant to stay static in the viewvault. So, by refining the code to only filter through cards in the search section of the page, it was fixed

![fixing search bar and category filters](/img/screenshots/filter-fix.png)

The removal of dead buttons that lead to nowhere. These buttons were intended to lead the user to other features of the app, however are no longer needed. For example, a lot of the "see more" buttons were removed

![see more button](/img/screenshots/see-more.png)

## Acknowledgements and References 

* Acknowledgements

ChatGPT was also helpful in debugging and cleaning up code

Displaying the live date help from Free code camp:
https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/

Chart from chart.js and jsfiddle:
https://jsfiddle.net/ov7tg340/

I learnt here the usefulness of chart plugins. and how i could manipulate data through js. 

Radio buttons for category filters from stack overflow:
https://stackoverflow.com/questions/16242980/making-radio-buttons-look-like-buttons-instead

display none for nodelist from stack overflow:
https://stackoverflow.com/questions/43196524/is-it-possible-to-display-none-a-list-of-queries-without-using-an-object-or-arr

Here, when i console logged "popup", it came up as a nodelist and I learnt that node lists act differently to other elements like a div, therefore style.display = "none" was not going to work. With the help from the above link, stack overflow, i was able to hide the display of the nodelist.

Checkbox style from W3 schools:
https://www.w3schools.com/howto/howto_css_custom_checkbox.asp

Checkboxes were also created with the aid of chatgpt, after establishing a foundational code, the prompt i gave ChatGPT was "how can i make it so that when i check a checkbox it will add it to todayScreentime?" and chatGPT generated the following code:

![chatgpt helping to generate check boxes](/img/screenshots/chatgpt-checkboxes.png)

An issue that occurred was that the display none was not working for popup and overlay. By copy and pasting the section of code that had problems, ChatGPT introduced the function "event.stopPropagation()" which helps to prevent triggering other card click events that are nearly associated to it.

![prompt for chatgpt - event propagation](/img/screenshots/chatgpt-propagation-prompt.png)
![chatgpt - event propagation](/img/screenshots/chatgpt-propagation-1.png)
![chatgpt - event propagation](/img/screenshots/chatgpt-propagation-2.png)

* References

Anonymous. (n.d.). JSFiddle example [Source code]. JSFiddle. https://jsfiddle.net/ov7tg340/

Chart.js. (n.d.). Bar chart. https://www.chartjs.org/docs/latest/charts/bar.html

FreeCodeCamp. (2021, October 18). How to get the current date in JavaScript – Guide. https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/

Gabbard, K. (2013, April 26). Making radio buttons look like buttons instead. Stack Overflow. https://stackoverflow.com/questions/16242980/making-radio-buttons-look-like-buttons-instead

Smith, J. (2017, April 3). Is it possible to display none a list of queries without using an object or array? Stack Overflow. https://stackoverflow.com/questions/43196524/is-it-possible-to-display-none-a-list-of-queries-without-using-an-object-or-arr

W3Schools. (n.d.). How to create a custom checkbox. W3Schools. https://www.w3schools.com/howto/howto_css_custom_checkbox.asp

## Author

Created by Jason Eng

Student Number: 530575467

Unikey: JENG8615