import React from 'react'
import './app.css';

type RootProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootProps) => {
  return children;
}

export default RootLayout