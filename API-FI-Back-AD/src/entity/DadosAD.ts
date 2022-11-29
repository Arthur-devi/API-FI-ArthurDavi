import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class DadosAD {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    salario: string

}


