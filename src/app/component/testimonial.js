import React from 'react';
import Image from 'next/image';
import Daniel from './daniel';
import Jonathan from './jonathan';
import Jeanette from './jeanette';
import Patrick from './patrick';
import Kira from './kira';

const Testimonial = () => {
    return (
        <section id='testimonial' className=' w-full max-w-[1200px] px-10 grid grid-cols-1 md:gap-x-6  gap-y-6 '>
            <Daniel  className="" />
            <Jonathan  className="" />
            <Jeanette  className="" />
            <Patrick  className="" />
            <Kira  className="" />
        </section>
    );
};

export default Testimonial;