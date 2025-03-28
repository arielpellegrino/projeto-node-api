import express from 'express';
import publicRoutes from './routes/public.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json())

app.use('/usuarios', publicRoutes);

// Criando servidor express para rodar a aplicação
app.listen(3000, () => {
    console.log("----------------------- >   Servidor Rodando ✔")
})



/* Criando rotas da aplicação
 Rotas Publicas
 - cadastras
 - Login
 Rotas Privadas
 - Listar usuários
*/