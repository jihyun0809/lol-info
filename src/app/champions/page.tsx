import { dehydrate, HydrationBoundary } from "@tanstack/react-query"; // React Query 상태 복원을 위한 컴포넌트
import getQueryClient from "@/utils/getQueryClient"; // React Query 클라이언트 가져오기
import { fetchChampionList } from "@/utils/serverApi"; // 챔피언 목록 데이터 가져오는 함수
import ChampionListContent from "@/components/ChampionListContent ";
 // 챔피언 리스트 UI 컴포넌트

export const revalidate = 86400; // 하루(24시간)마다 페이지를 재생성

const ChampionsPage = async () => {
  const queryClient = getQueryClient(); // React Query 클라이언트 초기화

  // 서버에서 챔피언 데이터를 사전 패칭
  await queryClient.prefetchQuery({
    queryKey: ["championList"], // 쿼리 키
    queryFn: fetchChampionList, // 데이터를 가져오는 함수
  });

  // React Query의 캐시 데이터를 직렬화
  const dehydratedState = dehydrate(queryClient);

  return (
    // 클라이언트에서 React Query 캐시 데이터를 복구
    <HydrationBoundary state={dehydratedState}>
      <ChampionListContent /> {/* 챔피언 목록을 렌더링하는 컴포넌트 */}
    </HydrationBoundary>
  );
};

export default ChampionsPage;
