import logo from '../assets/logo.png'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white h-screen flex items-center justify-center text-center px-4">
      <div>
        <img src={logo} alt="WESTMAT Logo" className="mx-auto w-24 h-24 mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">WESTMAT Nigeria Ltd</h1>
        <p className="text-lg md:text-2xl mb-6">Your Industrial Engineering Solution</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold">
          Get a Quote
        </button>
      </div>
    </section>
  )
}
