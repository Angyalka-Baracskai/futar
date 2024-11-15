const url = "http://localhost:3000/fruit";

document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");

    createButton.addEventListener("click", function () {
        window.location.href = "create.html"
    });

    readButton.addEventListener("click", function () {
        window.location.href = "read.html";
    });

    updateButton.addEventListener("click", function () {
        window.location.href = "update.html";
    });

    deleteButton.addEventListener("click", function () {    
        window.location.href = "delete.html";
    });
});
