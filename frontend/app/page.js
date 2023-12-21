
export default function Home() {
  const title1 = "Fix your Sales";
  const title2 = "Enabling Human Intelligence with Artificial Intelligence";

  return (
    <div className="w-full h-[100vh] bg-[#212520] flex justify-center overflow-hidden">
      <div className="w-[85%] h-screen flex flex-col gap-8 justify-center items-center">
        <h1 className=" text-[3.75rem]  font-bold text-center">
          {/* Fix your Sales */}
          {/* making text visible with a delay */}
          {title1.split("").map((char, i) => {
            return (
              <span
                className="landing_title_gradient"
                style={{ animationDelay: `${0.1*i}s` }}
              >
                {char}
              </span>
            );
          })}
        </h1>

        <h1 className="mt-5 text-[5rem] leading-tight font-bold text-center">
          {/* Enabling Human Intelligence with Artificial Intelligence */}
          {/* making text visible with a delay */}
          {
            title2.split("").map((char, i) => (
                <span
                  className="landing_title_gradient"
                  style={{ animationDelay: `${(1.4+0.1 * i)}s` }}
                >
                  {char}
                </span>
            ))
          }
        </h1>
        <button className="text-lg text-[#e46e26] duration-1000 hover:text-[#fcd8c1]">
          Join the Waitlist {">"}
        </button>
      </div>
    </div>
  );
}
