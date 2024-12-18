import React from "react";
import { ItemInfo } from "@/types/Item"; // 아이템 데이터 타입
import { fetchItemList } from "@/utils/serverApi"; // 아이템 데이터를 가져오는 함수
import ListCard from "@/components/ListCard"; // 아이템 정보를 표시하는 카드 컴포넌트

export type Item = Pick<ItemInfo, "name" | "plaintext" | "image">; // 아이템 타입에서 필요한 필드만 선택

const ItemsPage = async () => {
  const response = await fetchItemList(); // 서버에서 아이템 데이터를 가져옴

  // 서버 응답이 에러 메시지인지 확인
  if ("message" in response) {
    return <div>{response.message}</div>; // 에러 메시지를 렌더링
  }

  // 아이템 데이터를 객체 값 배열로 변환
  const items = Object.values(response.data);

  return (
    <div>
      <h1 className="title-style">아이템 목록</h1>
      <ul className="list-style">
        {items.map((item, index) => (
          <ListCard
            key={index + item.name} // 고유한 키 생성
            imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`} // 이미지 URL
            name={item.name} // 아이템 이름
            description={item.plaintext} // 아이템 설명
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
