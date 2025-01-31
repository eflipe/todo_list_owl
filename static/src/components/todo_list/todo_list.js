/** @odoo-module **/

import { registry } from '@web/core/registry';
// const { Component, useState} = owl;
// Probar
import { Component, useState, onWillStart } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class OwlTodoList extends Component {
    static template = "todo_list_owl.TodoList";

    setup() {
        this.state = useState({ 
            taskList:[
            ]
        });
        console.log("Valor inicial:", this.state.value);
        console.log("Valor tasklist:", this.state.taskList);
        // Enlazar el contexto de onToggleCompleted
        this.onToggleCompleted = this.onToggleCompleted.bind(this);
        this.orm = useService("orm")
        this.model = "owl.todo.list"

        onWillStart(async ()=>{
            await this.getAllTasks()
        })

        
    }
    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model, [], ["name", "color", "completed"])
    }
    // Método para manejar el cambio de estado del checkbox
    onToggleCompleted(ev, taskId) {
        // Buscar la tarea en taskList por su ID
        const task = this.state.taskList.find((t) => t.id === taskId);
        // Actualiza el estado de la tarea
        if (task) {
            // Actualizar el estado de la tarea
            task.completed = ev.target.checked;
            console.log("Tarea actualizada:", task);

    }
}
}
// OwlTodoList.template = "todo_list_owl.TodoList"
registry.category("actions").add("action_todo_list_js_component", OwlTodoList);

// registry.category("actions").add("todo_list_owl.action_todo_list_js", {
//     Component: OwlTodoList,
// });