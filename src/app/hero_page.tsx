import Image from "next/image";
import HeroBg from '../images/hero_bg.png';
import CustomButton from '../ui/CustomButton';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image
          src={HeroBg}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex items-end justify-start p-4">
          <div className="bg-black bg-opacity-50 rounded-[30px] p-4">
            <CustomButton
              title="Join Us Today"
              btnType="button"
              containerStyles="text-white bg-opacity-0 min-w-[130px] py-2 px-4"
            />
          </div>
        </div>
      </div>

      {/* Focus Section */}
      <section className="w-full max-w-5xl py-12">
        <h2 className="text-center text-4xl font-semibold text-black mb-8">
          Our Focus
        </h2>
        <p>Learn more about our initiatives, stories of hope, and ways you can get involved. 
          Whether you choose to donate, volunteer, or spread awareness, your contribution 
          plays a vital role in driving positive change. Join us on this journey of compassion 
          and empowerment as we work towards a better tomorrow, one step at a time.</p>
        <div className="flex justify-center space-x-4">
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
              className="rounded-lg"
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
    </main>
  );
}
