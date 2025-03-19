import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt, FaCar, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Güvenlik Hizmetleri"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Profesyonel Güvenlik ve Vale Hizmetleri
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Güvenliğiniz ve konforunuz için 7/24 hizmetinizdeyiz
          </p>
          <Link
            href="/iletisim"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Hemen Teklif Alın
          </Link>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Hizmetlerimiz
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bodyguard Hizmeti */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl text-black mb-4 flex justify-center">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Bodyguard Hizmeti</h3>
              <p className="text-black mb-6">
                Profesyonel ekibimizle kişisel ve kurumsal güvenlik çözümleri sunuyoruz.
              </p>
              <Link
                href="/hizmetler#bodyguard"
                className="text-black font-semibold hover:underline"
              >
                Detaylı Bilgi
              </Link>
            </div>

            {/* Vale Hizmeti */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl text-black mb-4 flex justify-center">
                <FaCar />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Vale Hizmeti</h3>
              <p className="text-black mb-6">
                Özel etkinlikler ve işletmeler için profesyonel vale hizmeti.
              </p>
              <Link
                href="/hizmetler#vale"
                className="text-black font-semibold hover:underline"
              >
                Detaylı Bilgi
              </Link>
            </div>

            {/* VIP Hizmetler */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl text-black mb-4 flex justify-center">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">VIP Hizmetler</h3>
              <p className="text-black mb-6">
                Özel ihtiyaçlarınız için kişiselleştirilmiş VIP güvenlik çözümleri.
              </p>
              <Link
                href="/hizmetler#vip"
                className="text-black font-semibold hover:underline"
              >
                Detaylı Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Profesyonel Ekip</h3>
              <p className="text-white">Deneyimli ve eğitimli personel</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">7/24 Hizmet</h3>
              <p className="text-white">Kesintisiz güvenlik çözümleri</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Modern Ekipman</h3>
              <p className="text-white">En son teknoloji güvenlik ekipmanları</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Hızlı Destek</h3>
              <p className="text-white">Anında müdahale ve destek</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
