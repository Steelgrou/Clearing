import './Header.css'

export default function Header() {


    return (
        <>
            <section className='header'>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-left">
                            <div className="header-logo">
                                <img src="" alt="" />
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">Articles</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <div className="header-lang"></div>
                            <div className="header-btn">Get a free quote</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}