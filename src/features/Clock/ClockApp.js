
import { useEffect, useState } from 'react'
import ClockUi from './components/ClockUi'
import formatTime from './components/formatTime'

function ClockApp() {

    const [hourMinuteSecond, setHourMinuteSecond] = useState('')
    const [week, setWeek] = useState('')
    const [dayMonth, setDayMonth] = useState('')

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date()
            const stringHourMinuteSecond = formatTime.hourMinuteSecond(now)
            const stringWeek = formatTime.week(now)
            const stringDayMonth = formatTime.dayMonth(now)
            setHourMinuteSecond(stringHourMinuteSecond)
            setWeek(stringWeek)
            setDayMonth(stringDayMonth)
        }, 1000)

        return () => {
            clearInterval(clockInterval)
        }
    }, [])

    return (
        <ClockUi hourMinuteSecond={hourMinuteSecond} week={week} dayMonth={dayMonth} />
    )
}

export default ClockApp