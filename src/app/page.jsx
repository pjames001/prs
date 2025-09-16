import Charts from "@/components/Charts"
import PagesHeaders from "@/components/PagesHeaders"
import ParallaxSection from "@/components/ParallaxScroll"
import Testimonials from "@/components/Testimonials"

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
      <PagesHeaders image='/header.jpg' text='MJ Maguire And Associates' />
      <main className="min-h-screen w-full overflow-x-hidden">
        <Charts />
        <section className="w-full min-h-screen bg-gradient-to-b from-blue-accent to-transparent to-10%">
          <ParallaxSection />
          <Testimonials />
        </section>
      </main>
    </>
  )
}

export default page