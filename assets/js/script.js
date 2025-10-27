console.log('it work')


axios.get('https://lanciweb.github.io/demo/api/pictures/')

.then(response=>{
    
    console.log(response.data)
    const replace=response.data
    console.log(replace)
    const cardImage= document.querySelectorAll('card-image')
})





