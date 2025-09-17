import PagesHeaders from '@/components/PagesHeaders'
import Services from '@/components/Services'

export const metadata = {
  title: 'MJ Maguire And Associates | Services',
  description: 'Learn more about our services',
  keywords: ['debt collection agency', 'company that collect debts', 'commercial collection', 'consumer collection', 'individual collection', 'legal collection', 'medical collection'],
  openGraph: {
    title: 'MJ Maguire And Associates | Services',
    description: 'Learn more about our services',
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
      <PagesHeaders image='/services.jpg' text='Services' description='That Satisfy Your Needs, Provided By Us' />
      <Services />
    </main>
  )
}

export default page