<template>
  <div class="flex__row-center">
    <validation-observer ref="login-validation">
      <form @submit.prevent="submitForm" class="flex__column-center">
        <img class="login-logo" src="../assets/logo.png" alt=""/>
        <validation-provider class="display__block width-full" name="username" rules="required|min:3" v-slot="{errors}">
          <div class="form__input-field">
            <img
                width="24"
                height="24"
                src="../assets/icons/person.svg"
                alt="person svg"
                class="display__block form__input-icon"
            />
            <input
                name="username"
                v-model="username"
                type="text"
                placeholder="Username"
            />
          </div>
          <span class="error__input-class">{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider class="display__block width-full" name="password" rules="required|min:3" v-slot="{errors}">
          <div class="form__input-field">
            <img
                width="24"
                height="24"
                src="../assets/icons/login-lock.svg"
                alt="password svg"
                class="form__input-icon"
            />
            <input
                name="password"
                v-model="password"
                type="password"
                placeholder="Password"
            />
          </div>
          <span class="error__input-class">{{ errors[0] }}</span>
        </validation-provider>
        <BaseSubmitButton value="Login" :loading="loading"/>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import BaseSubmitButton from "../components/BaseSubmitButton";
import api from "../services/Api";
import Cookies from 'js-cookie'

export default {
  name: "AppLoginPage",
  components: {
    BaseSubmitButton,
  },
  data() {
    return {
      loading: false,
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations([
      'userLoggedIn'
    ]),
    async submitForm() {
      const validateResult = await this.$refs["login-validation"].validate().then(async (response) => response)
      const submitForm = () => {
        const {username, password} = this
        this.loading = true
        const params = {username, password};
        api.login(params).then((response) => {
          Cookies.set('___authorization___token___', response.data, {expires: 1 / 6})
          this.$router.push({name: 'home'})
          this.userLoggedIn(true)
        }).catch((error) => {
          this.userLoggedIn(false)
          console.log(error.message);
        }).finally(() => {
          this.loading = false
        });
      }

      validateResult && submitForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.error__input-class {
  width: 100%;
  display: block;
  color: #ef4444;
  font-weight: bolder;
  text-align: start;
  margin-left: 16px;
}

.flex__column-center {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
}

.flex__row-center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-logo {
  mix-blend-mode: multiply;
  filter: contrast(1);
}

.form__input-field {
  width: 100%;
  height: 3.437rem;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 3.437rem;
  display: flex;
  align-items: center;
  position: relative;

  .form__input-icon{
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    background: none;
    outline: none;
    padding: 0.1rem 0 0.1rem 1rem;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
    border-radius: inherit;
    margin-left: 2rem;
  }

  input::-webkit-input-placeholder {
    color: #aaa;
    font-weight: 800;
  }

  input:-ms-input-placeholder {
    color: #aaa;
    font-weight: 800;
  }

  input::-ms-input-placeholder {
    color: #aaa;
    font-weight: 800;
  }
}
</style>
