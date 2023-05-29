import express, {Router} from 'express';
import { WatermarkAnnotation } from '../controller/WatermarkAnnotation.controller';

const router = Router();

router.get('/watermark/:id', WatermarkAnnotation);

module.exports = router;
