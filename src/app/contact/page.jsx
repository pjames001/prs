import Form from "@/components/Form"
import PagesHeaders from "@/components/PagesHeaders"

export const metadata = {
  title: 'MJ Maguire And Associates | Contact Us',
  description: 'Contact us and let us cooperate',
  keywords: ['debt collection agency', 'company that collect debts', 'commercial collection', 'consumer collection', 'individual collection', 'legal collection', 'medical collection'],
  openGraph: {
    title: 'MJ Maguire And Associates | Contact Us',
    description: 'Contact us and let us cooperate',
    url: 'https://mj.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <div>
      <PagesHeaders image='/contact.jpg' text='Contact Us' description='So We Can Help You Collecting What is Yours.' />
      <Form />
    </div>
  )
}

export default page