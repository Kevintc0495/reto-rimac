import { Input } from '@/components';
import { IClassName } from '@/interface';
import lessIcon from '@/assets/icon/less-icon.svg';
import addIcon from '@/assets/icon/add-icon.svg';
import './styles.scss';

const prefix = 'c_amount_insure';

const AmountInsure = ({ className }: IClassName) => {
  return (
    <div className={`${prefix} ${className}`}>
      <h2 className={`${prefix}__subtitle`}>Indica la suma asegurada</h2>
      <span className={`${prefix}__limit`}>MIN $12.500 | MAX $16,500 </span>

      <div className={`${prefix}__box`}>
        <img src={lessIcon} alt="icono menos" />
        <div>
          <span>$</span>
          <Input maxLength={6} name='amount' type='tel' className={`${prefix}__input`}/>
        </div>
        <img src={addIcon} alt="icono mas" />
      </div>
    </div>
  )
}

export default AmountInsure;