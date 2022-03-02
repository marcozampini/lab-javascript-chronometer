class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // should increment by 1 the currentTime property on every 1 second interval
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback) callback()
    }, 1000)
  }

  getMinutes() {
    // should return a number without decimal places
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // should return the seconds portion of the currentTime that remains after removing the minutes
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    //should return '00' when the value is 0
    return value.toString().padStart(2, '0')
  }

  stop() {
    //should call clear the interval
    //should stop a previously started chronometer
    clearInterval(this.intervalId)
  }

  reset() {
    //should reset the value of the "currentTime" property to 0
    this.currentTime = 0
  }

  split() {
    //should return valid format with minutes and seconds
    const twoDigitsMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const twoDigitsSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${twoDigitsMinutes}:${twoDigitsSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer
}
