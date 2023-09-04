import Image from "../../../assets/food/food4.webp"

function Login(){
    return(
        <header className="reserve-table">
            <img src={Image} alt="littel lemon Ingredients " className="header-reserve"/>
            <div className="reserve-table-text">
                <h1>Login</h1>
            </div>
        </header>
    );
}
export default Login;