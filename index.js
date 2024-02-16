let imageEl1 = document.getElementById("image1");
let imageEl2 = document.getElementById("image2");
let imageEl3 = document.getElementById("image3");

function settingattributes(data) {
  imageEl1.setAttribute("src", data[0].image);
  imageEl2.setAttribute("src", data[1].image);
  imageEl3.setAttribute("src", data[2].image);
}

let url = "https://products-api-2ttf.onrender.com/api/products";
let options = {
  method: "GET",
};
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    console.log(jsonData[0].image);
    settingattributes(jsonData);
  });
