import { Request, Response } from 'express';
import { AnnotationFactory, AnnotationIcon } from 'annotpdf';
import { createDecipheriv } from 'crypto';

export class TextAnnotation{
    constructor(){}

    public async addText(req: Request, res: Response){
        try {
            const { text } = req.body.text;
            AnnotationFactory.loadFile(text).then((factory) => {
                factory.createTextAnnotation({
                        page: 0,
                        rect: [50, 50, 80, 80],
                        contents: "Pop up note",
                        author: "Max",
                        color: {r: 128, g: 128, b: 128},
                        open: false,
                        icon: AnnotationIcon.Help,
                        opacity: 0.5
                })
        })
        } catch (error) {
            throw new Error(error);
        }
    }
}

