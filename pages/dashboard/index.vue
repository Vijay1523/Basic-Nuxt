<template>
  <div>
    Dashboard
    <hr />
    <div class="chart-row">
      <div>
        <pie-chart :data="pieChart.data" :options="pieChart.options" />
        <p class="chart-text-center font-normal">
          <i>User Management</i>
        </p>
      </div>
      <div>
        <bar-chart :data="barChart.data" :options="barChart.options" />
        <p class="chart-text-center font-normal">
          <i>Month Task Count</i>
        </p>
      </div>
      <div>
        <doughnut-chart
          :data="doughnutChart.data"
          :options="doughnutChart.options"
        />
        <p class="chart-text-center font-normal">
          <i>Task Management</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PieChart from "~/components/PieChart.vue";
import BarChart from "~/components/BarChart.vue";
import DoughnutChart from "~/components/DoughnutChart.vue";
import { getterTypes, actionTypes } from "~/store/types";

export default {
  data() {
    return {
      isOpen: false,
      pieChart: {
        data: {
          labels: ["Active User", "DeActive User", "Ideal User"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(54, 162, 235)",
                "rgb(255, 99, 132)",
                "rgb(255, 205, 86)"
              ],
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: false,
          plugins: {
            legend: { display: true, title: "tets" },
            title: {
              display: true,
              position: "bottom",
              align: "center",
              text: "Custom Chart Title",
              padding: {
                top: 10,
                bottom: 30
              }
            }
          }
        }
      },
      barChart: {
        data: {
          labels: [
            "Jan-2020",
            "Feb-2020",
            "Mar-2020",
            "Apr-2020",
            "May-2020",
            "Jun-2020"
          ],
          datasets: [
            {
              label: "Month Task",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              borderWidth: 1
            }
          ]
        },
        options: {}
      },
      doughnutChart: {
        data: {
          labels: ["Running Task", "Completed Task", "Pending Task"],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: ["#3cbd11", "#fff04a", "#ff7d4a"],
              hoverOffset: 4
            }
          ]
        },
        options: {}
      }
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
      getUsers: actionTypes.GET_USERS
    })
  },
  components: { PieChart, BarChart, DoughnutChart }
};
</script>

<style scoped>
.chart-row {
  display: flex;
  padding-top: 20px;
}

.chart-row div {
  padding-right: 20px;
}

.chart-text-center {
  text-align: center;
}
</style>
