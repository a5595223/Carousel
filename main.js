var allButtons = $('#buttons > button')

for(let i = 0;i < allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        
        var p = index * -450
        $('#images').css({
            transform:'translate('+p+'px)'
        })
        n = index
        allButtons.eq(n)
        .addClass('blue')
        .siblings('.blue').removeClass('blue')
    })
    
    
}

var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
.addClass('blue')
.siblings('.blue').removeClass('blue')

var timeId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
    .addClass('blue')
    .siblings('.blue').removeClass('blue')
},1000)

$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
    timeId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
        .addClass('blue')
        .siblings('.blue').removeClass('blue')
    },1000)
})