export const generatePricingPlanElement = (plan) => {
  const { name, id, monthPrice, features } = plan;
  const planContainer = document.createElement('div');

  planContainer.className = 'select-plan__pricing-plan';
  planContainer.id = id;

  const title = document.createElement('h2');

  title.className = 'select-plan__plan-title';
  title.textContent = name;

  const priceElement = document.createElement('p');

  priceElement.className = 'select-plan__price';
  priceElement.innerHTML = `$${monthPrice}<span>/month</span>`;

  const featureList = document.createElement('ul');

  featureList.className = 'select-plan__features';

  features.forEach(feature => {
    const featureItem = document.createElement('li');

    featureItem.className = 'select-plan__feature-item';

    const featureStatus = document.createElement('span');

    featureStatus.className = `select-plan__feature-status
      ${feature.isAvialible ? 'checkmark' : 'cross'}`;

    const featureText = document.createTextNode(feature.featureName);

    featureItem.appendChild(featureStatus);
    featureItem.appendChild(featureText);

    featureList.appendChild(featureItem);
  });

  const signUpButton = document.createElement('div');

  signUpButton.className = 'button';
  signUpButton.textContent = 'Sign Up';

  planContainer.appendChild(title);
  planContainer.appendChild(priceElement);
  planContainer.appendChild(featureList);
  planContainer.appendChild(signUpButton);

  return planContainer;
};

export const createPlanCards = (plansArray) => {
  const plansContainer = document.getElementById('plansContainer');

  plansArray.map(plan => {
    const planElement = generatePricingPlanElement(plan);

    plansContainer.appendChild(planElement);
  });
};

export const changePriceByBillingPeriod = (billingPeriod, plansArr) => {
  const cards = document.querySelectorAll('.select-plan__pricing-plan');

  cards.forEach(card => {
    const planId = card.id;

    if (planId && plansArr.find(plan => plan.id === planId)) {
      const currentPlan = plansArr.find(plan => plan.id === planId);

      const cardPriceEl = card.querySelector('.select-plan__price');

      cardPriceEl.innerHTML = `${billingPeriod === 'month'
        ? `$${currentPlan.monthPrice}<span>/month</span>`
        : `$${currentPlan.yearPrice}<span>/year</span>`
      }`;
    }
  });
};
