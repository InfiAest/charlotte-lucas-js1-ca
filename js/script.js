const url = "https://rickandmortyapi.com/api/character";

const newHtmlContainer = document.querySelector(".newHtml");

async function getCharacters() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        const characterDetails = data.results;

        newHtmlContainer.innerHTML = "";

        for (let i = 0; i < characterDetails.length; i++) {

            newHtmlContainer.innerHTML += `<a href="details.html?id=${characterDetails[i].id}" class="characterDetails">
                                            <h2>${characterDetails[i].name}</h2>
                                            <p>Species: ${characterDetails[i].species}</p>
                                            <p>Origin: ${characterDetails[i].origin.name}</p>
                                            </a>`;
        }
    } 
    catch (error) {
        console.log(error);
        newHtmlContainer.innerHTML = displayError("An error occured!");
    }

}

getCharacters();