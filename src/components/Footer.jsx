import Image from 'next/image'
import logo from '../../public/logo-crop.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-neutral-600 to-dark-blue py-20 px-10">
      <div className='max-w-7xl h-full mx-auto mb-28 grid lg:grid-cols-2 grid-cols-1 md:justify-items-center items-start'>
        <div>
          <h2 className='text-white text-4xl font-semibold mb-8'>Navigate</h2>
          <ul>
            <li className='text-dark-text text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/about'>About</Link>
            </li>
            <li className='text-dark-text text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/services'>Services</Link>
            </li>
            <li className='text-dark-text text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-white text-4xl font-semibold mb-8'>Services</h2>
          <ul>
            <li className='text-dark-text text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/commercial-collection'>Commercial Collection</Link>
            </li>
            <li className='text-dark-text text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/consumer-collection'>Consumer Collection</Link>
            </li>
            <li className='text-dark-text text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/legal-collection'>Legal Collection</Link>
            </li>
            <li className='text-dark-text text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/medical-collection'>Medical Collection</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col justify-between items-center text-dark-text'>
        <Image src={logo} alt='logo' width={400} />
        <p className='my-4 text-center'>&copy;{new Date().getFullYear()} Prime Recovery System. All Rights Reserved.</p>

        <div className='text-dark-text underline flex gap-4'>
          <Link href='/terms-of-service'>Terms of Service</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer