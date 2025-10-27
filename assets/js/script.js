console.log('it work')


axios.get('https://lanciweb.github.io/demo/api/pictures/')

    .then(response => {

        const replaced = response.data
        console.log(replaced)
        const cardImage = document.querySelectorAll('card-image')
        const cardDate = document.querySelectorAll('date')
        const cardTitle = document.querySelectorAll('title')
        replaced.forEach((i,element)=>{
            if(replaced[i]){
                const replace=replaced[i]
                 console.log(replace)



            }
        })
    })





