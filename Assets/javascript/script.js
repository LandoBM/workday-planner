$(document).ready(() => {
    // Moment Script for Day
    var today = moment().format('dddd, MMM D, YYYY');
    $('#currentDay').html(today)

    $('.saveBtn').on('click', (event) => {
        event.preventDefault()
        var buttonEL = event.target
        console.log(buttonEL)
        var txtBox = $(buttonEL).siblings('.description').val()
        // console.log(txtBox)
        var timeBox =$(buttonEL).parent().attr('id')
        // console.log(timeBox)
        localStorage.setItem(timeBox, txtBox)
        // colorAdjust()
        // saveText()
    })

    $("#8 .description").val(localStorage.getItem('8'))
    $('#9 .description').val(localStorage.getItem('9'))
    $('#10 .description').val(localStorage.getItem('10'))
    $('#11 .description').val(localStorage.getItem('11'))
    $('#12 .description').val(localStorage.getItem('12'))
    $('#13 .description').val(localStorage.getItem('13'))
    $('#14 .description').val(localStorage.getItem('14'))
    $('#15 .description').val(localStorage.getItem('15'))
    $('#16 .description').val(localStorage.getItem('16'))
    $('#17 .description').val(localStorage.getItem('17'))
    $('#18 .description').val(localStorage.getItem('18'))

    function colorAdjust() {
        var currentTime = moment().hours()

        $('.time-block').each((index, element) => {
            var filledTime = parseInt($(element).attr('id'))
                console.log(filledTime, currentTime)
        
            if (currentTime < filledTime) {
                $(this).addClass("past")
                $(this).removeClass("future")
                $(this).removeClass("present")
            } else if (filledTime === currentTime) {
                $(this).removeClass("past")
                $(this).addClass("present")
                $(this).removeClass("future")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    } 
    colorAdjust()
})
