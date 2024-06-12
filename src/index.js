document.addEventListener("DOMContentLoaded", function() {
    function displayPoem(response) {
        console.log("poem generated");
        new Typewriter('#poem', {
            strings: response.data.answer,
            autoStart: true,
            delay: 1,
            cursor: "",
        });
    }

    function generatePoem(event) {
        event.preventDefault();

        let instructionsInput = document.querySelector("#user-instructions");
        let apiKey = "64od2000bca5188a9533t4ea4bf43c96";
        let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
        let context = `You are a Poem expert and love to write short poems. Your mission is to generate a poem in basic HTML. Make sure to follow the user instructions`;
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

        let poemElement = document.querySelector("#poem");
        poemElement.classList.remove("hidden");
        poemElement.innerHTML = `<span class="generating">⏳</span> Generating Poem for you about ${instructionsInput.value}`;

        let generatingMessage = document.querySelector(".generating");
        generatingMessage.classList.add("generating"); // Add the blinking animation

        console.log("Generating poem");
        console.log(`Prompt: ${prompt}`);
        console.log(`Context: ${context}`);

        axios.get(apiUrl).then(function(response) {
            displayPoem(response);
        });
    }

    let poemFormElement = document.querySelector("#poem-generator-form");
    poemFormElement.addEventListener("submit", generatePoem);
});
