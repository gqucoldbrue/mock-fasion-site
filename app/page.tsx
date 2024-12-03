import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/Cover-Shopify-Store.png?height=1080&width=1920"
        alt="Young professional woman"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col justify-between p-8 text-white"
      >
        <header className="flex justify-between items-center">
          <span className="text-sm font-light">ISSUE 42 • OCTOBER 2023</span>
          <span className="text-sm font-light">WWW.LEMAGAZINE.COM</span>
        </header>
        <main className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl sm:text-8xl font-bold tracking-tighter mb-4"
          >
            <span className="text-yellow-400">LE</span> MAGAZINE
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-light mb-2">OCTOBER EDITION</h2>
            <h3 className="text-3xl sm:text-4xl font-semibold mb-4">YOUNG PROFESSIONAL LIFESTYLE</h3>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-md text-sm sm:text-base"
          >
            Discover the latest trends, career advice, and lifestyle tips for the modern young professional.
            From fashion to finance, and AI to future tech.
          </motion.p>
        </main>
        <footer className="flex justify-between items-end">
          <div className="text-sm font-light">
            <p>FEATURING:</p>
            <ul className="list-disc list-inside">
              <li>10 Power Outfits for the Office</li>
              <li>Mastering Work-Life Balance</li>
              <li>Tech Gadgets Every Pro Needs</li>
            </ul>
          </div>
          <Image
            src="/placeholder.svg?text=Barcode&width=100&height=50"
            alt="Barcode"
            width={100}
            height={50}
          />
        </footer>
      </motion.div>
    </div>
  )
}

