import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MainCardProps {
  title: string;
  imgURL: string | StaticImageData; // string 또는 StaticImageData 허용
  href: string;
}

const MainCard = ({ title, imgURL, href }: MainCardProps) => {
  return (
    <li className="w-full max-w-md">
      <Link href={href} className="block hover:opacity-90 transition">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={imgURL} // StaticImageData 허용
            alt={title}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <h2 className="text-center text-xl font-bold text-white">{title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default MainCard;
