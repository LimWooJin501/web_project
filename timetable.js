// 학교 -> 역뒤
const toStation = { 
    // 일요일 (0)
    0: ["17:00:00", "17:40:00", "18:40:00","19:00:00","19:40:00","20:20:00","21:10:00"], 
    // 월요일 (1)
    1: ['08:50:00', '09:10:00', '09:30:00', '09:40:00', '09:50:00', '10:10:00', '10:30:00', '10:40:00', '11:00:00', '11:20:00', '11:40:00', '12:10:00', '12:30:00', '12:40:00', '13:10:00', '13:30:00', '13:50:00', '14:10:00', '14:30:00', '15:00:00', '14:10:00', '15:30:00', '15:50:00', '16:10:00', '16:30:00', '16:50:00', '17:10:00', '17:25:00', '17:40:00', '18:00:00', '18:20:00', '19:00:00', '19:30:00', '20:00:00', '20:30:00', '20:50:00'], 
    // 화요일 (2)
    2: ['08:50:00', '09:10:00', '09:30:00', '09:40:00', '09:50:00', '10:10:00', '10:30:00', '10:40:00', '11:00:00', '11:20:00', '11:40:00', '12:10:00', '12:30:00', '12:40:00', '13:10:00', '13:30:00', '13:50:00', '14:10:00', '14:30:00', '15:00:00', '14:10:00', '15:30:00', '15:50:00', '16:10:00', '16:30:00', '16:50:00', '17:10:00', '17:25:00', '17:40:00', '18:00:00', '18:20:00', '19:00:00', '19:30:00', '20:00:00', '20:30:00', '20:50:00'], 
    // 수요일 (3)
    3: ['08:50:00', '09:10:00', '09:30:00', '09:40:00', '09:50:00', '10:10:00', '10:30:00', '10:40:00', '11:00:00', '11:20:00', '11:40:00', '12:10:00', '12:30:00', '12:40:00', '13:10:00', '13:30:00', '13:50:00', '14:10:00', '14:30:00', '15:00:00', '14:10:00', '15:30:00', '15:50:00', '16:10:00', '16:30:00', '16:50:00', '17:10:00', '17:25:00', '17:40:00', '18:00:00', '18:20:00', '19:00:00', '19:30:00', '20:00:00', '20:30:00', '20:50:00'], 
    // 목요일 (4)
    4: ['08:50:00', '09:10:00', '09:30:00', '09:40:00', '09:50:00', '10:10:00', '10:30:00', '10:40:00', '11:00:00', '11:20:00', '11:40:00', '12:10:00', '12:30:00', '12:40:00', '13:10:00', '13:30:00', '13:50:00', '14:10:00', '14:30:00', '15:00:00', '14:10:00', '15:30:00', '15:50:00', '16:10:00', '16:30:00', '16:50:00', '17:10:00', '17:25:00', '17:40:00', '18:00:00', '18:20:00', '19:00:00', '19:30:00', '20:00:00', '20:30:00', '20:50:00'],
    // 금요일 (5)
    5: ['08:50:00', '09:10:00', '09:30:00', '09:40:00', '09:50:00', '10:10:00', '10:30:00', '10:40:00', '11:00:00', '11:20:00', '11:40:00', '12:10:00', '12:30:00', '12:40:00', '13:10:00', '13:30:00', '13:50:00', '14:10:00', '14:30:00', '15:00:00', '14:10:00', '15:30:00', '15:50:00', '16:10:00', '16:30:00', '16:50:00', '17:10:00', '17:25:00', '17:40:00', '18:00:00', '18:20:00'],
    // 토요일 (6)
    6: [], 
};

// 역뒤 -> 학교
const toSchool = { 
    0: ["16:30:00", "17:10:00", "17:50:00", "18:50:00","19:10:00","19:50:00","20:35:00","21:20:00"], 
    // 월요일 (1)
    1: ['08:20:00', '08:30:00', '08:40:00', '08:50:00', '09:00:00', '09:20:00', '09:40:00', '09:50:00', '10:00:00', '10:20:00', '10:40:00', '10:50:00', '11:10:00', '11:30:00', '11:50:00', '12:20:00', '12:40:00', '12:50:00', '13:20:00', '13:40:00', '14:00:00', '14:20:00', '14:40:00', '15:10:00', '14:20:00', '15:40:00', '16:00:00', '16:20:00', '16:40:00', '17:00:00', '17:20:00', '17:35:00', '17:50:00', '18:10:00', '18:30:00', '19:10:00', '19:40:00', '20:10:00', '20:40:00', '21:00:00'], 
    // 화요일 (2)
    2: ['08:20:00', '08:30:00', '08:40:00', '08:50:00', '09:00:00', '09:20:00', '09:40:00', '09:50:00', '10:00:00', '10:20:00', '10:40:00', '10:50:00', '11:10:00', '11:30:00', '11:50:00', '12:20:00', '12:40:00', '12:50:00', '13:20:00', '13:40:00', '14:00:00', '14:20:00', '14:40:00', '15:10:00', '14:20:00', '15:40:00', '16:00:00', '16:20:00', '16:40:00', '17:00:00', '17:20:00', '17:35:00', '17:50:00', '18:10:00', '18:30:00', '19:10:00', '19:40:00', '20:10:00', '20:40:00', '21:00:00'],
    // 수요일 (3)
    3: ['08:20:00', '08:30:00', '08:40:00', '08:50:00', '09:00:00', '09:20:00', '09:40:00', '09:50:00', '10:00:00', '10:20:00', '10:40:00', '10:50:00', '11:10:00', '11:30:00', '11:50:00', '12:20:00', '12:40:00', '12:50:00', '13:20:00', '13:40:00', '14:00:00', '14:20:00', '14:40:00', '15:10:00', '14:20:00', '15:40:00', '16:00:00', '16:20:00', '16:40:00', '17:00:00', '17:20:00', '17:35:00', '17:50:00', '18:10:00', '18:30:00', '19:10:00', '19:40:00', '20:10:00', '20:40:00', '21:00:00'], 
    // 목요일 (4)
    4: ['08:20:00', '08:30:00', '08:40:00', '08:50:00', '09:00:00', '09:20:00', '09:40:00', '09:50:00', '10:00:00', '10:20:00', '10:40:00', '10:50:00', '11:10:00', '11:30:00', '11:50:00', '12:20:00', '12:40:00', '12:50:00', '13:20:00', '13:40:00', '14:00:00', '14:20:00', '14:40:00', '15:10:00', '14:20:00', '15:40:00', '16:00:00', '16:20:00', '16:40:00', '17:00:00', '17:20:00', '17:35:00', '17:50:00', '18:10:00', '18:30:00', '19:10:00', '19:40:00', '20:10:00', '20:40:00', '21:00:00'], 
    // 금요일 (5)
    5: ['08:20:00', '08:30:00', '08:40:00', '08:50:00', '09:00:00', '09:20:00', '09:40:00', '09:50:00', '10:00:00', '10:20:00', '10:40:00', '10:50:00', '11:10:00', '11:30:00', '11:50:00', '12:20:00', '12:40:00', '12:50:00', '13:20:00', '13:40:00', '14:00:00', '14:20:00', '14:40:00', '15:10:00', '14:20:00', '15:40:00', '16:00:00', '16:20:00', '16:40:00', '17:00:00', '17:20:00', '17:35:00', '17:50:00', '18:10:00', '18:30:00'],
    // 토요일 (6)
    6: [], 
};

function calculateTime(targetTimes) {
    const now = new Date();
    const currentDayOfWeek = now.getDay();

    const targetTimesOfDay = targetTimes[currentDayOfWeek];

    if (currentDayOfWeek==6) {
        return {
            message: "토요일은 셔틀버스가 없어요.",
            currentTargetTime: null,
            remainingTime: null,
            nextTargetTime: null,
        };
    }

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
    let nextTargetTime = null;


     for(let i=0;i<targetTimesOfDay.length;i++) {

        targetTime=targetTimesOfDay[i];

        let [targetHour, targetMinute, targetSecond] = targetTime.split(":").map(Number);

        if (currentHour <= targetHour || (currentHour === targetHour && currentMinute <= targetMinute)) {
            let hoursRemaining = targetHour - currentHour;
            let minutesRemaining = targetMinute - currentMinute;
            let secondsRemaining = targetSecond - currentSecond;

            if (minutesRemaining < 0) {
                minutesRemaining += 60;
                hoursRemaining -= 1;
            }

            if (secondsRemaining < 0) {
                secondsRemaining += 60;
                minutesRemaining -= 1;
            }


            const formatNumber = (num) => num.toString().padStart(2, "0");

            const currentTargetTime = `${formatNumber(targetHour)}시 ${formatNumber(targetMinute)}분`;
            let remainingTime = `${formatNumber(hoursRemaining)}시간 ${formatNumber(minutesRemaining)}분 ${formatNumber(secondsRemaining)}초`;
            
            //const formattedTargetHour = targetHour.toString().padStart(2, "0");
            //const formattedTargetMinute = targetMinute.toString().padStart(2, "0");


            // nextTargetTime 설정
            let nextTargetTimeInfo = null;
            if(i != targetTimesOfDay.length-1){

                nextTargetTime=targetTimesOfDay[i+1];
                let [nextTargetHour, nextTargetMinute, nextTargetSecond] = nextTargetTime.split(":").map(Number);
                nextTargetTimeInfo = `${formatNumber(nextTargetHour)}시 ${formatNumber(nextTargetMinute)}분`;
            }
            else{
                nextTargetTimeInfo="다음 버스가 없어요";
            }


            if (hoursRemaining == 0 && minutesRemaining >= 0 && secondsRemaining >= 0) {
                remainingTime = `${formatNumber(minutesRemaining)}분 ${formatNumber(secondsRemaining)}초`;
                return {
                    currentTargetTime,
                    remainingTime,
                    nextTargetTimeInfo,
                };
            }
            else if (hoursRemaining >= 0 && minutesRemaining >= 0 && secondsRemaining >= 0) {
                return {
                    currentTargetTime,
                    remainingTime,
                    nextTargetTimeInfo,
                };
            }







        }

        // 다음 타겟 시간 계산
        //nextTargetTime = `${targetHour}시${targetMinute}분`;
    }

    return {
        message: "셔틀 버스 종료",
        currentTargetTime: null,
        remainingTime: null,
        nextTargetTimeInfo: null,
    };
}


function updateCountdown() {
    const currentTargetTimeElementToStation = document.getElementById("toStationCurrentTargetTime");
    const remainingTimeElementToStation = document.getElementById("toStationRemainingTime");
    const nextTargetTimeElementToStation = document.getElementById("toStationNextTargetTime");
    const timeInfoToStation = calculateTime(toStation);
    
    if (timeInfoToStation.currentTargetTime) {
        currentTargetTimeElementToStation.textContent = `이번 셔틀 : ${timeInfoToStation.currentTargetTime}`;
        remainingTimeElementToStation.textContent = `남은 시간 : ${timeInfoToStation.remainingTime}`;
        nextTargetTimeElementToStation.textContent = `다음 셔틀 : ${timeInfoToStation.nextTargetTimeInfo}`;
    } else {
        currentTargetTimeElementToStation.textContent = "";
        remainingTimeElementToStation.textContent = timeInfoToStation.message;
        nextTargetTimeElementToStation.textContent = "";
    }

    const currentTargetTimeElementToSchool = document.getElementById("toSchoolCurrentTargetTime");
    const remainingTimeElementToSchool = document.getElementById("toSchoolRemainingTime");
    const nextTargetTimeElementToSchool = document.getElementById("toSchoolNextTargetTime");
    const timeInfoToSchool = calculateTime(toSchool);

    if (timeInfoToSchool.currentTargetTime) {
        currentTargetTimeElementToSchool.textContent = `이번 셔틀 : ${timeInfoToSchool.currentTargetTime}`;
        remainingTimeElementToSchool.textContent = `남은 시간 : ${timeInfoToSchool.remainingTime}`;
        nextTargetTimeElementToSchool.textContent = `다음 셔틀 : ${timeInfoToSchool.nextTargetTimeInfo}`;
    } else {
        currentTargetTimeElementToSchool.textContent = "";
        remainingTimeElementToSchool.textContent = timeInfoToSchool.message;
        nextTargetTimeElementToSchool.textContent = "";
    }
}

// 1초마다 업데이트
setInterval(updateCountdown, 1000);

// 초기 업데이트
updateCountdown();
