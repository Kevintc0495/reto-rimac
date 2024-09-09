import './styles.scss';
import logo from '@/assets/img/logo.png';
import PhoneIcon from '@/assets/icon/phone.svg';

const prefix = 'c_header';

export const Header = () => {
  return (
    <header className={prefix}>
      <figure className={`${prefix}__figure`}>
        <img src={logo} alt="Logo" />
      </figure>
      <div className={`${prefix}__wrapper_text`}>
        <p className={`${prefix}__question`}>¿Tienes alguna duda?</p>
        <div className={`${prefix}__wrapper_call`}>
          <img src={PhoneIcon} alt="icon phone" />
          <span className={`${prefix}__wrapper_call_text`}>Llámanos</span>
          <span className={`${prefix}__wrapper_call_number`}>(01) 411 6001</span>
        </div>
      </div>
    </header>
  )
};
