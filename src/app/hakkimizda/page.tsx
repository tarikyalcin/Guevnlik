import Image from 'next/image'

export default function Hakkimizda() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hakkımızda
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Güvenlik sektöründe 15 yıllık tecrübe
          </p>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Hikayemiz</h2>
              <p className="text-black mb-6">
                2009 yılında kurulan şirketimiz, güvenlik ve vale hizmetleri alanında Türkiye'nin önde gelen firmalarından biri haline gelmiştir. Müşteri memnuniyetini ve güvenliği her zaman ön planda tutarak, profesyonel hizmet anlayışımızla sektörde fark yaratıyoruz.
              </p>
              <p className="text-black">
                Modern ekipmanlar ve ileri teknoloji kullanarak, müşterilerimize en üst düzeyde hizmet sunuyoruz. Deneyimli ve eğitimli personelimiz ile güvenliğinizi sağlıyor, konforunuzu artırıyoruz.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/about.jpg"
                alt="Şirket Hikayemiz"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Değerlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/20 p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">Profesyonellik</h3>
              <p className="text-white">
                Her zaman en yüksek standartlarda hizmet sunmayı hedefliyoruz.
              </p>
            </div>
            <div className="bg-black/20 p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">Güvenilirlik</h3>
              <p className="text-white">
                Müşterilerimizin güvenini kazanmak ve korumak en önemli önceliğimizdir.
              </p>
            </div>
            <div className="bg-black/20 p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">Yenilikçilik</h3>
              <p className="text-white">
                Sürekli gelişim ve teknolojik yenilikleri takip ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-black">15+</div>
              <div className="text-black">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-black">1000+</div>
              <div className="text-black">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-black">100+</div>
              <div className="text-black">Uzman Personel</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-black">24/7</div>
              <div className="text-black">Hizmet</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 