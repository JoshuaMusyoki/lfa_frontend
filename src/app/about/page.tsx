"use client"
import Image from 'next/image';
import HeroBg from '../../../public/images/hero_bg.png';
import OurMission from '../../../public/images/OurMission.png';
import CustomButton from '../ui/CustomButton';
import styles from '../styles/About.module.css';

import DonateSection from '../donate/page';
import ServicesSection from '../ourservices/service';
import ProjectBasedLearning from '../mission/ourmission';
import Events from '../events/page';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
    <div className={`${styles.container} flex flex-col items-center text-center`}>
      {/* <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className='max-w-3xl mb-12 text-lg'>
        Our organization is committed to empowering communities through education, advocacy, and 
        action.</p> */}

        <div className="relative w-full h-64 md:h-96 mb-12">
        <Image
          src={HeroBg}
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex items-end justify-start p-4  p-4 md:p-6">
          <div className="bg-blue-300 bg-opacity-100 rounded-[30px] py-2 px-6 h-[50px]">
            <CustomButton
              title="Join Us Today"
              btnType="button"
              containerStyles="text-white bg-opacity-0 min-w-[80px] py-4 px-4 flex items-center justify-center"
              />
          </div>
        </div>
      </div>

      <div className='w-full px-4 py-8 md:px-12 md:py-16 bg-white rounded-lg shadow-lg'>
        <DonateSection />
      </div>

      <div className='mt-8 md:mt-16'>
        <ServicesSection />
      </div>

      {/* Our Mission Section */}
      <div className='mt-8 md:mt-16'>
      <h2 className={styles.title}>Our Mission</h2>
        <ProjectBasedLearning />
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2 className='text-2xl font-semibold'>Our Mission</h2>
          <p className='text-lg mt-2'>We strive to create a sustainable future for all.</p>
        </div>
        <div className={styles.card}>
          <h2 className='text-2xl font-semibold'>Our Vision</h2>
          <p className='text-lg mt-2'>
            To bring people together, fostering collaboration to address societal challenges and 
            create positive change. We believe we can overcome barriers, achieve sustainable
             development and build a more equitable world.
          </p>
        </div>
      </div>

        {/* Our Events Section */}
      <div className='mt-8 md:mt-16'>
      <h2 className={styles.title}>Our Events</h2>
        <Events />
      </div>
    </div>
    </main>
  );
}
