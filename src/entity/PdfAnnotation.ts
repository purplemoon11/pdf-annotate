import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class PdfAnnotation {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    file: string

}