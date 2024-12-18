"use client";

import { useFetchChampionList } from "@/utils/useQueryChampionList";
import ListCard from "@/components/ListCard";

const ChampionListContent = () => {
  const { data, isLoading, isError, error } = useFetchChampionList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="container">
      <h1 className="title-style">챔피언 목록</h1>
      <ul className="list-style grid grid-cols-4 gap-4">
        {data?.map((champion) => (
          <ListCard
            key={champion.id}
            href={`/champions/${champion.id}`}
            imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
            name={champion.name}
            description={champion.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChampionListContent;
