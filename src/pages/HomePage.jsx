import SideBar from "components/templates/SideBar"
import Main from "components/templates/Main"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "services/user"
import Loader from "modules/Loader"
import { getCategory } from "services/admin"


const style = {display: "flex"}

function HomePage() {

    const {data: posts , isLoading} = useQuery(["post-list"] , getAllPosts)
    const {data: categories} = useQuery(["get-categories"] , getCategory)

    return (
            <>
                {isLoading ? <Loader/> : (
                    <div style={style}>
                        <SideBar categories={categories}/>
                        <Main posts={posts}/>
                    </div>
                )}
            </>
    )
}

export default HomePage
