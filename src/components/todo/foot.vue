<template>
    <footer class="footer" v-if="state.todos.length">
        <span class="todo-count">
          <strong>{{ remaining }}</strong>
          <span>{{remainingText}}</span>
        </span>
      <ul class="filters">
        <li><a @click="switchVisiBility('all')"  :class="{ selected: state.visibility == 'all' }">All</a></li>
        <li><a @click="switchVisiBility('active')" :class="{ selected: state.visibility == 'active' }">Active</a></li>
        <li><a @click="switchVisiBility('completed')" :class="{ selected: state.visibility == 'completed' }">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-if="state.todos.length > remaining">
        Clear completed
      </button>
    </footer>
</template>
<script>
import { useState,useCompouteds, removeCompleted , switchVisiBility } from "./todo";
export default {
    setup(){
        const state = useState()
        return {
            state,
            ...useCompouteds(),
            switchVisiBility,
            removeCompleted
        }
    }
}
</script>