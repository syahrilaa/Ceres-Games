import { Link, usePathname } from "@source/navigation"
import { useTranslations } from 'next-intl'

const navLinkData = [
  {
    name: 'home_link',
    url: '/',
    title: 'Home'
  },
  {
    name: 'games_link',
    url: '/games',
    title: 'Games'
  },
  {
    name: 'scoreboard_link',
    url: '/scoreboard',
    title: 'Scoreboard'
  },
]

export const NavigationLink = () => {
  const pathname = usePathname()
  const translation = useTranslations('BaseAppBar')
  return (
    <nav className='h-max min-w-44 w-full flex lg:justify-center max-lg:rounded-2xl max-lg:overflow-hidden'>
      <ul className="flex h-max max-lg:w-full max-lg:flex-col max-md:gap-0 lg:gap-8">
        {navLinkData.map((item, i) => {
          return (
            <li key={i} className='flex h-max max-lg:w-full'>
              <Link href={item.url} className={`${pathname === item.url ? 'text-blue-500' : 'text-slate-700 hover:text-slate-500'} h-max w-max max-lg:w-full font-medium max-lg:px-4 max-lg:py-2 max-lg:hover:bg-slate-200/40`}>
                {translation(`Navigation.${item.name}`)}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}