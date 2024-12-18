// 아이템 데이터 타입 정의

export interface ItemFullInfo {
  data: Record<string, ItemInfo>; // 아이템 정보를 담은 객체
}

export type ItemInfo = {
  name: string; // 아이템 이름
  plaintext: string; // 아이템 간단 설명
  image: {
    full: string; // 아이템 이미지 파일 이름
  };
  gold: {
    base: number; // 기본 가격
    purchasable: boolean; // 구매 가능 여부
    total: number; // 총 가격
    sell: 210; // 판매 가격 (고정 값)
  };
  stats: { [key: string]: number }; // 아이템 스탯 (키-값 쌍, 내용은 아이템마다 다름)
};
