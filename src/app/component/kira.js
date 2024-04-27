import React from 'react';
import Image from 'next/image';

const Kira = () => {
    return (
        <div id='kira' className='rounded-xl bg-white h-auto w-full p-6'>
            <div className='flex gap-x-5 items-center'>
                <div  className='bg-white rounded-full w-[42px] h-[42px] flex flex-col items-center justify-center'>
                    <Image src="/images/image-kira.jpg" alt='kira image' width={40} height={40} className='rounded-full' />
                </div>

                <div>
                    <p className='text-black'>Kira Whittle</p>
                    <p className='text-[hsla(219,29%,14%,0.6)]'>Verified Graduate</p>
                </div>
            </div>

            <div className='mt-4 text-white font-semibold text-left'>
                <p className=' text-xl text-black'>Such a life-changing experience. Highly recommended!
                </p>
                
                <p className='mt-6 text-sm text-[hsla(219,29%,14%,0.6)]'>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                        100% recommend! ”
                </p>
            </div>
        </div>
    );
};

export default Kira;