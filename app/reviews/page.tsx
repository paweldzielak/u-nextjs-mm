import Link from "next/link";
import Heading from "@/components/Heading";
import { Review, getReviews } from "@/lib/reviews";

export default async function Reviews() {

  const reviews = await getReviews()
  console.log("[ReviewsPage]", reviews)


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
