import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  provider,
  signInWithPopup,
  auth
} from "../fireBase-Tayyaba-khatri/firebase.js";
// document.addEventListener("DOMContentLoaded", () => {
let loginPassward = document.getElementById("loginPassward");
let loginEmail = document.getElementById("loginEmail");
let loginBtn = document.getElementById("loginBtn");
// const auth = getAuth();
loginBtn.addEventListener('click', () => {
  if (loginEmail.value && loginPassward.value) {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassward.value)
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

        window.location.href = "../profile-page/profile.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        console.log(errorCode)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: errorCode,
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
// })
let google = document.getElementById("googleBtn")
google.addEventListener('click', () => {
  // console.log("hello")
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      location.href = "../profile-page/profile.html"
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage)
      // The email of the user's account used.
      const email = error.customData.email;
      ; console.log(email);

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential)
      // ...
    });
})

loginBtn.addEventListener('click', async () => {


  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

})