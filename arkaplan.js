const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["#77bd7d", "#690c3d", "#690c3d", "#6052de", "#693d35", "#160f21", "#0f2116", "#bac763", "#d4a9b7"];

button.addEventListener("click", changeBackground);

function changeBackground() {
    const rastgeleSayi = Math.floor(Math.random() * colors.length);
    const secilenRenk = colors [rastgeleSayi];
    body.style.backgroundColor = secilenRenk;
}