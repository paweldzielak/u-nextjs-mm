import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
} 

export default function About() {
  return (
    <>
    <Heading text='About this site' />
      <p>
        Website to learn Next.js
      </p>
    </>
  )
}
