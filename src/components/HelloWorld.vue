<template>
    <div>
        <h3> Listado de tareas : {{ countTasks }} </h3>
        <p v-for="(todo, index) in todos" :key="index"> {{ todo.task }} - estado: {{ todo.completed }} </p>

    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            todos: this.$store.getters.getTodos
        }
    },
    computed: {
        countTasks () {
            return this.$store.getters.countTasks
        }
    }
}
</script>

<style scoped>

</style>
