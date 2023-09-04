import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReservationForm(props){
    const[fName, setFName]= useState('');
    const[lName, setLName]= useState("");
    const[email, setEmail]= useState("");
    const[tel, setTel]= useState("");
    const[people,setPeople]= useState("");
    const[date, setDate]= useState("");
    const[occasion, setOccasion]= useState("");
    const[preferences, setPreferences]= useState("");
    const[comment, setComment]= useState("");
    const [formComplet, setFormComplet] = useState();

    

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
      );

        function handleDateChange(e){
            setDate(e.target.value);
            var stringfiy = e.target.value;
            const date = new Date(stringfiy);

            props.updateTimes(date);

            setFinalTime(props.availableTime.map((times)=> <option>{times}</option>));

        }
        const checkFormCompletion =() => {
            if(fName && lName && email && tel && people && occasion && preferences)
            setFormComplet(true);
            else setFormComplet(false);
        }
    

        return(
            <fialdse>
            <form className="reserv-form">
                <div>
                    <label htmlFor="fName">First Name</label><br/>
                    <input
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    required
                    minLength={5}
                    maxLength={50}
                    value={fName}
                    onChange={(e) =>{ setFName(e.target.value); checkFormCompletion()}}></input>
                </div>
                <div>
                    <label htmlFor="lName">Last Name</label><br/>
                    <input
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    required
                    minLength={5}
                    maxLength={50}
                    value={lName}
                    onChange={(e) => {setLName(e.target.value); checkFormCompletion()}}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label><br/>
                    <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    minLength={5}
                    maxLength={80}
                    value={email}
                    onChange={(e)=> {setEmail(e.target.value); checkFormCompletion()}}></input>
                </div>
                <div>
                    <label htmlFor="tel">Phone Number</label><br/>
                    <input
                    type="tel"
                    id="tel"
                    placeholder="(xxx) xxx xxxx"
                    required
                    minLength={10}
                    maxLength={30}
                    value={tel}
                    onChange={(e)=> {setTel(e.target.value); checkFormCompletion()}}></input>
                </div>
                <div>
                    <label htmlFor="people">Number of guests</label><br/>
                    <input
                    type="number"
                    id="people"
                    placeholder="Number of people"
                    required
                    minLength={1}
                    maxLength={100}
                    value={people}
                    onChange={(e)=> {setPeople(e.target.value); checkFormCompletion()}}></input>
                </div>
                <div>
                    <label htmlFor="date">Set Date</label><br/>
                    <input
                    type="date"
                    id="date"
                    required
                    placeholder="Set Date"
                    value={date}
                    onChange={handleDateChange}></input>
                </div>
                <div>
  <label htmlFor="time">Set Time</label><br/>
  <select id="time" required>
    {props.availableTimes && props.availableTimes.map((times, index) => (
      <option key={index}>{times}</option>
    ))}
  </select>
</div>

                <div>
                    <label htmlFor="occasion">Occasion</label><br/>
                    <select id="occasion"
                    value={occasion}
                    onChange={(e)=> {setOccasion(e.target.value); checkFormCompletion()}}
                    >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="preferences">Seating Preferences</label><br/>
                    <select id="preferances"
                    required
                    value={preferences}
                    onChange={(e) => {setPreferences(e.target.value); checkFormCompletion()}}>
                        <option>None</option>
                        <option>Indoors</option>
                        <option>Outdoor (Patio)</option>
                        <option>Outdoor (Sidewalk)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comments">Additional Comments</label><br/>
                    <textarea
                    id="comments"
                    rows={8}
                    cols={50}
                    placeholder="Additional Comments"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                <div>
                    <br/>
                    <small>
                        <p>Note: You cannot edit your reservation after submission. Please
                        double-check your answer before submitting your reservation request.
                        </p>
                    </small>
                    <Link  className={`action-button ${formComplet ? "" : "disable"}`} to= {formComplet ?'/confirmation' : undefined}
                    onClick={(e) => {
                        if (!formComplet){
                            e.preventDefault();
                        }
                    }}>
                        Book Table
                    </Link>
                </div>

            </form>
            </fialdse>
        );

}