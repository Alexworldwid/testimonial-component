import React from 'react';
import Image from 'next/image';

const Patrick = () => {
    return (
        <div id='patrick' className='rounded-xl bg-[hsl(219,29%,14%)] h-auto w-full p-6'>
            <div className='flex gap-x-5 items-center'>
                <div  className='bg-white rounded-full w-[42px] h-[42px] flex flex-col items-center justify-center'>
                    <Image src="/images/image-patrick.jpg" alt='patrick image' width={40} height={40} className='rounded-full' />
                </div>

                <div>
                    <p className='text-white'>Patrick Abrams</p>
                    <p className='text-[hsla(0,0%,81%,0.7)]'>Verified Graduate</p>
                </div>
            </div>

            <div className='mt-4 text-white font-semibold text-left'>
                <p className=' text-xl'>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                    learning from their experiences was easy.
                </p>
                
                <p className='mt-6 text-sm text-[hsla(0,0%,81%,0.7)]'>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                    gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                    junior developer. The standard is above the rest. You will get the personal attention you need from 
                    an incredible community of smart and amazing people. ”
                </p>
            </div>
        </div>
    );
};

export default Patrick;