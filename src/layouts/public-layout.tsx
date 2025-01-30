import AuthHandler from '@/handlers/user-auth-handler';
import {Header} from '../components/header'
import { Outlet } from "react-router-dom";
import { Footer } from '@/views/footer';

export const PublicLayout = () => {
  return (
    <div>
      <AuthHandler/>
    <Header/>
    <Outlet/>
    <Footer/>

    </div>
  )
}