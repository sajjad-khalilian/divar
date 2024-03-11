import {  useQuery, useQueryClient } from "@tanstack/react-query"
import { getPosts } from "services/user"
import Loader from "modules/Loader";
import { deleteCategory } from "services/admin";
import styles from "./PostList.module.css"


function PostList() {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const queryClient = useQueryClient()

    const {data , isLoading} = useQuery(["mypost-list"], getPosts , {
        onSuccess: () => queryClient.invalidateQueries("delete-post")
    })
    console.log(data , isLoading);

    return (
        <div className={styles.list}>
            {isLoading ? <Loader/> 
            : (
                <>
                    <h3>آگهی های من</h3>
                    {data.data.posts.map(post => <div key={post._id} className={styles.post}>
                        <img src={`${baseUrl}${post.images[0]}`}/>
                        <div>
                            <p>{post.options.title}</p>
                            <span>{post.options.content}</span>
                        </div>
                        <div>
                            <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                            <span className={styles.price}>{post.amount} تومان</span>
                        </div>
                        <button className={styles.delete} onClick={() => deleteCategory(post._id)}>حذف دسته بندی</button>
                    </div>)}
                </>
            )}
        </div>
    )
}

export default PostList
