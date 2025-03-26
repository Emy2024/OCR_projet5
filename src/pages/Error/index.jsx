import { Link } from 'react-router'

function Error(){
    return (
        <div className="containerError">
            <p className="containerError__404">404</p>
            <p className="containerError__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="containerError__link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error

