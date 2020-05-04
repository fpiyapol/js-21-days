(() => {
    
    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24

    function setElementInnerTextByID(id, text) {
        const element = document.getElementById(id)
        element.innerText = text
    }

    function countdown() {
        const now = new Date().getTime()
        const newYear = new Date('December 31, 2020 23:59:59').getTime()
        const unixTimeLeft = newYear - now
        setElementInnerTextByID('days', Math.floor(unixTimeLeft / DAY))
        setElementInnerTextByID('hours', Math.floor(unixTimeLeft % DAY / HOUR))
        setElementInnerTextByID('minutes', Math.floor(unixTimeLeft % DAY % HOUR / MINUTE))
        setElementInnerTextByID('seconds', Math.floor(unixTimeLeft % DAY % HOUR % MINUTE / SECOND))
    }

    function run() {
        setInterval(countdown, 1000)
    }

    run()

})()