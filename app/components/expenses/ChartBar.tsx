import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import { ChartBarType } from '~/types/Expenses.types';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'PLACE_HOLDER',
  description: 'PLACE_HOLDER',
});
// =========================================================

function ChartBar({ maxValue, value, label }: ChartBarType): ReactElement {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar--inner">
        <div className="chart-bar--fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar--label">{label}</div>
    </div>
  );
}

export default ChartBar;
// ########################################################
