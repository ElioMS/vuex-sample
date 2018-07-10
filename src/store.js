import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    todos : [
        {
            id: 1,
            task: 'Comprar comida',
            completed: false
        },
        {
            id: 2,
            task: 'Organizar el cuarto de estar',
            completed: true
        },
        {
            id: 3,
            task: 'Limpiar el estudio',
            completed: false
        }
    ]
}

const getters = {
    getTodos: state => {
        return state.todos
    },
    getIncomplete: state => {
        return state.todos.filter(todo => !todo.completed)
    },
    getCompleted: state => {
        return state.todos.filter(todo => todo.completed)
    },
    countTasks: state => {
        return state.todos.length
    },
    countCompletedTask: (state, getters) => {
        return getters.getCompleted.length
    }
}

const mutations = {
    addTask (state, task) {
        state.todos.push(task)
    },
    completeMyTask (state, id) {
        let task = state.todos.find(todo => todo.id == id);
        task.completed = true;
    },
    removeMyTask (state, id) {
        let task = state.todos.find(todo => todo.id == id);
        task.completed = false;
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})