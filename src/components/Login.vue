<template>
    <div class="vue-tempalte">

            <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
      <a class="navbar-brand" href="#">
      <img src="@/assets/download.jpg" alt="..." height="40">
    </a>
       <h2 style = "margin-right: auto">
       Bank AlHabib
       </h2>
      </div>
    </nav>

        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Branch Code</label>
                <input type="text" v-model="user.branch_code" max="4" min ="4" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>User Name</label>
                <input type="password" v-model="user.user_name" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="txt" v-model="user.email" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" @click.prevent="login()">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

            

        </form>
    </div>
</template>

<script>
import axios from 'axios'
import '@/assets/css/main.css'

export default {
  data() {
    return {
      user: {
       user_name: '',
        email: '',
        branch_code:''
      }
    }},
    methods:{
        login(){
            console.log("hasd")
    
            axios.post("http://localhost:8082/Login",  this.user)
                .then(response => {
                     console.log("after post")
                    if(response.data)
                    {  this.$router.push('/Teller')
                        
                        console.log("hasd")

                    }

                }).catch(error => console.log(error))
                .finally(console.log("here"))
                
          

        }

    }
  
};

</script>