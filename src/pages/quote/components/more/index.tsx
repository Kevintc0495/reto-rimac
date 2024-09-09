import car from '@/assets/img/car.png';
import { IClassName } from '@/interface';
import './styles.scss';
import { Button } from '@/components';

const prefix = 'c_more';

const More = ({ className }: IClassName) => {
  return (
    <div className={`${prefix} ${className}`}>
      <img src={car} alt="auto" />
      <div>
        <p className={`${prefix}__question`}>¿No encuentras el modelo?</p>
        <Button className={`${prefix}__btn`} as='a' variant='tertiary'>CLICL AQUÍ</Button>
      </div>
    </div>
  )
}

export default More;