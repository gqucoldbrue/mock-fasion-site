import Image from 'next/image';

export default function LandingPage() {
    return (
        <div className="relative w-full h-screen">
            <Image 
                src="/Cover-Shopify-Store.png"
                alt="Magazine cover"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
            
            <header className="absolute top-0 w-full flex justify-between p-8 text-white text-sm tracking-[0.2em]">
                <span>ISSUE 42 • OCTOBER 2023</span>
                <span>WWW.LEMAGAZINE.COM</span>
            </header>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-8xl font-bold font-['Playfair_Display']">
                    <span style={{ color: '#ffd700' }}>LE</span> <span className="text-white">MAGAZINE</span>
                </h1>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center p-16">
                <div className="space-y-8 text-white">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-light tracking-wider">OCTOBER EDITION</h2>
                        <h3 className="text-5xl font-bold tracking-wide">YOUNG PROFESSIONAL LIFESTYLE</h3>
                    </div>
                    
                    <p className="text-lg font-light leading-relaxed">
                        Discover the latest trends, career advice, and lifestyle tips
                        for the modern young professional. From fashion to finance,
                        we've got you covered.
                    </p>

                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold mb-4">FEATURING:</h4>
                        <ul className="space-y-2 text-lg font-light">
                            <li>• 10 Power Outfits for the Office</li>
                            <li>• Mastering Work-Life Balance</li>
                            <li>• Tech Gadgets Every Pro Needs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}