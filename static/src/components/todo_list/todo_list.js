/** @odoo-module **/

import { registry } from '@web/core/registry';
// const { Component, useState} = owl;
// Probar
import { Component, useState, onWillStart, useRef } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class OwlTodoList extends Component {
    static template = "todo_list_owl.TodoList";

    setup() {
        this.state = useState({ 
            task:{name:"Tarea nueva", color:"", completed:false},
            taskList:[
            ],
            isEdit:false,
            activeId:false,
        });
        console.log("Valor tasklist:", this.state.taskList);
        // Enlazar el contexto de onToggleCompleted
        this.onToggleCompleted = this.onToggleCompleted.bind(this);
        this.orm = useService("orm")
        this.model = "owl.todo.list"
        this.searchInput = useRef("search-input")

        onWillStart(async ()=>{
            await this.getAllTasks()
        })
        
    }

    addTask(){
        this.resetForm()
        this.state.isEdit = false
        this.state.activeId = false        
    }

    editTask(task){
        console.log("Valor inicial:", task);
        this.state.isEdit = true
        this.state.activeId = task.id
        this.state.task = {...task}
    }

    resetForm(){
        this.state.task = {name:"Tarea nueva", color:"", completed:false}
    }

    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model, [], ["name", "color", "completed"])
    }

    async saveTask(){

        if (!this.state.isEdit){
            await this.orm.create(this.model, [this.state.task])
            this.resetForm()
        } else {
            await this.orm.write(this.model, [this.state.activeId], this.state.task)
        }

        await this.getAllTasks()
    }

    async deleteTask(task){
        await this.orm.unlink(this.model, [task.id])
        await this.getAllTasks()
    }

    async searchTasks(){
        const text = this.searchInput.el.value        
        this.state.taskList = await this.orm.searchRead(this.model, [['name','ilike',text]], ["name", "color", "completed"])
    }

    async updateCompleted(e, task){
        await this.orm.write(this.model, [task.id], {completed: e.target.checked})
        await this.getAllTasks()
    }

    async updateColor(e, task){
        await this.orm.write(this.model, [task.id], {color: e.target.value})
        await this.getAllTasks()
    }
    // Método para manejar el cambio de estado del checkbox
    onToggleCompleted(ev, taskId) {
        // Buscar la tarea en taskList por su ID
        const task = this.state.taskList.find((t) => t.id === taskId);
        // Actualiza el estado de la tarea
        if (task) {
            // Actualizar el estado de la tarea
            task.completed = ev.target.checked;
            console.log("metodo onToggleCompleted Tarea actualizada:", task);

    }
}
}
// OwlTodoList.template = "todo_list_owl.TodoList"
registry.category("actions").add("action_todo_list_js_component", OwlTodoList);

// registry.category("actions").add("todo_list_owl.action_todo_list_js", {
//     Component: OwlTodoList,
// });