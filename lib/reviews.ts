import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string
}

export const getReview = async (path: string) : Promise<Review> => {
  const text = await readFile(`./content/reviews/${path}.md`, "utf-8");
  const { content, data: { title, date, image } } = matter(text);
  const body = marked(content)
  return { slug: path, title, date, image, body }
}

export const getReviews = async () => {
  const games = (await readdir("./content/reviews/"))
    .filter((filename) => filename.endsWith('.md'))
    .map(filename => filename.slice(0, -'.md'.length))

  const reviews: Review[] = []
  for (const game of games) {
    const review = await getReview(game)
    reviews.push(review)
  }

  return reviews
}