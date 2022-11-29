

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
    $('#1 .description').val(localStorage.getItem('1'))
    $('#2 .description').val(localStorage.getItem('2'))
    $('#3 .description').val(localStorage.getItem('3'))
    $('#4 .description').val(localStorage.getItem('4'))
    $('#5 .description').val(localStorage.getItem('5'))
    $('#6 .description').val(localStorage.getItem('6'))

    function colorAdjust() {
        var currentTime = moment().hours()
        $('.time-block').each(() => {
            var filledTime = parseInt($(this).attr("id"))
                console.log(filledTime, currentTime)
        
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

// function colorAdjust() {
//     var currentTime = moment().hours()
//     $('.time-block').each(() => {
//         var filledTime = parseInt($(this).attr("id"))
//             console.log(filledTime, currentTime)
    
//         if (currentTime < filledTime) {
//             $(this).removeClass("future")
//             $(this).removeClass("present")
//             $(this).addClass("past")
//         } else if (filledTime === currentTime) {
//             $(this).removeClass("past")
//             $(this).removeClass("future")
//             $(this).addClass("present")
//         } else {
//             $(this).removeClass("past")
//             $(this).removeClass("present")
//             $(this).addClass("future")
//         }
//     })
//     colorAdjust()
// }

// $("#8 .description").val(localStorage.getItem('8'))
// $('#9 .description').val(localStorage.getItem('9'))
// $('#10 .description').val(localStorage.getItem('10'))
// $('#11 .description').val(localStorage.getItem('11'))
// $('#12 .description').val(localStorage.getItem('12'))
// $('#1 .description').val(localStorage.getItem('1'))
// $('#2 .description').val(localStorage.getItem('2'))
// $('#3 .description').val(localStorage.getItem('3'))
// $('#4 .description').val(localStorage.getItem('4'))
// $('#5 .description').val(localStorage.getItem('5'))
// $('#6 .description').val(localStorage.getItem('6'))


// function saveText() {
//     var eventHour8 = JSON.parse(localStorage.getItem('txtBox'))
//     $('#8').val('')
//     $('#8').val(eventHour8)

//     var eventHour9 = JSON.parse(localStorage.getItem('9AM'))
//     $('#9').val('')
//     $('#9').val(eventHour9)

//     var eventHour10 = JSON.parse(localStorage.getItem('10AM'))
//     $('#10').val('')
//     $('#10').val(eventHour10)
        
//     var eventHour11 = JSON.parse(localStorage.getItem('11AM'))
//     $('#11').val('')
//     $('#11').val(eventHour11)
        
//     var eventHour12 = JSON.parse(localStorage.getItem('12PM'))
//     $('#12').val('')
//     $('#12').val(eventHour12)
        
//     var eventHour1 = JSON.parse(localStorage.getItem('1PM'))
//     $('#1').val('')
//     $('#1').val(eventHour1)
        
//     var eventHour2 = JSON.parse(localStorage.getItem('2PM'))
//     $('#2').val('')
//     $('#2').val(eventHour2)
        
//     var eventHour3 = JSON.parse(localStorage.getItem('3PM'))
//     $('#3').val('')
//     $('#3').val(eventHour3)
        
//     var eventHour4 = JSON.parse(localStorage.getItem('4PM'))
//     $('#4').val('')
//     $('#4').val(eventHour4)
        
//     var eventHour5 = JSON.parse(localStorage.getItem('5PM'))
//     $('#5').val('')
//     $('#5').val(eventHour5)
        
//     var eventHour6 = JSON.parse(localStorage.getItem('6PM'))
//     $('#6').val('')
//     $('#6').val(eventHour6)
// }

