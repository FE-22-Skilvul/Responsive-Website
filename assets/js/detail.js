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
    document.getElementById("blog").innerHTML += 
    `<div class="col-lg-12 bg-dark">
      <div class="row d-flex align-items-center">
        <div class="col-6 text-white">
          <h5 class="mx-5">${value.kategori}</h5>
          <h1 class="mx-5">${value.title}</h1>
          <div class="row mx-5">
            <p class="col-4">oleh ${value.author}</p>
            <p class="col-2">${value.date}</p>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <img class="img-fluid" src="${value.image}" alt="">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col justify-content-center">
        <div class="row">
          <div class="col-8">
            <p class="mt-4">${value.pengertian}</p>
            <p>${value.artikel}</p>
            <h5 class="fw-bold">${value.subbab1}</h5>
            <p>${value.artikel1}</p>
            <h5 class="fw-bold">${value.subbab2}</h5>
            <p>${value.artikel2}</p>
            <hr>    
          </div>
          <div class="col-4">
            <div class="p-3 justify-content-center">
              <h2> Baca Artikel</h2>
            </div>
            <div class="col">
              <div class="fundamental">
                <div class="fundamental-item d-flex">
                    <img src="assets/img/fundamental/empat.jpg" class="fundamental-img" alt="">
                    <h3><a href="#!">${value.title}</a>
                    </h3>
                </div>
                <div class="col">
                    <div class="fundamental-item d-flex">
                        <img src="assets/img/fundamental/batik.jpg" class="fundamental-img"
                            alt="">
                        <h3><a href="#!">${value.title}</a></h3>
                    </div>
                </div>
                <div class="col">
                    <div class="fundamental-item d-flex">
                        <img src="assets/img/fundamental/patung.jpg" class="fundamental-img"
                            alt="">
                        <h3><a href="#!">${value.title}</a></h3>
                    </div>
                </div>
                <div class="col">
                    <div class="fundamental-item d-flex">
                        <img src="assets/img/fundamental/satu.jpg" class="fundamental-img"
                            alt="">
                        <h3><a href="#!">${value.title}</a></h3>
                    </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>`;
    console.log(value);
  });
