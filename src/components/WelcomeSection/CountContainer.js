import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut } = useDateCountdown();

  if (timeHasRunOut)
    return null;

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Jours" number={days} />
      <CountItem text="Heures" number={hours} />
      <CountItem text="Minutes" number={minutes} />
      <CountItem text="Secondes" number={seconds} />
    </div>
  );
}

export default CountContainer;
