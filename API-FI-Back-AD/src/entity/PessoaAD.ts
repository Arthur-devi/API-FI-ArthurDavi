import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class PessoaAD {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    cpf: string

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    idade: number

    @Column()
    sexo: boolean

    @Column()
    cargo: string

}