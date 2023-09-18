import Link from "next/link";
import Heading from "@/components/Heading";
import { Review, getReviews } from "@/lib/reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
} 

export default async function Reviews() {
  const reviews = await getReviews()
  return (
    <>
      <Heading text={'Reviews'} />
      <nav>
        <ul className="flex flex-col gap-3">
          {!!reviews && reviews.map((r: Review) => {
            return <li className="border w-80 bg-white shadow rounded hover:shadow-xl" >
              <Link href={`/reviews/${r.slug}`}>
                <img src={r.image} alt="" width={640} height={360} className="rounded-t" />
                <h2 className="font-semibold text-center font-orbitron">{r.title}</h2>
              </Link>
            </li>
          })}
        </ul>
      </nav>
    </>
  )
}
