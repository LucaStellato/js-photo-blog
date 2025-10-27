console.log('it work')


axios.get('https://lanciweb.github.io/demo/api/pictures/')

    .then(response => {

        const replace = response.data
        console.log(replace)
        const cardImage = document.querySelectorAll('card-image')
        const cardDate = document.querySelectorAll('date')
        const cardTitle = document.querySelectorAll('title')
    })





