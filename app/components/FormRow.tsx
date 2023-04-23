"use client"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface FormRowProps{
    label: string
    type: string
    title: string
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    required?: boolean
}

const FormRow: React.FC<FormRowProps> = ({title, label, type, register, errors, required}) => {
    return ( 
    <div className="mb-12 relative">
        <input 
        type={type} 
        id={label}
        {...register(label, { required })} 
        className={`
        block 
        rounded-t-lg 
        px-2.5 
        pb-2.5 
        pt-6 
        w-full
        text-sm 
        md:text-lg 
        text-gray-900 
        bg-gray-50 
        border-0 
        border-b-2 
        border-gray-300 
        appearance-none 
        focus:pt-8 
        focus:outline-none 
        focus:ring-0 
        focus:border-[#6C82E3] 
        peer
        ${errors[label] ? 'border border-rose-500': 'border-0'}
        `} 
        placeholder=" " 
        />
        <label htmlFor={label} className="
        absolute 
        md:text-lg
        text-sm
        text-black 
        dark:text-gray-400 
        duration-300 
        transform 
        -translate-y-4 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-2.5 
        peer-focus:text-[#6C82E3] 
        peer-focus:dark:text-blue-500 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{title}</label>
    </div> );
}
 
export default FormRow;