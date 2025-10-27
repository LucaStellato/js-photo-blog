console.log('it work')


axios.get('https://lanciweb.github.io/demo/api/pictures/')

.then(response=>{
    console.log(response.data)
})

