<template>
   <div class="row">

       <div class="col">
          <div class="card">
              <div class="card-body">
                  <h4 class="title-completed"> <strong> Tareas completadas: {{ countCompletedTasks }} </strong> </h4>
                  <p v-for="todo in taskCompleted" :key="todo.id"> {{ todo.task }} <button class="btn btn-danger btn-sm" @click="openTask" :value="todo.id"> <i class="fa fa-close"></i> </button> </p>
              </div>
          </div>
       </div>

       <div class="col">
           <div class="card">
               <div class="card-body">
                   <h4 class="title-incompleted"> <strong> Tareas por completar </strong> </h4>
                   <div v-for="(task, index) in taskIncompleted" :key="index">
                       <span> {{ task.task }} </span> <button class="btn btn-success btn-sm" @click="endTask"  :value="task.id"> <i class="fa fa-check"></i> </button>
                   </div>
               </div>
           </div>
       </div>
       <hr>
   </div>
</template>

<script>
    export default {
        name: "ListTodos",
        methods : {

            endTask(e) {
               this.$store.commit('completeMyTask', e.currentTarget.value);
            },
            openTask(e) {
                this.$store.commit('removeMyTask', e.currentTarget.value);
            }
        },
        computed: {
            countCompletedTasks () {
              return this.$store.getters.countCompletedTask
            },
            taskCompleted () {
                return this.$store.getters.getCompleted
            },
            taskIncompleted () {
                return this.$store.getters.getIncomplete
            }
        }
    }
</script>

<style scoped>
    button {
        margin-bottom: 10px;
    }

    .title-completed {
        color: forestgreen;
    }

    .title-incompleted {
        color: indianred;
    }
</style>