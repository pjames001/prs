import Charts from "@/components/Charts"
import PagesHeaders from "@/components/PagesHeaders"
import ParallaxSection from "@/components/ParallaxScroll"
import Testimonials from "@/components/Testimonials"


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

        <section>

        </section>
      </main>
    </>
  )
}

export default page