export const SaveLocalStorage = (key,element) => {
    //conseguir elementos del storage
    let elements = JSON.parse(localStorage.getItem(key));

    //comprobar si es un array
    if(Array.isArray(elements)){
        //guardar elemento en el array
        elements.push(element);
    }else{
        //crear array vacio y guardar pelicula
        elements = [element];
    }

    //guardar en el localstorage
    localStorage.setItem(key, JSON.stringify(elements));

    //devolver objeto guardado
    return element;
}