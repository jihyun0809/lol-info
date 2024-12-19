import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Champion } from "@/types/Champion";

// 공통으로 들어가는 url
const commonUrl = "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR";

export const useFetchChampionList = () => {
  return useQuery<Champion[], Error>({
    queryKey: ["championList"], // Query Key
    queryFn: async () => {
      const response = await fetch(`${commonUrl}/champion.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch champion list");
      }
      const champions = await response.json();
      return Object.values(champions.data);
    },
    staleTime: 1000 * 60 * 5, // 데이터가 신선한 상태로 유지되는 시간 (5분)
    retry: 1, // 실패 시 재시도 횟수
  } as UseQueryOptions<Champion[], Error>); // 정확한 타입 지정
};
