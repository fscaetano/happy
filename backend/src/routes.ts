import { Router } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';

import Orphanage from './models/Orphanage';
import OrphanagesController from './controllers/OrphanageController';

import uploadConfig from  './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

// console.log(request.query);
// console.log(request.params);
// console.log(request.headers);
// console.log(request.body);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);



export default routes;