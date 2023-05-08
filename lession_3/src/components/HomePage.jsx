import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HomePape() {
    return <>
        <Header></Header>
        <h1>Wellcome!!!</h1>
        <Link key="post" to="post">Posts</Link> <span>|</span>
        <Link key="student" to="student">Student</Link> <span>|</span>
        <Link key="count" to="count">Count</Link>
        <hr></hr>
        <div className="PostApp">
            <Outlet />
        </div>
        <hr></hr>
        <Footer></Footer>
    </>
}
export default HomePape;