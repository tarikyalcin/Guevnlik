'use client'
import { useState } from 'react'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            İletişim
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Size yardımcı olmak için buradayız
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl font-bold mb-8">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-2xl text-black">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a href="tel:+905555555555" className="text-gray-600 hover:text-black">
                      +90 555 555 55 55
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-2xl text-black">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/905555555555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black"
                    >
                      +90 555 555 55 55
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-2xl text-black">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <a href="mailto:info@example.com" className="text-gray-600 hover:text-black">
                      info@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-2xl text-black">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Örnek Mahallesi, Örnek Sokak No:1<br />
                      Kadıköy, İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Bize Ulaşın</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Konum</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504749542824!2d29.02885867677385!3d40.99050227141818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab86c4a0b9bbf%3A0x6f4b38fc8a2e8c89!2sKad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1690000000000!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
} 