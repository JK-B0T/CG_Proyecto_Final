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

    let openedStats = [

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

    function createItemElement () {
        const article = document.createElement("article");
        article.classList.add("itemContainer")

            const itemImg = document.createElement("img");

            const price = document.createElement("div");
            price.classList.add("price")
                const priceText = document.createElement("span");
                const moneyImg = document.createElement("img");
            price.appendChild(priceText);
            price.appendChild(moneyImg);

        article.appendChild(itemImg);
        article.appendChild(price);

        return article.cloneNode(true);
    }

    function createUnitElement (id, isStats = false) {
        const article = document.createElement("article");
        if (!isStats) {
            article.setAttribute("id", `unit${id}`)
        }
        article.classList.add("unitContainer")

            const lvl = document.createElement("div");
            article.classList.add("charLvl")
                const lvlText = document.createElement("span");
            lvl.appendChild(lvlText);

            const bodyImg = document.createElement("img");
            bodyImg.classList.add("charBody");
            const charFace = document.createElement("img");
            charFace.classList.add("charBody");
            const charHeadItem = document.createElement("img");
            charHeadItem.classList.add("charBody");
            const charRightItem = document.createElement("img");
            charRightItem.classList.add("charBody");
            const charLeftItem = document.createElement("img");
            charLeftItem.classList.add("charBody");

            const price = document.createElement("div");
            price.classList.add("charPrice")
                const priceText = document.createElement("span");
                const moneyImg = document.createElement("img");
            price.appendChild(priceText);
            price.appendChild(moneyImg);

        article.appendChild(lvl);
        article.appendChild(bodyImg);
        article.appendChild(charFace);
        article.appendChild(charHeadItem);
        article.appendChild(charRightItem);
        article.appendChild(charLeftItem);
        article.appendChild(price);

        return article.cloneNode(true);
    }

    function createStatsLayout(id) {
        const section = document.createElement("section");
        section.setAttribute("id", `${id}`)
            const headEquip = document.createElement("div");
            headEquip.classList.add("statsHeadItem", "equipment"); //Select to modify hat

            const unit = document.createElement("div");
            unit.classList.add("unit"); //Select to modify unit

            const faceEquip = document.createElement("div");
            faceEquip.classList.add("statsFace", "equipment"); //Select to modify face

            const leftEquip = document.createElement("div");
            leftEquip.classList.add("statsLeftItem", "equipment"); //Select to modify left item

            const rightEquip = document.createElement("div");
            rightEquip.classList.add("statsRightItem", "equipment"); //Select to modify right item

            const hpTag = document.createElement("span");
            hpTag.textContent = "HEALTH"
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
            hpBar.appendChild(hpBody);
            hpBar.appendChild(hpFace);
            hpBar.appendChild(hpHead);
            hpBar.appendChild(hpRight);
            hpBar.appendChild(hpLeft);
            hpBar.appendChild(hpEmpty);

            const defTag = document.createElement("span");
            defTag.textContent = "DEFENSE"
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
            defBar.appendChild(defBody);
            defBar.appendChild(defFace);
            defBar.appendChild(defHead);
            defBar.appendChild(defRight);
            defBar.appendChild(defLeft);
            defBar.appendChild(defEmpty);

            const atkTag = document.createElement("span");
            atkTag.textContent = "ATTACK"
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
            atkBar.appendChild(atkBody);
            atkBar.appendChild(atkFace);
            atkBar.appendChild(atkHead);
            atkBar.appendChild(atkRight);
            atkBar.appendChild(atkLeft);
            atkBar.appendChild(atkEmpty);

            const spdTag = document.createElement("span");
            spdTag.textContent = "SPEED"
            spdTag.classList.add("statsTag");
            const spdBar = document.createElement("div");
            spdBar.classList.add("statsBar", "spdBar");
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
            spdBar.appendChild(spdBody);
            spdBar.appendChild(spdFace);
            spdBar.appendChild(spdHead);
            spdBar.appendChild(spdRight);
            spdBar.appendChild(spdLeft);
            spdBar.appendChild(spdEmpty);

            const skillsTag = document.createElement("span");
            skillsTag.textContent = "SKILLS"
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
        section.appendChild(defTag);
        section.appendChild(defBar);
        section.appendChild(atkTag);
        section.appendChild(atkBar);
        section.appendChild(spdTag);
        section.appendChild(spdBar);
        section.appendChild(skillsTag);
        section.appendChild(skillsList);

        return section.cloneNode(true);
    }

    function createShopLayout(type = "item") {
        const section = document.createElement("section");

        if (type === "item") {
            section.setAttribute("id", "itemShop")
            section.textContent = "itemShop"
        } else if (type === "unit") {
            section.setAttribute("id", "unitShop")
            section.textContent = "unitShop"
        }

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
            sectionArray[0].classList.add("ocuppyAllRows");
            if (e.tagName === "ARTICLE") {
                sectionArray[0].classList.replace("itemStorage", "unitStats");
            } else {
                sectionArray[0].classList.replace("itemStorage", "openedItemStorage");
            }
            sectionArray[0].appendChild(createCloseBtn());
            sectionArray[0].querySelector(".closeSectionBtn").addEventListener("click", changeLayoutOnClosed, false);

            if (e.id === "openItemShop") {
                sectionArray[0].appendChild(createShopLayout("item"));
            } else if (e.id === "openUnitShop") {
                sectionArray[0].appendChild(createShopLayout("unit"));
            } else {
                sectionArray[0].classList.add("unitStats");
                sectionArray[0].appendChild(createStatsLayout(e.id));
            }

            sectionArray[1].classList.remove("ocuppyAllColumns");
            sectionArray[1].appendChild(savedSections[0]);
            sectionArray[2].classList.remove("invisible");
            sectionArray[2].appendChild(savedSections[1]);
        } else if (openSectionsNum === 1) {
            savedSections[0] = sectionArray[1].querySelector("section");
            savedSections[1] = sectionArray[2].querySelector("section");

            sectionArray[2].classList.add("invisible");
            sectionArray[2].querySelector("section").remove();

            sectionArray[1].classList.remove("ocuppyAllColumns");
            sectionArray[1].classList.add("ocuppyAllRows");
            if (e.tagName === "ARTICLE") {
                sectionArray[1].classList.replace("itemStorage", "unitStats");
            } else {
                sectionArray[1].classList.replace("itemStorage", "openedItemStorage");
            }
            sectionArray[1].querySelector("section").remove();
            sectionArray[1].appendChild(createCloseBtn());
            sectionArray[1].querySelector(".closeSectionBtn").addEventListener("click", changeLayoutOnClosed, false);
            
            if (e.id === "openItemShop") {
                sectionArray[1].appendChild(createShopLayout("item"));
            } else if (e.id === "openUnitShop") {
                sectionArray[1].appendChild(createShopLayout("unit"));
            } else {
                sectionArray[1].classList.add("unitStats");
                sectionArray[1].appendChild(createStatsLayout(e.id));
            }
        } else {
            return false;
        }

        return true;
    }

    function changeLayoutOnClosed(e) {
        const section = e.target.parentNode.parentNode;
        const openSectionsNum = checkOpenSections();
        console.log(openSectionsNum);

        if (openSectionsNum === 2) {
            savedSections[2] = sectionArray[1].querySelector("section");

            if (section.id === "section0") {
                sectionArray[0].querySelector("section").remove();
                sectionArray[0].appendChild(savedSections[2]);
            } else if (section.id === "section1") {
                sectionArray[1].querySelector("section").remove();
            }

            sectionArray[1].querySelector("header").remove();
            sectionArray[1].classList.remove("ocuppyAllRows");
            if (sectionArray[1].classList.contains("openedItemStorage")) {
                sectionArray[1].classList.replace("openedItemStorage", "itemStorage");
            } else {
                sectionArray[1].classList.replace("unitStats", "itemStorage");
            }
            sectionArray[1].appendChild(savedSections[0]);

            sectionArray[2].classList.remove("invisible");
            sectionArray[2].appendChild(savedSections[1]);
        } else if (openSectionsNum === 1){
            savedSections[0] = sectionArray[1].querySelector("section");
            savedSections[1] = sectionArray[2].querySelector("section");

            sectionArray[1].classList.add("ocuppyAllColumns");
            sectionArray[1].appendChild(savedSections[1])

            sectionArray[0].querySelector("header").remove();
            sectionArray[0].classList.remove("ocuppyAllRows");
            sectionArray[0].classList.add("ocuppyAllColumns");
            if (!sectionArray[0].classList.contains("openedItemStorage")) {
                sectionArray[0].classList.replace("unitStats", "itemStorage");
            } else {
                sectionArray[0].classList.replace("openedItemStorage", "itemStorage");
            }
            sectionArray[0].querySelector("section").remove();
            sectionArray[0].appendChild(savedSections[0])

            sectionArray[2].classList.add("invisible");
        } else {
            return false;
        }

        if (!document.getElementById("itemShop")) {
            openItemShopBtn.disabled = false;
        } 
        if (!document.getElementById("unitShop")) {
            openUnitShopBtn.disabled = false;
        }

        return true;
    }

    /*  CARGAR TIENDA/STATS
        -Cargan los elementos asociados al id de la tienda en la seccion 2.
            -2 layouts diferentes ya cargados en el js y un objeto con
            los diferentes elementos de inserción.

   /*
    hay que crear el boton de compra
    Funcion para hacer consultas en la base de datos
    y cargarlo todo desde el principio
    Funcion para subir información a la base de datos
    Forma de meter nuevos objetos en la base de datos
   */

    function openSection(e) {
        if(e.target.id == "openItemShop") {
            if (changeLayoutOnOpen(e.target)) {
                e.target.disabled = true;
            }
        } else if (e.target.id == "openUnitShop") {
            if (changeLayoutOnOpen(e.target)) {
                e.target.disabled = true;
            }
        } else {
            let currentElement = e.target;
                while(currentElement.tagName !== "ARTICLE") {
                    currentElement = currentElement.parentNode;
                }
            if (changeLayoutOnOpen(currentElement)) {
                if (!currentElement.disabled) {
    
                    currentElement.disabled = true;
                }
            }   
        }
    }
}