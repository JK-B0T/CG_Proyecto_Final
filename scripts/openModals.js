window.addEventListener("DOMContentLoaded", main, false);

function main() {
    const modalArray = Array.from(document.querySelectorAll("dialog"));
    const closeModalArray = Array.from(document.querySelectorAll(".closeModalBtn"));
    const openModalArray = Array.from(document.querySelectorAll(".openModalBtn"));

    for (let i = 0; i < modalArray.length; i++) {
        openModalArray[i].addEventListener("click", () => {
            modalArray[i].showModal();
        },false)

        closeModalArray[i].addEventListener("click", () => {
            modalArray[i].close();
        },false)
    }
}