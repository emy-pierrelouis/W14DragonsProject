// Some form validation

const breederInput = document.getElementById("breeder");
const sanctuaryDatalist = document.getElementById("sanctuary");

breederInput.addEventListener("blur", function ()
{
    const inputValue = breederInput.value.toLowerCase();
    const options = Array.from(sanctuaryDatalist.querySelectorAll("option")).map(option => option.value.toLowerCase());

    if (!options.includes(inputValue))
    {
        alert("Please enter a valid breeding sanctuary.");
    }
});

const inputElement = document.getElementById("type");
const datalistElement = document.getElementById("dragon-species");

inputElement.addEventListener("blur", function ()
{
    const inputValue = inputElement.value.toLowerCase();
    const options = Array.from(datalistElement.querySelectorAll("option")).map(option => option.value.toLowerCase());

    if (!options.includes(inputValue)) 
    {
        alert("Please enter a valid dragon species.");
    }
});

const dragonElement = document.getElementById("dragon-breed");
const dragonDatalist = document.getElementById("dragon-breeds");

dragonElement.addEventListener("blur", function () 
{
    const inputValue = dragonElement.value.toLowerCase();
    const options = Array.from(dragonDatalist.querySelectorAll("option")).map(option => option.value.toLowerCase());

    if (!options.includes(inputValue)) 
    {
        alert("Please enter a valid dragon breed.");
    }
});

const licenseInput = document.getElementById("standard-license");

licenseInput.addEventListener("blur", function () {
    const inputValue = licenseInput.value;
    const pattern = /[A-Za-z][A-Za-z][A-Za-z][0-9]+\s[0-9]+\s[0-9]+[A-Za-z][0-9]+\s[0-9]+[A-Za-z][A-Za-z][0-9]+/i;

    if (!pattern.test(inputValue)) 
    {
        alert("Please enter a valid license in the format AAA# #### ##A#.");
    }
});

// I was going to also have one for credit card numbers, which would have followed the same principal as above.
// I could not find how to make the regex work.