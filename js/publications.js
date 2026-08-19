function loadPublications() {
    fetch("data/publications.json").then(response => response.json()).then(publications => {
        const container = document.getElementById("publications");
        publications.sort((a, b) => Number(a.year) - Number(b.year)).reverse();
        publications.forEach((pub, index) => {
            const authors = pub.authors.replace(/Gabriel Biener/g, "<strong>Gabriel Biener</strong>");
            authors.replace(/G. Biener/g, "<strong>G. Biener</strong>");
            const item = document.createElement("div");
            item.className = "publication";
            item.innerHTML = `
                <p>${index + 1}. ${authors}, 
                ${pub.title}, 
                <i>${pub.journal}</i>, 
                ${pub.volume}, 
                ${pub.year}, 
                <a href="${pub.pdf}" target="_blank">PDF</a>
                |
                <a href="https://doi.org/${pub.doi}" target="_blank">DOI</a>
                </p>
                `;
            container.appendChild(item);
        });
    }).catch(error => {console.error("Error loading publications:", error);});
}