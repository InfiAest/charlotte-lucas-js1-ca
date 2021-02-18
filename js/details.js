const detailsContainer = document.querySelector(".character-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://rickandmortyapi.com/api/character/" + id;

async function getCharacterDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
    }
    catch(error) {
        console.log(error);
        detailsContainer.innerHTML = message("error", error);
    }

}

getCharacterDetails();

function createHtml(details) {
    
    detailsContainer.innerHTML = `<h1>${details.name}</h1>`;

}