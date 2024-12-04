'use client';
import React from 'react';
import { m } from 'motion';  // Notice the change here - we import 'm' instead of 'motion'
import Image from 'next/image';

export default function LandingPage() {
    // Animation configurations remain similar but now use the new import
    const containerAnimation = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const textAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
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
            
            {/* Content Container - Now using 'm' instead of 'motion' */}
            <m.div
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
                className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-between p-12 text-white z-10"
            >
                <m.div variants={textAnimation} className="space-y-6">
                    <m.div variants={textAnimation} className="text-sm tracking-wider">
                        ISSUE 42 • OCTOBER 2023
                    </m.div>
                    
                    <m.h1 variants={textAnimation} className="text-6xl font-bold">
                        <span className="text-yellow-400">LE</span> MAGAZINE
                    </m.h1>
                    
                    <div className="space-y-4">
                        <m.h2 variants={textAnimation} className="text-3xl font-light">
                            OCTOBER EDITION
                        </m.h2>
                        <m.h3 variants={textAnimation} className="text-4xl font-bold">
                            YOUNG PROFESSIONAL LIFESTYLE
                        </m.h3>
                    </div>
                    
                    <m.p variants={textAnimation} className="text-lg font-light max-w-md">
                        Discover the latest trends, career advice, and lifestyle tips
                        for the modern young professional. From fashion to finance,
                        we've got you covered.
                    </m.p>
                </m.div>

                <m.div variants={textAnimation} className="space-y-8">
                    {/* Footer content remains the same, just change motion. to m. */}
                </m.div>
            </m.div>
        </div>
    );
}