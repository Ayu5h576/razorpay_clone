import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqSstIXh2Jwz6FmuFasdyrpIfvfX6wuzI",
  authDomain: "login-f74d5.firebaseapp.com",
  projectId: "login-f74d5",
  storageBucket: "login-f74d5.appspot.com", // fix storageBucket URL
  messagingSenderId: "852278037934",
  appId: "1:852278037934:web:3a69bc835c114fcb8b8c3f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const showFormBtn = document.getElementById("showFormBtn");
  const closeFormBtn = document.getElementById("closeFormBtn");
  const formPanel = document.getElementById("formPanel");
  const loginForm = document.getElementById("loginForm");

  showFormBtn.addEventListener("click", () => {
    formPanel.classList.remove("-translate-x-full");
    formPanel.classList.add("translate-x-0");
    document.body.classList.add("overflow-hidden"); 
  });

  closeFormBtn.addEventListener("click", () => {
    formPanel.classList.remove("translate-x-0");
    formPanel.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden"); 
  });

  const submit = document.getElementById("submit");
  submit.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, name, email, password)
      .then((userCredential) => {
        alert("Account created successfully!");
        console.log("User:", userCredential.user);
        loginForm.reset();
        formPanel.classList.remove("translate-x-0");
        formPanel.classList.add("-translate-x-full");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
});
