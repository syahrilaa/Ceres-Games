import Image from "next/image"
import AndroidFaceMock from '@public/mockup/samsung-galaxy-s22-plus-2022-medium.png'

export const AndroidMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-max w-max relative z-[1]">
      <div className="absolute top-0 left-0 h-full w-full px-2 py-2 -z-[1]">
        <div className='h-full bg-white w-full rounded-xl'>
          {children}
        </div>
      </div>
      <Image src={AndroidFaceMock} alt="android-mockcup" className="h-full w-[272px] z-[1] select-none" />
    </div>
  )
}