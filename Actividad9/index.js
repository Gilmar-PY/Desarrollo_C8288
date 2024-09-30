"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path")); // módulo `path` para manejar rutas de archivos
const server = (0, express_1.default)(); // Inicializa la aplicación Express
const port = 3000;
// Ruta para "/hello"
server.get("/hello", function (_req, res) {
    // Enviamos directamente una respuesta simple
    res.send("Hello World!");
});
// Ruta "/api/names"
server.get("/api/names", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Aquí puedes definir una lista de nombres estática o generada
        const names = ["Alice", "Bob", "Charlie", "David"];
        res.json(names); // Envía la lista de nombres como una respuesta en formato JSON
    });
});
// Ruta para "/api/weather/:zipcode"
server.get("/api/weather/:zipcode", function (req, res) {
    // Simulamos la respuesta de una API meteorológica utilizando el código postal proporcionado
    const zipcode = req.params.zipcode;
    const weather = {
        zipcode: zipcode,
        forecast: "sunny", // diferentes valores si lo deseas
        temperature: 25
    };
    res.json(weather); // Envía los datos meteorológicos como respuesta JSON
});
// Nueva Ruta para "/components/weather"
server.get("/components/weather", function (_req, res) {
    // Obtén la ruta completa del archivo weather.xhtml o weather.html
    const filePath = path_1.default.join(process.cwd(), "public", "weather.xhtml");
    res.setHeader("Content-Type", "text/html"); // Define el tipo de contenido como HTML
    res.sendFile(filePath); // Envía el archivo HTML al navegador
});
// Inicia el servidor y escucha en el puerto especificado
server.listen(port, function () {
    console.log("Servidor escuchando en el puerto " + port);
});
