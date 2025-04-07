export interface Alumno {
    matricula: string;
    nombre: string;
    calificacion: number;
    deuda: boolean;
  }
  
  const alumnos: Alumno[] = [
    { matricula: 'B101', nombre: 'Valeria Núñez', calificacion: 93, deuda: false },
    { matricula: 'B102', nombre: 'Emilio Salas', calificacion: 88, deuda: true },
    { matricula: 'B103', nombre: 'Camila Ortega', calificacion: 79, deuda: false },
    { matricula: 'B104', nombre: 'Mateo Ríos', calificacion: 91, deuda: true },
    { matricula: 'B105', nombre: 'Isabella Fuentes', calificacion: 67, deuda: false },
    { matricula: 'B106', nombre: 'Sebastián Cruz', calificacion: 58, deuda: true },
    { matricula: 'B107', nombre: 'Renata Morales', calificacion: 74, deuda: false },
    { matricula: 'B108', nombre: 'Tomás Aguirre', calificacion: 96, deuda: false },
    { matricula: 'B109', nombre: 'Lucía Cordero', calificacion: 89, deuda: true },
    { matricula: 'B110', nombre: 'Diego Benítez', calificacion: 84, deuda: false },
    { matricula: 'B111', nombre: 'Mariana Solís', calificacion: 52, deuda: true },
    { matricula: 'B112', nombre: 'Gael Estrada', calificacion: 87, deuda: false },
    { matricula: 'B113', nombre: 'Elena Vargas', calificacion: 90, deuda: true },
    { matricula: 'B114', nombre: 'Iván Pacheco', calificacion: 48, deuda: false },
    { matricula: 'B115', nombre: 'Paula Domínguez', calificacion: 94, deuda: false },
  ];
  
  export default async function getAlumnosFromDB(): Promise<Alumno[]> {
    return alumnos;
  }
  