import Image from "next/image";
import Link from "next/link";
import main_image from "../public/main_image.jpg";

export default function Home() {
  return (
    <div className="flex items-center flex-col text-center gap-10 px-5">
      <div className="flex items-center flex-col text-center gap-5">
        <h2 className="text-4xl	text-yellow-400 font-bold">
          리그 오브 레전드 정보앱
        </h2>
        <p className="text-zinc-400">
          Riot Games API를 활용하여 <br /> 챔피언과 아이템 정보를 제공합니다.
        </p>
        <Image src={main_image} width={400} height={400} alt={"홈 이미지"} />
      </div>

      <div className="flex flex-col text-2xl gap-8 text-yellow-600">
        <div className="">
          <Link href={"/champions"}>
            <h3>챔피언 목록</h3>
          </Link>
        </div>
        <div className="">
          <Link href={"/items"}>
            <h3>아이템 목록</h3>
          </Link>
        </div>
        <div className="">
          <Link href={"/rotation"}>
            <h3>금주 로테이션</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
