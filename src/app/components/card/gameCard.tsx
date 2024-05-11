import React from 'react'
import Image, { StaticImageData } from 'next/image'
import DEFImage from '@public/chainsgame.png'

type GameCardStatus = 'New' | 'Updated' | 'Maintenance' | 'In Progress'

interface GameCardPropertyProps {
  title: string
  mode?: string
  minPlayer?: number
  maxPlayer?: number
  banner: StaticImageData
  status?: GameCardStatus
}

export const GameCard: React.FC<GameCardPropertyProps> = ({ title, mode, minPlayer, maxPlayer, banner, status }) => {
  return (
    <div className='col-span-1 min-w-[320px] max-w-[320px] md:min-w-[360px] md:max-w-[360px] relative w-full h-max p-3 rounded-2xl overflow-hidden ring-1 ring-slate-200'>
      {status && (<span className={`${status === 'New' ? 'bg-yellow-500/30 text-yellow-500' : status === 'Updated' ? 'bg-blue-500/30 text-blue-500' : status === 'Maintenance' ? 'bg-orange-500/30 text-orange-500' : status === 'In Progress' ? 'bg-slate-200 text-slate-700' : 'bg-transparent'}  text-xs rounded-b-2xl px-4 py-1.5 absolute top-0 right-0`}>{status}</span>)}
      <div className='flex gap-6 items-center'>
        <div className='aspect-square h-16 w-16 md:h-24 md:w-24'>
          <Image src={banner} alt='awdaw aspect-square w-full h-full' />
        </div>
        <div className='flex flex-col mt-3 gap-1.5 flex-1'>
          <h1 className='text-lg font-semibold text-slate-700'>{title}</h1>
          <div className='h-0.5 w-full bg-slate-200' />
          <div className='flex justify-between'>
            <div className='flex gap-1 text-slate-500 text-sm'>
              {mode ? mode : 'No mode'}
            </div>
            <div className='flex gap-1 text-slate-500 text-sm'>
              {maxPlayer ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              )}
              {maxPlayer ? `${minPlayer}-${maxPlayer}` : minPlayer}
            </div>
          </div>
        </div>
      </div>
      <button className='mt-3 text-cneter w-full px-4 py-2.5 bg-blue-500 ring-1 ring-blue-500 text-white font-medium rounded-2xl'>
        Play
      </button>
    </div>
  )
}