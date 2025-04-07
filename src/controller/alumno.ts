import getAlumnoListFromDB,{Alumno} from '../db/alumno';

class alumnoController {

    async getAllAlumnoStatus(){

        const alumnoList = await getAlumnoListFromDB();
        return alumnoList.map((alumno: Alumno) => {
            let mensaje = '';

            switch (true) {
                case alumno.calificacion > 90 && !alumno.deuda:
                  mensaje = 'Te graduaste con honores';
                  break;
                case alumno.calificacion > 90 && alumno.deuda:
                  mensaje = 'Tenias honores, pero tienes una deuda';
                  break;
                case alumno.calificacion >= 70 && alumno.calificacion <= 90:
                  mensaje = 'Pasaste muy apenas';
                  break;
                case alumno.calificacion < 70 && !alumno.deuda:
                  mensaje = 'Como no tienes deudas, tienes derecho a un examen de recuperacion';
                  break;
                case alumno.calificacion < 70 && alumno.deuda:
                  mensaje = 'Expulsado';
                  break;
              }
              return {
                matricula: alumno.matricula,mensaje
              };

        });
    }


}

export default alumnoController;