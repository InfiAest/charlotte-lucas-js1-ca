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

            if(characterDetails[i].id >= 19) {
                continue;
            }

            newHtmlContainer.innerHTML += `<a href="details.html?id=${characterDetails[i].id}" class="characterDetails">
                                            <h2>${characterDetails[i].name}</h2>
                                            <p>Species: ${characterDetails[i].species}</p>
                                            <p>Origin: ${characterDetails[i].origin.name}</p>
                                            <div class="img-container">
                                                <img class="thumbnail-image" src="${characterDetails[i].image}"></img>
                                            </div>
                                            </a>`;
        }
    } 
    catch (error) {
        console.log(error);
        newHtmlContainer.innerHTML = displayError("An error occured! See console for error");
    }

}

getCharacters();