import React from 'react';
import Image from 'next/image';

const Daniel = () => {
    return (
        <div id='daniel' className='bg-[url("/images/bg-pattern-quotation.svg")] bg-[hsl(263,55%,52%)]  bg-no-repeat rounded-xl h-auto w-full p-6' >
            <div className='flex gap-x-5 items-center'>
                <div  className='bg-white rounded-full w-[42px] h-[42px] flex flex-col items-center justify-center'>
                    <Image src="/images/image-daniel.jpg" alt='daniel image' width={40} height={40} className='rounded-full' />
                </div>
                <div>
                    <p className='text-white'>Daniel Clifford</p>
                    <p className='text-[hsla(0,0%,81%,0.7)]'>Verified Graduate</p>
                </div>
                
            </div>

            <div className='mt-4 text-white font-semibold text-left'>
                <p className='text-xl'>I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                    in the company I joined. I honestly feel I got every penny’s worth.
                </p>
                
                <p className='mt-6 text-sm text-[hsla(0,0%,81%,0.7)]'>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                    transition and have heard some people who had an amazing experience here. I signed up 
                    for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                    The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
                </p>
            </div>
        </div>

    );
};

export default Daniel;