let mainObj = {
    bdate0: "15-01-2003",
    bdate1: "31-02-2002",
    bdate2: "15-04-1970",
    bdate3: "15-04-1999"
}

let needYearsOldData = ["0-17", "18-21", "22-24", "25-27", "28-30", "31-35", "36-45", "46+"]

const BarChart = (main, yearOld, needId) => {
    let countYearOld = [];
    let countOfEachYear = {
        yearLess17: 0,
        yearLess21: 0,
        yearLess24: 0,
        yearLess27: 0,
        yearLess30: 0,
        yearLess35: 0,
        yearLess45: 0,
        yearMore46: 0
    }
    for (let [key, val] of Object.entries(main)) {
        let yearOld = new Date().getFullYear() - Number(val.slice(val.length - 4, val.length))
        let monthCount = new Date().getMonth() - Number(val.slice(3, 5))+1
        let day = new Date().getDate() - Number(val.slice(0, 2))
        console.log(monthCount)
        


        if (0 < yearOld && yearOld <= 18) {
            if (yearOld === 18 && monthCount < 0) {
                countOfEachYear.yearLess17 += 1
            }
            if (yearOld === 18 && monthCount === 0) {
                if(day<0){
                    countOfEachYear.yearLess17 += 1
                }
            }
            else if (yearOld <= 17) {
                countOfEachYear.yearLess17 += 1
            }
        }
        if (18 <= yearOld && yearOld <= 22) {
            if (yearOld === 18 && monthCount > 0) {
                countOfEachYear.yearLess21 += 1
            }
            else if (yearOld === 18 && monthCount === 0) {
                if (day >= 0) {
                    countOfEachYear.yearLess21 += 1
                }
            }
            else if (yearOld === 22 && monthCount < 0) {
                countOfEachYear.yearLess21 += 1
            }
            else if (yearOld === 22 && monthCount === 0) {
                if (day <= 0) {
                    countOfEachYear.yearLess21 += 1                
                }
            }
            else if (yearOld >= 19 && yearOld <= 21) {
                countOfEachYear.yearLess21 += 1
            }
        }
        if (21 <= yearOld && yearOld <= 25) {
            if (yearOld === 21 && monthCount > 0) {
                countOfEachYear.yearLess24 += 1
            }
            else if (yearOld === 21 && monthCount === 0) {
                if (day >= 0) {
                    countOfEachYear.yearLess24 += 1
                }
            }
            else if (yearOld === 25 && monthCount < 0) {
                countOfEachYear.yearLess24 += 1
            }
            else if (yearOld === 25 && monthCount === 0) {
                if (day <= 0) {
                    countOfEachYear.yearLess24 += 1                
                }
            }
            else if (yearOld >= 22 && yearOld <= 24) {
                countOfEachYear.yearLess21 += 1
            }
        }
        if (24 <= yearOld && yearOld <= 28) {
            if (yearOld === 24 && monthCount > 0) {
                countOfEachYear.yearLess27 += 1
            }
            else if (yearOld === 24 && monthCount === 0) {
                if (day >= 0) {
                    countOfEachYear.yearLess27 += 1
                }
            }
            else if (yearOld === 28 && monthCount < 0) {
                countOfEachYear.yearLess27 += 1
            }
            else if (yearOld === 28 && monthCount === 0) {
                if (day <= 0) {
                    countOfEachYear.yearLess27 += 1                
                }
            }
            else if (yearOld >= 25 && yearOld <= 27) {
                countOfEachYear.yearLess27 += 1
            }
        }
        if (27 <= yearOld && yearOld <= 31) {
            if (yearOld === 27 && monthCount > 0) {
                countOfEachYear.yearLess30 += 1
            }
            else if (yearOld === 27 && monthCount === 0) {
                if (day >= 0) {
                    countOfEachYear.yearLess30 += 1
                }
            }
            else if (yearOld === 31 && monthCount < 0) {
                countOfEachYear.yearLess30 += 1
            }
            else if (yearOld === 31 && monthCount === 0) {
                if (day <= 0) {
                    countOfEachYear.yearLess30 += 1                
                }
            }
            else if (yearOld >= 28 && yearOld <= 30) {
                countOfEachYear.yearLess21 += 1
            }
        }
        if (30 <= yearOld && yearOld <= 36) {
            if (yearOld === 30 && monthCount > 0) {
                countOfEachYear.yearLess35 += 1
            }
            else if (yearOld === 30 && monthCount === 0) {
                if (day >= 0) {
                    countOfEachYear.yearLess35 += 1
                }
            }
            else if (yearOld === 36 && monthCount < 0) {
                countOfEachYear.yearLess35 += 1
            }
            else if (yearOld === 36 && monthCount === 0) {
                if (day <= 0) {
                    countOfEachYear.yearLess35 += 1                
                }
            }
            else if (yearOld >= 31 && yearOld <= 35) {
                countOfEachYear.yearLess35 += 1
            }
        }
        if (35 <= yearOld && yearOld <= 46) {
            if (yearOld === 35 && monthCount > 0) {
                countOfEachYear.yearLess45 += 1
            }
            else if (yearOld === 35 && monthCount === 0) {
                if (day >= 0) {
                    countOfEachYear.yearLess45 += 1
                }
            }
            else if (yearOld === 46 && monthCount < 0) {
                countOfEachYear.yearLess45 += 1
            }
            else if (yearOld === 46 && monthCount === 0) {
                if (day <= 0) {
                    countOfEachYear.yearLess45 += 1                
                }
            }
            else if (yearOld >= 36 && yearOld <= 45) {
                countOfEachYear.yearLess21 += 1
            }
        }
        if (yearOld >= 45) {
            if (yearOld === 45 && monthCount > 0) {
                countOfEachYear.yearMore46 += 1
            }
            else if (yearOld === 45 && monthCount===0){
                if (day > 0) {
                countOfEachYear.yearMore46 += 1
                    
                }
            }
                
            else if (yearOld >= 46) {
                countOfEachYear.yearMore46 += 1
            }
        }
    }

        let colors = [];



        for (let [key, val] of Object.entries(countOfEachYear)) {
            colors.push("#EA924A")
            countYearOld.push(val)
        }

        const canvas = document.getElementById(needId);
        const ctx = canvas.getContext('2d');

        const data = {
            labels: yearOld,
            datasets: [{
                backgroundColor: colors,
                hoverBackgroundColor: colors,
                data: countYearOld
            }]
        }

        const options = {
            legend: false
        }

        new Chart(ctx, {
            type: 'bar',
            data: data,
            options
        });
        Chart.defaults.global.defaultFontSize = 15;
        Chart.defaults.global.defaultFontColor = 'black';

    }

    BarChart(mainObj, needYearsOldData, "pieChart")