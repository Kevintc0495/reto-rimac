import { Button, Grid, Select } from '@/components';
import { markData, yearData } from '@/mock';
import { AmountInsure, IsGas, More } from '@/pages/quote/components';
import arrowIcon from '@/assets/icon/arrow_right.svg';
import './styles.scss';
import { IEnterDataModule } from '../../interface';

const prefix = 'm_enter_data';

const EnterDataModule = ({ name, handleStep }: IEnterDataModule) => {
  return (
    <div className={prefix}>
      <p className={`${prefix}__name`}>¡Hola, <span>{name}!</span></p>
      <span className={`${prefix}__description`}>Completa los datos de tu auto</span>
      <Grid container rowSpacing={2}>
        <Grid xs={12} item>
          <Select
            name="year" 
            data={yearData}
            fullwidth 
          />
        </Grid>
        <Grid xs={12} item>
          <Select
            name="mark" 
            data={markData}
            fullwidth 
          />
        </Grid>
      </Grid>
      <More className={`${prefix}__more`}/>
      <IsGas className={`${prefix}__mt`}/>
      <AmountInsure className={`${prefix}__mt`}/>
      <Button 
        className={`${prefix}__btn_next`} 
        onClick={() => handleStep(true)}
        fullwidth 
      >
        CONTINUAR
        <img src={arrowIcon} alt="icono de flecha" />
      </Button>
    </div>
  )
}

export default EnterDataModule;