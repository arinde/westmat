export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔸 Optional overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-blue-900/70 z-0" />

      {/* 🔸 Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WESTMAT Nigeria Ltd</h1>
          <p className="text-lg md:text-2xl mb-6">Your Industrial Engineering Solution</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
