import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from "pages/404"
import AdminPage from "pages/AdminPage"
import AuthPage from "pages/AuthPage"
import DashboardPage from "pages/DashboardPage"
import HomePage from "pages/HomePage"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "services/user"
import Loader from "src/modules/Loader"

function Router() {

    const {data , isLoading , error} = useQuery(["profile"] , getProfile)
    // console.log({data , isLoading , error});

    if(isLoading) return <Loader/>

    
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage/>}/>
            <Route path="/dashboard" element={data ? <DashboardPage/> : <Navigate to="/auth"/>}/>
            <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage/> : <Navigate to="/"/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default Router
