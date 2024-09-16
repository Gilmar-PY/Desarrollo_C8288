"use strict";
// Clase DataCache que gestiona la caché de datos asincrónicos
class DataCache {
    constructor() {
        this.cache = {};
    }
    add(key, value) {
        this.cache[key] = value;
    }
    get(key) {
        return this.cache[key];
    }
}
const userCache = new DataCache();
// Simulamos una operación asincrónica
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Sharon",
                age: 23,
            });
        }, 1000);
    });
}
// Agregamos datos al caché
userCache.add("name", fetchUserData().then(data => data.name));
userCache.add("age", fetchUserData().then(data => data.age));
// Obtenemos los datos del caché
userCache.get("name").then(name => {
    console.log("Nombre desde la caché:", name);
});
userCache.get("age").then(age => {
    console.log("Edad desde la caché:", age);
});
