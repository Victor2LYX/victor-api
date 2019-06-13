module.exports = {
    getCurrentDate: function () {
        let tmpDate = new Date()
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    //获取标准UTC时间
    getUTCDate: function () {
        return new Date()

    },
    getDate: function (date) {
        let tmpDate = new Date(date)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getCurrentDateTime: function () {
        return this.getCurrentDate().toISOString().substring(0, 19).replace('T', ' ')
    },
    getCurrentDateString: function () {
        return this.getCurrentDate().toISOString().substring(0, 10)
    },
    getMinStartDate: function (startDate) {
        let tmpDate = new Date(startDate)
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getMaxEndDate: function (endDate) {
        let tmpDate = new Date(endDate)
        tmpDate.setHours(23, 59, 59, 999)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    //获取前天最小日期：比如18号的返回16号的最小日期
    get2daysBeforeMinStartDate: function () {
        let tmpDate = new Date()
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() -16 * 3600 * 1000)
        return tmpDate
    },

    formatDateTimeString: function (date) {
        return date ? new Date(date).toISOString().substring(0, 19).replace('T', ' ') : ''
    },
    getCurrentMonthMinDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setDate(1)
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getCurrentMonthMaxDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setMonth(tmpDate.getMonth() + 1)
        tmpDate.setDate(1)
        tmpDate.setHours(23, 59, 59, 999)
        tmpDate.setTime(tmpDate.getTime() - 16 * 3600 * 1000)
        return tmpDate
    },
    getLastMonthMinDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setMonth(tmpDate.getMonth() - 1)
        tmpDate.setDate(1)
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getLastMonthMaxDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setDate(1)
        tmpDate.setHours(23, 59, 59, 999)
        tmpDate.setTime(tmpDate.getTime() - 16 * 3600 * 1000)
        return tmpDate
    },
    getCurrentWeekMinDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000 - tmpDate.getDay() * 24 * 3600 * 1000)
        return tmpDate
    },
    getCurrentWeekMaxDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setHours(23, 59, 59, 999)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000 + (6 - tmpDate.getDay()) * 24 * 3600 * 1000)
        return tmpDate
    },
    getLastWeekMinDate: function () {
        let tmpDate = this.getCurrentWeekMinDate()
        tmpDate.setTime(tmpDate.getTime() - 7 * 24 * 3600 * 1000)
        return tmpDate
    },
    getLastWeekMaxDate: function () {
        let tmpDate = this.getCurrentWeekMaxDate()
        tmpDate.setTime(tmpDate.getTime() - 7 * 24 * 3600 * 1000)
        return tmpDate
    },
    getTodayMinDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setHours(0, 0, 0, 0)
        return tmpDate
    },
    getTodayMaxDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setHours(23, 59, 59, 999)
        return tmpDate
    },
    getYestodayMinDate: function () {
        let tmpDate = this.getTodayMinDate()
        tmpDate.setTime(tmpDate.getTime() - 24 * 3600 * 1000)
        return tmpDate
    },
    getYestodayMaxDate: function () {
        let tmpDate = this.getTodayMaxDate()
        tmpDate.setTime(tmpDate.getTime() - 24 * 3600 * 1000)
        return tmpDate
    },
    getCurrentSeasonMinDate: function () {
        let tmpDate = this.getCurrentDate()
        let month = tmpDate.getMonth()
        if (0 <= month && month <= 2) {
            month = 0
        } else if (3 <= month && month <= 5) {
            month = 3
        } else if (6 <= month && month <= 8) {
            month = 6
        } else {
            month = 9
        }
        tmpDate.setMonth(month)
        tmpDate.setDate(1)
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getCurrentSeasonMaxDate: function () {
        let tmpDate = this.getCurrentDate()
        let month = tmpDate.getMonth()
        if (0 <= month && month <= 2) {
            month = 2
        } else if (3 <= month && month <= 5) {
            month = 5
        } else if (6 <= month && month <= 8) {
            month = 8
        } else {
            month = 11
        }
        tmpDate.setMonth(month + 1)
        tmpDate.setDate(1)
        tmpDate.setHours(0, 0, 0, 999)
        tmpDate.setTime(tmpDate.getTime() - 16 * 3600 * 1000)
        return tmpDate
    },
    getLastSeasonMinDate: function () {
        let tmpDate = this.getCurrentDate()
        let month = tmpDate.getMonth()
        if (0 <= month && month <= 2) {
            month = 9
            tmpDate.setFullYear(tmpDate.getFullYear() - 1)
        } else if (3 <= month && month <= 5) {
            month = 0
        } else if (6 <= month && month <= 8) {
            month = 3
        } else {
            month = 6
        }
        tmpDate.setMonth(month)
        tmpDate.setDate(1)
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getLastSeasonMaxDate: function () {
        let tmpDate = this.getCurrentDate()
        let month = tmpDate.getMonth()
        if (0 <= month && month <= 2) {
            month = 11
            tmpDate.setFullYear(tmpDate.getFullYear() - 1)
        } else if (3 <= month && month <= 5) {
            month = 2
        } else if (6 <= month && month <= 8) {
            month = 5
        } else {
            month = 8
        }
        tmpDate.setMonth(month + 1)
        tmpDate.setDate(1)
        tmpDate.setHours(0, 0, 0, 999)
        tmpDate.setTime(tmpDate.getTime() - 16 * 3600 * 1000)
        return tmpDate
    },
    getCurrentYearMinDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setMonth(0)
        tmpDate.setDate(1)
        tmpDate.setHours(0, 0, 0, 0)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getCurrentYearMaxDate: function () {
        let tmpDate = this.getCurrentDate()
        tmpDate.setMonth(11)
        tmpDate.setDate(31)
        tmpDate.setHours(23, 59, 59, 999)
        tmpDate.setTime(tmpDate.getTime() + 8 * 3600 * 1000)
        return tmpDate
    },
    getMinMaxByOption: function (option) {
        let obj = {}
        switch (option) {
            case '今年':
                obj.min = this.getCurrentYearMinDate()
                obj.max = this.getCurrentYearMaxDate()
                break
            case '本季度':
                obj.min = this.getCurrentSeasonMinDate()
                obj.max = this.getCurrentSeasonMaxDate()
                break
            case '上季度':
                obj.min = this.getLastSeasonMinDate()
                obj.max = this.getLastSeasonMaxDate()
                break
            case '本月':
                obj.min = this.getCurrentMonthMinDate()
                obj.max = this.getCurrentMonthMaxDate()
                break
            case '上月':
                obj.min = this.getLastMonthMinDate()
                obj.max = this.getLastMonthMaxDate()
                break
            case '本周':
                obj.min = this.getCurrentWeekMinDate()
                obj.max = this.getCurrentWeekMaxDate()
                break
            case '上周':
                obj.min = this.getLastWeekMinDate()
                obj.max = this.getLastWeekMaxDate()
                break
            case '今天':
                obj.min = this.getTodayMinDate()
                obj.max = this.getTodayMaxDate()
                break
            case '昨天':
                obj.min = this.getYestodayMinDate()
                obj.max = this.getYestodayMaxDate()
                break
            default:
                obj.min = this.getTodayMinDate()
                obj.max = this.getTodayMaxDate()
                break
        }
        return obj
    },
    isBetweenMinMax: function (date, min, max) {
        date = new Date(date)
        return date.getTime() >= min.getTime() && date.getTime() <= max.getTime()
    },
    getYearMonth: function (date) {
        return new Date(date).toISOString().substring(0, 7)
    },
    getLast30Days: function () {
        let dateList = []
        for (let i = 30; i >= 0; i--) {
            let tmpDate = this.getCurrentDate()
            tmpDate.setTime(tmpDate.getTime() - i * 24 * 3600 * 1000)
            dateList.push(tmpDate.toISOString().substring(0, 10))
        }
        return dateList
    },
    getLast12Month: function () {
        let dateList = []
        for (let i = 12; i >= 0; i--) {
            let tmpDate = this.getCurrentDate()
            if (tmpDate.getMonth() < i) {
                tmpDate.setFullYear(tmpDate.getFullYear() - 1)
                tmpDate.setMonth(tmpDate.getMonth() - i + 12)
            } else {
                tmpDate.setMonth(tmpDate.getMonth() - i)
            }
            dateList.push(tmpDate.toISOString().substring(0, 7))
        }
        return dateList
    },
    getLast2Year: function () {
        let tmpDate = this.getCurrentDate()
        return [String(tmpDate.getFullYear() - 2), String(tmpDate.getFullYear() - 1), String(tmpDate.getFullYear())]
    },
    //传入上次时间及有效期（秒），输出是否超过截止日期
    isOverTime:function(date,overTime){
        let tmpDate = new Date(date)
        return(new Date().getTime() +  8 * 3600 * 1000 - (tmpDate.getTime() + overTime * 1000) > 0 ? true:false)
    }
}