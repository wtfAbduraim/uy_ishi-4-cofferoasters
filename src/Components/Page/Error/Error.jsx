import './Error.scss'
import ErrorImg from '../../Img/error.jpg'

function Error() {
    return (
        <>
            <div className="container">
                <div className="error">
                    <img className='error__img' src={ErrorImg} alt="error" width={800}/>
                </div>
            </div>
        </>
    )
}

export default Error;