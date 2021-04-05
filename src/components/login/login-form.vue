<template>
  <div>
    <h1>Welcome to Fitness</h1>
    <div class="container w3layouts agileits">
  
      <div class="login w3layouts agileits">
        <h2>Log in</h2>
        
       <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
         <FormItem prop="userName">
           <input v-model="form.userName" placeholder="Please key in your username">
             <span slot="prepend">
               <Icon :size="16" type="ios-person"></Icon>
             </span>
         </FormItem>
         <FormItem prop="password">
           <input v-model="form.password" placeholder="Please key in your password">
             <span slot="prepend">
               <Icon :size="16" type="ios-person"></Icon>
             </span>
         </FormItem>

         
         <FormItem>
           <Button @click="handleSubmit" type="primary" >Log in </Button>
         </FormItem>
       </Form>

      </div>
    </div>
    </div>
  

</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: 'The account cannot be blank', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: 'The password cannot be blank', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>
