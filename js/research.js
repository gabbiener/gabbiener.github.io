function openResearchMenu() {
    fetch("pages/research-menu.html").then(response => response.text()).then(html => 
    {
        const researchItem = document.querySelector(".research-item");
        researchItem.insertAdjacentHTML("beforeend", html);

        // Show the popup
        const popup = researchItem.querySelector(".research-popup");
        popup.classList.add("show");

        // Automatically load Project 1
        loadResearchProject("project1.html");
    }).catch(error => 
    {
        console.error("Error loading research menu:", error);
    });
}


function loadResearchProject(project) {
    fetch("pages/" + project).then(response => response.text()).then(html =>
    {
        document.getElementById("content").innerHTML = html;
    }).catch(error => 
    {
        console.error("Error loading research project:", error);
    });
}