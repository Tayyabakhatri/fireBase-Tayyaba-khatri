import { getAuth, onAuthStateChanged } from "../fireBase-Tayyaba-khatri/firebase.js";
let underline = document.getElementById("underline");
let textarea = document.getElementById("textarea");
let text_right = document.getElementById('text-right');
let text_left = document.getElementById('text-left');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let list = document.getElementById('list');
let formating = document.getElementById('formating');
let send = document.getElementById('send');
let from = document.getElementById('from');
let modeBtn = document.getElementById("modeBtn")
const auth = getAuth();
const user = auth.currentUser;
// const uid = user.uid;
onAuthStateChanged(auth, (user) => {
   if(user){

       console.log(user)
       user.providerData.forEach((profile) => {
         console.log("Sign-in provider: " + profile.providerId);
         console.log("  Provider-specific UID: " + profile.uid);
         console.log("  Name: " + profile.displayName);
         console.log("  Email: " + profile.email);
         console.log("  Photo URL: " + profile.photoURL);
       })
    }
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    from.value=" "+user.email
    from.style.color="blue"
    //   profile_img.src = user.photoURL
    //   profile_name.innerHTML= user.displayName
    //   user_email.innerHTML = user.email
})  

modeBtn.addEventListener("click",()=>{
    `<div>`
})
underline.addEventListener('click', () => {
    textarea.classList.toggle = "underline "
})
underline.addEventListener('dblclick', () => {
    textarea.classList.toggle = ""
})
text_right.addEventListener('click', () => {
    textarea.classList.toggle = "text_right "
})
text_left.addEventListener('click', () => {
    textarea.classList.toggle = "text_left "
})
bold.addEventListener('click', () => {
    textarea.classList.toggle = "bold "
})
italic.addEventListener('click', () => {
    textarea.classList.toggle = "italic "
})
list.addEventListener('click', () => {
    textarea.classList.toggle = "list "
    textarea.innerHTML = `<li>${textarea.innerHTML}</li>`
})
list.addEventListener('dblclick', () => {
    textarea.innerHTML = `<div>${textarea.innerHTML}</div>`
})
formating.addEventListener('click', () => {
    let all_tools = document.getElementById('all-tools');
    all_tools.style.display = "block"
})
send.addEventListener('click', () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "email send successfully",
        showConfirmButton: false,
        timer: 1500
    });
})
