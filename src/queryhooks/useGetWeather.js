import { useQuery } from "@tanstack/react-query";
import { getCurrentWeatherByCity } from "../apis/weatherApi";

export function useGetWeather(address) {
  const { isLoading, data, error, refetch, isFetching } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getCurrentWeatherByCity(address),
    // refetchOnWindowFocus: false,
    // enabled: false,
  });
  return { isLoading, data, error, refetch, isFetching };
}
