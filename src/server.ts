import express from "express";

const app = express();

// =========== METODOS ===========
/*
    * GET    => Buscar uma informacao
    * POST   => Inserir uma informacao
    * PUT    => Alterar uma informacao
    * DELETE => Remover uma informacao
    * PATCH  => Alterar um informacao especifica
*/

// CRIANDO ROTA
app.get("/test", (request, response) =>{
    // REQUEST => Entrando
    // RESPONSE => Saindo

   return response.send("Hello World")
})


app.post("/test-post", (request, response) =>{
    return response.send("Enviando POST")
})
/*
    INICIALIZAR UMA PORTA
    http://localhost:3000
*/
app.listen(3000, () => console.log("Server is running"));
