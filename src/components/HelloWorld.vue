<template>
  <div class="hello">
    <van-button plain type="primary" @click="add">朴素按钮{{count}}</van-button>
  </div>
</template>

<script>
  import { mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods:{
      add(){
        this.$store.commit('add',10)
        console.log(this.$store.state.count)
      }
  },

  computed:mapState(["count"])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
