import { Ripple } from "../components/magicui/ripple";
import { Meteors } from "../components/magicui/meteors";
import { Skeleton } from "../components/ui/skeleton";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { Particles } from "../components/magicui/particles";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <Ripple />
      <Meteors />

      <div className="flex flex-col space-y-3">
        {/* Example loading state, replace 'isLoading' with your actual loading logic */}
        {false ? (
          <>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center z-10">
              {" "}
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
                  Hi, I'm Rishith
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                  A passionate video editor & full-stack web developer crafting
                  beautiful and functional experiences.
                </p>
                <InteractiveHoverButton className="mt-10">
                  <a href="#projects">See my works</a>
                </InteractiveHoverButton>
              </div>
              <div>
                <img src="image-removebg-preview.png" alt="there is an image" />
              </div>
            </div>{" "}
          </>
        )}
      </div>
      <div className="absolute overflow-hidden h-[500px] w-full">
        <Particles />
      </div>
    </section>
  );
};

export default Hero;
