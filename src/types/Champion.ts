// 챔피언 전체 데이터 타입
export interface ChampionFullInfo {
  data: Record<string, ChampionDetail>; // 챔피언 ID를 키로 하고 상세 정보를 값으로 가짐
}

// 챔피언 기본 정보 타입 (목록에 사용)
export interface Champion {
  id: string; // 챔피언 ID
  key: number; // 챔피언 키 (숫자 형태)
  image: {
    full: string; // 이미지 파일명
  };
  name: string; // 챔피언 이름
  title: string; // 챔피언 타이틀
}

// 챔피언 상세 정보 타입
export interface ChampionDetail extends Champion {
  lore: string; // 배경 스토리
  allytips: string[]; // 플레이어를 위한 팁
  enemytips: string[]; // 적을 상대할 때의 팁
  tags: string[]; // 챔피언 역할 태그
  info: ChampionInfo; // 챔피언 능력치 정보
}

// 챔피언 능력치 타입
export interface ChampionInfo {
  attack: number; // 공격력
  defense: number; // 방어력
  magic: number; // 마법력
  difficulty: number; // 난이도
}
