import express from 'express';
import AlumnoHandler from '../handlers/alumno';

const alumnoHandler = new AlumnoHandler();

const router = express.Router();

router.get('/', alumnoHandler.getAlumno);

export default router;
