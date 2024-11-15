let backendurl = "http://localhost:3000/futar";
document.addEventListener("DOMContentLoaded", async function () {
    function listCards(data) {
        const cardContainer = document.getElementById("futars");
        cardContainer.innerHTML = "";
    
        data.forEach((element) => {
            let card = document.createElement("div");
            card.className = "card";
            card.style.margin = "1vw";
            card.innerHTML = `
                    <div class="card-body">
                    <h5 class="card-title">${element.fnev}</h5>
                    <p class="card-text"><i>Futár telefonszáma</i>: ${element.ftel}</p>
                    </div>
                    `;
            cardContainer.appendChild(card);
        });
    }
    try {
        const response = await fetch(backendurl);
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
            listCards(data);
        } else {
            console.log("Nincs megjeleníthető adat");
            const cardContainer = document.getElementById("futars");
            cardContainer.innerHTML = "<h2>Nincs megjeleníthető adat</h2>";
        }
    } catch (error) {
        console.error("Hiba történt az adatok betöltésekor:", error);
    }
});
