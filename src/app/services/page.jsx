import PagesHeaders from '@/components/PagesHeaders'
import Services from '@/components/Services'


const page = () => {
  return (
    <main>
      <PagesHeaders image='/services.jpg' text='Services' description='That Satisfy Your Needs' />
      <Services />
    </main>
  )
}

export default page