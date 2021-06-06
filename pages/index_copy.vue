<template>
  <div class="flex item=center">
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="submit"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="login">
            Login
          </label>
          <input
            :class="[
              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border border-red-500': $v.login.$error },
            ]"
            v-model.trim="$v.login.$model"
            type="text"
            id="login"
            placeholder="Login"
          />

          <div class="text-red text-xs" v-if="!$v.login.required">
            Name is required
          </div>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            :class="[
              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              { 'border border-red-500': $v.password.$error },
            ]"
            v-model.trim="$v.password.$model"
            type="password"
            id="password"
            placeholder="******************"
          />
          <div class="text-red text-xs" v-if="!$v.password.required">
            Password is required
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none
              focus:shadow-outline
            "
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy; All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
  validations: {
    login: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
    },
  },
};
</script>
