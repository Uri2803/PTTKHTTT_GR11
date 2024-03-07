import express from "express";
import * as homeController from "../controllers/homeControler";
let route=express.Router();

let initWebRoutes = (app)=>{

    app.get('/', (req, res) => {
        res.json({message: 'mainpage'});
      });
    app.get('/login', homeController.login);

    return app.use("/", route)
}

module.exports = initWebRoutes;