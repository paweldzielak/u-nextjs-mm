import Link from "next/link";
import Heading from "@/components/Heading";

export default function Reviews() {
  return (
    <>
    <Heading text={'Reviews'} />
      <nav>
        <ul>
          <li>
            <Link href={"/reviews/hollow-knight"}>hollow-knight</Link>
          </li>
          <li>
            <Link href={"/reviews/stardew-valley"}>stardew-valley</Link>
          </li>
        </ul>
      </nav>
      </>
  )
}
