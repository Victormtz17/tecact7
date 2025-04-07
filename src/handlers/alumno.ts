
import { Request, Response, NextFunction } from 'express';
import alumnoController from '../controller/alumno';


const AlumnoController = new alumnoController();

class alumnoHandler {

    
    async getAlumno(request: Request, response: Response, next: NextFunction) {

        try{
            const alumno =await AlumnoController.getAllAlumnoStatus();
            response.json(alumno)
        }catch(error){
            next(error)
        }
        

    }

}

export default alumnoHandler;