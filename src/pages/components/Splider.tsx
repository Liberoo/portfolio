import React, { useState } from "react";
import {
  Splide,
  SplideSlide,
} from "node_modules/@splidejs/react-splide/dist/js/react-splide.esm.mjs";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Button } from "@/components/ui/button";
import { urlForImage } from "@/utils/urlForImage";

interface PortfolioProps {
  portfolios: {
    portfolioTitle: string;
    portfolioDescription: string;
    portfolioURL: string;
    slug: string;
    image: string;
  }[];
}

const Splider = ({ portfolios }: PortfolioProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-black text-white w-full">
      <div className="container max-w-[1600px] test1 flex flex-col-reverse lg:flex-row gap-10  items-center justify-between overflow-hidden py-20">
        <div className="lg:w-1/2 lg:pl-12">
          {portfolios.map((post, index) => (
            <div
              className={`portfolio-element ${
                index === activeSlide ? "block" : "hidden"
              }`}
              key={post.slug}
            >
              <h3 className="text-5xl mb-5 font-bold">{post.portfolioTitle}</h3>
              <p className="mb-5 text-lg font-regular ">
                {post.portfolioDescription}
              </p>
              <Button
                className="text-lg font-[600] text-black"
                variant="default"
                asChild
              >
                <a href={post.portfolioURL}>Kontakt</a>
              </Button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="hidden md:block absolute right-0 top-0 opacity-1 z-[10] w-1/2 h-full light-gradient light-gradient--reverse"></div>

          {
            <Splide
              onMoved={(e) => setActiveSlide(e.index)}
              options={{
                type: "loop",
                rewind: true,
                width: 800,
                gap: "1rem",

                paginationDirection: "ttb",
                classes: {
                  pagination: "splide__pagination portfolio-pagination",
                  page: "splide__pagination__page portfolio-page",
                },
                mediaQuery: "min",
                breakpoints: {
                  768: {
                    padding: { right: "10rem" },
                  },
                },
              }}
              className="w-full portfolio-splide aspect-square max-h-[460px] pb-16"
              aria-label="My Favorite Images"
            >
              {portfolios.map((post) => (
                <SplideSlide key={post.slug}>
                  <img
                    className="w-full object-cover rounded-[25px] aspect-square h-full"
                    src={urlForImage(post.image).url()}
                    alt={post.portfolioTitle}
                  />
                </SplideSlide>
              ))}
            </Splide>
          }
        </div>
      </div>
    </section>
  );
};

export default Splider;
