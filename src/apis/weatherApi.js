/* eslint-disable no-unused-vars */

const API_KEY = "c262b589185d47bb78fe10ed6792a90b";

// export async function getCurrentWeatherByCity(address) {
//   try {
//     const weatherRes = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}&units=metric`
//     );
//     if (!weatherRes.ok) throw new Error(`HTTP error: ${weatherRes.status}`);
//     const weatherData = await weatherRes.json();
//     return weatherData;
//   } catch (error) {
//     console.error(error.message);
//     return error.json();
//   }
// }
export async function getCurrentWeatherByCity(address) {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}&units=metric`
  );
  if (!weatherRes.ok) throw new Error(`HTTP error: ${weatherRes.status}`);
  return await weatherRes.json();
}

export async function getForecastByCity(address) {
  const forecastRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${address}&appid=${API_KEY}&units=metric`
  );
  if (!forecastRes.ok) throw new Error(`HTTP error: ${forecastRes.status}`);
  return await forecastRes.json();
}
