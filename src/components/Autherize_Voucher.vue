<template>
  <cv-tile style="background-color: rgb(129, 219, 129)" :light="light">
    <cv-data-table :columns="columns" :data="data" ref="table"> </cv-data-table>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    
    <cv-button
      class="button-1"
      :kind="kind"
      :size="size"
      :disabled="disabled"
      @click="visible = true"
      :icon="icon"
    >
      OK
    </cv-button>

    <cv-modal
      :close-aria-label="closeAriaLabel"
      :size="size"
      :visible="visible"
      @modal-shown="actionShown"
      @modal-hidden="actionHidden"
      @modal-hide-request="actionHideRequest"
      @after-modal-hidden="actionAfterHidden"
      :auto-hide-off="autoHideOff"
    >

      <template v-if="use_title" slot="title">Message</template>
      <template v-if="use_content" slot="content"
        ><p>
            THE CNIC NUMBER:123456789 EXIST ON THE DEBERRED/PROHIBITED LIST.PLEASE CONTACT COMPLIANCE DEPARTMENT
        </p></template
      >
    </cv-modal>

    <cv-button
      style="margin-left: 1070px"
      class="btn-1"
      :kind="kind"
      :size="size"
      :disabled="disabled"
      @click="actionClick"
      :icon="icon"
    >
      Back
    </cv-button>
  </cv-tile>
</template>

<script>
export default {
  title: "Autherize App",

  data() {
    return {
      closeAriaLabel: "Close",
      use_label: true,
      use_title: true,
      use_content: true,

      visible: false,
      autoHideOff: false,

      kind: "primary",
      size: "",
      disabled: false,

      title: "Table title",
      columns: ["Voucher No.", "Post by", "Vouch Type"],
      data: [["12345", "Testing", "General Voucher"]],
      use_helperTextSlot: true,
    };
  },
  methods: {
    actionHidden() {
      this.visible = false;
    },
  },
};
</script>


<style>
.bx--btn {
  size: 10px;
  margin-left: 160px;
  background-color: #e7e7e7;
  color: black;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: 0.16px;
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  max-width: 20rem;
  min-height: 3rem;
  margin: 4px;
  padding: calc(0.875rem - 3px) 63px calc(0.875rem - 3px) 15px;
  text-align: left;
  text-decoration: none;
  vertical-align: top;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  transition: background 70ms cubic-bezier(0, 0, 0.38, 0.9),
    box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9),
    border-color 70ms cubic-bezier(0, 0, 0.38, 0.9),
    outline 70ms cubic-bezier(0, 0, 0.38, 0.9);
}

.button-1 {
  color: white;
  background-color: rgb(18, 143, 59);
  width: 6.99rem;
}
.btn-1 {
  color: white;
  background-color: rgb(18, 143, 59);
  margin-top: -53px;
}
</style>

