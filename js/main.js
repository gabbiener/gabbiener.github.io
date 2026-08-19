function loadPage(page) {

    fetch("pages/" + page).then(response => response.text()).then(html => {
            document.getElementById("content").innerHTML = html;

            // If this is the publications page,
            // run the publications JavaScript.
            if (page === "publications.html") {loadPublications();}
        }).catch(error => {console.error("Error loading page:", error);});
}


document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const page = this.dataset.page;
        loadPage(page);
    });
});


// Load Home when the website starts
loadPage("home.html");