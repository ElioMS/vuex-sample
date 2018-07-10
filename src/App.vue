<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->

        <div class="container">
            <HelloWorld></HelloWorld>
            <hr>
            <ListTodos></ListTodos>
            <hr>

            <AddTodo></AddTodo>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ListTodos from './components/ListTodos.vue'
import AddTodo from './components/AddTodo.vue'

import { mapState } from 'vuex'

export default {
    name: 'app',
    components: {
        HelloWorld, ListTodos, AddTodo
    },
    computed: mapState ({
        count: state => state.count
    }),
    methods: {

        increment() {
            this.count++;
        }

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
