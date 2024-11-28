//importing from firebase.js
import {
  getAuth, createUserWithEmailAndPassword,
  collection, db, addDoc,
  getFirestore,
  serverTimestamp,
  getDocs
} from "./firebase.js";

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
  } else if (signUpEmail.value.trim() && signUpPassward.value.trim()) {
    createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassward.value)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignUp successfully",
          showConfirmButton: false,
          timer: 1500
        });

        //firestore 
        let first_name = document.getElementById("first-name");
        let last_name = document.getElementById("last-name");
        let phone_no = document.getElementById("phone_no")
        let usersData = {
          first_name: first_name.value,
          last_name: last_name.value,
          phone_no: phone_no.value,
          createdAt: serverTimestamp()
        }

        console.log(usersData);


        try {
          const docRef = await addDoc(collection(db, "users"), {
            ...usersData
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        // getting all data
        try {
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
        } catch (e) {
          console.log(e)
        }


        //  getting single doc
        // const docRef = doc(db, "users");
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data());
        // } else {
        //   // docSnap.data() will be undefined in this case
        //   console.log("No such document!");
        // }


        //query
        // Create a query against the collection.
        const q = query(docRef, where("first_name", "==", "tayyaba"));
    


        setTimeout(() => {
          window.location.href = "../signup-images/signin.html"

        }, 3000)

      })
//try kernyhen
// const q = query(citiesRef, where("population", ">", 100000), orderBy("population"), limit(2));
// const q = query(citiesRef, orderBy("state"), orderBy("population", "desc"));
// const q = query(citiesRef, orderBy("name", "desc"), limit(3));
// const q = query(citiesRef, orderBy("name"), limit(3));
// const citiesRef = collection(db, "cities");

// // Create a query against the collection.
// const q = query(citiesRef, where("state", "==", "CA"));






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





