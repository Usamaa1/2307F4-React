import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidationByReactFormHook = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const submitHandler = (data) => {
        console.log(data)
    }

    console.log("User Name", watch("userName"))
    console.log("Email", watch("email"))


    return (
        <>


            <div className="w-full md:w-1/2 px-3 m-4">
                <h1>Form Validation</h1>


                <form action="" onSubmit={handleSubmit(submitHandler)}>
                    <input placeholder='Enter your name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" {...register("userName", { required: true })} />
                    {errors.userName && (<span>This Feild is Required</span>)}
                    <input placeholder='Enter you email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" {...register("email", { required: true })} />
                    {errors.email && (<span>This Feild is Required</span>)}

                    <input placeholder='Enter your password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} />
                    {errors.password?.type == 'required' && (<span>This Feild is Required</span>)}
                    {errors.password?.type == 'pattern' && (<span>Password must contains 1 special character and so on......</span>)}
                    {console.log(errors.password)}
                    <input placeholder='Enter your age' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" {...register("age", { required: true, min: 3, max: 5 })} />
                    <div>{errors.age && (<span>This Feild is Required</span>)}</div>


                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Submit</button>
                </form>

            </div>


        </>
    )
}

export default FormValidationByReactFormHook