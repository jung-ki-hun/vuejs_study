<template>
  <div class="hello">
    <h1>dfsdfs{{ $route.params.index }}</h1>
    <!-- <p>
      zsdhsdvasdhhasdg
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3> -->
    <!-- <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
          rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
          rel="noopener">eslint</a></li>
    </ul> -->
    <h1 @click="showIndex($props.note_data),updateParentValue()">
      HelloWorld2 {{$props.note_data}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  props: {'note_data':Number},

  methods: {
    showIndex(index){
      alert(`Hello ${index}`)
    },
    updateParentValue(){
      this.$emit('gigi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
