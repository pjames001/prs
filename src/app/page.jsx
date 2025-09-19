import Charts from "@/components/Charts"
import PagesHeaders from "@/components/PagesHeaders"
import ParallaxSection from "@/components/ParallaxScroll"
import Testimonials from "@/components/Testimonials"
import YearsOfExperience from "@/components/YearsOfExperience";
import img from '../../public/img6.jpg'
import Button from "@/components/Button";

export const metadata = {
  title: 'MJ Maguire And Associates',
  description: 'Debt collection agency that works accross the United States',
  keywords: ['debt collection agency', 'company that collect debts', 'commercial collection', 'consumer collection', 'individual collection', 'legal collection', 'medical collection'],
  openGraph: {
    title: 'MJ Maguire And Associates',
    description: 'Debt collection agency that works accross the United States',
    url: 'https://mj.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <>
      <PagesHeaders image='/header.jpg' text='MJ Maguire And Associates' description='' />
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* <Charts /> */}
        <YearsOfExperience 
          title='We Collect What is Overdue' 
          text1='Welcome to MJ Maguire And Associates, your dedicated partner in professional debt recovery.
          We specialize in effective and ethical solutions for all your debt collection needs. Our services include skilled negotiation to recover outstanding debts, meticulous compliance and client-locating services to ensure a smooth, legal process, and access to a network of contracted attorneys for legal action, when necessary.'

          text3='Discover how we can help you efficiently recover your outstanding debts and secure your financial future.'
          image={img} />
        <section className="w-full min-h-screen bg-gradient-to-b from-blue-accent to-transparent to-50%">
          <ParallaxSection />
        </section>

        <section className="w-full min-h-[50vh] text-center py-10" style={{backgroundImage: 'url(/img7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          <div className="bg-black/20 backdrop-blur-sm max-w-3xl mx-auto py-10 flex flex-col justify-center items-center gap-10 rounded-xl">
            <h1 className="text-[#fff] md:text-8xl text-5xl text-shadow-lg font-extrabold ">0 Initial Fees</h1>
            <p className="text-[#fff] text-2xl">Nothing to be charged for if we do not collect!</p>
            <Button text='Learn More' link='/contact' />
          </div>
        </section>

        <section>
          <Testimonials />
        </section>
      </main>
    </>
  )
}

export default page