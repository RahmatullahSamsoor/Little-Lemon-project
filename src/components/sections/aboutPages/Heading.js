import Image from "../../../assets/food/food4.webp"

function Heading(){
    return(
        <header className="reserve-table">
            <img src={Image} alt="littel lemon Ingredients " className="header-reserve"/>
            <div className="reserve-table-text">
                <h1>About us</h1>
            </div>
        </header>
    );
}
export default Heading;