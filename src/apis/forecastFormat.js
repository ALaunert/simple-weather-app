/* eslint-disable no-unused-vars */
import { format, parse } from "date-fns";
export function forecastFormat(forecastData) {
  const finalArray = [];
  let tempObj = {};
  const temperatureArray = forecastData.list.map((data) =>
    Math.round(data.main.temp)
  );
  const timeDateArray = forecastData.list.map((data) => {
    const parsedDate = parse(data.dt_txt, "yyyy-MM-dd HH:mm:ss", new Date());
    return format(parsedDate, "dd/MM HH ");
  });
  timeDateArray.forEach((_, index) => {
    tempObj = {};
    if (index % 2 === 0) {
      tempObj["temp"] = temperatureArray[index];
      tempObj["date"] = timeDateArray[index];
      finalArray.push(tempObj);
    }
  });
  return finalArray;
}
