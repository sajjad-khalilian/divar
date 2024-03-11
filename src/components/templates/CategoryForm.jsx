import { useMutation , useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addCategory } from "services/admin";
import styles from "./CategoryForm.module.css"


function CategoryForm() {

    const queryClient = useQueryClient()
    const [form , setForm] = useState({name: "", slug: "", icon: ""})

    const {mutate , isLoading , error , data} = useMutation(addCategory , {
        onSuccess: () => queryClient.invalidateQueries("get-category")
    })

    
    const submitHandler = (e) => {
        e.preventDefault()
        if(!form.name || !form.slug || !form.icon) return;
        mutate(form)
    }
    

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    return (
        <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
            <h3>دسته بندی جدید</h3>
            {/* <p></p> */}
            {data?.status === 201 && <p>آگهی اضافه شد</p>}
            <label htmlFor="name">نام دسته بندی</label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="slug">اسلاگ</label>
            <input type="text" id="slug" name="slug"/>
            <label htmlFor="icon">آیکون</label>
            <input type="text" id="icon" name="icon"/>
            <button type="submit">ایجاد</button>
        </form>
    )
}

export default CategoryForm
