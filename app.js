//importing from firebase.js
import { getAuth ,createUserWithEmailAndPassword} from "./firebase.js";
const auth = getAuth();
let signupBtn = document.getElementById("signup");
let signUpPassward= document.getElementById("signUpPassward");
let signUpEmail=document.getElementById("signUpEmail");

signupBtn.addEventListener('click',()=>{
if(signUpEmail.value.trim&&signUpPassward.value.trim){
createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassward.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("ERROR:"+errorMessage)
    console.log("ERROR:"+errorCode)
  });
}else{
  console.log("enter your data")
}
location="signin.html"
})
   
    