let num = getDays(6);
console.log(num);

function getDays(days){
    switch(true){
        case (days == 1):
            return 'Monday';
        case (days == 2):
            return 'Tuesday';
        case (days == 3):
            return 'Wednesday';
        case (days == 4):
            return 'Thursday';
        case (days == 5):
            return 'Friday';
        case (days == 6):
            return 'Saturday';
        case (days == 7):
            return 'Sunday';
        default:
            return 'Invalid';
    }
}