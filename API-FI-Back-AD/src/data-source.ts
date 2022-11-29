import "reflect-metadata"
import { DataSource } from "typeorm"
import { PessoaAD } from "./entity/PessoaAD"
import { DadosAD } from "./entity/DadosAD"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [PessoaAD, DadosAD],
    migrations: [],
    subscribers: [],
})
