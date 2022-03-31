console.log("Terkonesi!");

var fullName = document.getElementById("name");
var email = document.getElementById("email");
var topik = document.getElementById("topik");
var Whatsapp = document.getElementById("whatsapp");
var message = document.getElementById("message");
var button = document.getElementById("kirim");

window.addEventListener("DOMContentLoaded", () => {
  fullName.setAttribute("autocomplete", "off");
  email.setAttribute("autocomplete", "off");
  topik.setAttribute("autocomplete", "off");
  Whatsapp.setAttribute("autocomplete", "off");
  message.setAttribute("autocomplete", "off");
});

function emailValidate(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("masukan Email yang benar!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
}

function longName(event) {
  fullName.setAttribute("minLength", "8");
  if (fullName.validity.tooShort) {
    fullName.setCustomValidity(
      "masukan jumlah karakter setidak berjumlah 8  - 12 character"
    );
    fullName.reportValidity();
  } else {
    fullName.setCustomValidity("");
  }
}

function Topik(event) {
  topik.setAttribute("minLength", "8");
  if (topik.validity.tooShort) {
    topik.setCustomValidity(
      "masukan jumlah karakter setidak berjumlah 8  - 12 characte judul tema"
    );
    topik.reportValidity();
  } else {
    topik.setCustomValidity("");
  }
}

function noWhatsapp(event) {
  Whatsapp.setAttribute("minLength", "12");
  if (Whatsapp.validity.tooShort) {
    Whatsapp.setCustomValidity("Pastikan nomer Whatsupp kamu 12 digit");
    Whatsapp.reportValidity();
  } else {
    Whatsapp.setCustomValidity("");
  }
}

button.addEventListener("submit", function (event) {
  if (
    !fullName.validity.valid ||
    !email.validity.valid ||
    !topik.validity.valid ||
    !Whatsapp.validity.valid ||
    !message.validity.valid
  ) {
    event.preventDefault();
  } else if (message.value == "") {
    message.setCustomValidity(
      "masukan Pesan yang ingin di sampaikan setidaknya 10 character"
    );
    message.reportValidity();
    event.preventDefault();
  } else {
    window.open("https://api.whatsapp.com/send/?phone=6285236471962", "_blank");
  }
});

topik.addEventListener("input", Topik);

Whatsapp.addEventListener("input", noWhatsapp);

fullName.addEventListener("input", longName);

email.addEventListener("keypress", emailValidate);
