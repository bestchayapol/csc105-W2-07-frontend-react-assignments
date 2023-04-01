import { useNavigate } from "react-router-dom"
import "../styles/About.css"

function About() {
    const navigate = useNavigate();

    return (
        <div className="neon-container">
            <h1 className="type-effect">This is About Page</h1> 
            <button onClick={() => navigate("/")}>Redirect</button>
        </div>
    )
}

export default About