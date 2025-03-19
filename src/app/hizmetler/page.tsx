import Image from 'next/image'
import { FaShieldAlt, FaCar, FaStar } from 'react-icons/fa'

export default function Hizmetler() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hizmetlerimiz
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Size özel güvenlik ve vale çözümleri sunuyoruz
          </p>
        </div>
      </section>

      {/* Bodyguard Hizmeti */}
      <section id="bodyguard" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl text-white mb-6">
                <FaShieldAlt />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Bodyguard Hizmeti</h2>
              <p className="text-white mb-6">
                Profesyonel bodyguard ekibimiz, yüksek güvenlik standartlarıyla kişisel ve kurumsal koruma hizmetleri sunmaktadır. Modern ekipmanlar ve ileri teknoloji kullanarak, müşterilerimizin güvenliğini en üst düzeyde sağlıyoruz.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Kişisel Koruma
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Kurumsal Güvenlik
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Etkinlik Güvenliği
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/bodyguard.jpg"
                alt="Bodyguard Hizmeti"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vale Hizmeti */}
      <section id="vale" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:order-2">
              <Image
                src="/images/vale.jpg"
                alt="Vale Hizmeti"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:order-1">
              <div className="text-4xl text-black mb-6">
                <FaCar />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black">Vale Hizmeti</h2>
              <p className="text-black mb-6">
                Profesyonel vale hizmetimiz ile özel etkinlikler, restoranlar ve oteller için kusursuz bir park deneyimi sunuyoruz. Deneyimli ekibimiz, araçlarınızı özenle ve güvenle teslim alıp park ediyor.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-black">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  Otel Vale Hizmeti
                </li>
                <li className="flex items-center gap-2 text-black">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  Restoran Vale Hizmeti
                </li>
                <li className="flex items-center gap-2 text-black">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  Etkinlik Vale Hizmeti
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Hizmetler */}
      <section id="vip" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl text-white mb-6">
                <FaStar />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">VIP Hizmetler</h2>
              <p className="text-white mb-6">
                VIP müşterilerimiz için özel olarak tasarlanmış, lüks ve üst düzey güvenlik hizmetleri sunuyoruz. Kişiselleştirilmiş çözümlerle, her türlü güvenlik ihtiyacınızı karşılıyoruz.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Özel Etkinlik Güvenliği
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Lüks Araç Vale Hizmeti
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  7/24 Kişisel Koruma
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/vip.jpg"
                alt="VIP Hizmetler"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 