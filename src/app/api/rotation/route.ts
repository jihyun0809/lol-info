import { fetchChampionList } from "@/utils/serverApi";

// 환경 변수에서 API 키를 가져옴
const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY!;

type RotationData = {
  freeChampionIds: number[]; // 무료 로테이션 챔피언 ID
};

// Riot Games API에서 무료 챔피언 로테이션 데이터를 가져오는 함수
export async function GET() {
  // 로테이션 정보를 가져옴
  const data = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`,
    {
      headers: { "X-Riot-Token": apiKey },
    }
  );

  // API 응답 실패 시 에러 반환
  if (!data.ok) {
    return Response.json({ message: "에러가 발생했습니다.", result: null });
  }

  // 무료 챔피언 ID 배열만 추출
  const result: RotationData = await data.json();
  const rotationData = result.freeChampionIds;

  // 모든 챔피언 데이터를 가져와 무료 로테이션 챔피언만 필터링
  const champion = await fetchChampionList();
  const rotationChampion = champion?.filter((champ) =>
    rotationData.includes(Number(champ.key))
  );

  // 필터링된 데이터를 반환
  return Response.json({ result: rotationChampion });
}
