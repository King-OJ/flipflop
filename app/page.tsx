'use client'
import Image from 'next/image'

import Button from './components/Button'
import registerModalStore from './hooks/useRegisterModal'
import RegisterModal from './components/Modal/RegisterModal'
import LoginModal from './components/Modal/LoginModal'
import loginModalStore from './hooks/useLoginModal'


const Home = ()=>{

const registerModal = registerModalStore()
const loginModal = loginModalStore()

  return (
    <main className={`page min-h-screen relative bg-[url('/images/landingImg.jpg')] bg-cover bg-center bg-no-repeat`}>
      <div className=" absolute inset-0 bg-[#6C82E3] bg-opacity-60"></div>
      {/* Modal */}
      <RegisterModal/>
      <LoginModal />

      <div className="relative py-6 container min-h-screen mx-auto grid place-content-center">
       <div className="flex flex-col justify-center">
        {/* Welcome Text */}
          <div className="space-y-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold">Welcome To <span className="text-[#3357AE]">Flip</span><span className="text-[#D99712]">Flop</span></h1>
            <div className=" tracking-wide text-lg md:text-xl max-w-xl mx-auto">A modern social media application built with the latest next13 framework and the best react and nextJS practices to showcase CRUD functionalities for educational purpose.</div>
            <div>
              <Button label="About the Author" onClick={()=>{}} gradient link href='www.twitter.com' />
            </div>
          </div>

        {/* Sign Up */}
        <div className='mt-16 flex flex-col items-center'>
          <Image  
          alt='chatting image'
          src='/images/chatImg.svg'
          width="600"
          height="600"
          className='h-96'
          
          priority
         />
         <div className="mt-10 flex items-center justify-center gap-6">
          <Button onClick={registerModal.onOpen} label="Create Account" color='blue' />
          <Button onClick={loginModal.onOpen} label="Log In" color='cream' />
         </div>
        </div>

       </div>
      </div>
    </main>
  )
}

export default Home
