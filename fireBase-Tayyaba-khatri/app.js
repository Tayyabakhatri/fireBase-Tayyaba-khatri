//importing from firebase.js
import { getAuth, createUserWithEmailAndPassword,collection ,db,addDoc} from "./firebase.js";
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
          window.location.href = "../signup-images/signin.html"

        }, 3000)
        

        }, 2000)
      }

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
//firestore methods
let first_name= document.getElementById("first-name");
let last_name=document.getElementById("last-name");
let phone_no= document.getElementById("phone_no")
signupBtn.addEventListener('click',async ()=>{
  let usersData={
  first_name:first_name.value,
  last_name:last_name.value,
  phone_no:phone_no.value
}
// console.log(users.first_name,users.last_name);
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       ...users      
//     });
//     console.log(first_name.value);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

try {
  const docRef = await addDoc(collection(db, "usersData"), {
...usersData
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
 })




