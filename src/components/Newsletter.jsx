import '../styles/app.css';
import Subscribe from './Subscribe';

export default function NewsLetter() {
  return (
    <div className="newsBox"
        style={{
            background: "#201620",
            borderRadius: "80px"}} >
        <div className="launch" >       
            <h3> Get notified when we launch</h3>
            <p> Our team is currently working round the clock to bring
            our solution to your virtual door step. Be one of the first
            to know when we launch. We promise we are fun.</p>
        </div>
        <div>
          <Subscribe />
        </div>
    </div>
  )
}