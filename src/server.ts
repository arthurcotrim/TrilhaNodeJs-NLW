import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "./database";
import { router } from "./routes";
import "express-async-errors";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {

    // VERIFICA SE E UM ERRO TRATADO POR NOS throw new Error   
      if (err instanceof Error) {
          return response.status(400).json({
              error: err.message
          })
      }

      return response.status(500).json({
          status: "error",
          message: "Internarl Server Error"
      })
  }
);

// INICIALIZAR UMA PORTA
app.listen(3000, () => console.log("Server is running"));
