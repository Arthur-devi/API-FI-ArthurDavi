import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { DadosAD } from "../entity/DadosAD"
import { getRepository } from "typeorm"


export class DadosADController {

    private DadosADRepository = AppDataSource.getRepository(DadosAD)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.DadosADRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.DadosADRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.DadosADRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let DadosADToRemove = await this.DadosADRepository.findOneBy({ id: request.params.id })
        await this.DadosADRepository.remove(DadosADToRemove)
    }

}