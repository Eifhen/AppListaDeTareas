
export class ToDo {

    static fronJson ({ id, tarea, completado, creado }) {
        // convierte el objeto recibido a una instancia de la clase ToDo
        const tempTarea = new ToDo( tarea );
        tempTarea.id = id;
        tempTarea.completado = completado;
        tempTarea.creado = creado;
        return tempTarea;
    }

    constructor( tarea ) {

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase(){
        console.log(`${this.id} - ${this.tarea} - ${this.completado}`);
    }
}