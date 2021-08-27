<template>
  <div class="hello">
      <h1>ALHABIB BANKING SYSTEM</h1>

      <div id="hello-vue" class="demo">
        <b-container>
          <b-row>
            <button class="button2" @click="click_newPage()">Setup</button>

            <b-col>
              <button
                class="btn1"
                style="background-color: rgb(18, 143, 59)"
                @click="click_newPage()"
              >
                CRM-Account Opening
              </button>
              <button
                class="btn1"
                style="background-color: rgb(18, 143, 59)"
                @click="click_newPage()"
              >
                CRM-Operational Activities
              </button>
            </b-col>
            <button
              class="button1"
              @click="$router.push({ name: 'teller-profile' })"
            >
              Teller
            </button>
          </b-row>
          <b-row>
            <button class="button" @click="click_newPage()">
              Trade Finance
            </button>
            <button class="button" @click="click_newPage()">
              Credit Managment
            </button>
            <button class="button" @click="click_newPage()">
              Term Deposit
            </button>
          </b-row>
          <b-row>
            <button class="button" @click="click_newPage()">Remittance</button>
            <button class="button" @click="click_newPage()">
              Customer ID Managment
            </button>
            <button class="button" @click="$router.push('/transactional_security')">
              Transaction Security
            </button>
          </b-row>
          <b-row>
            <button class="button" @click="click_newPage()">
              User Profile Mangment
            </button>
            <button class="button" @click="click_newPage()">Back Office</button>
            <button class="button" @click="click_newPage()">
              Special Request
            </button>
          </b-row>
        </b-container>
      </div>
      <div class="foot-btn">
        <cv-button class="buttons"
          :kind="kind"
          :size="size"
          :disabled="disabled"
          @click="actionClick"
          :icon="icon"
        >
          Profile
        </cv-button>
        <cv-button class="buttons"
          :kind="kind"
          :size="size"
          :disabled="disabled"
          @click="actionClick"
          :icon="icon"
        >
          Change Password
        </cv-button>
        <cv-button class="buttons btn4"
          :kind="kind"
          :size="size"
          :disabled="disabled"
          @click="actionClick"
          :icon="icon"
        >
          Help
        </cv-button>
        <cv-button class="buttons"
          :kind="kind"
          :size="size"
          :disabled="disabled"
          @click="actionClick"
          :icon="icon"
        >
          Sign Out
        </cv-button>
      
      </div>
  </div>
</template>

<script>
import "@/assets/css/teller.css";

export default {
  title: "Teller",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style >
.buttons {
  background-color: rgb(18, 143, 59);
  margin-left: 5px;
}
.btn4{
  margin-left: 505px;;
}
.foot-btn{
  margin-left: 85px;
  
}
</style>


