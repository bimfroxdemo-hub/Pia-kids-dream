import logo from "../assets/heroimg/logo.png";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#faf5ff] via-white to-[#f3e8ff] flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative flex flex-col items-center">

        {/* Outer Ring */}
        <div className="relative flex items-center justify-center">

          <div className="absolute w-40 h-40 border-2 border-purple-200 rounded-full animate-ping opacity-30" />

          <div className="absolute w-32 h-32 border border-purple-300 rounded-full animate-spin" />

          <div className="w-28 h-28 bg-white rounded-full shadow-[0_20px_60px_rgba(168,85,247,0.25)] flex items-center justify-center p-3">
            <img
              src={logo}
              alt="Piakids Dream"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

        {/* Brand Name */}
        <h2 className="mt-8 text-2xl font-bold text-purple-700">
          Piakids Dream
        </h2>

        <p className="mt-2 text-sm text-gray-500 tracking-[4px] uppercase">
          Loading Collection
        </p>

        {/* Dots */}
        <div className="flex gap-2 mt-5">
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
          <span
            className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-3 h-3 bg-purple-700 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>

      </div>
    </div>
  );
}