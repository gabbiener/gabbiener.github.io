function loadPublications() {
    let currentYear = null;

    fetch("data/publications.json").then(response => response.json()).then(publications => {
        const container = document.getElementById("publications");
        publications.sort((a, b) => Number(a.year) - Number(b.year)).reverse();
        publications.forEach((pub, index) => {
            let authors = pub.authors.replace(/G. Biener/g, "<strong>G. Biener</strong>")
            .replace(/Gabriel Biener/g, "<strong>Gabriel Biener</strong>");
            
            if (pub.year !== currentYear) {
                currentYear = pub.year;
                const yearHeading = document.createElement("h3");
                yearHeading.className = "publication-year";
                yearHeading.textContent = pub.year;

                container.appendChild(yearHeading);
            }

            const item = document.createElement("div");
            item.className = "publication";
            item.innerHTML = `
                <p>${index + 1}. ${authors}, 
                &quot;${pub.title}&quot;,
                <i>${pub.journal}</i>, 
                ${pub.volume},
                pp. ${pub.pages},
                (${pub.year}).
                <a href="${pub.pdf}" target="_blank">PDF</a>
                |
                <a href="https://doi.org/${pub.doi}" target="_blank">DOI</a>
                </p>
                `;
            container.appendChild(item);
        });
    }).catch(error => {console.error("Error loading publications:", error);});
}