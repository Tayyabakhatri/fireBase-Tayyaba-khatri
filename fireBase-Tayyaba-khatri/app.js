//importing from firebase.js
import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";
const auth = getAuth();
let signupBtn = document.getElementById("signup");
let signUpPassward = document.getElementById("signUpPassward");
let signUpEmail = document.getElementById("signUpEmail");
signupBtn.addEventListener('click', () => {
  if (signUpEmail.value === "" || signUpPassward.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "enter your all credentials",
      showConfirmButton: false,
      timer: 1500
    });
  }
  else if (signUpEmail.value.trim && signUpPassward.value.trim) {
    createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassward.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignUp successfully",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          location.href = "../signup-images/signin.html"
        }, 3000)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error:" + errorCode)
        switch (errorCode) {
          case "auth/missing-email":
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "ERROR:" + errorMessage,
              showConfirmButton: false,
              timer: 1500
            });
            break;
          case "auth/missing-password":
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "ERROR:" + errorMessage,
              showConfirmButton: false,
              timer: 1500
            });
            break;
          case "auth/email-already-in-use":
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "ERROR:" + errorMessage,
              showConfirmButton: false,
              timer: 1500
            });
            break;
          case "auth/weak-password":
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "ERROR:" + errorMessage,
              showConfirmButton: false,
              timer: 1500
            });
        }

      });
  }


})



