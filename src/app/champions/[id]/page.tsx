import React from "react";
import Image from "next/image";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata, ResolvingMetadata } from "next";
import "@/styles/championDetail.css";
import { ChampionDetail } from "@/types/Champion";

type Props = {//타입지정
  params: {
    id: string;
  };
};

// 메타데이터 생성!!
export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const response = await fetchChampionDetail(params.id); //챔피언 정보 가져오기

  // response가 에러 메시지 객체인지 확인
  if ("message" in response) {
    return {
      title: "Error",
      description: response.message, // 에러 메시지 반환
    };
  }

  const champion = response as ChampionDetail; //response를 ChampionDetail 타입으로 변환

  const championImages = (await parent).openGraph?.images || [];

  return {
    title: `${champion.name} - My Riot App`, // 챔피언 이름을 포함한 페이지 제목
    description: champion.lore, //챔피언의 배경 설명
    openGraph: {
      images: [...championImages], // 소셜 미디어 공유 시 사용될 이미지
    },
  };
};

// 챔피언 상세 정보 페이지 컴포넌트
const ChampionDetailPage = async ({ params }: Props) => {
  const response = await fetchChampionDetail(params.id);

  // response가 에러 메시지 객체인지 확인
  if ("message" in response) {
    return {
      title: "Error",
      description: response.message, // 에러 메시지 반환
    };
  }

  const champion = response as ChampionDetail; //response 데이터를 ChampionDetail 타입으로 변환

  return (
 
    <div className="w-4/5 m-auto"> 
      {/*페이지 너비를 설정하고 가운데 정렬. */}
      <h1 className="detail-title-style">{champion.name}</h1>
      <span className="detail-keyword-style">{champion.title}</span>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={150}
        height={150}
        className="my-12"//상하여백 추가
      />
      <p className="detail-description-style mb-5">{champion.lore}</p>
      <article className="detail-stats-box-style">
        <h3 className="detail-sm-title-style">스탯</h3>
        <ul>
          <li className="detail-list-style">공격력: {champion.info.attack}</li>
          <li className="detail-list-style">방어력: {champion.info.defense}</li>
          <li className="detail-list-style">마법력: {champion.info.magic}</li>
          <li className="detail-list-style">
            난이도: {champion.info.difficulty}
          </li>
        </ul>
      </article>
    </div>
  );
};

export default ChampionDetailPage;
