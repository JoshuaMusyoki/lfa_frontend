import Image from "next/image";
import AfricaCollegeImg from '../../../public/images/africa-collage.png';

export default function DonateSection() {
    return (
        <section className="relative rounded-[20px] flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white text-black">
            <div className="md:w-1/2 w-full p-8 bg-white text-black rounded-[10px] shadow-lg">
            <h1 className="text-4xl font-bold">
                Make a Difference in the Lives of African Communities
            </h1>
            <p mt-4 text-lg>
                Your contribution can help provide essential resources and support to those in need across Africa. Every donation counts.
            </p>

            <button className="mt-6 px-6 py-3 bg-primary-blue text-white rounded-full">
                Donate
            </button>
          </div>
          <div className="relative w-1/2 h-64">
          <Image
          src="/images/africa-collage.png" 
          alt="Africa Collage"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </section>
    )
}