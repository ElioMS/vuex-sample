<template>
    <div>
        <h4> Add Task  </h4>
        <form>
            <div class="form-group">
                <label> ID </label>
                <input type="text" class="form-control" v-model="id">
            </div>

            <div class="form-group">
                <label> TASK </label>
                <input type="text" class="form-control" v-model="task">
            </div>

            <button class="btn btn-info" @click.prevent="addTaskToTodoList"> Agregar </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data () {
            return {
                id: null,
                task: ''
            }
        },
        methods :{
            addTaskToTodoList() {
                var task = {
                    id: this.id,
                    task: this.task,
                    completed: false
                }

                this.$store.commit('addTask', task);

                this.id = null
                this.task = ''
            },
        }
    }
</script>

<style scoped>

</style>