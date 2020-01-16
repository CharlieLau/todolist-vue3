<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
    </header>
</template>
<script>
import { ref, } from "vue";
import { useAddTodo } from "./todo";
export default {
    setup(){
        const newTodo = ref('')
        return {
            newTodo,
            addTodo(){
                useAddTodo(newTodo.value)
                newTodo.value =''
            }
        }
    }
}
</script>