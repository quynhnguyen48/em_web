import { useEffect, useState } from "react"

const Timer = ({ duration, isStartTimer = false, secondary = false }) => {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (isStartTimer) {
      let timer = setInterval(() => {
        let currentTimeLeft = timeLeft - 1

        setTimeLeft(currentTimeLeft)
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [timeLeft, isStartTimer])

  const formatTimeLeft = (timeLeft) => {
    let format = `${timeLeft < 0 ? '-' : ''}`
    const timeLeftRelative = timeLeft < 0 ? timeLeft * -1 : timeLeft
    let hours = Math.floor(timeLeftRelative / 3600)
    let minutes = Math.floor((timeLeftRelative - (hours * 3600)) / 60)
    let seconds = timeLeftRelative - (hours * 3600) - (minutes * 60)
    if (hours < 10) {
      hours = "0" + hours
    }
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    return `${format}${hours > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  }

  return (
    secondary ?
      <b className={`text-14 ${timeLeft >= 0 ? 'text-blue2' : 'text-red'}`}>{formatTimeLeft(timeLeft)}</b>
      :
      <div className={`h-12 flex items-center rounded-lg px-5 ${timeLeft >= 0 ? 'bg-blue2' : 'bg-red'}`}>
        <b className="text-white text-14">{formatTimeLeft(timeLeft)}</b>
      </div>
  )
}

export default Timer
