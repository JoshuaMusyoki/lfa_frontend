"use client"
import Image from "next/image";
import HeroBg from '../../public/images/hero_bg.png';
import CustomButton from './ui/CustomButton';
import image1 from '../../public/images/image1.png';
import image2 from '../../public/images/image2.png';
import image3 from '../../public/images/image3.png';
import image4 from '../../public/images/image4.png';

import LatestPost from "./socials/twitter_posts";
import LatestTweets from "./socials/latest-tweets";
import styles from './styles/Home.module.css';
import JoinCommunity from "./joinus/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image
          src={HeroBg}
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex items-end justify-start p-4">
          <div className="bg-blue-300 bg-opacity-100 rounded-[30px] py-0 px-4 h-[50px]">
            <CustomButton
              title="Join Us Today"
              btnType="button"
              containerStyles="text-white bg-opacity-0 min-w-[80px] py-4 px-4 flex items-center justify-center"
              />
          </div>
        </div>
      </div>
      <div className={styles.container}>
      {/* Focus Section */}
      <section className="w-full max-w-5xl py-12">
        <h2 className="text-center text-4xl font-semibold text-black mb-8">
          Our Focus
        </h2>
        <p>Learn more about our initiatives, stories of hope, and ways you can get involved. 
          Whether you choose to donate, volunteer, or spread awareness, your contribution 
          plays a vital role in driving positive change. Join us on this journey of compassion 
          and empowerment as we work towards a bett          er tomorrow, one step at a time.</p>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-1/4 p-2">
            <Image          
              src={image1}
              alt="Focus Image 1"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg"          
            />
          </div>
          <div className="w-1/4 p-2">
            <Image
              src={image2}
              alt="Focus Image 2"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-1/4 p-2">
            <Image
              src={image3}
              alt="Focus Image 3"
              layout="responsive"          
              width={500}
              height={500}
              className="rounded-[20px]"
            />
          </div>
          <div className="w-1/4 p-2">
            <Image
              src={image4}
              alt="Focus Image 4"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.ourStorySection}>
        <h2 className={styles.sectionTitle}>OUR STORY</h2>
        <p>Make A Difference is a dynamic and dedicated foundation committed to fostering 
            sustainable development, empowering communities, and igniting positive change across 
            the African continent. With a profound belief in the potential of Africa and its people,
             Make A Difference strives to be a catalyst for progress, innovation, and 
             transformation.</p>
        <div className={styles.ourStoryContent}>
          <div className={styles.storyImage}>
            <Image 
              src={image1} 
              alt="Our Story Image" 
              width={400}
              height={400}
              className={styles.roundImage}
            />
          </div>
          
          <div className={styles.storyCards}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.storyCard}>
                <h3>Integrity</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.donateButton}>
          <button>Donate</button>
        </div>
      </section>

      {/* Join the Community Section */}
      <div className="bg-[#04677B] p-10 flex justify-between items-center rounded-lg">
  <div className="text-white">
    <p className="text-sm">Sign Up for Newsletter</p>
    <h2 className="text-3xl font-bold">JOIN THE COMMUNITY</h2>
  </div>
  <div className="flex items-center bg-transparent border border-white rounded-full overflow-hidden">
    <input
      type="email"
      placeholder="Enter your email here..."
      className="p-3 text-white bg-transparent outline-none"
    />
    <button className="bg-white text-[#04677B] font-semibold px-6 py-3 rounded-full">
      SUBMIT
    </button>
  </div>
</div>


      {/* Content Section */}
      <section className="z-10 w-full max-w-5xl py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Empower Communities</h3>
            <p>We provide resources and support to empower individuals and families.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Education Programs</h3>
            <p>Our educational initiatives are designed to enhance skills and knowledge.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Advocacy & Support</h3>
            <p>We advocate for policies that promote equality and provide essential support services.</p>
          </div>
        </div>
      </section>
      <LatestPost />
      {/* <LatestTweets /> */}
      </div>
    </main>
  );
}
