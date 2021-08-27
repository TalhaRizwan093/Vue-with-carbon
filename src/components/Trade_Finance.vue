<template>
  <div class="main-div">
    <cv-grid>
      <cv-row>
        <cv-column :sm="2" :md="3" :lg="3"
          ><div class="cv-grid-story__preview-col">
            <p></p>
            <p>User ID</p>
            <p>Voucher Type</p>
          </div></cv-column
        >
        <cv-column :sm="2" :md="3" :lg="3"
          ><div class="cv-grid-story__preview-col">
            <cv-text-input
              class="txt-1"
              v-model="voucher_data.user_id"
              
              :light="light"
              :label="label"
              :value="value"
              :disabled="disabled"
              :type="inputType"
              :password-visible="passwordVisible"
              :password-hide-label="passwordHideLabel"
              :password-show-label="passwordShowLabel"
              :placeholder="placeholder"
              :helper-text="helperText"
              :invalid-message="invalidMessage"
              :warn-text="warnText"
            >
            </cv-text-input>
            
          </div>
          <cv-dropdown
            v-model="voucher_data.voucher_type"
            :light="light"
            :placeholder="placeholder2"
            :value="value"
            :up="up"
            :inline="inline"
            :helper-text="helperText"
            :hide-selected="hideSelected"
            :invalid-message="invalidMessage"
            :label="label"
            :disabled="disabled"
          >
            <cv-dropdown-item value="ALL"><span>All</span></cv-dropdown-item>
            <cv-dropdown-item value="GENERAL BANKING"
              >GENERAL BANKING</cv-dropdown-item
            >
            <cv-dropdown-item value="TRADE/CREDIT"
              >TRADE/CREDIT</cv-dropdown-item
            >
            <cv-dropdown-item value="INTERBRANCH">INTERBRANCH</cv-dropdown-item>
          </cv-dropdown>
          
        </cv-column>
      </cv-row>
    </cv-grid>
    <cv-button
      @click="$router.push('/autherize_voucher')"
      class="btn-1"
      :kind="kind"
      :size="size"
      :disabled="disabled"
      :icon="icon"
    >
      OK
    </cv-button>
  </div>
</template>
<script>
//import { EventBus } from "@/EventBus";
export default {
  title: "Trade Finance",
  data() {
    return {
        voucher_data: {
            user_id: "",
            voucher_type: ""
        },
      
      
      light: false,
      placeholder2: "Select",
      value: "",
      up: false,
      inline: false,
      hideSelected: false,
      label: "",
      disabled: false,
      //   label: "User ID",
      passwordVisible: false,
      passwordHideLabel: "Hide password",
      passwordShowLabel: "Show password",
      placeholder: "Enter USER ID",
    };
  },
   methods: {
   send_data(voucher_data) {
     console.log(voucher_data);
   }
   }
};
</script>

<style >
.txt-1 {
  margin-left: 0px;
}
.main-div {
  margin-top: 7%;
  margin-left: 19%;
}
.btn-1 {
  margin-left: 40px;
  margin-top: 38px;
  background-color: rgb(18, 143, 59);
}
</style>
