import preloader from './Fidget-spinner.gif';
import s from './preloader.module.css';

const Preloader = () => {
    return <img src={preloader} className={s.preloader}/>

}

export default Preloader;