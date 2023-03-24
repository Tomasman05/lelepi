// Vitovszki Tamás, 0358-as feladat, 2023.03.24
const sideAInput = document.querySelector("#sideA")
const sideBInput = document.querySelector("#sideB")
const sideCInput = document.querySelector("#sideC")
const calcBtn = document.querySelector("#calcBtn")
const volumeOutput = document.querySelector("#volume")


if(calcBtn){
    calcBtn.addEventListener("click", ()=>{
        calculate()
    })
}
function calculate(){
    let resSideA = checkInput(sideAInput.value)
    let resSideB = checkInput(sideBInput.value)
    let resSideC = checkInput(sideCInput.value)
    if(resSideA&&resSideB&&resSideC){
        const sideA = Number(sideAInput.value)
        const sideB = Number(sideBInput.value)
        const sideC = Number(sideCInput.value)
        let volume = calcVolume(sideA,sideB,sideC)
        volumeOutput.value=volume+" cm³"
        result.style.display = "block"
        deleteInputs()
    }

}
function calcVolume(sideA,sideB,sideC){
    return (sideA*sideB*sideC)
}
if(sideAInput && sideBInput&& sideCInput){

    sideAInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
    sideBInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
    sideCInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
}
function checkInput(input){
    let res =input.match(/^[0-9]+$/)
    return res
}
function deleteInputs(){
    sideAInput.value=""
    sideBInput.value=""
    sideCInput.value=""
}