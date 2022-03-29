import { userCreate } from "../../lib/auth-firebase.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";

export default function register() {
  const container = document.createElement("section");

  const template = `
  <div>
    <p>Register!</p>
    <input type="email" id="email" autocomplete="on" />
    <input type="password" id="password" />
    <button id="buttonSubmit">Enviar</button>
    <button id="logout">Logout</button>
  </div>`;

  container.appendChild(header());

  container.innerHTML += template;

  container.appendChild(footer());

  const email = container.querySelector("#email");
  const password = container.querySelector("#password");
  const buttonSubmit = container.querySelector("#buttonSubmit");

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    userCreate(email.value, password.value)
      .then(function () {
        window.location.hash = "#timeLine";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Deu errado!");
        return errorMessage;
      });
  });
  return container;
}
