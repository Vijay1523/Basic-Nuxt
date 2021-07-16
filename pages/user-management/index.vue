<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-7">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="flex justify-end">
          <NuxtLink
            to="/add-user"
            class="px-3 py-2 text-white inline-flex bg-green-700 border-green-100 font-semibold square-full"
          >
            + Add
          </NuxtLink>
        </div>
        <div>Count : {{ userList.length }}</div>

        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Company
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(user, index) in userList" :key="user.email">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ user.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ user.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ user.company.name }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ user.company.bs }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="[
                      'px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white',
                      'text-green-800'
                    ]"
                  >
                    <div class="flex items-center justify-center w-full">
                      <label
                        :for="'toggle' + index"
                        class="flex items-center cursor-pointer"
                      >
                        <div class="relative">
                          <input
                            :id="'toggle' + index"
                            type="checkbox"
                            class="sr-only"
                            v-model="statusToggle[index]"
                            @change="changeStatus($event, user.id)"
                          />
                          <div
                            class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                          ></div>
                          <div
                            :class="
                              `dot absolute w-6 h-6 ${
                                !statusToggle[index] ? 'bg-white' : ''
                              } rounded-full shadow -left-1 -top-1 transition`
                            "
                          ></div>
                        </div>
                        <div class="ml-3 text-gray-700 font-medium">
                          {{ statusToggle[index] ? "Active" : "Deactive" }}
                        </div>
                      </label>
                    </div>
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ user.phone }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <button
                    @click="edit(user.id)"
                    class="cursor-pointer text-sm text-green-400 hover:text-green-700"
                  >
                    Edit
                  </button>
                  <button
                    class="cursor-pointer text-sm text-red-400 hover:text-red-700"
                    @click="deleteModalOpen(user.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Modal
      size="small"
      :title="`Delete Record (Id - ${selectedDeleteRecord})`"
      v-if="isDisplay"
      @close="closeModal"
    >
      <div class="modal-msg">
        Are you sure,<br />
        you want to delete this record ?
      </div>
      <template slot="footer">
        <div class="modal-btn">
          <button
            class="px-3 py-2 text-white inline-flex bg-green-700 border-green-100 font-semibold square-full"
            @click="deleteUser"
          >
            Ok
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Modal from "~/components/Modal.vue";
import { showToast } from "~/common/toast";
import { getterTypes, actionTypes } from "~/store/types";

export default {
  data() {
    return {
      isDisplay: false,
      selectedDeleteRecord: "",
      statusToggle: []
    };
  },
  computed: {
    ...mapGetters({
      users: getterTypes.USERS
    }),
    userList() {
      return this.users;
    }
  },
  mounted() {
    if (!this.users.length) {
      this.getUsers();
      this.users.forEach((a, index) => {
        this.statusToggle.push(a.status === "Active" ? true : false);
      });
    }
  },
  methods: {
    ...mapActions({
      getUsers: actionTypes.GET_USERS,
      deleteUserAction: actionTypes.DELETE_USER,
      updateStatus: actionTypes.UPDATE_STATUS
    }),
    deleteModalOpen(id) {
      this.isDisplay = true;
      this.selectedDeleteRecord = id;
    },
    deleteUser() {
      this.deleteUserAction(this.selectedDeleteRecord);
      showToast(this, "Record Deleted Successfully", "success");
      this.selectedDeleteRecord = "";
      this.isDisplay = false;
    },
    closeModal() {
      this.selectedDeleteRecord = "";
      this.isDisplay = false;
    },
    changeStatus(e, id) {
      e.target.value;
      this.updateStatus({
        id,
        status: e.target.value === "on"
      });
      showToast(this, "User status changed Successfully", "success");
    },
    edit(id) {
      this.$router.push({
        name: "user-management-id",
        params: {
          id
        }
      });
    }
  },
  components: {
    Modal
  }
};
</script>

<style scoped>
.modal-msg {
  font-size: 20px;
  font-weight: 200;
  color: black;
}
.modal-btn {
  display: flex;
}

input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
