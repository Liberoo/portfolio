import SinglePost from "./global/SinglePost";
import { Button } from "@/components/ui/button";
interface ThreeProps {
  threes: {
    title: string;
    image: string;
    slug: string;
  }[];
}

const ThreePosts = ({ threes }: ThreeProps) => {
  console.log(threes);
  return (
    <section className="bg-black text-white ">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="text-4xl uppercase font-bold">
            Sprawdź mojego bloga!
          </h2>
          <Button className="text-lg uppercase" variant="default" asChild>
            <a href="./kontakt">Zobacz inne posty</a>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-between mt-5 ">
          {threes.map((post, index) => (
            <div className={`portfolio-element`} key={index}>
              <SinglePost
                title={post.title}
                image={post.image}
                slug={post.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePosts;
