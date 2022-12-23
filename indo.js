const colors = ["red", "green", "black", "aqua", "hotpink" , "orange","blue","aliceblue","aquamarine","chartreuse","darksalmon","deepskyblue"]
const btn = document.getElementById('bo')
const color = document.querySelector(".color")


btn.addEventListener('click', function(){
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}