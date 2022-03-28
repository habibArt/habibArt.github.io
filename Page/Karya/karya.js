console.log("anda sudah terhubung");

// menangkap element modal
var modal = document.getElementById("myModal");

// mendapatkan gambar dan menambahkan kedalam modal
var img = document.getElementsByClassName("card-img-top");
var modalImg = document.getElementById("img01");
var i;

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// menangkap element <span></span> untuk menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika pengguna clicks on <span> (x), akan menutup modal
span.onclick = function () {
  modal.style.display = "none";
};
