"use client"

import { IoMdClose } from 'react-icons/io'
import Button from '../Button'
import { ReactElement, useCallback, useEffect, useState } from 'react'

interface ModalProps {
    title?: string
    onClose: ()=>void
    onOpen: ()=>void
    handleSubmit: ()=>void
    actionLabel: string
    actionLabelColor: string
    body: ReactElement
    isOpen?: boolean
}

const Modal: React.FC<ModalProps> = ({title, onClose, handleSubmit, actionLabel, actionLabelColor, body, isOpen}) => {
    
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        if(isOpen){
            setShowModal(true)
        }
    },[isOpen])

    const closeModal = useCallback(()=>{
        setShowModal(false)
        
        setTimeout(()=>{
            onClose()
        },300)

    },[onClose])
    

    return ( 
        <div className={`
        ${isOpen ? 'block': 'hidden'}
        z-50 
        absolute 
        inset-0 
        bg-neutral-800
        min-h-screen 
        bg-opacity-80`}>
            <div className="grid h-full place-content-center ">
                <form 
                onSubmit={handleSubmit}
                className={`
                ${showModal ? 'translate-y-0' : 'translate-y-full'}
                ${showModal ? 'opacity-100' : 'opacity-0'}
                relative 
                min-w-[90vw] 
                md:min-w-[70vw] 
                lg:min-w-[50vw] 
                bg-white 
                h-full
                text-black 
                rounded-md 
                p-6
                transition
                ease-in-out
                duration-300`}>
                    <button type="button" onClick={closeModal} className="hover:bg-opacity-80 transition top-3 left-3 text-white rounded-full p-2 bg-[#D99712]">
                        <IoMdClose size={24}/>
                    </button>
                    <h3 className="text-center font-bold text-2xl mb-8">{title}</h3>
                    <hr className="mb-8"/>
                    {body}
                    <div className="text-center">
                        <Button label={actionLabel} color={actionLabelColor} onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div> );
}
 
export default Modal;