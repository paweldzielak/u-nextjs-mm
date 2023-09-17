import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";

export default async function ReviewPage(props) {
  const { title, date, image, body } = await getReview(`${props.params.slug}`)

  return (
    <>
      <Heading text={title} />
      <p className="italic pb-2 font-orbitron">{date}</p>
      <img src={image} alt="" width={640} height={360} className="mb-2 rounded" />
      <article dangerouslySetInnerHTML={{ __html: body }} className="prose" />
    </>
  )
}
