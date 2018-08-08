
new Vue({
  el: '#app',
  data () {
    return {
      users:[],
      userName:null,
      usersList:[],
    }
  },
  mounted () {
    axios
      .get("http://127.0.0.1:8000/user/")
      .then(response => (this.users = response.data));
  },
  methods:{
    addUser:function(){
      userName=this.userName;
      console.log(this.userName);
      axios.post("http://127.0.0.1:8000/users/name/",this.userName);
      // axios
      //   .get("http://127.0.0.1:8000/users/list/").then(response => (console.log(response.data)));
      axios.get("http://127.0.0.1:8000/users/name/").then(response =>   {
            this.usersList = response.data
          })
      console.log(this.usersList);
        }

    },

      
          
})


