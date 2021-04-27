import { realTimeData } from "../../config/fire.js";
export const LISTEN_SET_STATION = "LISTEN_SET_STATION";
import * as Notifications from "expo-notifications";
import moment from "moment";

const listenNotifications = (num, solutionValue) => {
  if (solutionValue <= 20) {
    Notifications.scheduleNotificationAsync({
      content: {
        title: `Station ${num}: Low Solution`,
        body: `The current solution is ${solutionValue}% and needs to be replaced`,
      },
      trigger: { minute: 15 },
    });
  }
  return;
};

const dayOfWeekArrayMaker = (weekObj) => {
  let days = [];
  for (const key in weekObj) {
    if (key === "monday") {
      days[0] = weekObj["monday"];
    } else if (key === "tuesday") {
      days[1] = weekObj["tuesday"];
    } else if (key === "wednesday") {
      days[2] = weekObj["wednesday"];
    } else if (key === "thursday") {
      days[3] = weekObj["thursday"];
    } else if (key === "friday") {
      days[4] = weekObj["friday"];
    } else if (key === "saturday") {
      days[5] = weekObj["saturday"];
    } else if (key === "sunday") {
      days[6] = weekObj["sunday"];
    }
  }
  return days;
};

const highTempArrayMaker = (highTempObj) => {
  const highTempArr = [];
  for (const key in highTempObj) {
    highTempArr.push(highTempObj[key].toFixed(0));
  }
  highTempArr.sort((a, b) => b - a);
  return highTempArr;
};

const logsArrayMaker = (logsObject) => {
  const logArray = [];
  for (const key in logsObject) {
    const reformatDate = convertDate(logsObject[key]);
    logArray.push([reformatDate]);
  }
  return logArray;
};

const convertDate = (date) => {
  return `${moment(date.substr(0, 10)).format("MM-DD-YY")} @ ${moment(
    date.substr(13),
    "hh:mm"
  ).format("LT")}`;
};

export const listen = (
  name,
  averageTemp,
  dailyUse,
  highTemp,
  dayArr,
  totalUse,
  lastUsed,
  logs,
  solution
) => {
  return {
    type: LISTEN_SET_STATION,
    name: name,
    averageTemp: averageTemp,
    dailyUse: dailyUse,
    highTemp: highTemp,
    data: dayArr,
    totalUse: totalUse,
    lastUsed: lastUsed,
    logs: logs,
    solution: solution,
  };
};

export const listener = (name) => {
  return (dispatch) => {
    realTimeData.ref(name).on("value", (snap) => {
      const setVal = snap.val();
      let num;
      let lastUsed;
      let logArr = [];
      let highTempArr = [];
      let dayArr = [];
      if (name === "station1") {
        num = 1;
        lastUsed = convertDate(setVal.lastUsed);
        listenNotifications(num, setVal.solution);
        logArr = logsArrayMaker(setVal.logs);
        highTempArr = highTempArrayMaker(setVal.highscores.hightemp);
        dayArr = dayOfWeekArrayMaker(setVal.barGraph);
      } else if (name === "station2") {
        num = 2;
        lastUsed = convertDate(setVal.lastUsed);
        listenNotifications(num, setVal.solution);
        logArr = logsArrayMaker(setVal.logs);
        highTempArr = highTempArrayMaker(setVal.highscores.hightemp);
        dayArr = dayOfWeekArrayMaker(setVal.barGraph);
      } else if (name === "station3") {
        lastUsed = convertDate(setVal.lastUsed);
        listenNotifications(num, setVal.solution);
        logArr = logsArrayMaker(setVal.logs);
        highTempArr = highTempArrayMaker(setVal.highscores.hightemp);
        dayArr = dayOfWeekArrayMaker(setVal.barGraph);
      }
      dispatch(
        listen(
          name,
          setVal.averagetemp,
          setVal.dailyUse,
          highTempArr[0],
          dayArr,
          setVal.highscores.totalUse,
          lastUsed,
          logArr,
          setVal.solution,
          setVal.totalUse
        )
      );
    });
  };
};
