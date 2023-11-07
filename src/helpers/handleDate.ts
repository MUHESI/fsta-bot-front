const startTimeStartWork = `07:00:00`;
const endTimeCloseWork = `20:00:00`;


export const handleDate = {
    currentDay: new Date().getDay(),
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),

    data: [
        {
            monthInterval: ["jan", "Feb"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-01-01 ${startTimeStartWork}`
                // `${new Date().getFullYear()}-01-01 07:00:00`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-01-31 ${endTimeCloseWork}`
            ).getTime()}`,
            endTime_: ["jan", "Feb"], // '2023-06-20' 2023-06-20
        },
        {
            monthInterval: ["Feb", "March"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-02-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-02-28 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["March", "April"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-03-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-03-30 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["April", "May"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-04-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-04-31 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["May", "Jun"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-05-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-05-31 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["Jun", "July"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-06-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-06-30 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["July", "Aug"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-07-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-07-31 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["Aug", "Sept"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-08-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-08-31 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["Sept", "Oct"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-09-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-09-30 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["Oct", "Nov"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-10-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-10-31 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["Nov", "Dec"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-11-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-11-30 ${endTimeCloseWork}`
            ).getTime()}`,
        },
        {
            monthInterval: ["Nov", "Dec"],
            startTime: `${new Date(
                `${new Date().getFullYear()}-12-01 ${startTimeStartWork}`
            ).getTime()}`,
            endTime: `${new Date(
                `${new Date().getFullYear()}-12-31 ${endTimeCloseWork}`
            ).getTime()}`,
        },
    ],

    // getIntervalOfMonths: () => {
    //     const currentMonth = handleDate.currentMonth
    //     let intervals = []
    //     new Array(currentMonth).fill(0).map((item, key) => {
    //         intervals.push({
    //             startDate: handleDate.data[key].startTime,
    //             endDate: handleDate.data[key].endTime
    //         })
    //     })
    //     return intervals
    // },

    getMonths: (): number[] => {
        const currentMonth = handleDate.currentMonth
        let dataMonts: number[] = []
        new Array(currentMonth + 1).fill(0).map((item, key) => {
            // dataMonts.push(key + item)
            dataMonts.push(key + item + 1)
        })
        return dataMonts
    },
    showTimeOfProps: (timeProps: any) => {
        return ` ${new Date(timeProps).getHours()}H${new Date(
            timeProps
        ).getMinutes()}`

    },
    showDateOfProps: (timeProps: any) => {
        // const date = timeProps
        return ` ${new Date(timeProps).getDate()}-${new Date(
            timeProps
        ).getMonth() + 1}-${new Date(
            timeProps
        ).getFullYear()}`
    },


    generateTimestamp: () => {
        //
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${month}-${day}-${year}`;
        // let currentDate = `${3}-${5}-${2023}`;
        let startCurrentDate = new Date(`${currentDate} 00:00:00`).getTime();
        let endCurrentDate = new Date(`${currentDate} 23:00:00`).getTime();

        return {
            // startCurrentDate: 1683769050000,
            // startCurrentDate: 1687298400000,
            startCurrentDate,
            endCurrentDate,
            // startCurrentDate: currentDate,
            // currentDate: `${day}-${month}-${year}`,
        };
    },
};
