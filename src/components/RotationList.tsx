"use client";

import React from "react";

import ListCard from "@/components/ListCard";
import { useFetchChampionList } from "@/utils/useQueryChampionList";

const RotationList = () => {
  // React Query 훅 사용
  const { data: champions, isLoading, isError, error } = useFetchChampionList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <ul className="list-style grid grid-cols-4 gap-4">
      {champions?.map((champion) => (
        <ListCard
          key={champion.id}
          href={`/champions/${champion.id}`}
          imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
          name={champion.name}
          description={champion.title}
        />
      ))}
    </ul>
  );
};

export default RotationList;
