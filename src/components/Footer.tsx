import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <div className="space-y-2">
              <a
                href="tel:+905555555555"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                <FaPhone />
                <span>+90 555 555 55 55</span>
              </a>
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Linkler</h3>
            <nav className="space-y-2">
              <Link href="/hizmetler" className="block hover:text-gray-300">
                Hizmetlerimiz
              </Link>
              <Link href="/hakkimizda" className="block hover:text-gray-300">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="block hover:text-gray-300">
                İletişim
              </Link>
            </nav>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <nav className="space-y-2">
              <Link href="/hizmetler#bodyguard" className="block hover:text-gray-300">
                Bodyguard Hizmeti
              </Link>
              <Link href="/hizmetler#vale" className="block hover:text-gray-300">
                Vale Hizmeti
              </Link>
              <Link href="/hizmetler#vip" className="block hover:text-gray-300">
                VIP Hizmetler
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 