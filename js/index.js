const APIKEY = "151d5c94ea77b883a17a4a33cfe0f9f7";
// appel l'API openweather avec ville en paramêtre de fonction
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr `;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML =
          "<i class='fa-solid fa-city'></i>" + data.name;
        document.querySelector("#temp").innerHTML =
          "<i class='fa-solid fa-temperature-full'></i>" + data.main.temp + "°";
        document.querySelector("#humidity").innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
          "<i class='fas fa-wind'></i>" + data.wind.speed + "M/S";
      })
    )
    .catch((err) => console.log("erreur : " + err));
};
// écouteur d'évenement sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  // ici on selectionne l'input
  let city = document.querySelector("#inputCity").value;
  // ici on vide le champs au click
  inputCity.value = "";
  apiCall(city);
});
// appel par défaut au chargement de la page
apiCall("bordeaux");
