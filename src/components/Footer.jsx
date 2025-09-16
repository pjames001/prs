import Image from 'next/image'
import logo from '../../public/logo-png.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-dark-blue to-white p-10">
      <div className='max-w-7xl h-full mx-auto mb-8 grid lg:grid-cols-2 grid-cols-1 md:justify-items-center items-start'>
        <div>
          <h2 className='text-gray-700 text-4xl font-semibold mb-8'>Navigate</h2>
          <ul>
            <li className='text-[#fff] text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/about'>About</Link>
            </li>
            <li className='text-[#fff] text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/services'>Services</Link>
            </li>
            <li className='text-[#fff] text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-gray-700 text-4xl font-semibold mb-8'>Services</h2>
          <ul>
            <li className='text-[#fff] text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/services'>Commercial Collection</Link>
            </li>
            <li className='text-[#fff] text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/services'>Consumer Collection</Link>
            </li>
            <li className='text-[#fff] text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/services'>Legal Collection</Link>
            </li>
            <li className='text-[#fff] text-2xl font-light mb-8 hover:text-white transition duration-300 ease'>
              <Link href='/services'>Medical Collection</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col justify-between items-center text-dark-text'>
        <Image src={logo} alt='logo' width={200} className='invert' />
        <p className='my-4 text-center'>&copy;{new Date().getFullYear()} Prime Recovery System. All Rights Reserved.</p>

      </div>
    </footer>
  )
}

export default Footer