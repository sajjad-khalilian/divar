import { useQuery } from "@tanstack/react-query"
import { getCategory } from "services/admin"
import Loader from "modules/Loader";
import styles from "./CategoryList.module.css"
import { deleteCategory } from "services/admin";
import { useQueryClient } from "@tanstack/react-query";


function CategoryList() {
    const queryClient = useQueryClient()
    const {data , isLoading, error} = useQuery(["get-category"] , getCategory , {
        onSuccess: () => queryClient.invalidateQueries("delete-category")
    })
    console.log({data , isLoading , error});


    return (
        <div className={styles.list}>
            {isLoading 
            ? (<Loader/>) : 
            data.data.map(i => 
            <div key={i._id}>
                <img src={`${i.icon}.svg`}/>
                <h3>{i.name}</h3>
                <p>slug: {i.slug}</p>
                <button className={styles.delete} onClick={() => deleteCategory(i._id)}>حذف دسته بندی</button>
            </div>
            )}
        </div>
    )
}

export default CategoryList
