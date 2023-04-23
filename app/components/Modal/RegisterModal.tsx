"use client"
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import registerModalStore from "@/app/hooks/useRegisterModal";
import FormRow from "../FormRow";
import Modal from "./Modal";

const RegisterModal = () => {
    const registerModal = registerModalStore()

    const { register, handleSubmit, formState: { errors }} = useForm<FieldValues>({ defaultValues : {
        name: "",
        email: "",
        password: ""
    }})

    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        console.log(data);
        console.log(errors);
        
    }

    const bodyContent = (
        <>
        <FormRow label="name" type='text' title="Name" register={register} errors={errors} required/>
        <FormRow label="email" type='email' title="Email" register={register} errors={errors} required/>
        <FormRow label="password" type='password' title="Password" register={register} errors={errors} required/>
        </>
    )

    if(!registerModal.isOpen) return null

    return ( <Modal
                title="Create Account"
                onClose={registerModal.onClose}
                onOpen={registerModal.onOpen}
                handleSubmit={handleSubmit(onSubmit)} 
                actionLabel="Sign Up"
                actionLabelColor="cream"
                body={bodyContent}
                isOpen={registerModal.isOpen}
                   /> );
}
 
export default RegisterModal;