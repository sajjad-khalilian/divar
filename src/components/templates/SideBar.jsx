import { useQuery } from "@tanstack/react-query"
import { getCategory } from "services/admin"
import styles from "./SideBar.module.css"



function SideBar({categories}) {

    return (
        <div className={styles.sidebar}>
            <h4>دسته بندی ها</h4>
            <ul>
                {
                    categories?.data.map(i => (
                        <li key={i._id}>
                            <img src={`${i.icon}.svg`}/>
                            <p>{i.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar
