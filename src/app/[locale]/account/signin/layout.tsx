type PlayLayoutParams = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const PlayLayout: React.FC<PlayLayoutParams> = ({ children }) => {
  return children
}
export default PlayLayout