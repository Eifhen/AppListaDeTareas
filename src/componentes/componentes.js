
import { ToDo } from "../classes/todo.class";
import { listaTareas } from '../index.js';

const divToDoList = document.querySelector(".todo-list");
const inputNuevaTarea = document.querySelector(".new-todo");
const btnEliminarCompletados = document.querySelector(".clear-completed");
const ul_filtros = document.querySelector(".filters");
const anchorFiltros = document.querySelectorAll(".filtro");
const marcarTodos = document.querySelector("#toggle-all");


// crear tarea component
export const crearTareaHtml = ( tarea ) => {

    const htmlTarea = `
    <li class="${ (tarea.completado) ? 'completed' : ''  }" data-id="${ tarea.id }">
		<div class="view">
			<input class="toggle cbx" type="checkbox" ${ (tarea.completado) ? 'checked' : ''}>
			<label>${ tarea.tarea }</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="edit">
	</li> `;

    const div = document.createElement("div");
    div.innerHTML = htmlTarea;
    divToDoList.append(div.firstElementChild);
    
    return div.firstElementChild;
}


// Eventos

// agregar tarea
inputNuevaTarea.addEventListener('keyup', (event) => {

    // significa que la persona presiono el boton "enter"
    // la idea es que al precionar 'enter' 
    // se agregue la nueva tarea.

    if( event.keyCode === 13 && inputNuevaTarea.value.length > 0) {
        const nuevaTarea = new ToDo( inputNuevaTarea.value );
        listaTareas.nuevaTarea( nuevaTarea );
        crearTareaHtml( nuevaTarea );
        inputNuevaTarea.value = '';
    }

});

// marcar tareas
divToDoList.addEventListener('click', ( event ) => {

    const nombreElemento = event.target.localName; // input, label o boton
    const elementoTarea = event.target.parentElement.parentElement;
    const id_tarea = elementoTarea.getAttribute("data-id");

    if( nombreElemento.includes('input') ) { 
        // significa que hizo click en el checkbox
        // marcamos como 'completado' o no, la tarea seleccionada
        // si la tarea esta completada agregamos la clase 'completed'
        // si la tarea no esta completada se remueve la clase 'completed'
        // la propiedad 'toggle' nos permite hacer esto.
        listaTareas.marcarCompletado( id_tarea );
        elementoTarea.classList.toggle('completed');

    } else if ( nombreElemento.includes('button') ) {

        // significa que el cliente hizo clic en la 'x'
        // esto implica que hay que eliminar la tarea
        listaTareas.eliminarTarea(id_tarea);
        divToDoList.removeChild(elementoTarea);
    }
});

btnEliminarCompletados.addEventListener('click', () => {
    // busca en el divToDoList los elementos que 
    // tienen la clase 'completed' y los remueve
    listaTareas.eliminarCompletados();
    for(let i = divToDoList.children.length - 1; i >= 0 ; i--){
        const elemento = divToDoList.children[i];
        if(elemento.classList.contains('completed')){
            divToDoList.removeChild(elemento);
        }
    }
});

ul_filtros.addEventListener('click', (event) => {

    const filtro = event.target.text
    if( !filtro ) { return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');
    for( const elemento of divToDoList.children)
    {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains("completed");
        switch( filtro.trim() ) {

            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
});

marcarTodos.addEventListener('click', ()=>{
    const checkboxList = document.querySelectorAll(".cbx");
    listaTareas.marcarTodosComoCompletados();
    for(let i = divToDoList.children.length - 1; i >= 0; i--){
        const elemento = divToDoList.children[i];
        elemento.classList.toggle('completed');
        const checkbox = checkboxList[i];
        checkbox.checked = (checkbox.checked) ? false : true;
    }
});