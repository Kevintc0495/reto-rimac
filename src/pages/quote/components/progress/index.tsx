import { BarProgress, Button } from '@/components';
import icon from '@/assets/icon/arrow_left.svg'
import { IProgressModule } from '@/pages/quote/interface';
import './styles.scss';

const prefix = 'c_progress';

const Progress = ({ step, stepTotal, handleStep }: IProgressModule) => {

  const calValue = (step / stepTotal) * 100;
  
  return (
    <div className={prefix}>
      <div className={`${prefix}__wrapper_text`}>
        <Button 
          onClick={() => handleStep(false)}
          className={`${prefix}__btn_back`}
          variant='secondary'
        >
          <img src={icon} alt="" />
        </Button>
        <span>PASO {step} DE {stepTotal} </span>
      </div>
      <div className={`${prefix}__bar_progress`}>
        <BarProgress value={calValue}/>
      </div>
    </div>
  )
}

export default Progress;