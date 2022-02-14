import { crearTareaHtml } from '../componentes/componentes.js';
import { ToDo } from './todo.class.js';

export class ToDoList {

    // toDo List = lista de tareas por hacer
    
    constructor () {
        //this.tareas = [];
        this.cargarLocalStorage();
        this.cargarListadoDeTareas();
        this.totalTareasPendientes();
    }

    cargarListadoDeTareas() {
        // carga todas las tareas almacenadas
        this.tareas.forEach(tarea => crearTareaHtml(tarea));
    }

    nuevaTarea ( tarea ) {
        this.tareas.push(tarea);
        this.guardarLocalStorage();
        this.totalTareasPendientes();
    }

    eliminarTarea ( id_tarea) {

        // retorna un array nuevo con todos los elementos que cumplan la condicion
        // expresada en el lamda
        this.tareas = this.tareas.filter( tarea => tarea.id  != id_tarea );
        this.guardarLocalStorage();
        this.totalTareasPendientes();
    }

    marcarCompletado ( id_tarea ) {

        // si la tarea no esta marcada como 'completada'
        // la marca como completada. si esta marcada como 'completada'
        // entonces la desmarca.

        // en este caso se utiliza el doble igual y no el triple igual
        // debido a que la variable 'id_tarea' es recibida como un string
        // en cambio la propiedad tarea.id es un entero

        for( const tarea of this.tareas ) {
            //console.log(id_tarea, tarea.id)
            if(tarea.id == id_tarea) {
                tarea.completado = !tarea.completado;
                this.guardarLocalStorage();
                this.totalTareasPendientes();
                break;
            }
        }
        
    }

    eliminarCompletados () {
        // retorna un nuevo arreglo con las tareas que NO estan completadas
        // al hacer esto se borran las tarea que SI estan completadas.
        this.tareas = this.tareas.filter(tarea => tarea.completado == false );
        this.guardarLocalStorage();
    } 

    guardarLocalStorage() {
        // guarda elementos en el localStorage
        // convertir la lista de tareas a un JSON
        let almacenarTareas = JSON.stringify(this.tareas);
        localStorage.setItem('tareas', almacenarTareas);
    }

    cargarLocalStorage() {
        // obtiene los elementos guardados en el localStorage
        
        // si hay tareas almacenadas en el localstorage entonces
        // convertimos los valores almacenados como JSON en el 
        // localStorage en un objeto
        // si no hay tareas en el localstorage
        // entonces inicializo mi arreglo de tareas vacio
   
        this.tareas = (localStorage.getItem('tareas')) 
        ? JSON.parse(localStorage.getItem('tareas')) 
        : [];

        this.tareas = this.tareas.map( obj => ToDo.fronJson(obj) );
    }

    totalTareasPendientes() {
        let countLabel = document.querySelector('.todo-count');
        let count = this.tareas.filter(tarea => tarea.completado == false).length;
        countLabel.firstElementChild.textContent = '';
        countLabel.firstElementChild.textContent = count;
        
    }
}