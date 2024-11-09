let underline = document.getElementById("underline");
let textarea =document.getElementById("textarea");
let text_right=document.getElementById('text-right');
let text_left =document.getElementById('text-left');
let bold =document.getElementById('bold');
let italic = document.getElementById('italic');
let list = document.getElementById('list');
let formating=document.getElementById('formating')
underline.addEventListener('click', () => {
    document.execCommand("underline"); // Underlines the selected text in contenteditable
});
underline.addEventListener('click',()=>{
textarea.className="underline"
})
underline.addEventListener('dblclick',()=>{
textarea.className=""
})
text_right.addEventListener('click',()=>{
    textarea.className="text_right"
})
text_left.addEventListener('click',()=>{
    textarea.classList="text_left"
})
bold.addEventListener('click',()=>{
    textarea.className="bold"
})
italic.addEventListener('click',()=>{
    textarea.className="italic"
})
list.addEventListener('click',()=>{
    textarea.className="list"
    textarea.innerHTML=`<li>${textarea.innerHTML}</li>`
})
list.addEventListener('dblclick',()=>{
    textarea.innerHTML=`<div>${textarea.innerHTML}</div>`
})
formating.addEventListener('click',()=>{
let all_tools =document.getElementById('all-tools');
all_tools.style.display="block"
})
