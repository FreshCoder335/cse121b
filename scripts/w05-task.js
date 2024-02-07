/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => 
{
    templeList.forEach(function(temple) {
        var article = document.createElement('article');
        var h3 = document.createElement('h3');
        
        h3.textContent = temple.templeName;
    
        var img = document.createElement('img');
        
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
    
        templesElement.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () =>
{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}


/* reset Function */
const reset = function()
{
    const articles = templesElement.querySelectorAll('article');
    articles.forEach(function(article)
    {
        article.remove();
    });
}


/* filterTemples Function */
const filterTemples = function(temples) {
    reset();
    const filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.log('Invalid filter selected');
            break;
    }
};



getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList) });

