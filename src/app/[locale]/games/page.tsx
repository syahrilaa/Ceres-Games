'use client'
import { AppBar } from "@app:components/header"
import { SectionWrapper } from '@app:components/section'
import { useTranslations } from 'next-intl'
import { GameCard } from '@app:components/card'
import DEFImage from '@public/chainsgame.png'


export const GamesPage = () => {
  const translation = useTranslations('BaseGamesPage')
  return (
    <div className='w-full max-h-screen min-h-screen bg-white'>
      <AppBar />
      <div className='py-24'>
        <h1 className='text-center text-3xl font-extrabold sm:text-5xl text-slate-700'>{translation('title')}</h1>
        <SectionWrapper title='Card game' className='mt-11 py-4'>
          <div className='flex overflow-x-auto p-3 gap-3 mt-3'>
            <GameCard title='Percobaan Title' banner={DEFImage} minPlayer={2} maxPlayer={6} status='Updated' />
          </div>
        </SectionWrapper>
      </div>
    </div>
  )
}

export default GamesPage