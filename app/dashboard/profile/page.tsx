"use client"

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import FormRow from "@/app/components/FormRow";
import PageHeader from "@/app/components/PageHeader";
import Button from '@/app/components/Button';

const Profile = () => {

    const { register, handleSubmit, formState: { errors }} = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            location: "Abuja"
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        console.log(data);
        
    }

    return ( 
    <section className="m-6 w-full" >
        <PageHeader title="My Profile" />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 bg-white w-[60%] mx-auto h-full p-4 text-center shadow-md">
            <FormRow label="name" title="Name" type="text" register={register} required errors={errors} />
            <FormRow label="email" title="Email" type="emai" register={register} required errors={errors} />
            <FormRow label="location" title="Location" type="text" register={register} required errors={errors} />
            <Button onClick={handleSubmit(onSubmit)} label="Update Profile" color='blue'/>
        </form>

        <div className="mt-20 space-y-4 flex flex-col items-center">
            <PageHeader title="Other Profile Details" />
            <ul className="mt-10 space-y-4">
                <li className="flex items-center space-x-6 tracking-widest text-2xl">
                    <div className='font-semibold'>Jobs Applied For: </div> <span className="font-bold text-[#3357AE]">0</span>
                </li>
                <li className="flex items-center space-x-6 tracking-widest text-2xl">
                    <div className='font-semibold'>Jobs Rejected: </div> <span className="font-bold text-[#3357AE]">0</span>
                </li>
                <li className="flex items-center space-x-6 tracking-widest text-2xl">
                    <div className='font-semibold'>Jobs Accepted: </div> <span className="font-bold text-[#3357AE]">23</span>
                </li>
                <li className="flex items-center space-x-6 tracking-widest text-2xl">
                    <div className='font-semibold'>Jobs Given By You: </div> <span className="font-bold text-[#3357AE]">30</span>
                </li>
            </ul>
        </div>
    </section> 
    );
}
 
export default Profile;