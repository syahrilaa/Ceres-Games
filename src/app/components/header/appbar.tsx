import Image from "next/image"
import UNOGameLogo from '@public/UNO_Game_wp.png'
import { Link } from '@source/navigation'
import { LanguageSelector } from "@app:components/languageSelector"
import { useTranslations } from 'next-intl'
import { NavigationLink } from "./navigation"
import { useEffect, useRef, useState } from "react"
import { motion } from 'framer-motion'

export const AppBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const containerMenu = useRef<HTMLDivElement>(null)
  const translation = useTranslations('BaseAppBar')
  const handleOpenMenu = () => {
    setOpenMenu(true)
  }

  useEffect(() => {
    const handleMenuOutsideClick = (e: MouseEvent) => {
      if(containerMenu.current && !containerMenu.current.contains(e.target as Node)) {
        setOpenMenu(false)
      }
    }

    document.documentElement.addEventListener('click', handleMenuOutsideClick)
    return () => {
      document.documentElement.removeEventListener('click', handleMenuOutsideClick)
    }
  }, [])
  return (
    <section className='fixed top-0 left-0 w-full h-16 px-4 md:px-6 lg:px-8'>
      <div className="h-full w-full flex flex-row items-center justify-between">
        <div className="flex gap-4 md:gap-6 lg:gap-8 items-center">
          <div>
            <Image src={UNOGameLogo} alt="unogame-logo-2024" quality={30} priority={true} className='h-11 w-max' />
            <span className='sr-only'>Home</span>
          </div>
          <div className='max-lg:hidden visible px-4 md:px-6 lg:px-8'>
            <NavigationLink />
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <div className='md:block hidden'>
            <LanguageSelector />
          </div>
          <Link href='/play' className='text-sm px-4 py-2.5 bg-blue-500 ring-1 ring-blue-500 text-white font-medium rounded-2xl'>
            <span className='w-max'>{translation('play_button')}</span>
          </Link>
          <div className='lg:hidden block'>
            <button onClick={handleOpenMenu} className='p-2 bg-transparent hover:bg-slate-200/40 rounded-2xl text-slate-700'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            {openMenu && (
              <motion.div ref={containerMenu} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='h-max w-max fixed top-3 right-3 bg-white ring-1 ring-slate-200 rounded-2xl flex flex-col gap-3 shadow-lg'>
                <NavigationLink />
                <div className='md:hidden block'>
                  <LanguageSelector />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}