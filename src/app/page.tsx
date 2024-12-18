import MainCard from "@/components/MainCard";
import { Metadata } from "next";
import championListImg from "@/public/championList.webp";
import championRotation from "@/public/championRotation.webp";
import itemList from "@/public/itemList.webp";

// 메타데이터
export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-3 py-7">
      {/* 타이틀 */}
      <h1 className="title-style">리그 오브 레전드 정보 앱</h1>
      <p className="dark:text-[#bbb]">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>

      {/* 카드 목록 */}
      <ul className="flex flex-col gap-10 py-10 w-full items-center">
        <MainCard
          title={"챔피언 목록 보기"}
          imgURL={championListImg}
          href={"/champions"}
        />
        <MainCard
          title={"아이템 목록 보기"}
          imgURL={itemList}
          href={"/items"}
        />
        <MainCard
          title={"금주 로테이션 확인"}
          imgURL={championRotation}
          href={"/rotation"}
        />
      </ul>
    </div>
  );
}
