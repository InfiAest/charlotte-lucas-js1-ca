const detailsContainer = document.querySelector(".character-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const title = document.querySelector("title");

const url = "https://rickandmortyapi.com/api/character/" + id;

async function getCharacterDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
    }
    catch (error) {
        console.log(error);
        newHtmlContainer.innerHTML = displayError("An error occured!");
    }

}

getCharacterDetails();

function createHtml(details) {

    title.innerHTML = `${details.name}'s page`;

    detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                    <p>Status: ${details.status}</p>
                                    <p>Gender: ${details.gender}</p>
                                    <p>Origin: ${details.origin.name}</p>
                                    <p>Species: ${details.species}</p>
                                    <div class="img-container">
                                        <img class="deatils-image" src="${details.image}"></img>
                                    </div>`;

}