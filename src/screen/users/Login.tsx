import NavBar from "../../components/Navbar";

function Login(){
    return (
        <>
        <NavBar loggedIn={true}/>
            <h1>Login</h1>
        </>
    );
}

export default Login;