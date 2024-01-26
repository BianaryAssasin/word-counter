const textInput = document.getElementById("text");
const word = document.getElementById("word");
const char = document.getElementById("charactor");
const space = document.getElementById("space");

let stringWithNoSpace;

textInput.addEventListener("keyup", () => {
    setCounters();
})

function setCounters() {
    setTimeout(() => {
        let textLength = textInput.textContent.split(" ") || textInput.textContent.split("\n");

        let realTextLength = [];
        for(let i = 0; i < textLength.length; i++) {
            if(textLength[i] != "") {
                realTextLength.push(textLength[i]);
            }
        }
        
        if(!space.checked) {
            stringWithNoSpace = textInput.textContent.replace(/\s/g, "");            
        } else {
            stringWithNoSpace = textInput.textContent;
        }
        
        word.textContent = `Words: ${realTextLength.length}`
        char.textContent = `Charactors: ${stringWithNoSpace.length}`   
    }, 100)
}