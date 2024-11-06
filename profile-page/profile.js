import { getAuth, onAuthStateChanged, updateProfile, sendEmailVerification,deleteUser,updateEmail,updatePassword,signOut } from "../fireBase-Tayyaba-khatri/firebase.js";
let logout = document.getElementById("logout")
let profile_name = document.getElementById("profile-name");
let profile_img = document.getElementById("profile-img");
let user_email = document.getElementById("user-email");
let Email_varification = document.getElementById("Email-varification");
let update_profile = document.getElementById("update-profile");
let delete_profile = document.getElementById("delete-profile");
let update_Email = document.getElementById("update-Email");
let update_Passward = document.getElementById("update-Passward");
let edit_profile = document.getElementById("edit-profile");
let gobtn = document.getElementById('goBtn');
gobtn.addEventListener('click',()=>{
  location.href="../fireBase-Tayyaba-khatri/dashBoard/index.html"
})
const auth = getAuth();
const user = auth.currentUser;
//adding block class when click on edit btn
edit_profile.addEventListener('click',()=>{
  let btn =document.getElementsByName("btn")
  for (let i = 0 ; i < btn.length;i++){
    btn[i].style.display="block"
  }
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    })
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    profile_img.src = user.photoURL
    profile_name.innerHTML= user.displayName
    user_email.innerHTML = user.email
    

    //verify email
    Email_varification.addEventListener("click", () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log("Email verification has send")
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email verification has send",
            showConfirmButton: false,
            timer: 1500
          });

        });
    })
    //update profile
    update_profile.addEventListener('click', () => {
      user.displayName=prompt("enter user name :")
      updateProfile(auth.currentUser, {
        displayName:user.displayName, photoURL: user.photoURL
      }).then(() => {
        console.log("profile updated")
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "profile updated",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
      });
    });
    //delete profile 
    delete_profile.addEventListener("click", () => {
      deleteUser(user).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user deleted",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
      });
    })
    //update email
    update_Email.addEventListener('click',()=>{
      updateEmail(auth.currentUser,user.email).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Email.updated",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
      });
    })
    //update passward 
    update_Passward.addEventListener('click',()=>{
      
     updatePassword(user, newPassword).then(() => {
      Swal.fire({
    position: "top-end",
    icon: "success",
    title: "passward updated",
    showConfirmButton: false,
    timer: 1500
  });
}).catch((error) => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: error,
    showConfirmButton: false,
    timer: 1500
  });
});
    })
   
  } else {
    logout.addEventListener('click',()=>{
      signOut(auth).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged out successfully",
          showConfirmButton: false,
          timer: 1500
        });
            }).catch((error) => {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500
              });
            });
    })

  }
});
