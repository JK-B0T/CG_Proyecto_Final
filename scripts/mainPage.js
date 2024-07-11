window.addEventListener("DOMContentLoaded", main, false);
console.log("hola")

function main() {
    const openItemShopBtn = document.querySelector("#openItemShop");
    const openUnitShopBtn = document.querySelector("#openUnitShop");
    const unitArray = Array.from(document.querySelectorAll("unitContainer"));

    openItemShopBtn.addEventListener("click", openSection ,false);
    openUnitShopBtn.addEventListener("click", openSection ,false);
    unitArray.forEach(element => {
        element.addEventListener("click", openSection ,false)
    });

    function openSection(e) {
        console.log(e.target);
        //if(e.target)
    }
}