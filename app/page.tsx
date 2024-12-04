'use client';
import { animate, spring, stagger } from 'motion';
import { createMotionElement } from '@motionone/dom';
import Image from 'next/image';

// Create motion components - add this right after imports
const createMotion = (element: keyof HTMLElementTagNameMap) => {
  return createMotionElement(element, {
    transforms: ['translateX', 'translateY', 'scale', 'rotate'],
    properties: ['opacity']
  });
};

// Create the motion components we'll use
const MotionDiv = createMotion('div');
const MotionH1 = createMotion('h1');
const MotionH2 = createMotion('h2');
const MotionH3 = createMotion('h3');
const MotionP = createMotion('p');

export default function LandingPage() {
    // Update the animation configurations to work with the new system
    const containerAnimation = {
        initial: { opacity: 0, x: 100 },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.8,
                ease: spring(),
                delay: stagger(0.1)
            }
        }
    };

    const textAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: spring()
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
            
            {/* Content Container - Now using MotionDiv instead of m.div */}
            <MotionDiv
                initial={containerAnimation.initial}
                animate={containerAnimation.animate}
                className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-between p-12 text-white z-10"
            >
                <MotionDiv 
                    initial={textAnimation.initial}
                    animate={textAnimation.animate}
                    className="space-y-6"
                >
                    <MotionDiv 
                        initial={textAnimation.initial}
                        animate={textAnimation.animate}
                        className="text-sm tracking-wider"
                    >
                        ISSUE 42 • OCTOBER 2023
                    </MotionDiv>
                    
                    <MotionH1 
                        initial={textAnimation.initial}
                        animate={textAnimation.animate}
                        className="text-6xl font-bold"
                    >
                        <span className="text-yellow-400">LE</span> MAGAZINE
                    </MotionH1>
                    
                    <div className="space-y-4">
                        <MotionH2 
                            initial={textAnimation.initial}
                            animate={textAnimation.animate}
                            className="text-3xl font-light"
                        >
                            OCTOBER EDITION
                        </MotionH2>
                        <MotionH3 
                            initial={textAnimation.initial}
                            animate={textAnimation.animate}
                            className="text-4xl font-bold"
                        >
                            YOUNG PROFESSIONAL LIFESTYLE
                        </MotionH3>
                    </div>
                    
                    <MotionP 
                        initial={textAnimation.initial}
                        animate={textAnimation.animate}
                        className="text-lg font-light max-w-md"
                    >
                        Discover the latest trends, career advice, and lifestyle tips
                        for the modern young professional. From fashion to finance,
                        we've got you covered.
                    </MotionP>
                </MotionDiv>

                <MotionDiv 
                    initial={textAnimation.initial}
                    animate={textAnimation.animate}
                    className="space-y-8"
                >
                    {/* Footer content remains the same */}
                </MotionDiv>
            </MotionDiv>
        </div>
    );
}