import CardAboutProps from "./CardAboutProps";




const CardAbout: React.FC<CardAboutProps>  = ({ img, title, paragraph }) => {

    return (
        <div className="container-card">
            <div className="container-img">
                <img className="img-card" src={img} alt="imagen" />
            </div>
            <div>
                <h2 className="tittle-card">
                    {title}
                </h2>
                <span className="paragraph-card">
                    {paragraph}
                </span>
            </div>
        </div>
    )
}

export default CardAbout;