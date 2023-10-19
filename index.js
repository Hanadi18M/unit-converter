let inputBtn = document.getElementById("input-btn")
const converBtn = document.getElementById("convert-btn")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
const toggle = document.getElementById("toggle")
const body = document.querySelector("body")

converBtn.addEventListener("click", function(){
    let input = inputBtn.value
    let feet = input * 3.281
    let Feet = feet.toFixed(3);
    let gallon = input * 0.264
    let Gallon = gallon.toFixed(3);
    let pound = input * 2.204
    let Pound = pound.toFixed(3);
    let meter = input / 3.281
    let Meter = meter.toFixed(3)
    let liter = input / 0.264
    let Liter = liter.toFixed(3)
    let kilogram = input / 2.204
    let Kilogram = kilogram.toFixed(3)
    length.textContent = `${input} meters = ${Feet} feet | ${input} feet = ${Meter} meters`
    volume.textContent = `${input} liters = ${Gallon} gallons | ${input} gallons = ${Liter} liters`
    mass.textContent = `${input} kilos = ${Pound} pounds | ${input} pounds = ${Kilogram} kilos`
    inputBtn.value = ""
})

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon")
    document.body.classList.toggle('dark-theme');
})

