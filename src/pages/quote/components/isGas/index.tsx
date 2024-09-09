import { Radio } from '@/components';
import { IClassName } from '@/interface';
import './styles.scss';

const prefix = 'c_is-gas';

const IsGas = ({ className }: IClassName) => {
  return (
    <div className={`${prefix} ${className}`}>
      <h2 className={`${prefix}__subtitle`}>¿Tu auto es a gas?</h2>
      <div className={`${prefix}__wrapper_radio`}>
        <div className={`${prefix}__radio`}>
          <Radio name='isGas' value='yes' />
          <span>Sí</span>
        </div>
        <div className={`${prefix}__radio`}>
          <Radio name='isGas' value='no' />
          <span>No</span>
        </div>
      </div>
    </div>
  )
}

export default IsGas