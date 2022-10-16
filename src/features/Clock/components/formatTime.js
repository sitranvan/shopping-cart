const formatTime = {

    hourMinuteSecond(time) {
        const hour = `0${time.getHours()}`.slice(-2)
        const minute = `0${time.getMinutes()}`.slice(-2)
        const second = `0${time.getSeconds()}`.slice(-2)
        return `${hour}:${minute}:${second}`
    },
    week(time) {
        const weekdNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const week = time.getDay()
        return weekdNames[week]
    },
    dayMonth(time) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const day = time.getDate()
        const month = time.getMonth()
        return `${monthNames[month]} ${day}`
    }
}

export default formatTime
