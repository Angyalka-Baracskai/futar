const backendurl = "http://localhost:3000/futar";

document.addEventListener("DOMContentLoaded", function () {
  const createButton = document.getElementById("createButton");
  createButton.addEventListener("click", async function (event) {
    //-- böngésző alapértelmezés felülírása, ne küldje el azonnal a backendre az adatokat
    event.preventDefault();

    //-- mező tartalmakat JSON string formátumúra alakitjuk
    const fnev = document.getElementById("fnev").value;
    const ftel = document.getElementById("ftel").value;
    //-- ellenőrzések ----------------------------------------------------------------
    const jsontext = `{"fnev":"${fnev}",
            "ftel":"${ftel}"`; //-- mező tartalmakat JSON string formátumúra alakitjuk
    const json = JSON.parse(jsontext); // JSON stringet JSON objektummá alakitja
    console.log(json);
    const response = await fetch(backendurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json),
    });
    if (response.status === 200) {
      alert("Sikeres adatfelvitel");
      document.getElementById("fnev").value = "";
      document.getElementById("ftel").value = "";
    } else {
      alert("Sikertelen adatfelvitel");
    }
    console.log(response);
  });
});