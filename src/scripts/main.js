import {
  createPlanCards,
  changePriceByBillingPeriod,
} from './utils';

import { avialiblePlans } from './data/avialiblePlans';

document.addEventListener('DOMContentLoaded', () => {
  createPlanCards(avialiblePlans);

  const billingPeriodToggle = document.getElementById('billingToggle');

  billingPeriodToggle.addEventListener('change', () => {
    const selectBillingPeriod = document.getElementById('selectBillingPeriod');

    if (billingPeriodToggle.checked) {
      selectBillingPeriod.classList.remove(
        'select-plan__billing-selected-period--monthly'
      );

      selectBillingPeriod.classList.add(
        'select-plan__billing-selected-period--yearly'
      );

      changePriceByBillingPeriod('year', avialiblePlans);
    } else {
      selectBillingPeriod.classList.remove(
        'select-plan__billing-selected-period--yearly'
      );

      selectBillingPeriod.classList.add(
        'select-plan__billing-selected-period--monthly'
      );

      changePriceByBillingPeriod('month', avialiblePlans);
    }
  });
});
