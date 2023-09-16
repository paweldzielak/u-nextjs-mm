import React from 'react'

interface HeadingProps {
  text: string
}

export const Heading: React.FC<HeadingProps> = ({text}) => {
  return (<h1 className="font-bold pb-3 text-2xl font-orbitron">{text}</h1>);
}

export default Heading;
