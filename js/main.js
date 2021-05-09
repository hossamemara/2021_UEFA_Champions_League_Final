/* _____________ Color Mode Start _____________ */

var modeOptionsWidth = $('.color-options').outerWidth();
var myColors = ['#f0e4d7', '#f5c0c0', '#ff7171', '#9fd8df', '#206a5d', '#81b214', '#ffcc29', '#f5f7b2', '#1cc5dc', '#530000', '#890596']

for (var i = 0; i < myColors.length; i++) {
    $('.colors').eq(i).css('backgroundColor', myColors[i])
}

$('.colors').click(async function () {
    var mode = $(this).css('backgroundColor')
    console.log(mode);
    await $('.mode-change-color').css({ 'color': mode })
    await $('.mode-change-bg-color').css({ 'backgroundColor': mode })
    await $('.mode-options').animate({ 'right': -modeOptionsWidth }, 1000)

})



$('.mode-options').css({ 'right': -modeOptionsWidth })

$('.mode-sider').click(async function () {

    if ($('.mode-options').css('right') == '0px') {
         $('.mode-options').animate({ 'right': -modeOptionsWidth }, 1000)
         
    }
    else {
          await $('.mode-options').animate({ 'right': '0px' }, 500)
          

    }

})



var myfunc = setInterval(function () {
    var countDownDate = new Date("May 29, 2021  21:00:00").getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (timeleft < 0) {
        clearInterval(myfunc);
        $("#days").text('')
        $("#hours").text('')
        $("#mins").text('')
        $("#secs").text('')
        $("#end").text("TIME UP!!")
        $('#end').addClass('d-block')
        $('#end').removeClass('d-none')
        $('#days').addClass('d-none')
        $('#days').removeClass('d-block')
        $('#hours').addClass('d-none')
        $('#hours').removeClass('d-block')
        $('#mins').addClass('d-none')
        $('#mins').removeClass('d-block')
        $('#secs').addClass('d-none')
        $('#secs').removeClass('d-block')
    }
    else {
        $("#days").text(days + ' Day')
        $("#hours").text(hours + ' Hour')
        $("#mins").text(minutes + ' Minute')
        $("#secs").text(seconds + ' Second')

    }

}, 1000)


$('.open-aside').click(function () {
    $('.open-aside').css({ 'display': 'none' });
    $('.site-left-aside').animate({ 'left': '0px' }, 500);
})

$('.close-aside').click(function () {

    $('.site-left-aside').animate({ 'left': '-250px' }, 500, function () {
        $('.open-aside').css({ 'display': 'block' });
    });

})

$(document).ready(function()
    {
        $('#loader').fadeOut(1000,function()
        {
            $('body').css('overflow','visible')
        })
    })


    $('.uefa-final').click(function()
    {
        console.log($(this).text())
      if($(this).text().trim()==`2014 UEFA Champions League Final (Lisboa)`) 
  {

    $('.final-info').eq(0).slideToggle(500,function()
    {
        $('.final-info').eq(0).removeClass('d-block')
    });
    
    
    $('.final-info').eq(1).removeClass('d-block')
    $('.final-info').eq(2).removeClass('d-block')
    $('.final-info').eq(3).removeClass('d-block')
  }
  if($(this).text().trim()==`2016 UEFA Champions League Final (Milan)`) 
  {

    $('.final-info').eq(1).slideToggle(500);
    
    
    $('.final-info').eq(0).removeClass('d-block')
    $('.final-info').eq(2).removeClass('d-block')
    $('.final-info').eq(3).removeClass('d-block')
  }
  if($(this).text().trim()==`2017 UEFA Champions League Final (Cardiff)`) 
  {

    $('.final-info').eq(2).slideToggle(500);
    
    $('.final-info').eq(0).removeClass('d-block')
    $('.final-info').eq(1).removeClass('d-block')
    $('.final-info').eq(3).removeClass('d-block')
  }
  if($(this).text().trim()==`2018 UEFA Champions League Final (Madrid)`) 
  {

    $('.final-info').eq(3).slideToggle(500);
    
    $('.final-info').eq(0).removeClass('d-block')
    $('.final-info').eq(1).removeClass('d-block')
    $('.final-info').eq(2).removeClass('d-block')
    
    
  }  
      

    })

let characterCont='';
let messageInfo=document.getElementById('msg-info');

messageInfo.oninput=function()

{

    console.error(messageInfo.value);
    
    characterConts=characterCont.concat(messageInfo.value).length;

if(100-characterConts<=0)
{
    $('.characters-count').text('Your available Character Finished')
}
else
{
    $('.characters-count').text(100-characterConts);
}
}

$('#msg-info').attr('maxlength','100')