import './SearchPage.scss';
import UploadForm from '../../Components/UploadForm/UploadForm';
import SearchForm from '../../Components/SearchForm/SearchForm';

export default function SearchPage() {

    return(
        <main>
            <UploadForm/>
            <SearchForm />            
        </main>
    )
}


           {/* <section className="section-top">
                <h2 className="section-top__text">
                    Upload your syllabus to compare it to any syllabus on our platform
                </h2>
                <form className="section-top__form">
                    <button className="section-top__upload">Upload</button>
                </form>
            </section>
            <section className="section-bottom">
                <h2 className="section-bottom__text">
                    Let our virtual AI assitant compare and improve your curriculum
                </h2>
                <form className='section-bottom__form'>
                    <input className="section-bottom__search" type="search" placeholder='Enter your search'>
                         <img className="search__icon" src="" alt="magnifying glass"/>
                        <img className="search__icon" src="" alt="microphone"/> 
                    </input>
                </form>
            </section>*/}