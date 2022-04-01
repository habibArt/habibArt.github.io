console.log("Terkonesi!");

var fullName = document.getElementById("name");
var email = document.getElementById("email");
var topik = document.getElementById("topik");
var Whatsapp = document.getElementById("whatsapp");
var message = document.getElementById("message");
var Form = document.getElementsByTagName("form")[0];

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

function Submit(event) {
  if (
    fullName.value === "" ||
    email.value === "" ||
    topik.value === "" ||
    Whatsapp.value === ""
  ) {
    console.log("data tidak boleh kosong");
    event.preventDefault();
  } else if (message.value == "") {
    message.setCustomValidity("masukan pesan jangan sampe kosong");
    message.reportValidity();
    event.preventDefault();
  } else {
    window.open("https://api.whatsapp.com/send/?phone=6285236471962", "_blank");
  }
}

Form.addEventListener("submit", Submit);

topik.addEventListener("input", Topik);

Whatsapp.addEventListener("input", noWhatsapp);

fullName.addEventListener("input", longName);

email.addEventListener("keypress", emailValidate);
