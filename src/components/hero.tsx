import bannerImg from "../assets/banner-stack.png"
export default function Hero() {
  return (
    <div className="bg-white min-h-[85vh] flex items-center justify-between px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
        {/* Left Content Area */}
        <div className="max-w-xl md:w-5/12 text-start">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="py-6 text-gray-500 text-base md:text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="btn border-none bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 hover:opacity-90 text-white rounded-xl px-6 py-3 font-semibold normal-case shadow-md">
              Explore Technologies
            </button>
            <button className="btn btn-outline border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50 rounded-xl px-6 py-3 font-semibold normal-case bg-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Area (Enlarged) */}
        <div className="flex justify-center md:justify-end md:w-7/12 w-full">
          <img
            src={bannerImg}
            alt="Development Stack Illustration"
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
