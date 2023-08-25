import MainContent from '../components/MainContent.jsx';
import NewsLetter from '../components/Newsletter.jsx';
import '../styles/queries.css';

export default function LandingPage() {
    return (
        <div id="home">
        <MainContent />
        <NewsLetter />
</div>
    )
}