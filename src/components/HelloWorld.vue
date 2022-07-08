<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
   
    </p>
    <h3>다른 페이지 바로가기</h3>
    <ul>
      <!-- <li><a href="/pages2" rel="noopener">page2</a></li> -->
      <li>page2</li>
      <li><a href="/pages3" rel="noopener">page3</a></li>
    </ul>
    <div>
      <ul 
      v-for = "(item,index) in noteText"
      :key = "index">      
        <!-- <li :class="{ 'red':index % 2 === 0 ? 'red':'','bule':index % 2 !== 0 ? 'bule': ''  }" @click="rowClick(item,index) ">{{item.note_data.note_text}}</li> -->
        <li v-if="index % 2 !== 0 " :class="'red'"  @click="rowClick(item,index) "><HelloWorld2 :note_data="index"><a href="/pages2" rel="noopener">page2</a>{{item.note_data.note_text}}</HelloWorld2></li>
        <li v-else :class="'bule'"  @click="rowClick(item,index) "><HelloWorld2 :note_data="index"><a href="/pages2" rel="noopener">page2</a>{{item.note_data.note_text}}</HelloWorld2></li>      
      </ul>
    </div>
  </div>
</template>
<style>
  .red {
    background-color:#be5656
  }
  .bule{
    background-color:#5050ca
  }
</style>
<script>
import axios from 'axios'
import HelloWorld2 from "@/components/HelloWorld2.vue"
export default {
  name: 'HelloWorld',
  components: {
    HelloWorld2
    },
  data () {
    return {noteText:[]}
  },
  created () {
    this.loadData()
  },
  methods: {
    async loadData() {
      //http://49.174.84.142:3000/api/user/v1/main/list
      const data  = await axios.get('http://127.0.0.1:3000/api/user/v1/main/list',{
        params : {
          user_no : 17
          }
      })
      .then((res)=>res.data.query)
      // console.log(data);
      // data.forEach(x =>  
      // x.note_data.note_text.forEach( y => this.noteText.push(y.content)))
      this.noteText = data
    },
    rowClick(item,index){
      console.log(item, index)
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
