<template>
  <div id="myModal" class="modal fixed z-10 inset-0 overflow-y-auto pt-20">
    <div :class="['modal-container', 'modal-' + size]">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button class="close" @click="$emit('close')">Close</button>
      </div>
      <div :class="['modal-content']">
        <slot />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function
    },
    size: {
      type: String,
      default: "small"
    },
    title: {
      type: String
    }
  },
  data() {
    return {};
  },

  mounted() {},
  methods: {}
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-container {
  background-color: #fefefe;
  margin: auto;
  padding: 15px 15px 15px 15px;
  border: 1px solid #888;
}

.modal-header {
  padding: 0px 0px 5px 0px;
  font-size: 20px;
  font-weight: 600;
  color: red;
}

/* Modal Content */
.modal-content {
  background-color: rgb(247, 244, 244);
  margin: auto;
  padding: 20px;
  border: 1px solid lightgray;
  margin-top: 15px;
}

.modal-footer {
  display: flex;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 20px;
  font-weight: bold;
  margin-top: -40px;
  margin-right: -5px;
  padding: 0;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.modal-large {
  width: 80%;
}

.modal-medium {
  width: 65%;
}

.modal-small {
  width: 30%;
}
</style>
