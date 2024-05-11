type GamesLayoutParams = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const GamesLayout: React.FC<GamesLayoutParams> = ({ children }) => {
  return children
}
export default GamesLayout