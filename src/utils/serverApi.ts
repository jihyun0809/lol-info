import { Champion, ChampionFullInfo } from "@/types/Champion";
import { ItemFullInfo } from "@/types/Item";

// 공통 URL 설정
const commonUrl = "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR";

// 챔피언 목록 가져오기 (ISR 방식)
export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const response = await fetch(`${commonUrl}/champion.json`);
    if (!response.ok) {
      console.error("Failed to fetch champion list:", response.statusText);
      return [];
    }

    const data = await response.json();

    // 챔피언 데이터를 배열로 변환
    return Object.values(data.data) ?? [];
  } catch (error) {
    console.error("Error fetching champion list:", error);
    return [];
  }
};

// 챔피언 상세 정보 가져오기 (동적 렌더링 방식)
export const fetchChampionDetail = async (id: string) => {
  const data = await fetch(`${commonUrl}/champion/${id}.json`);
  const champion: ChampionFullInfo = await data.json();

  if (!data.ok) {
    return { message: "에러가 발생했습니다." }; // 에러 처리
  }

  return champion.data[id]; // 특정 챔피언 데이터 반환
};

// 아이템 목록 가져오기 (SSG 방식)
export const fetchItemList = async () => {
  const data = await fetch(`${commonUrl}/item.json`);
  const item: ItemFullInfo = await data.json();

  if (!data.ok) {
    return { message: "에러가 발생했습니다." }; // 에러 처리
  }

  return item; // 아이템 데이터 반환
};
