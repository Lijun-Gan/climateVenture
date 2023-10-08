import './SearchForm.scss';

// import '../../assets/icons/mic_FILL0_wght400_GRAD0_opsz24.svg';
// import '../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg';



export default function SearchForm(){
    return(
        <section className="section-bottom">
                <h2 className="section-bottom__text">
                    Let our virtual AI assistant compare and improve your curriculum.
                </h2>
                <form className='section-bottom__form'>
                    <input className="section-bottom__search" type="search" placeholder='Enter your search'>
                         {/* <img className="search__icon" src="" alt="magnifying glass"/>
                        <img className="search__icon" src="" alt="microphone"/>  */}
                    </input>
                </form>
            </section>
    )

}