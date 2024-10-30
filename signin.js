


// import "./signin.css"
import { getAuth, signInWithEmailAndPassword } from "./firebase.js";
let loginPassward = document.getElementById("loginPassward");
let loginEmail = document.getElementById("loginEmail");
let loginBtn = document.getElementById("loginBtn")
const auth = getAuth();
loginBtn.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, loginPassward.value, loginEmail.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)
  });
  // if (loginEmail.value === "" && loginPassward.value === "") {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "error",
  //     title: "Please enter both email and password",
  //     showConfirmButton: false,
  //     timer: 1500
  //   });
  // } else if (loginEmail.value === "") {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "error",
  //     title: "Please enter email",
  //     showConfirmButton: false,
  //     timer: 1500
  //   });
  // } else if (loginPassward.value === "") {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "error",
  //     title: "Please enter password",
  //     showConfirmButton: false,
  //     timer: 1500
  //   });
  // } else {
  //   signInWithEmailAndPassword(auth, loginPassward.value, loginEmail.value)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user)
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage)
  //       console.log(errorCode)
  //     });
  // }
  location = "/dashBoard/index.html"
})












