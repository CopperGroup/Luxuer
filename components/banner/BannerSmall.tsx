import { Store } from "@/constants/store";
import { IoDiamond } from "react-icons/io5";

const BannerSmall = () => {
  return (
    <article className="w-full h-72 group flex justify-center text-theme-3 items-center rounded-3xl" style={{ backgroundImage: `url(/assets/loginbackground.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-fit flex items-center gap-2 text-theme-3 bg-[#1a1a1a]  py-2 px-5">
        <IoDiamond className="size-14 leading-tight max-[440px]:size-12 max-[370px]:size-10"/>
        <h1 className="text-[56px] font-medium leading-tight max-[440px]:text-[48px] max-[370px]:text-[40px]">{Store.name}</h1>
      </div>
    </article>
  )
}

export default BannerSmall;