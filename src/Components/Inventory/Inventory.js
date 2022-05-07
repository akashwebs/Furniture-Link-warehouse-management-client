import React from 'react';
import { useForm } from 'react-hook-form';


const Inventory = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />
            <input type="number" {...register("age")} />
            <input type="submit" />
        </form>


    );
};

export default Inventory;