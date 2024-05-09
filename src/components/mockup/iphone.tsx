import Image from "next/image"
import IphoneFaceMock from '@public/mockup/apple-iphone-15-2023-medium.png'

export const IphoneMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-max w-max relative z-[1]">
      <div className="absolute top-0 left-0 h-full w-full px-3 py-2.5 -z-[1]">
        <div className='h-full bg-white w-full rounded-2xl relative pt-8'>
          {children}
        </div>
      </div>
      <Image src={IphoneFaceMock} alt="android-mockcup" className="h-full w-[272px] z-[1] select-none" />
    </div>
  )
}