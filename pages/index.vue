<template>
  <div class="w-full flex justify-center h-screen">
    <div class="self-center w-80">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="submit"
      >
        <div class="mb-4">
          <zsd-input :v="$v" ns="form" name="first_name" label="First Name" />
        </div>
        <div class="mb-6">
          <zsd-input :v="$v" ns="form" name="last_name" label="Last Name" />
        </div>
        <div class="mb-6">
          <zsd-input :v="$v" ns="form" name="email" label="Email" />
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
            type="submit"
            @click="submit"
          >
            Create Account
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
      form: {
        first_name: "",
        last_name: "",
        email: "",
      },
    };
  },
  validations: {
    form: {
      first_name: {
        required,
      },
      last_name: {},
      email: {
        required,
        // minLength: minLength(6),
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>
