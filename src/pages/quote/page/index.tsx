import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Progress } from '@/pages/quote/components';
import { EnterDataModule } from '@/pages/quote/modules';
import { User } from '../../../interface/hooks/user';
import { routes } from '@/router';
import { Footer } from '@/components';

const QuotePage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const stepTotal = 2;
  const { userData }: { userData: User} = location.state || {};

  const handleStep = (isNext: boolean) => {
    if(!isNext && (step === 1)) navigate(routes.home);
    setStep(value => ( isNext ? value + 1 : value - 1 ));
  };

  return (
    <div>
      <Progress step={step} stepTotal={stepTotal} handleStep={handleStep} />
      { step === 1 
        ? <EnterDataModule name={userData.name} handleStep={handleStep} />
        : <h2>Segunda vista</h2>
      }
      <Footer/>
    </div>
  );
};

export default QuotePage;
