

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
    $('#13 .description').val(localStorage.getItem('1'))
    $('#14 .description').val(localStorage.getItem('2'))
    $('#15 .description').val(localStorage.getItem('3'))
    $('#16 .description').val(localStorage.getItem('4'))
    $('#16 .description').val(localStorage.getItem('5'))
    $('#17 .description').val(localStorage.getItem('6'))

    function colorAdjust() {
        var currentTime = moment().hours()

        $('.time-block').each(() => {
            var filledTime = parseInt($(this).attr('id'))
                console.log(filledTime)
        
            if (currentTime < filledTime) {
                $(this).removeClass("future")
                $(this).removeClass("present")
                $(this).addClass("past")
            } else if (filledTime === currentTime) {
                $(this).removeClass("past")
                $(this).removeClass("future")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }
    colorAdjust()
})
