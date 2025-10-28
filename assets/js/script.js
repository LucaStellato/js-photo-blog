console.log('it work')

//CONNECTION LINK API WITH AXIOS
axios.get('https://lanciweb.github.io/demo/api/pictures/')

    .then(response => {
        //PASSING ARRAY DATA INTO A VARIABLE
        const replaced = response.data
        console.log(replaced)
        //RECOVERY DATA TO HTML PAGE
        const cardImage = document.querySelectorAll('.card-image')
        const cardDate = document.querySelectorAll('.date')
        const cardTitle = document.querySelectorAll('.title')
        //SCROLL ARRAY IN VARIABLE
        replaced.forEach((element, i) => {
            //CONDITION
            if (replaced[i]) {
                const replace = replaced[i]
                console.log(replace)
                //REPLACE ELEMENT IN PAGE HTML
                cardImage[i].src = element.url;
                cardDate[i].textContent = element.date;
                cardTitle[i].textContent = element.title;



            }
        })
    })
//RECOVERY DATA TO HTML PAGE
const fullScreen = document.querySelector('.fullscreen')
const fullImg = document.querySelector('.full-image')
const buttons = document.querySelector('.buttons')
//FUNCTION TO VISUALIZE A IMAGE FULL SCREEN
function visualScreen(src) {
    //REPLACE A SRC IMAGE
    fullImg.src = src
    //VISUALIZE A IMAGE FULL SCREEN
    fullScreen.style.display = 'flex'
}

//FUNCTION TO CLICK BUTTON
buttons.addEventListener("click", function () {
    //HIDDEN A IMAGE FULLSCREEN
    fullScreen.style.display = 'none'
});

//console.log(button)

