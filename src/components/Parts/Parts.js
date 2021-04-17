import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from 'semantic-ui-react';

const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
];

const CardExampleGroupProps = () => {
  const parts = useSelector((state) => state.parts);
  console.log(parts);
  return <Card.Group items={items} />;
};

export default CardExampleGroupProps;
