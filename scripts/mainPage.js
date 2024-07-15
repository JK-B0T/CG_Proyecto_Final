window.addEventListener("DOMContentLoaded", main, false);

function main() {
    const openItemShopBtn = document.querySelector("#openItemShop");
    const openUnitShopBtn = document.querySelector("#openUnitShop");
    const unitArray = Array.from(document.querySelectorAll(".unitContainer"));

    const sectionArray = [
        document.getElementById("section0"),
        document.getElementById("section1"),
        document.getElementById("section2"),
    ]

    let savedSections = [

    ]

    openItemShopBtn.addEventListener("click", openSection ,false);
    openUnitShopBtn.addEventListener("click", openSection ,false);
    unitArray.forEach(element => {
        element.addEventListener("click", openSection ,false)
    });

    function createCloseBtn() {
        const header = document.createElement("header");
            const button = document.createElement("button");
            button.classList.add("closeSectionBtn");
            button.textContent = "X";
        header.appendChild(button);

        return header.cloneNode(true);
    }

    function createStatsLayout() {
        const section = document.createElement("section");
            const headEquip = document.createElement("div");
            headEquip.classList.add("statsHeadItem", "equipment"); //Select to modify hat

            const unit = document.createElement("div");
            unit.classList.add("unit");
                const article = document.createElement("article");
                article.classList.add("unitContainer"); //Select to modify unit
            unit.appendChild(article);

            const faceEquip = document.createElement("div");
            headEquip.classList.add("statsFace", "equipment"); //Select to modify face

            const leftEquip = document.createElement("div");
            headEquip.classList.add("statsLeftItem", "equipment"); //Select to modify left item

            const rightEquip = document.createElement("div");
            headEquip.classList.add("statsRightItem", "equipment"); //Select to modify right item

            const hpTag = document.createElement("span");
            hpTag.classList.add("statsTag");
            const hpBar = document.createElement("div");
            hpBar.classList.add("statsBar", "hpBar");
                const hpBody = document.createElement("div");
                hpBody.classList.add("bodyBar");
                const hpFace = document.createElement("div");
                hpFace.classList.add("faceBar");
                const hpHead = document.createElement("div");
                hpHead.classList.add("headItemBar");
                const hpRight = document.createElement("div");
                hpRight.classList.add("rightItemBar");
                const hpLeft = document.createElement("div");
                hpLeft.classList.add("leftItemBar");
                const hpEmpty = document.createElement("div");
                hpEmpty.classList.add("spaceBar");
            hpBar.appendChildre(hpBody);
            hpBar.appendChildre(hpFace);
            hpBar.appendChildre(hpHead);
            hpBar.appendChildre(hpRight);
            hpBar.appendChildre(hpLeft);
            hpBar.appendChildre(hpEmpty);

            const defTag = document.createElement("span");
            defTag.classList.add("statsTag");
            const defBar = document.createElement("div");
            defBar.classList.add("statsBar", "defBar");
                const defBody = document.createElement("div");
                defBody.classList.add("bodyBar");
                const defFace = document.createElement("div");
                defFace.classList.add("faceBar");
                const defHead = document.createElement("div");
                defHead.classList.add("headItemBar");
                const defRight = document.createElement("div");
                defRight.classList.add("rightItemBar");
                const defLeft = document.createElement("div");
                defLeft.classList.add("leftItemBar");
                const defEmpty = document.createElement("div");
                defEmpty.classList.add("spaceBar");
            defBar.appendChildre(defBody);
            defBar.appendChildre(defFace);
            defBar.appendChildre(defHead);
            defBar.appendChildre(defRight);
            defBar.appendChildre(defLeft);
            defBar.appendChildre(defEmpty);

            const atkTag = document.createElement("span");
            atkTag.classList.add("statsTag");
            const atkBar = document.createElement("div");
            atkBar.classList.add("statsBar", "atkBar");
                const atkBody = document.createElement("div");
                atkBody.classList.add("bodyBar");
                const atkFace = document.createElement("div");
                atkFace.classList.add("faceBar");
                const atkHead = document.createElement("div");
                atkHead.classList.add("headItemBar");
                const atkRight = document.createElement("div");
                atkRight.classList.add("rightItemBar");
                const atkLeft = document.createElement("div");
                atkLeft.classList.add("leftItemBar");
                const atkEmpty = document.createElement("div");
                atkEmpty.classList.add("spaceBar");
            atkBar.appendChildre(atkBody);
            atkBar.appendChildre(atkFace);
            atkBar.appendChildre(atkHead);
            atkBar.appendChildre(atkRight);
            atkBar.appendChildre(atkLeft);
            atkBar.appendChildre(atkEmpty);

            const spdTag = document.createElement("span");
            spdTag.classList.add("statsTag");
            const spdBar = document.createElement("div");
            spdTag.classList.add("statsBar", "spdBar");
                const spdBody = document.createElement("div");
                spdBody.classList.add("bodyBar");
                const spdFace = document.createElement("div");
                spdFace.classList.add("faceBar");
                const spdHead = document.createElement("div");
                spdHead.classList.add("headItemBar");
                const spdRight = document.createElement("div");
                spdRight.classList.add("rightItemBar");
                const spdLeft = document.createElement("div");
                spdLeft.classList.add("leftItemBar");
                const spdEmpty = document.createElement("div");
                spdEmpty.classList.add("spaceBar");
            spdBar.appendChildre(spdBody);
            spdBar.appendChildre(spdFace);
            spdBar.appendChildre(spdHead);
            spdBar.appendChildre(spdRight);
            spdBar.appendChildre(spdLeft);
            spdBar.appendChildre(spdEmpty);

            const skillsTag = document.createElement("span");
            skillsTag.classList.add("statsTag");
            const skillsList = document.createElement("div");
            skillsList.classList.add("statsSkills"); //Select to modify skills
            
        section.appendChild(headEquip);
        section.appendChild(unit);
        section.appendChild(faceEquip);
        section.appendChild(leftEquip);
        section.appendChild(rightEquip);
        section.appendChild(hpTag);
        section.appendChild(hpBar);
        section.appendChild(atkTag);
        section.appendChild(atkBar);
        section.appendChild(atkTag);
        section.appendChild(atkBar);
        section.appendChild(spdTag);
        section.appendChild(spdBar);
        section.appendChild(skillsTag);
        section.appendChild(skillsList);

        return section.cloneNode(true);
    }

    function checkOpenSections() {
        const openSections = Array.from(document.querySelectorAll(".ocuppyAllRows"));
        return openSections.length;
    }

    function changeLayoutOnOpen(e) {
        const openSectionsNum = checkOpenSections();
        console.log(openSectionsNum);
        if (openSectionsNum === 0) {
            savedSections[0] = sectionArray[0].querySelector("section");
            savedSections[1] = sectionArray[1].querySelector("section");

            sectionArray[0].classList.remove("ocuppyAllColumns");
            sectionArray[0].classList.remove("itemStorage");
            sectionArray[0].classList.add("ocuppyAllRows");
            sectionArray[0].classList.add("openedItemStorage");
            sectionArray[0].querySelector("section").remove();

            sectionArray[1].classList.remove("ocuppyAllColumns");
            sectionArray[1].querySelector("section").remove();
            sectionArray[1].appendChild(savedSections[0]);
            sectionArray[2].classList.remove("invisible");
            sectionArray[2].appendChild(savedSections[1]);
        } else if (openSectionsNum === 1) {
            savedSections[1] = sectionArray[1].querySelector("section");
            savedSections[2] = sectionArray[2].querySelector("section");

            sectionArray[2].classList.add("invisible");
            while(sectionArray[2].firstChild){
                sectionArray[2].removeChild(sectionArray[2].firstChild);
            }

            sectionArray[1].classList.remove("ocuppyAllColumns");
            sectionArray[1].classList.add("ocuppyAllRows");
            while(sectionArray[1].firstChild){
                sectionArray[1].removeChild(sectionArray[1].firstChild);
            }
        } else {
            return false;
        }
        return true;
    }

    function changeLayoutOnClosed(e) {
        const openSectionsNum = checkOpenSections();
        console.log(openSectionsNum);
        if (openSectionsNum === 0) {
            savedSections[0] = sectionArray[0].querySelector("section");
            savedSections[1] = sectionArray[1].querySelector("section");

            sectionArray[0].classList.remove("ocuppyAllColumns");
            sectionArray[0].classList.remove("itemStorage");
            sectionArray[0].classList.add("ocuppyAllRows");
            sectionArray[0].classList.add("openedItemStorage");
            sectionArray[0].querySelector("section").remove();

            sectionArray[1].classList.remove("ocuppyAllColumns");
            sectionArray[1].querySelector("section").remove();
            sectionArray[1].appendChild(savedSections[0]);
            sectionArray[2].classList.remove("invisible");
            sectionArray[2].appendChild(savedSections[1]);
        } else if (openSectionsNum === 1) {
            savedSections[1] = sectionArray[1].querySelector("section");
            savedSections[2] = sectionArray[2].querySelector("section");

            sectionArray[2].classList.add("invisible");
            while(sectionArray[2].firstChild){
                sectionArray[2].removeChild(sectionArray[2].firstChild);
            }

            sectionArray[1].classList.remove("ocuppyAllColumns");
            sectionArray[1].classList.add("ocuppyAllRows");
            while(sectionArray[1].firstChild){
                sectionArray[1].removeChild(sectionArray[1].firstChild);
            }
        } else {
            return false;
        }
        return true;
    }

    /*  CARGAR TIENDA/STATS
        -Cargan los elementos asociados al id de la tienda en la seccion 2.
            -2 layouts diferentes ya cargados en el js y un objeto con
            los diferentes elementos de inserción.

    /*  Eliminar TIENDA/STATS
    1.Comprobar la seccion a eliminar:
        -If la id de (button -> header -> section) == 1
        1.1 Devuelve true:
            -Convierte seccion 1 en fila.
            -Elimina contenido de seccion 1.
            -Añade contenido guardado de almacen 1 a seccion 1.
            -Convierte seccion 2 en fila.
            -Añade contenido guardado de almacen 2 a seccion 2.
            -Oculta seccion 3 y elimina su contenido.
        1.2 Devuelve false:
            -Convierte seccion 2 en media fila.
            -Elimina contenido de seccion 2.
            -Añade contenido guardado de almacen 1 a seccion 2.
            -Muestra seccion 3.
            -Añade contenido guardado de almacen 2 a seccion 3.
    */
   /*
    Funcion para crear unidades e items
        hay que crear el boton de compra
    Funcion para hacer consultas en la base de datos 
    y cargarlo todo desde el principio
    Funcion para subir información a la base de datos
    forma de meter nuevos objetos en la base de datos
   */

    function openSection(e) {
        if(e.target.id == "openItemShop") {
            if (changeLayoutOnOpen(e)) {
                e.target.disabled = true;
            }
        } else if (e.target.id == "openUnitShop") {
            if (changeLayoutOnOpen(e)) {
                e.target.disabled = true;
            }
        } else {
            if (changeLayoutOnOpen(e)) {
                let currentElement = e.target;
                while(currentElement.tagName !== "ARTICLE") {
                    currentElement = currentElement.parentNode;
                }
                if (!currentElement.disabled) {
    
                    currentElement.disabled = true;
                }
            }   
        }
    }
}