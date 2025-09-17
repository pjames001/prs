import Mission from "@/components/Mission"
import PagesHeaders from "@/components/PagesHeaders"
import YearsOfExperience from "@/components/YearsOfExperience"
import img from '../../../public/img5.jpg'

export const metadata = {
  title: 'MJ Maguire And Associates | About Us',
  description: 'Learn more about our company and mission',
  keywords: ['debt collection agency', 'company that collect debts', 'commercial collection', 'consumer collection', 'individual collection', 'legal collection', 'medical collection'],
  openGraph: {
    title: 'MJ Maguire And Associates | About Us',
    description: 'Learn more about our company and mission',
    url: 'https://mj.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <main>
      <PagesHeaders image='/about.jpg' text='About' description='The Company That Grant You Back Your Financial Freedom' />
      <section className="max-w-7xl min-h-[50vh] mx-auto flex md:flex-row flex-col items-center justify-center gap-8 py-10 px-4">
        <div className="flex flex-col items-center gap-2 border border-gray-700 py-4 px-8 shadow-sm shadow-black">
          <h3 className="text-transparent bg-gradient-to-t from-gray-700 to-white/20 bg-clip-text md:text-3xl/14 text-xl/14 font-bold h-max">+300 Agents</h3>
          <p className="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea minus quia non. Est officiis non distinctio ipsa. Tempore at cumque asperiores itaque, quas ipsam.</p>
        </div>

        <div className="flex flex-col items-center gap-2 border border-gray-700 py-4 px-8 shadow-sm shadow-black">
          <h3 className="text-transparent bg-gradient-to-t from-gray-700 to-white/20 bg-clip-text md:text-3xl/14 text-xl/14 font-bold h-max">100% Success Rate</h3>
          <p className="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea minus quia non. Est officiis non distinctio ipsa. Tempore at cumque asperiores itaque, quas ipsam.</p>
        </div>

        <div className="flex flex-col items-center gap-2 border border-gray-700 py-4 px-8 shadow-sm shadow-black">
          <h3 className="text-transparent bg-gradient-to-t from-gray-700 to-white/20 bg-clip-text md:text-3xl/14 text-xl/14 font-bold h-max">+20 Elite Advisor</h3>
          <p className="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea minus quia non. Est officiis non distinctio ipsa. Tempore at cumque asperiores itaque, quas ipsam.</p>
        </div>
      </section>

      <h1 className="text-center text-blue-accent md:text-6xl text-3xl font-bold">Because We Are Simply The Best ..</h1>  
      <YearsOfExperience title='With Over Than 40 Years of Experience' text1="We understand that every client's situation is unique, which is why we focus on building strong, lasting relationships while providing customized solutions. Our pride is in not only recovering past-due accounts but also preserving the valuable client relationships you've worked so hard to build." image={img} />
      <Mission />
    </main>
  )
}

export default page