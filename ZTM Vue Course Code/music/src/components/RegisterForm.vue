<template>
  <!-- Registration Form -->
  <div class="text-white text-center font-bold p-5 mb-4" v-if="regShowAlert" :class="regAlertVariant">
    {{ regAlertMessage }}
  </div>
  <vee-form :validation-schema="schema" @submit="register" :initial-values="userData">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field
        name="name"
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <vee-field
        type="number"
        name="age"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
      />
      <ErrorMessage class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }"
        ><input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-bind="field"
        />
        <div class="text-red-600" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        type="password"
        name="comfirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="comfirm_password" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <vee-field
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antarctica</option>
      </vee-field>
      <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field type="checkbox" name="tos" value="1" class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
      <label class="inline-block">Accept terms of service</label>
      <div />
      <ErrorMessage class="text-red-600" name="tos" />
    </div>
    <button
      type="submit"
      :disabled="regInSubmission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
  <button @click="register">ABC</button>
</template>

<script>
/* eslint-disable */

export default {
  name: "RegisterForm",
  data() {
    return {
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        age: "required|min_value:18|max_value:100",
        password: "required|min:3|max:100",
        comfirm_password: "confirmed:@password",
        country: "required|country_excluded:Antarctica",
        tos: "tos",
      },
      userData: {
        country: "USA",
      },
      regInSubmission: false,
      regShowAlert: false,
      regAlertVariant: "bg-blue-500",
      regAlertMessage: "Please wait! Your account is being created.",
    };
  },
  methods: {
    async register(values) {
      this.regShowAlert = true;
      this.regInSubmission = true;
      this.regAlertVariant = "bg-blue-500";
      this.regAlertMessage = "Please wait! Your account is being created.";

      try {
        await this.$store.dispatch("register", values);
      } catch (e) {
        console.log(`${e.code} ${e.message}`);
        this.regInSubmission = false;
        this.regAlertVariant = "bg-red-500";
        this.regAlertMessage = "An unexpected error occured. Please try again later.";
        return;
      }

      this.regInSubmission = false;
      this.regAlertVariant = "bg-green-500";
      this.regAlertMessage = "Success! Your account has been created.";
    },
  },
};
</script>

<style></style>
