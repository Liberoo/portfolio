import { urlForImage } from "@/utils/urlForImage";
import { Button } from "@/components/ui/Button";
interface singlePostProps {
  title: string;
  image: string;
  slug: string;
}
const SinglePost = ({ title, image, slug }: singlePostProps) => {
  return (
    <div className="overflow-hidden border border-white rounded-[20px] pb-5">
      <div className="aspect-video ">
        <img
          className="h-full w-full object-cover"
          src={urlForImage(image).url()}
          alt={title}
        />
      </div>
      <div className="px-5 mt-5">
        <h3 className="font-bold uppercase text-lg mb-5">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quibusdam atque fuga ipsam numquam soluta, debitis cupiditate beatae
          vero illum minus, iusto ex in est, architecto animi corrupti
          repellendus distinctio.s
        </p>
        <Button className="text-lg mt-5" variant="default" asChild>
          <a href={`./${slug.current}`}>Zobacz</a>
        </Button>
      </div>
    </div>
  );
};
export default SinglePost;
