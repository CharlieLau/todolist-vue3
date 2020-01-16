import {
    reactive,
    watch,
    effect
} from 'vue'
import todoStorage from './store'


const state = reactive({
    todos: []
})

export const filters = {
    all: function (todos) {
        return todos;
    },
    active: function (todos) {
        return todos.filter(function (todo) {
            return !todo.completed;
        });
    },
    completed: function (todos) {
        return todos.filter(function (todo) {
            return todo.completed;
        });
    }
}


export function onTodosMounted(){
    watch(
        effect(() => {
            todoStorage.save(state.todos)
        })
    )
}

export function useTodos() {
    state.todos = todoStorage.fetch()
    return state
}

export function useAddTodo(todo) {
    const value = todo.trim()
    if (!value) {
        return
    }
    state.todos.push({
        id: state.todos.length + 1,
        title: value,
        completed: false
    })
}



