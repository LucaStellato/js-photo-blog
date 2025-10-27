console.log('it work')


axios.get('https://lanciweb.github.io/demo/api/pictures/')

.then(response=>{
    console.log(response.data)
})
const replaced=response.data;
console.log(replaced)

const cardImage= document.querySelectorAll('card-image')

