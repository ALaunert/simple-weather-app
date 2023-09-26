/* eslint-disable react/prop-types */
import { Box, Button, TextField } from "@mui/material";
import { useGetWeather } from "../queryhooks/useGetWeather";
import styled from "styled-components";
import { useGetForecast } from "../queryhooks/useGetForecast";

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledTextField = styled(TextField)``;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

function SearchForm({ city, handleChange }) {
  const { refetch: refetchWeather } = useGetWeather(city);
  const { refetch: refetchForecast } = useGetForecast(city);
  function handleSubmit(e) {
    e.preventDefault();
    refetchWeather();
    refetchForecast();
  }
  return (
    <StyledBox>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          label="city"
          value={city}
          onChange={handleChange}
          size="small"
        ></StyledTextField>
        <Button variant="contained" onClick={handleSubmit}>
          Search
        </Button>
      </StyledForm>
    </StyledBox>
  );
}

export default SearchForm;
