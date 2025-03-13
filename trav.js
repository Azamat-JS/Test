document.addEventListener("DOMContentLoaded", () => {
    fetchDestinations();
});

async function fetchDestinations() {
    try {
        const response = await fetch("data.json"); // Ensure you have this JSON file in your project
        const data = await response.json();
        displayDestinations(data);
    } catch (error) {
        console.error("Error fetching destinations:", error);
    }
}

function displayDestinations(data) {
    const destinationContainer = document.getElementById("destination-results");
    destinationContainer.innerHTML = "";
    
    data.countries.forEach(country => {
        country.cities.forEach(city => {
            const card = document.createElement("div");
            card.classList.add("destination-card");
            card.innerHTML = `
                <img src="${city.imageUrl}" alt="${city.name}">
                <h3>${city.name}</h3>
                <p>${city.description}</p>
                <button>Visit</button>
            `;
            destinationContainer.appendChild(card);
        });
    });
}

function searchDestinations() {
    const query = document.getElementById("search").value.toLowerCase();
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const destinationContainer = document.getElementById("destination-results");
            destinationContainer.innerHTML = "";
            
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(query)) {
                        const card = document.createElement("div");
                        card.classList.add("destination-card");
                        card.innerHTML = `
                            <img src="${city.imageUrl}" alt="${city.name}">
                            <h3>${city.name}</h3>
                            <p>${city.description}</p>
                            <button>Visit</button>
                        `;
                        destinationContainer.appendChild(card);
                    }
                });
            });
        });
}

function clearSearch() {
    document.getElementById("search").value = "";
    fetchDestinations();
}
