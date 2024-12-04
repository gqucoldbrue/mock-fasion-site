'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LandingPage() {
    // Container animation for sliding in from right
    const containerAnimation = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    // Text animation variants for staggered fade-in
    const textAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Stagger children animation configuration
    const containerTransition = {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1
    };

    return (
        // Main container
        <div className="relative w-full h-screen overflow-hidden bg-gray-100">
            {/* Hero Image Container */}
            <div className="relative w-full h-full">
                <Image 
                    src="/Cover-Shopify-Store.png"
                    alt="Magazine cover"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className="object-center"
                />
            </div>
            
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Content Container - Positioned on the right */}
            <motion.div
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
                transition={containerTransition}
                className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-between p-12 text-white z-10"
            >
                {/* Header Section */}
                <div className="space-y-6">
                    <motion.div 
                        variants={textAnimation}
                        className="text-sm tracking-wider"
                    >
                        ISSUE 42 • OCTOBER 2023
                    </motion.div>
                    
                    {/* Magazine Title */}
                    <motion.h1 
                        variants={textAnimation}
                        className="text-6xl font-bold"
                    >
                        <span className="text-yellow-400">LE</span> MAGAZINE
                    </motion.h1>
                    
                    {/* Subtitle */}
                    <div className="space-y-4">
                        <motion.h2 
                            variants={textAnimation}
                            className="text-3xl font-light"
                        >
                            OCTOBER EDITION
                        </motion.h2>
                        <motion.h3 
                            variants={textAnimation}
                            className="text-4xl font-bold"
                        >
                            YOUNG PROFESSIONAL LIFESTYLE
                        </motion.h3>
                    </div>
                    
                    {/* Description */}
                    <motion.p 
                        variants={textAnimation}
                        className="text-lg font-light max-w-md"
                    >
                        Discover the latest trends, career advice, and lifestyle tips
                        for the modern young professional. From fashion to finance,
                        we've got you covered.
                    </motion.p>
                </div>

                {/* Footer Section */}
                <motion.div 
                    variants={textAnimation}
                    className="space-y-8"
                >
                    <div className="space-y-2">
                        <motion.p 
                            variants={textAnimation}
                            className="font-semibold"
                        >
                            FEATURING:
                        </motion.p>
                        <motion.ul 
                            variants={textAnimation}
                            className="space-y-1 font-light"
                        >
                            <li>• 10 Power Outfits for the Office</li>
                            <li>• Mastering Work-Life Balance</li>
                            <li>• Tech Gadgets Every Pro Needs</li>
                        </motion.ul>
                    </div>

                    {/* Barcode and Website URL */}
                    <div className="space-y-4">
                        <motion.div 
                            variants={textAnimation}
                            className="relative w-[100px] h-[50px]"
                        >
                            <Image
                                src="/bar-code.png"
                                alt="Barcode"
                                width={100}
                                height={50}
                            />
                        </motion.div>
                        <motion.div 
                            variants={textAnimation}
                            className="text-sm tracking-wider"
                        >
                            WWW.LEMAGAZINE.COM
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}