//importing from firebase.js
import { getAuth ,createUserWithEmailAndPassword} from "./firebase.js";
const auth = getAuth();
let signupBtn = document.getElementById("signup");
let signUpPassward= document.getElementById("signUpPassward");
let signUpEmail=document.getElementById("signUpEmail");
signupBtn.addEventListener('click', () => {
  if (signUpEmail.value === "" && signUpPassward.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Please enter both email and password",
      showConfirmButton: false,
      timer: 1500
    });
  } else if (signUpEmail.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Please enter email",
      showConfirmButton: false,
      timer: 1500
    });
  } else if (signUpPassward.value === "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Please enter password",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    signInWithEmailAndPassword(auth, signUpPassward.value, signUpEmail.value)
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
   location="signin.html"
  }
})
// signupBtn.addEventListener('click',()=>{
// if(signUpEmail.value.trim&&signUpPassward.value.trim){
// createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassward.value)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("ERROR:"+errorMessage)
//     console.log("ERROR:"+errorCode)
//   });
// }else{
//   console.log("enter your data")
// }
// location="signin.html"
// })
   
    