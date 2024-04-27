import React from 'react';
import Image from 'next/image';

const Jonathan = () => {
    return (
        <div id="jonathan" className='rounded-xl bg-[hsl(217,19%,35%)] h-auto w-full p-6'>
            <div className='flex gap-x-5 items-center'>
                <div  className='bg-white rounded-full w-[42px] h-[42px] flex flex-col items-center justify-center'>
                    <Image src="/images/image-jonathan.jpg" alt='johnathan image' width={40} height={40} className='rounded-full' />
                </div>

                <div>
                    <p className='text-white'>Jonathan Walters</p>
                    <p className='text-[hsla(0,0%,81%,0.7)]'>Verified Graduate</p>
                </div>
            </div>

            <div className='mt-4 text-white font-semibold text-left'>
                <p className=' text-xl'>The team was very supportive and kept me motivated
                </p>
                
                <p className='mt-6 text-sm text-[hsla(0,0%,81%,0.7)]'>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                    for a big company. This was one of the best investments I’ve made in myself. ”
                </p>
            </div>
        </div>
    );
};

export default Jonathan;