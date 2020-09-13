var imageArray = [
    "assests/2.jpg", "assests/3.jpg",
    "assests/4.jpg", "assests/5.jpg", "assests/6.jpg",
    "assests/7.jpg", "assests/8.jpg", "assests/9.jpg",
    "assests/10.jpg", "assests/11.jpg", "assests/12.jpg",
    "assests/13.jpg", "assests/14.jpg"
]

//Player Random Image

var playerImg = document.getElementById('playerImg')
var playerindex = Math.floor(Math.random() * 13)

//Comp Random Image
var compImg = document.getElementById('compImg')
var compindex = Math.floor(Math.random() * 13)

//All buttons

var showBtn = document.getElementById('show-btn')
var betBtn = document.getElementById('bet-btn')
var viewBtn = document.getElementById('view-btn')
var nextRoundBtn = document.getElementById('nextround-btn')


//Dispalying winner info

var winner = document.getElementById("winner")

//Displaying Who Call Show

var call = document.getElementById('show-call')


//count for Bet

var count = 1

//Setting player name

//  var name = prompt("Enter Your name")
//  document.getElementById('player-name').textContent = name

//popup

var popup =document.getElementById('popup')

//Audio

var shuffle = document.getElementById('shuffle')
var chips = document.getElementById('chips')
var cardFlip=document.getElementById('cardflip')

//Functions to play and mute the sound
function playChips() {
    chips.play();
}
function playShuffle() {
    shuffle.play();
}
function playCardFlip()
{
    cardFlip.play()
}
function soundMute()
{
    chips.muted=true
    shuffle.muted=true
    cardFlip.muted=true
    mute=document.getElementById('mute')
    mute.style.display='none'
    unmute.style.display='block'

}
function soundUnmute()
{
    chips.muted=false
    shuffle.muted=false
    cardFlip.muted=false
    unmute=document.getElementById('unmute')
    unmute.style.display='none'
    mute.style.display='block'
}
//Player card randomly generate and display

function displayPlayerImg() {

    playerImg.setAttribute("src", imageArray[playerindex])
    playerImg.classList.toggle("imgstyle")
    if (viewBtn.style.display = 'block') {
        viewBtn.style.display = "none"
    }
    else {
        viewBtn.style.display = "block"
    }
    betBtn.disabled = false
    playCardFlip()
}

////Computer card randomly generate and display

function displayCompImg() {
    compImg.setAttribute("src", imageArray[compindex])
    compImg.classList.toggle("imgstyle")
    playCardFlip()
}

//Betting funtion to bet your chips

function betting() {

    playChips()
    var playerChips = document.getElementById('player-chips').innerText
    var totalChips = document.getElementById('total-chips').innerText
    var compChips = document.getElementById('computer-chips').innerText

    updatedPlayerChips = document.getElementById('player-chips').innerText = (parseInt(playerChips)) - 20
    updatedCompChips = document.getElementById('computer-chips').innerText = (parseInt(compChips)) - 20
    updatedTotalChips = document.getElementById('total-chips').innerText =(parseInt(totalChips)) + 40

    if (updatedPlayerChips == 0 || updatedCompChips == 0) {
        showResult()
    }
    else
    {
    if(count==3)
    {
        showBtn.disabled=false
    }

    if(count==3 &&  compindex<=3)
    {
        console.log(count)
        console.log(compindex+ " first ")
        showResult()
        call.textContent=("Computer Asks To show")
    }
    else if(count==5 && compindex>=4 && compindex<=8)
    {
        console.log(count)
        console.log(compindex + " condition second ")
        showResult()
        call.textContent=("Computer Call show")
    }
    else if (count == 7 && compindex >= 9 && compindex<=11)
    {
        console.log(count)
        console.log(compindex + " conditon third ")
        showResult()
        call.textContent=("Computer Call show")
    }
    else if(count>7)
    {
        showResult()
        call.textContent=("Bet limit Exceeds")
    }
}
    count++
}

// Function to calculate result

function showResult() {
    displayCompImg()
    showBtn.disabled = true
    var currentPlayerChips = document.getElementById('player-chips')
    var currentCompChips = document.getElementById('computer-chips')
    var currentTotalChips = document.getElementById('total-chips')

    betBtn.disabled = true

    if (playerindex > compindex) {
        winner.innerHTML = document.getElementById('player-name').innerText + " Wins"
        currentPlayerChips.innerHTML = updatedPlayerChips + updatedTotalChips
        currentTotalChips.innerHTML = 00
    }
    else if (compindex > playerindex) {
        winner.innerHTML = "Computer Wins"
        currentCompChips.innerHTML = updatedCompChips + updatedTotalChips
        currentTotalChips.innerHTML = 00
    }
    else {
        winner.innerHTML = "Its a tie"
        currentPlayerChips.innerHTML = updatedPlayerChips + updatedTotalChips / 2
        currentCompChips.innerHTML = updatedCompChips + updatedTotalChips / 2
        currentTotalChips.innerHTML = 00
    }

    if (document.getElementById('player-chips').innerText == 0) {
        nextRoundBtn.disabled = true
        
        popup.style.display='block'
        popup.style.animation = "popupanimation 6s 1"
        document.getElementById('popupwinner').innerText = winner.innerText
        document.getElementById('mid-section').style.opacity='0.5'
        
       
    }
    else if (document.getElementById('computer-chips').innerText == 0) {
        nextRoundBtn.disabled = true
        popup.style.display='block'
        popup.style.animation="popupanimation 6s 1"
        document.getElementById('popupwinner').innerText=winner.innerText
        document.getElementById('mid-section').style.opacity = '0.5'
        
    }
    else {
        nextRoundBtn.disabled = false
    }
    
}
//function for go to the nextround

function nextRound() {
    playShuffle()
    count=1
    nextRoundBtn.disabled = true
    playerImg.setAttribute('src', 'assests/fold.jpg')
    compImg.setAttribute('src', 'assests/fold.jpg')
    winner.innerText = ''
    call.innerText=''
    playerindex = Math.floor(Math.random() * 13)
    compindex = Math.floor(Math.random() * 13)

    viewBtn.style.display = "block"
    count = 1
}
