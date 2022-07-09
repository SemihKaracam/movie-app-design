const arrowsRight = document.querySelectorAll(".arrow-right")
const movieLists = document.querySelectorAll(".movie-list")
arrowsRight.forEach((arrowRight,i)=>{
    let countNumber = 0
    const movieNumber = movieLists[i].querySelectorAll("img").length
    arrowRight.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth/330)
        countNumber += 1
        if(movieNumber - (countNumber + 4) + (4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 360}px)`
        }else{
            movieLists[i].style.transform = `translateX(0px)`
            countNumber=0
        }
    })
})


const elements = document.querySelectorAll(".navbar,.theme-change,.toggle-ball,.movies-container,.sidebar")
const toggleBall = document.querySelector(".toggle-ball")

toggleBall.addEventListener("click",()=>{
    elements.forEach((elem)=>{
        elem.classList.toggle("active")
    })
})
    


// console.log(movie.length/movieList.length)
// let movieNumber = movie.length/movieList.length
// movieList.forEach((ml)=>{
//     ml.style.width = `${movieNumber * 330 + movieNumber * 30}px`
//     console.log(ml.computedStyleMap().get("transform")[0].x.value)
// })

// arrowRight.addEventListener("click",()=>{
//     movieList.style.transform = "translateX(-100px)"
// })