new Vue({
    el: '#app',
    data: {
        products: null
      },
    mounted () {
        axios
        .get('http://localhost:3000/products')
        .then(response => {
            this.products = response.data.rows;
        })
    } 
})