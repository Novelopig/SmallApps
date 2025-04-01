
function Banner() {

    return(
        <>
        <nav className="navbar navbar-expand-md bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand text-white fs-2 text" href="#">
                    Small <span className="text-warning">Apps</span>
                </a>

                <button className="navbar-toggler border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Changheon</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Aaron</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fangfang</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Byeonggil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">2024.12.16</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )

}

export default Banner;