<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3">
        <div class="mt-7 md:mt-0 md:col-span-4">
          <form @submit="submit" method="POST">
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
                      @input="resetForm"
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
                      @input="resetForm"
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
                      @input="resetForm"
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
                      for="designation"
                      class="block text-sm font-medium text-gray-700"
                      >Designation</label
                    >
                    <select
                      id="designation"
                      name="designation"
                      autocomplete="designation"
                      v-model="form.designation"
                      @input="resetForm"
                      :class="
                        `mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.designation.status ? 'error' : ''
                        }`
                      "
                    >
                      <option>Regional Paradigm Technician</option>
                    </select>
                    <p class="text-red-400" v-if="errors.designation.status">
                      {{ errors.designation.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="role"
                      class="block text-sm font-medium text-gray-700"
                      >Role</label
                    >
                    <select
                      id="role"
                      name="role"
                      autocomplete="role"
                      v-model="form.role"
                      @input="resetForm"
                      :class="
                        `mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.role.status ? 'error' : ''
                        }`
                      "
                    >
                      <option>Admin</option>
                      <option>Manager</option>
                      <option>Ass. Manager</option>
                    </select>
                    <p class="text-red-400" v-if="errors.role.status">
                      {{ errors.role.message }}
                    </p>
                  </div>

                  <div class="col-span-6">
                    <label
                      for="department"
                      class="block text-sm font-medium text-gray-700"
                      >Street address</label
                    >
                    <input
                      type="text"
                      name="department"
                      id="department"
                      v-model="form.department"
                      @input="resetForm"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.department.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.department.status">
                      {{ errors.department.message }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  @click="submit"
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
                <button
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="button"
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
import { mapGetters, mapActions } from "vuex";
import { showToast } from "~/common/toast";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",

        designation: "",
        role: "",
        department: ""
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
        designation: {
          status: false,
          message: ""
        },
        role: {
          status: false,
          message: ""
        },
        department: {
          status: false,
          message: ""
        }
      }
    };
  },
  methods: {
    ...mapActions({
      addUserAction: "ADD_USER"
    }),
    checkForm: function() {
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

      if (!this.form.designation) {
        this.errors.designation.status = true;
        this.errors.designation.message = "Please select designation";
      }

      if (!this.form.role) {
        this.errors.role.status = true;
        this.errors.role.message = "Role is required";
      }

      if (!this.form.department) {
        this.errors.department.status = true;
        this.errors.department.message = "Department is required";
      }
    },
    submit(e) {
      e.preventDefault();
      this.checkForm();
      this.addUserAction(this.form);
      showToast(this, "Record added successfully !", "success");
      this.$router.push("/user-management");
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
