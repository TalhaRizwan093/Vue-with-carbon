<template>
  <div>
    <h1 class="top-heading">ALHABIB BANKING SYSTEM</h1>
    <h2 class="second-heading">TRANSACTIONAL SECURITY</h2>
    <div class="main-area">
      <cv-grid>
        <h5>FINANCIAL TRANSACTION</h5>
        <cv-row>
          <cv-column :sm="2" :md="4" :lg="4"
            ><div class="cv-grid-story__preview-col">
              <cv-dropdown
                class="dropdown"
                :light="light"
                :placeholder="placeholder"
                :value="value"
                :up="up"
                :inline="inline"
                :helper-text="helperText"
                :hide-selected="hideSelected"
                :invalid-message="invalidMessage"
                :disabled="disabled"
              >
                <cv-button class="dropdown-btn" value="10"
                  ><span>By Reference No.</span></cv-button
                >
                <cv-button class="dropdown-btn" value="20"
                  >By Transaction List</cv-button
                >
                <cv-button class="dropdown-btn" value="30">By Voucher No.</cv-button>
                <cv-button class="dropdown-btn" value="40" @click="$router.push('/trade_finance')">By Voucher List</cv-button>
                <cv-button class="dropdown-btn" value="50" 
                  >Monitor By Transaction No.</cv-button
                >
                <cv-button class="dropdown-btn" value="60"
                  >Monitor By Transaction List</cv-button
                >
                <cv-button class="dropdown-btn" value="70"
                  >Changes Waiver Autherize</cv-button
                >
                <cv-button class="dropdown-btn" value="80"
                  >Inter Branch Logged Transaction</cv-button
                >
              </cv-dropdown>
            </div>
            <div class="cv-grid-story__preview-col">
              <cv-button
                class="button-1"
                :kind="kind"
                :size="size"
                :disabled="disabled"
                @click="actionClick"
                :icon="icon"
              >
                View
              </cv-button>
            </div>
          </cv-column>
          <cv-column :sm="2" :md="4" :lg="4" class="column-1"
            ><div class="cv-grid-story__preview-col">
              <cv-button
                class="button-1"
                :kind="kind"
                :size="size"
                :disabled="disabled"
                @click="actionClick"
                :icon="icon"
              >
                Transactions
              </cv-button>
            </div>
            <div class="cv-grid-story__preview-col">
              <cv-button
                class="button-1"
                :kind="kind"
                :size="size"
                :disabled="disabled"
                @click="actionClick"
                :icon="icon"
              >
                Batches
              </cv-button>
            </div></cv-column
          >
        </cv-row>
        <h5 class="h5-2">NON FINANCIAL TRANSACTION</h5>
        <cv-row>
          <cv-column :sm="2" :md="4" :lg="4"
            ><div class="cv-grid-story__preview-col">
              <cv-button
                class="button-1"
                :kind="kind"
                :size="size"
                :disabled="disabled"
                @click="actionClick"
                :icon="icon"
              >
                Autherize
              </cv-button>
            </div>
            <div class="cv-grid-story__preview-col">
              <cv-button
                class="button-1"
                :kind="kind"
                :size="size"
                :disabled="disabled"
                @click="actionClick"
                :icon="icon"
              >
                View
              </cv-button>
            </div>
          </cv-column>
        </cv-row>
      </cv-grid>
    </div>
    <br />
    <br />
    <div class="foot-btn">
      <cv-grid>
        <cv-row>
          <div>
            <cv-button
              class="button-2"
              :kind="kind"
              :size="size"
              :disabled="disabled"
              @click="actionClick"
              :icon="icon"
            >
              Profile
            </cv-button>
            <cv-button
              class="button-2"
              :kind="kind"
              :size="size"
              :disabled="disabled"
              @click="actionClick"
              :icon="icon"
            >
              Change Password
            </cv-button>
            <cv-button
              class="button-2"
              :kind="kind"
              :size="size"
              :disabled="disabled"
              @click="actionClick"
              :icon="icon"
            >
              Reports
            </cv-button>
            <cv-button
              class="button-2"
              :kind="kind"
              :size="size"
              :disabled="disabled"
              @click="actionClick"
              :icon="icon"
            >
              Batch
            </cv-button>
          </div>
          <div class="btn-left-three">
            <cv-button
              class="button-2"
              :kind="kind"
              :size="size"
              :disabled="disabled"
              @click="actionClick"
              :icon="icon"
            >
              Main Menu
            </cv-button>
            <cv-button
              class="button-2"
              :kind="kind"
              :size="size"
              :disabled="disabled"
              @click="actionClick"
              :icon="icon"
            >
              Help
            </cv-button>
            <cv-button
              class="button-2"
              :kind="kind"
              :size="size"
              :disabled="disabled"
              @click="actionClick"
              :icon="icon"
            >
              Sign Out
            </cv-button>
          </div>
        </cv-row>
      </cv-grid>
    </div>
  </div>

  <!-- <cv-button
  :kind="kind"
  :size="size"
  :disabled="disabled"
  @click="actionClick"
  :icon="icon"
>
  I am a button
</cv-button> -->
</template>

<script>
export default {
  title: "Transactional Security",
  data() {
    return {
      light: false,
      placeholder: "Autherize",
      value: "",
      up: false,
      inline: false,
      hideSelected: false,
      label: "Select label",
      disabled: false,
      
    };
  },
};
</script>

<style >
.top-heading {
  font-size: 216%;
  margin-top: 25px;
  margin-left: 41px;
  letter-spacing: 4px;
}
.second-heading {
  font-size: 164%;
  margin-top: 22px;
  margin-left: 43px;
  letter-spacing: 2px;
}

.dropdown {
  margin-right: 61%;
  width: 60%;
}

.button-1 {
  color: white;
  background-color: rgb(18, 143, 59);
  width: 60%;
  margin-top: 9px;
  height: 36px;
  min-height: 2rem;
}
.bx--btn--primary:hover {
  background-color: black;
}

.bx--dropdown {
  background-color: rgb(18, 143, 59);
}

.bx--list-box__label {
  color: white;
}

.bx--dropdown:hover {
  background-color: black;
}
.bx--list-box__menu {
  background-color: rgb(18, 143, 59);
}
.bx--dropdown-link {
  color: #ffffff;
}
.bx--list-box__menu:focus {
  outline: none;
}
.column-1 {
  margin-top: -8px;
}
.column-2 {
  margin-left: -16px;
}
.h5-2 {
  margin-top: 6px;
}
.main-area {
  margin-left: 25%;
  /* margin-right: -142px; */
  margin-top: 131px;
}
.foot-btn {
  margin-left: 40px;
}
.btn-left-three {
  margin-left: 90px;
}
.button-2 {
  color: white;
  background-color: rgb(18, 143, 59);
  margin-left: 2px;
}
.dropdown-btn{
  color: white;
  background-color: rgb(18, 143, 59);
}
</style>
