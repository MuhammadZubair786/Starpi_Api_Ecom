var add_btn = document.getElementsByTagName("button");

//Add Product
add_btn[0].addEventListener("click", function () {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 238b737de4a597d4f006ef2114d4c52f4f20c9bb7d5e45c61d52d5d4669c4d6dacfd7f89bf8514990fc019d5f0e563cfefc09a9c50a4fe49a8ddb810f2a1e0552bfa02b47712b74a7c6d45de924873492e5a132251a66a9096efc452813791cdd0634628302540d97d240be515f926e871be3d0d0dd210cff7ec8e34b04fe5a2"
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    data: {
      Title: "New Software",
      Slug: "Cb-Software-2",
      Color: "Black",
      Price: 12000,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:1337/api/products/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
});


// get_spefice_Product
add_btn[0].addEventListener("click", function () {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 238b737de4a597d4f006ef2114d4c52f4f20c9bb7d5e45c61d52d5d4669c4d6dacfd7f89bf8514990fc019d5f0e563cfefc09a9c50a4fe49a8ddb810f2a1e0552bfa02b47712b74a7c6d45de924873492e5a132251a66a9096efc452813791cdd0634628302540d97d240be515f926e871be3d0d0dd210cff7ec8e34b04fe5a2");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/products/2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})

// All_Product
add_btn[1].addEventListener("click", function () {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 238b737de4a597d4f006ef2114d4c52f4f20c9bb7d5e45c61d52d5d4669c4d6dacfd7f89bf8514990fc019d5f0e563cfefc09a9c50a4fe49a8ddb810f2a1e0552bfa02b47712b74a7c6d45de924873492e5a132251a66a9096efc452813791cdd0634628302540d97d240be515f926e871be3d0d0dd210cff7ec8e34b04fe5a2");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/products/?populate=*", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

})

//Delete_Product
add_btn[1].addEventListener("click", function () {
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 238b737de4a597d4f006ef2114d4c52f4f20c9bb7d5e45c61d52d5d4669c4d6dacfd7f89bf8514990fc019d5f0e563cfefc09a9c50a4fe49a8ddb810f2a1e0552bfa02b47712b74a7c6d45de924873492e5a132251a66a9096efc452813791cdd0634628302540d97d240be515f926e871be3d0d0dd210cff7ec8e34b04fe5a2");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/products/3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})

//Update Product
add_btn[1].addEventListener("click", function () {

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 238b737de4a597d4f006ef2114d4c52f4f20c9bb7d5e45c61d52d5d4669c4d6dacfd7f89bf8514990fc019d5f0e563cfefc09a9c50a4fe49a8ddb810f2a1e0552bfa02b47712b74a7c6d45de924873492e5a132251a66a9096efc452813791cdd0634628302540d97d240be515f926e871be3d0d0dd210cff7ec8e34b04fe5a2");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "data": {
    "Title": "Hd Tv 2",
    "Slug": "Cb-slug-2",
    "Color": "Yellow",
    "Price": 340
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/products/3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})
