/* eslint-disable react/prop-types */
import styled from "styled-components";

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 4px;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 40px;
`;
const Temperature = styled.p`
  width: 35%;
  font-size: 24px;
  font-weight: 600;
`;
const StyledIcon = styled.img`
  width: 35%;
`;
function WeatherCardHeader({ weatherData }) {
  const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const title = `${weatherData.name}, ${weatherData.sys.country}`;

  return (
    <>
      <Title>{title}</Title>
      <CardHeader>
        <StyledIcon
          src={icon}
          alt={`Picture of ${weatherData.weather[0].main}`}
        />
        <Temperature>{Math.round(weatherData.main.temp)}&#8451;</Temperature>
      </CardHeader>
    </>
  );
}

export default WeatherCardHeader;
