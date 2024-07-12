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

    function checkOpenSections() {
        const openSections = Array.from(document.querySelectorAll(".ocuppyAllRows"));
        return openSections.length;
    }

    function changeLayoutOnOpen(e) {
        const openSectionsNum = checkOpenSections();
        if (openSectionsNum === 0) {
            savedSections[0] = sectionArray[0].querySelector("section").cloneNode(true);
            savedSections[1] = sectionArray[1].querySelector("section").cloneNode(true);

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
        } else {
            savedSections[1] = sectionArray[1].querySelector("section").cloneNode(true);
            savedSections[2] = sectionArray[2].querySelector("section").cloneNode(true);
        }
    }

    function openSection(e) {
        if(e.target.id == "openItemShop") {
            console.log("Open Item Shop");
            changeLayoutOnOpen(e);
            /*  CARGAR TIENDA/STATS
            XGuardamos los elementos de las 3 seciones por sus respectivos Ids. 
            XGuardamos el id de la tienda. 
            X1.Comprobar si ya hay una tienda de items activa: 
                X No hará falta comprobación debido a que el botón estará desactivado al abrirla
                    Por lo que al abrir una tienda se desactivará el botón de la misma.
            X2.Comprobar si hay otra seccion en columna abierta:
                XIf Queryselect ".ocuppyAllRows".
                2.1 Devuelve 0:
                    XGuarda lo que hay en las secciones 1 y 2.
                    XConvierte la sección 1 en columna.
                    -Cargan los elementos asociados al id de la tienda en la seccion 1.
                        -2 layouts diferentes ya cargados en el js y un objeto con
                        los diferentes elementos de inserción.
                    XConvierten las secciones 2 en media fila.
                    XMuestra la columna 3.
                    XCarga lo guardado de la seccion 1 en la 2, y lo de la 2 en la 3.
                2.2 Devuelve >0:
                    -Guarda lo que hay en las secciones 2 y 3.
                    -Oculta la seccion 3 y elimina su contenido.
                    -Convierte la sección 2 en columna.
                    -Cargan los elementos asociados al id de la tienda en la seccion 2.
                        -2 layouts diferentes ya cargados en el js y un objeto con
                        los diferentes elementos de inserción.
            */

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
            e.target.disabled = true;
        } else if (e.target.id == "openUnitShop") {
            console.log("Open Unit Shop");

            e.target.disabled = true;
        } else {
            let currentElement = e.target;
            while(currentElement.tagName !== "ARTICLE") {
                currentElement = currentElement.parentNode;
            }
            if (!currentElement.disabled) {
                console.log("Open Unit Stats");

                currentElement.disabled = true;
            }
        }
    }
}