import Link from "next/link";
import Heading from "@/components/Heading";

export default function Reviews() {
  return (
    <>
      <Heading text={'Reviews'} />
      <nav>
        <ul className="flex flex-col gap-3">
          <li className="border w-80 bg-white shadow rounded hover:shadow-xl" >
            <Link href={"/reviews/hollow-knight"}>
              <img src="/images/hollow-knight.jpg" alt="" width={640} height={360} className="rounded-t" />
              <h2 className="text-center font-orbitron">Hollow-knight</h2>
            </Link>

          </li>
          <li className="border w-80 bg-white shadow rounded hover:shadow-xl" >
            <Link href={"/reviews/stardew-valley"}>
              <img src="/images/stardew-valley.jpg" alt="" width={640} height={360} className="rounded-t" />
              <h2 className="text-center font-orbitron">Stardew-valley</h2>
            </Link>

          </li>
        </ul>
      </nav>
    </>
  )
}
