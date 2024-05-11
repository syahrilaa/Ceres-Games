type ScoreboardLayoutParams = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const ScoreboardLayout: React.FC<ScoreboardLayoutParams> = ({ children }) => {
  return children
}
export default ScoreboardLayout