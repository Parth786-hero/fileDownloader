const saveBtn = document.querySelector("button");
const textArea = document.querySelector("textarea");
const selectBox = document.querySelector("select");
const fileName = document.querySelector("input");
saveBtn.addEventListener("click" , ()=>{
    const blob = new Blob([textArea.value] , {type : selectBox.value});
    const dataUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = fileName.value;
    a.click();

    
    textArea.value="";
    fileName.value="";
});

selectBox.addEventListener("change" , ()=>{
    saveBtn.innerText = `Save as ${selectBox.options[selectBox.selectedIndex].innerText.split(" ")[0]} file`;
})
