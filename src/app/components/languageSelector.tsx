'use client'
import Image, { StaticImageData } from "next/image"
import UKFlag from '@public/flag/Flag_of_United_Kingdom_Flat_Square-64x64.png'
import IDFlag from '@public/flag/Flag_of_Indonesia_Flat_Square-64x64.png'
import JAFlag from '@public/flag/Flag_of_Japan_Flat_Square-64x64.png'
import KOFlag from '@public/flag/Flag_of_South_Korea_Flat_Square-64x64.png'
import { useState, useEffect, useRef, useTransition } from "react"
import { useParams } from 'next/navigation'
import { useRouter, usePathname } from '@source/navigation'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from "next-intl"

type LanguageISOType = 'EN' | 'ID' | 'JA' | 'KO'
interface LanguageSelectData {
  name: string
  iso: LanguageISOType
  flag: StaticImageData
}
const LanguageSelectorData: Array<LanguageSelectData> = [
  {
    name: 'English',
    iso: 'EN',
    flag: UKFlag,
  },
  {
    name: 'Indonesian',
    iso: 'ID',
    flag: IDFlag
  },
  {
    name: 'Japanese',
    iso: 'JA',
    flag: JAFlag
  },
  {
    name: 'Korean',
    iso: 'KO',
    flag: KOFlag
  },
]

export const LanguageSelector = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const translation = useTranslations('LanguageSelectorButton')
  const [isPending, startTransition] = useTransition()
  const [selectedLanguage, setSelected] = useState<LanguageISOType | null>(null)
  const [openListLang, setOpen] = useState<boolean>(false)
  const listContainer = useRef<HTMLDivElement>(null)

  const handleOpenListLang = () => {
    setOpen(true)
  }

  const handleSetLangugage = (lang: LanguageISOType) => {
    startTransition(() => {
      router.replace(pathname, { 
        locale: lang.toLowerCase()
      })
    })
    setOpen(false)
  }

  useEffect(() => {
    if(!selectedLanguage && locale) {
      setSelected(locale.toUpperCase() as LanguageISOType)
    }
  }, [selectedLanguage, locale])

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if(openListLang) {
        if(listContainer.current && !listContainer.current.contains(e.target as Node)) {
          setOpen(false)
        }
      }
    }

    document.documentElement.addEventListener('click', outsideClick)
    return () => {
      document.documentElement.removeEventListener('click', outsideClick)
    }
  }, [openListLang])
  return (
    <div className='relative h-max w-44'>
      <button onClick={handleOpenListLang} className='relative w-full flex items-center text-sm gap-2.5 text-slate-700 font-medium px-4 py-2.5 bg-transparent ring-1 ring-slate-200 rounded-2xl bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
        <div className="h-5 w-0.5 bg-slate-200" />
        {LanguageSelectorData.filter((item) => item.iso === selectedLanguage).map((item, i) => {
          return (
            <div key={i} className='flex items-center gap-2'>
              <Image src={item.flag} alt="UK-flag" className='h-5 w-max rounded aspect-auto shadow-md' />
              <span>{translation(`selector.${item.iso.toLowerCase()}`)}</span>
            </div>
          )
        })}
      </button>
      {openListLang && (
        <motion.div ref={listContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 left-0 h-max w-full bg-white ring-1 ring-slate-200 rounded-2xl z-10 overflow-hidden">
          {LanguageSelectorData.map((item, i) => {
            return (
              <motion.button key={i} onClick={() => handleSetLangugage(item.iso)} className='w-full py-2.5 px-4 hover:bg-slate-200/40'>
                <div className='flex items-center justify-between gap-3'>
                  <div className='flex items-center gap-3'>
                    <Image src={item.flag} alt="flag" className='h-5 w-max rounded aspect-auto shadow-md' />
                    <span className="text-sm text-slate-700">{translation(`selector.${item.iso.toLowerCase()}`)}</span>
                  </div>
                  {selectedLanguage === item.iso && (
                    <div className='h-1.5 w-1.5 bg-green-500 rounded-full' />
                  )}
                </div>
              </motion.button>
            )
          })}
        </motion.div>
      )}
    </div>
  )
}