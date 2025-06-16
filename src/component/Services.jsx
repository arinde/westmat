export default function Services() {
  const services = [
    "Structural Steel Fabrication & Welding",
    "Mechanical, Civil & Electrical Engineering",
    "Installation & Piping",
    "Scaffolding",
    "Labor Supply",
    "Equipment Rental",
    "Sand Blasting & Painting",
    "Non-Destructive Testing (NDT)"
  ]

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 shadow-md border rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
