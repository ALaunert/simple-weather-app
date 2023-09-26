import { useQuery } from "@tanstack/react-query";
import { getForecastByCity } from "../apis/weatherApi";

export function useGetForecast(address) {
  const { isLoading, data, error, refetch, isFetching, isError } = useQuery({
    queryKey: ["forecast"],
    queryFn: () => getForecastByCity(address),
    // refetchOnWindowFocus: false,
    // enabled: false,
  });
  return { isLoading, data, error, refetch, isFetching, isError };
}
