import {images} from "../utils/constants.js";
import Images from "./Images.jsx";

function SectionRight() {
    return (
        <section className="float-end w-50 row  border border-warning rounded-bottom-5 ms-2 me-0">
            <h2 className="text-center">Dream team</h2>
            {images.map((image, index) => (
                <Images src={`/friend${image}.jpg`} key={index}/>
            ))}

        </section>

    )
}

export default SectionRight;