
new Vue({
  el: '#app',
  data () {
    return {
      users:[]
    }
  },
  mounted () {
    axios
      .get("http://127.0.0.1:8000/user/")
      .then(response => (this.users = response.data));
     

  },
  
})

