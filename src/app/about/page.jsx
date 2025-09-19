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
      <PagesHeaders image='/about.jpg' text='About Us' description='The Company That Grant You Back Your Financial Freedom' />
      <YearsOfExperience title='With Over Than 40 Years of Experience' text1="We understand that every client's situation is unique, which is why we focus on building strong, lasting relationships while providing customized solutions. Our pride is in not only recovering past-due accounts but also preserving the valuable client relationships you've worked so hard to build." image={img} />
      <Mission />
    </main>
  )
}

export default page