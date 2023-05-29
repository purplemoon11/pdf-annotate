import "reflect-metadata"
import { DataSource } from "typeorm"
import { PdfAnnotation } from "./entity/PdfAnnotation"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "pdf_annotation",
    synchronize: true,
    logging: false,
    entities: [PdfAnnotation],
    migrations: [],
    subscribers: [],
})
