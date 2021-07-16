<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3">
        <LoadingBar v-if="isDetailLoading" />
        <div class="mt-7 md:mt-0 md:col-span-4" v-else>
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
                      for="companyName"
                      class="block text-sm font-medium text-gray-700"
                      >Company Name</label
                    >
                    <select
                      id="companyName"
                      name="companyName"
                      autocomplete="companyName"
                      v-model="form.companyName"
                      @input="resetForm"
                      :class="
                        `mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.companyName.status ? 'error' : ''
                        }`
                      "
                    >
                      <option value="Deckow-Crist">Deckow-Crist</option>
                      <option value="Romaguera-Crona">Romaguera-Crona</option>
                      <option value="Romaguera-Jacobson"
                        >Romaguera-Jacobson</option
                      >
                      <option value="Robel-Corkery">Robel-Corkery</option>
                      <option value="Keebler LLC">Keebler LLC</option>
                      <option value="Considine-Lockman"
                        >Considine-Lockman</option
                      >

                      <option value="Johns Group">Johns Group</option>
                      <option value="Abernathy Group">Abernathy Group</option>
                      <option value="Yost and Sons">Yost and Sons</option>
                      <option value="Hoeger LLC">Hoeger LLC</option>
                    </select>
                    <p class="text-red-400" v-if="errors.companyName.status">
                      {{ errors.companyName.message }}
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="companyBs"
                      class="block text-sm font-medium text-gray-700"
                      >Company bs</label
                    >
                    <select
                      id="companyBs"
                      name="companyBs"
                      autocomplete="companyBs"
                      v-model="form.companyBs"
                      @input="resetForm"
                      :class="
                        `mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.companyBs.status ? 'error' : ''
                        }`
                      "
                    >
                      <option value="harness real-time e-markets"
                        >harness real-time e-markets</option
                      >
                      <option value="synergize scalable supply-chains"
                        >synergize scalable supply-chains</option
                      >
                      <option value="e-enable strategic applications"
                        >e-enable strategic applications</option
                      >
                      <option value="transition cutting-edge web services"
                        >transition cutting-edge web services</option
                      >
                      <option value="revolutionize end-to-end systems"
                        >revolutionize end-to-end systems</option
                      >
                      <option value="e-enable innovative applications"
                        >e-enable innovative applications</option
                      >
                      <option value="generate enterprise e-tailer"
                        >generate enterprise e-tailer</option
                      >
                      <option value="e-enable extensible e-tailers"
                        >e-enable extensible e-tailers</option
                      >
                      <option value="aggregate real-time technologies"
                        >aggregate real-time technologies</option
                      >
                      <option value="target end-to-end models"
                        >target end-to-end models</option
                      >
                    </select>
                    <p class="text-red-400" v-if="errors.companyBs.status">
                      {{ errors.companyBs.message }}
                    </p>
                  </div>

                  <div class="col-span-6">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                      >Phone</label
                    >
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      v-model="form.phone"
                      @input="resetForm"
                      :class="
                        `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                        ${errors.phone.status ? 'error' : ''}
                      `
                      "
                    />
                    <p class="text-red-400" v-if="errors.phone.status">
                      {{ errors.phone.message }}
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
import { getterTypes, actionTypes } from "~/store/types";
import { showToast } from "~/common/toast";
import LoadingBar from "~/components/LoadingBar.vue";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        companyBs: "",
        companyName: "",
        phone: ""
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
        companyBs: {
          status: false,
          message: ""
        },
        companyName: {
          status: false,
          message: ""
        },
        phone: {
          status: false,
          message: ""
        }
      }
    };
  },
  mounted() {
    this.getUserById(this.$route.params.id);
    if (this.selectedUser) {
      this.form = Object.assign({}, this.selectedUser);
    }
  },
  computed: {
    ...mapGetters({
      selectedUser: getterTypes.SELECTED_USER,
      isDetailLoading: getterTypes.IS_DETAIL_LOADING
    })
  },
  methods: {
    ...mapActions({
      getUserById: actionTypes.GET_USER_BY_ID,
      updateDetail: actionTypes.UPDATE_DETAIL
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

      if (!this.form.companyBs) {
        this.errors.companyBs.status = true;
        this.errors.companyBs.message = "Please select companyBs";
      }

      if (!this.form.companyName) {
        this.errors.companyName.status = true;
        this.errors.companyName.message = "Please select companyName";
      }

      if (!this.form.phone) {
        this.errors.phone.status = true;
        this.errors.phone.message = "Phone is required";
      }
    },
    submit(e) {
      e.preventDefault();
      this.checkForm();
      this.updateDetail(this.form);
      showToast(this, "Record updated successfully !", "success");
      this.$router.push("/user-management");
    },
    resetForm() {
      let vm = this;
      Object.keys(this.errors).forEach(a => {
        vm.errors[a].status = false;
      });
    }
  },
  components: {
    LoadingBar
  }
};
</script>

<style scope>
.error {
  border: 1px solid red !important;
  box-shadow: 0px 0px 6px 0px rgb(250 0 0);
}
</style>
