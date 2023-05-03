const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(queryString);
const url = "https://64513164e1f6f1bb22aab5b3.mockapi.io/artikel/" + id;

fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((value) => {
    document.getElementById("blog").innerHTML += `<div class="col-6 text-white">
    <h5 class="mx-5">${value.kategori}</h5>
    <h1 class="mx-5">${value.title}</h1>
    <div class="row mx-5">
      <p class="col-4">oleh ${value.author}</p>
      <p class="col-2">${value.date}</p>
    </div>
  </div>
  <div class="col-6 d-flex justify-content-end">
    <img class="img-fluid justify-content-end" src="${value.image}" alt="">
  </div>`;
    console.log(value);
  });