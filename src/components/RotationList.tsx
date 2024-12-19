"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ListCard from "./ListCard";
import { Champion } from "@/types/Champion";

// 가져온 데이터(로테이션 챔피언 리스트) 타입 정의
interface RotationResponse {
  result: Champion[]; // result는 반드시 배열이어야 함
}

const RotationList = () => {
  const [rotationChampionList, setRotationChampionList] = useState<Champion[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null); // 에러 메시지를 string으로 저장

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setIsLoading(true);
        // 로테이션 정보를 가져옴
        const response = await fetch("/api/rotation");

        // 응답 상태 확인
        if (!response.ok) {
          throw new Error("API 응답 오류");
        }

        const data: RotationResponse = await response.json();
        // 데이터 검증: result가 배열인지 확인
        if (Array.isArray(data.result)) {
          setRotationChampionList(data.result); // 로테이션 챔피언 리스트 설정
        } else {
          throw new Error("로테이션 데이터가 잘못되었습니다.");
        }
      } catch (error: any) {
        setIsError(error.message || "알 수 없는 오류 발생");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRotationData();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <div>{isError}</div>; // 오류 메시지 표시

  return (
    <ul className="list-style">
      {rotationChampionList.length > 0 ? (
        rotationChampionList.map((champion) => (
          <ListCard
            key={champion.id}
            href={`/champions/${champion.id}`}
            imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
            name={champion.name}
            description={champion.title}
          />
        ))
      ) : (
        <p>로테이션 챔피언이 없습니다.</p>
      )}
    </ul>
  );
};

export default RotationList;
