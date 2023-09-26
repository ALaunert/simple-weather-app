/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WeatherCardHeader from "./WeatherCardHeader";
const StyledBox = styled(Box)`
  margin: 0 auto;
  margin-top: 24px;
  color: #000;
  border: 1px solid black;
  border-radius: 10px;

  width: 250px;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    margin: 0 auto;
    /* margin-top: 24px; */
    left: 0;
    right: 0;
    z-index: -1;
    width: 250px;
    height: 350px;
    background-image: ${(props) => `url("${props.$image}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    filter: blur(3px);
  }
`;

const WindBox = styled(Box)`
  margin: auto 0;
`;
function WeatherCard({ weatherData, error }) {
  const windTransform = weatherData.wind ? weatherData.wind.deg - 90 : null;
  const windSpeed = weatherData.wind && Math.round(weatherData.wind.speed);
  const imagePath = "../" + weatherData.weather[0].main + ".jpg";

  return (
    <StyledBox $image={imagePath}>
      <WeatherCardHeader weatherData={weatherData} />
      <Typography variant="h6">{weatherData.weather[0].main}</Typography>
      <Typography variant="h6">
        Feels like: {Math.round(weatherData.main.feels_like)}&#8451;
      </Typography>
      {windSpeed >= 0 && (
        <WindBox>
          <Typography variant="h6">{`${windSpeed} km/h`}</Typography>
          {windTransform !== null && (
            <ArrowRightAltIcon
              style={{ transform: `rotateZ(${windTransform}deg)` }}
            />
          )}
        </WindBox>
      )}
    </StyledBox>
  );
}

export default WeatherCard;
