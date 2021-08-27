<template>
  <div>
    <h1>first component</h1>
    <t2 :message="messagefromParent"> </t2>

  </div>
</template>
<script>

import t2 from "@/components/t2.vue";
export default {

  
  data() {
    return {
      messagefromParent: 'from parent',
      // students: [
      //   { name: "abc", age: "12", email: "abc@abc" },
      //   { name: "abc", age: "12", email: "abc@abc" },
      //   { name: "abc", age: "12", email: "abc@abc" },
      // ],
    };
  },
  components:{
    t2
  }

};
</script>
