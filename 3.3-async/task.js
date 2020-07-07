class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        try {
            if (!id) {
            throw new Error("нет id")
            }

            if (this.alarmCollection.find((value) => value.id === id)) {
            console.error("Такой звонок уже существует")
            return
            }

            this.alarmCollection.push({id, time, callback})

        } catch(e) {
            console.error("oshibka")

        }
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex((count) => count.id === id)

        if (index !== -1) {
            this.alarmCollection.splice(index, 1);
            return true
        } else {
            return false
        }
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        let minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`
    }

    start() {
        let checkClock = alarm => {
          if (this.getCurrentFormattedTime() === alarm.time) {  
              alarm.callback();
            }
        }
        
          
        if (this.timerId === null) {
          this.timerId = setInterval(() => this.alarmCollection.forEach((index) => checkClock(index)), 1000)
        }  
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(`Будильник № ${item.id} заведен на: ${item.time}`)
        )
    }

    clearAlarms() {
        clearTimeout(this.timerId)
        this.alarmCollection.splice(0, this.alarmCollection.length)
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();

    phoneAlarm.addClock("12:55", () => console.log("Пора вставать"), 1);
    phoneAlarm.addClock("12:56", () => {console.log("Давай вставай уже"); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock("12:57", () => console.log("Иди умываться"));
    phoneAlarm.addClock("12:58", () => {
        console.log("Вставай, а то проспишь");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.addClock("12:49", () => console.log("Vstavay"), 1);

    phoneAlarm.printAlarms();

    phoneAlarm.start();
}