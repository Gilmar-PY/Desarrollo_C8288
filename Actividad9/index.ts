import express, { Request, Response } from 'express';
import path from 'path';  // módulo `path` para manejar rutas de archivos

const server = express();  // Inicializa la aplicación Express
const port = 3000;  

// Ruta para "/hello"
server.get("/hello", function (_req: Request, res: Response): void {
  // Enviamos directamente una respuesta simple
  res.send("Hello World!");  
});

// Ruta "/api/names"
server.get("/api/names", async function (_req: Request, res: Response): Promise<void> {
  // Aquí puedes definir una lista de nombres estática o generada
  const names = ["Alice", "Bob", "Charlie", "David"];
  res.json(names);  // Envía la lista de nombres como una respuesta en formato JSON
});

// Ruta para "/api/weather/:zipcode"
server.get("/api/weather/:zipcode", function (req: Request, res: Response): void {
  // Simulamos la respuesta de una API meteorológica utilizando el código postal proporcionado
  const zipcode = req.params.zipcode;
  const weather = {
    zipcode: zipcode,
    forecast: "sunny",  // diferentes valores si lo deseas
    temperature: 25     
  };
  
  res.json(weather);  // Envía los datos meteorológicos como respuesta JSON
});

// Nueva Ruta para "/components/weather"
server.get("/components/weather", function (_req: Request, res: Response): void {
  // Obtén la ruta completa del archivo weather.xhtml o weather.html
  const filePath = path.join(process.cwd(), "public", "weather.xhtml");
  
  res.setHeader("Content-Type", "text/html");  // Define el tipo de contenido como HTML
  res.sendFile(filePath);                      // Envía el archivo HTML al navegador
});

// Inicia el servidor y escucha en el puerto especificado
server.listen(port, function (): void {
  console.log("Servidor escuchando en el puerto " + port);
});
