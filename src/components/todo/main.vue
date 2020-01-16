<template>
     <section class="main" v-show="todos.length">
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
  import { useTodos, onTodosMounted, filters } from "./todo";
  import { onMounted, computed, reactive } from "vue";
  export default {
    setup() {
      const { todos } = useTodos();
      let beforeEditCache;
      const state = reactive({
        editedTodo: null,
        visibility: "all"
      });

      onMounted(onTodosMounted);

      const filteredTodos = computed(() => {
        return filters[state.visibility](todos);
      });
      const remaining = computed(() => {
        return filters.active(todos).length;
      });
      const allDone = computed({
        get: function() {
          return remaining.length === 0;
        },
        set: function(value) {
          todos.forEach(function(todo) {
            todo.completed = value;
          });
        }
      });
      function removeTodo(todo) {
        var index = todos.indexOf(todo);
        todos.splice(index, 1);
      }

      function handleEditTodo(todo) {
          debugger
        beforeEditCache = todo.title;
        state.editedTodo = todo;
      }

      function doneEdit(todo) {
        if (!state.editedTodo) {
          return;
        }
        state.editedTodo = null;
        todo.title = todo.title.trim();
        if (!todo.title) {
          removeTodo(todo);
        }
      }

      function cancelEdit(todo) {
        state.editedTodo = null;
        todo.title = beforeEditCache;
      }

      function removeCompleted() {
        todos = filters.active(todos);
      }

  
      return {
        todos,
        state,
        filteredTodos,
        remaining,
        allDone,
        removeTodo,
        handleEditTodo,
        cancelEdit,
        doneEdit
      };
    }
  };
</script>