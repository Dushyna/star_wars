import SectionLeft from "./SectionLeft.jsx";
import SectionRight from "./SectionRight.jsx";
import SectionMiddle from "./SectionMiddle.jsx";

function MainHtml() {
    return (
        <main className="clearfix">
            <SectionLeft/>
            <SectionRight/>
            <SectionMiddle/>
        < /main>
    )
}

export default MainHtml