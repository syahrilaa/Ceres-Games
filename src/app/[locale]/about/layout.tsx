type AboutLayoutParams = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const AboutLayout: React.FC<AboutLayoutParams> = ({ children }) => {
  return children
}
export default AboutLayout