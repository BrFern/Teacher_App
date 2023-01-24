import express from 'express';
import {getMaterials, createMaterials} from '../controllers/materials.controller';

const router = express.Router();

router.get('/', getMaterials); 
 {
    router.post('/', createMaterials);
};

export default router;