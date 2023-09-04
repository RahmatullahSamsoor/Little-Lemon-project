import Image from "../../../assets/food/reservation.png";

export default function Heading(){
    return(
        <header className="reserve-table">
            <img className="header-reserve"
            src={Image} alt="littel lemon Ingredients " />
            <div className="reserve-table-text">
                <h1>Reserve a table</h1>
            </div>
        </header>
    );
}
