import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { PessoaAD } from "../entity/PessoaAD"
import { getRepository } from "typeorm"

export class PessoaADController {

    private PessoaADRepository = AppDataSource.getRepository(PessoaAD)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.PessoaADRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.PessoaADRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.PessoaADRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let PessoaADToRemove = await this.PessoaADRepository.findOneBy({ id: request.params.id })
        await this.PessoaADRepository.remove(PessoaADToRemove)
    }

}