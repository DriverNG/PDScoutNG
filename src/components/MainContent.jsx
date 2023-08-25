/* eslint-disable react/no-unescaped-entities */
import '../styles/app.css';
import group from "../assets/group.png";
import '../styles/queries.css';
import mobile from '../assets/groupmobile.png'

export default function MainContent() {
    return (
        <div className="container">
            <div className="box">
                <div className="textBox">
                <h1>
                    Not a "yet another skill<br />
                    building" kind of app
                </h1>
                <p>We are making it easy for talented and skilled folk
                    to connect for FREE because unique proffessionals
                    deserve a unique platform.</p>
                </div>
            </div>
            <div className="box">
                <img src={group} alt="group" />
            </div>
            <img src={mobile} className="mobileBg" alt="mobile" />
        </div>
    )
}