console.log('it work')


axios.get('https://lanciweb.github.io/demo/api/pictures/')

    .then(response => {

        const replaced = response.data
        console.log(replaced)
        const cardImage = document.querySelectorAll('.card-image')
        const cardDate = document.querySelectorAll('.date')
        const cardTitle = document.querySelectorAll('.title')
        replaced.forEach((element, i) => {
            if (replaced[i]) {
                const replace = replaced[i]
                console.log(replace)
                cardImage[i].src = element.url;
                cardDate[i].textContent = element.date;
                cardTitle[i].textContent = element.title;



            }
        })
    })

function visualScreen(src){
    
}




