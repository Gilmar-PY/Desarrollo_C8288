// simulacion de procesos asincrinicos
/* crea una  fuuncion delay que
simule un retraso utilizando setTime*/

const delay =(ms)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolver('espero ${ms} milesegundos');
    
        },ms);
    });
};

