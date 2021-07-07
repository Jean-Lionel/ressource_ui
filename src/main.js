import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'


const myMixin = {
    data(){
        return{
            baseURL: this.$store.state.url
        }
    },
    computed:{
        header(){
            return {
                headers: {
                    Authorization: `Bearer ${this.$store.state.user.access}`,
                },
            };
        }

    },
    methods: {
        foo() {
            console.log('foo')
        },
        conflicting() {
            console.log('from mixin')
        }
    }
}




createApp(App).use(store).use(router).mixin(myMixin).mount('#app')
