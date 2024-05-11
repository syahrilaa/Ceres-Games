import React from 'react'
interface InputProps extends React.ComponentProps<'input'> {

}

export const Input: React.FC<InputProps> = ({ className ,...props}) => {
  return (
    <input {...props} className={`${className} h-14 w-full bg-slate-100 rounded-2xl px-4 ring-0 ring-transparent focus:ring-2 focus:ring-blue-500 border-none outline-none druation-200 ease-in`} />
  )
}