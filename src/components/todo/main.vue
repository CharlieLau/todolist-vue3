<template>
     <section class="main" v-show="state.todos.length">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo === state.editedTodo}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="todo.completed">
                    <label @dblclick="handleEditTodo(todo)">{{todo.title}}</label>
                    <button class="destroy" @click="removeTodo(todo)"></button>
                </div>
                <input class="edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
            </li>
        </ul>
    </section>
</template>
<script>
  import {  onTodosMounted, useCompouteds, useState,handleEditTodo,removeTodo,cancelEdit,doneEdit } from "./todo";
  import { onMounted, computed, reactive } from "vue";
  export default {
    setup() {
      const state = useState();
      onMounted(onTodosMounted);

      return {
        state,
        ...useCompouteds(),
        removeTodo,
        handleEditTodo,
        cancelEdit,
        doneEdit
      };
    }
  };
</script>