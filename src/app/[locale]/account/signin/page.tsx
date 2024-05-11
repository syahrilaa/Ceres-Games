'use client'
import { Input } from '@components/input'
import { Link, useRouter } from '@source/navigation'
import Image from 'next/image'
import GameConsoleGIF from '@public/game-console.gif'
import { useTranslations } from 'next-intl'

export const PlayPage = () => {
  const router = useRouter()
  const translation = useTranslations('FormsComponentsPage')
  return (
    <div className='mx-auto p-6 md:p-11 h-screen max-h-screen min-h-screen w-full flex flex-col justify-center item-center'>
      <div className='md:flex gap-11 h-full w-full'>
        <div className='order-first mx-auto flex-1 max-w-xl flex flex-col justify-center'>
          <h1 className='text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl text-center'>{translation('signin_title')}</h1>
          <div className='grid grid-cols-6 gap-6 mt-11'>
            <div className='col-span-6'>
              <Input placeholder={translation('email_input')} />
            </div>
            <div className='col-span-6'>
              <Input placeholder={translation('password_input')} />
            </div>
            <div className='col-span-6 flex justify-between'>
              <label htmlFor='remember' className='flex gap-3 items-center w-max'>
                <input id='remember' type='checkbox' className='h-5 w-5' />
                <span className='text-sm text-slate-500'>{translation('remember_checkbox')}</span>
              </label>
              <Link href='account/recovery/password'>
                <span className='text-sm text-blue-500'>{translation('forgotPassword_link')}</span>
              </Link>
            </div>
            <div className='col-span-6'>
              <button className='bg-blue-500 rounded-2xl font-medium text-white text-center px-4 py-3 w-full'>
                {translation('signin_button')}
              </button>
            </div>
            <div className='col-span-6'>
              <span className='text-sm'>
                {translation.rich('create_account_link', {
                  link: (chunks) => (
                    <button onClick={() => router.replace('/account/new')} className='text-blue-500'>
                      {chunks}
                    </button>
                  ) 
                })}
              </span>
            </div>
            <div className='col-span-6 relative h-0.5 w-full bg-slate-200 my-3'>
              <span className='absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 bg-white px-4 py-1.5 text-slate-500 font-bold'>OR</span>
            </div>
            <div className='col-span-6'>
              <button className='flex gap-3 items-center justify-center px-4 py-3 w-full ring-2 ring-slate-200 rounded-2xl text-slate-700'>  
                <svg viewBox="0 0 128 128" className='h-6 w-6'>
                  <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z" />
                  <path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z" />
                  <path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z" />
                  <path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z" />
                  <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z" />
                </svg>
                {translation('sign_provider_google')}
              </button>
            </div>
          </div>
        </div>
        <div className='flex-1 hidden md:flex items-center justify-center h-full w-full bg-cyan-400 rounded-3xl shadow-lg'>
          <Image src={GameConsoleGIF} alt='gif-console' priority={true} className='scale-75 object-cover h-full w-full' />
        </div>
      </div>
    </div>
  )
}

export default PlayPage