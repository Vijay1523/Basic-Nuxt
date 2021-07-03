<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3">
        <div class="mt-7 md:mt-0 md:col-span-4">
          <form @submit="checkForm" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >First name</label
                    >
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      v-model="form.firstName"
                      @change="resetForm"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.firstName.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.firstName.status">
                      {{ errors.firstName.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                      >Last name</label
                    >
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      v-model="form.lastName"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.lastName.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.lastName.status">
                      {{ errors.lastName.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Email address</label
                    >
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      v-model="form.email"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.email.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.email.status">
                      {{ errors.email.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                      >Country / Region</label
                    >
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      v-model="form.country"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-gray-700"
                      >Street address</label
                    >
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
                      v-model="form.streetaddress"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.streetaddress.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.streetaddress.status">
                      {{ errors.streetaddress.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      class="block text-sm font-medium text-gray-700"
                      >City</label
                    >
                    <input
                      type="text"
                      name="city"
                      id="city"
                      v-model="form.city"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.lastName.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.city.status">
                      {{ errors.city.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="state"
                      class="block text-sm font-medium text-gray-700"
                      >State / Province</label
                    >
                    <input
                      type="text"
                      name="state"
                      id="state"
                      v-model="form.state"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.state.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.state.status">
                      {{ errors.state.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium text-gray-700"
                      >ZIP / Postal</label
                    >
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
                      v-model="form.postalcode"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.postalCode.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.postalCode.status">
                      {{ errors.postalCode.message }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
                <button
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  @click="$router.go(-1)"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        streetaddress: "",
        city: "",
        state: "",
        postalcode: ""
      },
      errors: {
        firstName: {
          status: false,
          message: ""
        },
        lastName: {
          status: false,
          message: ""
        },
        email: {
          status: false,
          message: ""
        },
        country: {
          status: false,
          message: ""
        },
        streetaddress: {
          status: false,
          message: ""
        },
        city: {
          status: false,
          message: ""
        },
        state: {
          status: false,
          message: ""
        },
        postalCode: {
          status: false,
          message: ""
        }
      }
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      this.resetForm();
      if (!this.form.firstName) {
        this.errors.firstName.status = true;
        this.errors.firstName.message = "First Name is required";
      }

      if (!this.form.lastName) {
        this.errors.lastName.status = true;
        this.errors.lastName.message = "Last Name is required";
      }

      if (!this.form.email) {
        this.errors.email.status = true;
        this.errors.email.message = "Email is required";
      }

      if (!this.form.streetaddress) {
        this.errors.streetaddress.status = true;
        this.errors.streetaddress.message = "Streetaddress is required";
      }

      if (!this.form.city) {
        this.errors.city.status = true;
        this.errors.city.message = "City is required";
      }

      if (!this.form.state) {
        this.errors.state.status = true;
        this.errors.state.message = "State is required";
      }

      if (!this.form.postalCode) {
        this.errors.postalCode.status = true;
        this.errors.postalCode.message = "Pincode is required";
      }
    },
    resetForm() {
      let vm = this;
      Object.keys(this.errors).forEach(a => {
        vm.errors[a].status = false;
      });
    }
  }
};
</script>

<style scope>
.error {
  border: 1px solid red !important;
  box-shadow: 0px 0px 6px 0px rgb(250 0 0);
}
</style>
