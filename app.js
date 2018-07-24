
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get("http://127.0.0.1:8000/user/")
      .then(response => (this.info = response.data))

  }
})

//   http:{
//     root:'http://127.0.0.1:8000/',
//     headers:{
//       Authorization:'',
//     }
//   },
//   methods:{
//      changeTitle:function(){
//       this.$http.get('user/').then(function(data){
//       console.log(data);
      
//     })
//       console.log("Megha")
//     }
//   }

  
//   created(){
//     this.$http.get('http://127.0.0.1:8000/user/').then(function(data){
//       console.log(data);
//     })
//   }

  
// })
