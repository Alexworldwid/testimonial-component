import React from 'react';
import Image from 'next/image';

const Jeanette = () => {
    return (
        <div id='jeanette' className='rounded-xl bg-white h-auto w-full p-6'>
            <div className='flex gap-x-5 items-center'>
                    <div  className='bg-white rounded-full w-[42px] h-[42px] flex flex-col items-center justify-center'>
                        <Image src="/images/image-jeanette.jpg" alt='jeanette image' width={40} height={40} className='rounded-full' />
                    </div>

                    <div>
                        <p className='text-black'>Jeanette Harmon</p>
                        <p className='text-[hsla(219,29%,14%,0.6)]'>Verified Graduate</p>
                    </div>
            </div>

            <div className='mt-4 text-white font-semibold text-left'>
                <p className=' text-xl text-black'>An overall wonderful and rewarding experience
                </p>
                
                <p className='mt-6 text-sm text-[hsla(219,29%,14%,0.7)]'>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                    while doing something I love. ”
                </p>
            </div>
        </div>
    );
};

export default Jeanette;