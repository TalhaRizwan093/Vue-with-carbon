// AccountInfo.vue

<template>
 <div >
   <p>{{v_data.user_id}}</p>
   <p>{{v_data.voucher_type}}</p>
 </div>
</template>
 
<script>
export default {
  name:'Autherize_Voucher.vue',

  props: [
    'v_data'
  ],

}
</script>   