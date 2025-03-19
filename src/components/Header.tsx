'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Hizmetler', href: '/hizmetler' },
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'İletişim', href: '/iletisim' },
  ]

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="relative w-32 h-12">
            <Image
              src="/images/logo2.jpg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-300 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4 bg-black/90">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  )
}

export default Header 