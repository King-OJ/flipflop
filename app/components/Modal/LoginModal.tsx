"use client"
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import FormRow from "../FormRow";
import Modal from "./Modal";
import loginModalStore from '@/app/hooks/useLoginModal';

const RegisterModal = () => {
    const loginModal = loginModalStore()

    const { register, handleSubmit, formState: { errors }} = useForm<FieldValues>({ defaultValues : {
        email: "",
        password: ""
    }})

    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        console.log(data);
        console.log(errors);
        
    }

    const bodyContent = (
        <>
        <FormRow label="email" type='email' title="Email" register={register} errors={errors} required/>
        <FormRow label="password" type='password' title="Password" register={register} errors={errors} required/>
        </>
    )

    if(!loginModal.isOpen) return null

    return ( <Modal
                title="Login Account"
                onClose={loginModal.onClose}
                onOpen={loginModal.onOpen}
                handleSubmit={handleSubmit(onSubmit)} 
                actionLabel="Sign In"
                actionLabelColor="blue"
                body={bodyContent}
                isOpen={loginModal.isOpen}
                   /> );
}
 
export default RegisterModal;