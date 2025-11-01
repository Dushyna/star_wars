function Header() {
    return (
        <header className="rounded-top-5">
            <nav className="fixed-top mt-2 ms-5">
                <ul className="nav">
                    <li className="nav-item btn btn-danger mx-1  border-warning">Home</li>
                    <li className="nav-item btn btn-danger mx-1  border-warning">About me</li>
                    <li className="nav-item btn btn-danger mx-1  border-warning">Star Wars</li>
                    <li className="nav-item btn btn-danger mx-1  border-warning">Contact</li>
                </ul>
            </nav>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    )
}

export default Header;