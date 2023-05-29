import { PdfAnnotation } from "../entity/PdfAnnotation";
import path from 'path';
import fs from 'fs';
import pdfParse from 'pdf-parse'; 
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";

export class WatermarkAnnotation {
    constructor(){}

    public async addWatermark(req: Request, res: Response){
        try {
            const { file } = req.body.file;
            const loadFile = fs.readFileSync(path.join(__dirname, file));
            await pdfParse(loadFile);
            const pdfDoc = await PDFDocument.load(loadFile);  
            
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

            const pages = pdfDoc.getPages()
            const firstPage = pages[0]
            const { width, height } = firstPage.getSize()
            firstPage.drawText('This text was added with JavaScript!', {
                x: width / 2 + 200,
                y: height / 2 - 385,
                size: 10,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1),
            });
            const savePdfWatermark = await AppDataSource.getRepository(PdfAnnotation).save(file);
            fs.writeFileSync(file, savePdfWatermark);
            res.status(200).send(savePdfWatermark);

        } catch (error) {
            throw new Error(error);
        }
    }
}