/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import styled from "styled-components";
import { forecastFormat } from "../apis/forecastFormat";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ChartContainer = styled(Box)`
  margin: 24px auto;
  width: 600px;
`;

function CustomizedTick({ x, y, stroke, payload }) {
  const [day, other] = payload.value.split("/");
  const [month, time] = other.split(" ");
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fill="#666">
        {time === "00" || time === "03" ? (
          <>
            <tspan textAnchor="middle" x="0">
              {day}
            </tspan>
            <tspan textAnchor="middle" x="0" dy="20">
              {month}
            </tspan>
          </>
        ) : (
          <tspan textAnchor="middle" x="0">
            {time}
          </tspan>
        )}
      </text>
    </g>
  );
}

function FiveDayGraph({ forecastData }) {
  const formattedData = forecastFormat(forecastData);

  return (
    <ChartContainer>
      <LineChart
        width={600}
        height={400}
        data={formattedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis
          dataKey="date"
          interval={0}
          padding={{ left: 10 }}
          height={100}
          tickMargin={10}
          tick={<CustomizedTick payload={formattedData} />}
        />
        <YAxis unit="&#8451;" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="temp"
          name="Temperature in &#8451;"
          stroke="#8884d8"
        />
      </LineChart>
    </ChartContainer>
  );
}

export default FiveDayGraph;
