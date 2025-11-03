import main from '../assets/main.jpg'

function SectionLeft() {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={main} alt="Luke Skywalker"/>
        </section>
    )
}

export default SectionLeft;