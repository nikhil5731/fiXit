export default function LandingPage() {
  const title1 = "Fix your Sales";
  const title2 = "Enabling Human Intelligence with Artificial Intelligence";

  return (
    <div className="w-full h-[90vh] bg-[#212520] flex justify-center overflow-hidden">
      <div className="w-[83%] h-screen flex flex-col gap-8 justify-center items-center">
        <h1 className="text-2xl md:text-5xl md:leading-[4rem] lg:text-6xl font-bold text-center">
          {/* Fix your Sales */}
          {/* making text visible with a delay */}
          {title1.split("").map((char, i) => {
            return (
              <span
                className="landing_title_gradient"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                {char}
              </span>
            );
          })}
        </h1>

        <h1 className="md:mt-0 text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-tight font-bold text-center">
          {/* Enabling Human Intelligence with Artificial Intelligence */}
          {/* making text visible with a delay */}
          {title2.split("").map((char, i) => (
            <span
              className="landing_title_gradient"
              style={{ animationDelay: `${1.4 + 0.1 * i}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <button className="text-lg text-[#e46e26] duration-1000 hover:text-[#fcd8c1]">
          Join the Waitlist {">"}
        </button>
      </div>
    </div>
  );
}
