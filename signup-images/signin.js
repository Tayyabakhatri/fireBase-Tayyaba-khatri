import { getAuth, signInWithEmailAndPassword  } from "../fireBase-Tayyaba-khatri/firebase.js";
document.addEventListener("DOMContentLoaded",()=>{
let loginPassward = document.getElementById("loginPassward");
let loginEmail = document.getElementById("loginEmail");
let loginBtn = document.getElementById("loginBtn");
const auth = getAuth();
loginBtn.addEventListener('click', () => {
  if (loginEmail.value && loginPassward .value) {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassward .value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500
        });
        location.href="./profile-page/profile.html"
        // setTimeout(() => {
         
        // }, 2000)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        console.log(errorCode)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title:errorCode,
          showConfirmButton: false,
          timer: 1500
        });
      });

  }
  else if (loginEmail.value === "" && loginPassward.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Please enter both email and password",
      showConfirmButton: false,
      timer: 1500
    });
  } else if (loginEmail.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Please enter email",
      showConfirmButton: false,
      timer: 1500
    });
  } else if (loginPassward.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Please enter password",
      showConfirmButton: false,
      timer: 1500
    });
  }
})
})
let google = document.getElementById("googleBtn")
google.addEventListener('click',()=>{
  console.log("hello")
})













