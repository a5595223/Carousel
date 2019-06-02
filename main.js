var allButtons = $('#buttons > button')

for(let i = 0; i < allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index * -450
      $('.images').css({
          transform:'translate('+p+'px)'
      })
      console.log(n)
      console.log(index)
         n = index
        activeButton(allButtons.eq(n))
        
 }
    )}

var n = 0
var size = allButtons.length
 
playSlide(0)


var timeId = setTimer()

function setTimer(){
    return setInterval(()=>{
        n += 1
        playSlide(n%size)
    },2000)
}

function playSlide(index){
    allButtons.eq(index).trigger('click')
    console.log(index)
}

function activeButton($button){
     $button 
    .addClass('blue')
    .siblings('.blue').removeClass('blue')
}

$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
    setTimer()
})