import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { PessoaAD } from "./entity/PessoaAD"
import { DadosAD } from "./entity/DadosAD"


AppDataSource.initialize().then(async () => {

    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());


    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(PessoaAD, {
            nome: "Arthur",
            cpf: "1244512121",
            email: "teste@gmail.com",
            telefone: "322223",
            idade: 180,
            sexo: false,
            cargo: "motoqueiro"
        })
    )


    await AppDataSource.manager.save(
        AppDataSource.manager.create(DadosAD, {
            salario: "15159656125",
        })
    )

    console.log("")

}).catch(error => console.log(error))
