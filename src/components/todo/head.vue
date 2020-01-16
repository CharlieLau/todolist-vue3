<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="state.newTodo" @keyup.enter="addTodo">
    </header>
</template>
<script>
import { useState, addTodo } from "./todo";
export default {
    setup(){
        const state= useState()
        return {
            state,
            addTodo
        }
    }
}
</script>