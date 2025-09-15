import Button from "@/components/Button"
import Charts from "@/components/Charts"
import DarkVeil from "@/components/DarkVeil"
import ParallaxSection from "@/components/ParallaxScroll"
import ShinyText from "@/components/ShinyText"
import Testimonials from "@/components/Testimonials"


const page = () => {
  return (
    <>
      <header className="w-full min-h-screen relative">
        <DarkVeil speed={3} />

        <div className="absolute top-1/2 left-1/2 z-40 -translate-1/2 w-full flex flex-col justify-center items-center gap-10">
          {/* <h1 className="absolute top-1/2 left-1/2 -translate-1/2 w-full text-center text-transparent text-9xl font-bold bg-gradient-to-t from-blue-accent to-gray-400/10 bg-clip-text">Prime Recovery System</h1> */}
          <ShinyText
            text="Prime Recovery System" 
            disabled={false}
            speed={7} 
            className='w-full text-center md:text-9xl text-5xl md:px-0 px-6 font-bold'
          />
          <h2 className="mt-10 md:text-4xl text-xl text-dark-text text-center">Your Debt Collection Has Never Been Easier</h2>
          <Button text='Start Collecting Now' link='/contact' className="mx-auto" />
        </div>

        <div className="absolute md:bottom-16 bottom-10 left-1/2 -translate-x-1/2 flex md:flex-row flex-col justify-center items-center md:gap-16 gap-2 text-light text-white text-center">
          <span className="md:text-lg text-sm underline">No Initial Payments</span>
          <span className="md:text-lg text-sm underline">Debts Age of Up To 10 Years</span>
          <span className="md:text-lg text-sm underline">30 Years of Experience</span>
        </div>
      </header>

      <main className="min-h-screen w-full overflow-x-hidden">
        <Charts />

        <section className="w-full min-h-screen bg-radial-[at_15%_25%] from-blue-accent/50 from-1% to-zinc-900">
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