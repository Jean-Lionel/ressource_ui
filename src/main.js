import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'


const myMixin = {
    data(){
        return{
            baseURL: this.$store.state.url,
            personneTitle: ['Mr', 'Mrs', 'Mss', 'Dr', 'Sir', 'Madam'],
            etat_civil :['Married', 'Single', 'Divorced', 'Widow', 'Widower'],
            genderList : ['male', 'female', 'other', 'Not Known'],
            educationLevel : ['O-LEVEL', 'Senior High', 'Junior High', 
            'Tertiary', 'Primary Level', 'Other' ],
            employe_type : ['Full-Time', 'Part-Time', 'Contract', 'Intern']

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
    datetime(x) {
      if (!x) return "-"
      let date = new Date(x);
      return new Intl.DateTimeFormat(
        'en-US'
      ).format(date)
    },
    money(x) {
        if (x == undefined) return 0;
         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
        

    }
}




createApp(App).use(store).use(router).mixin(myMixin).mount('#app')
