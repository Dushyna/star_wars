import SectionLeft from "./SectionLeft.jsx";
import SectionRight from "./SectionRight.jsx";
import SectionMiddle from "./SectionMiddle.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <SectionLeft/>
            <SectionRight/>
            <SectionMiddle/>
        < /main>
    );
};

export default Home;