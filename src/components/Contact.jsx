import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="mb-6">
        <p className="mb-2">📍 Area 5, Iperin Gate, OPIC Estate, Agbara, Ogun State</p>
        <p className="mb-2">📞 +2348033923394</p>
        <p className="mb-2">✉️ westmat445@yahoo.com | westmat445@gmail.com</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
