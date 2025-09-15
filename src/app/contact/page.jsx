import Form from "@/components/Form"
import PagesHeaders from "@/components/PagesHeaders"

const page = () => {
  return (
    <div>
      <PagesHeaders image='/contact.jpg' text='Contact Us' description='So We Can Help You Collecting What is Yours.' />
      <Form />
    </div>
  )
}

export default page