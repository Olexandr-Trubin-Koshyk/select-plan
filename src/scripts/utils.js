export const generatePricingPlanElement = (plan) => {
  const { name, id, monthPrice, features } = plan;
  const planContainer = document.createElement('div');

  planContainer.className = 'card';
  planContainer.id = id;

  const title = document.createElement('h2');

  title.className = 'card__title';
  title.textContent = name;

  const priceElement = document.createElement('p');

  priceElement.className = 'card__price';
  priceElement.innerHTML = `$${monthPrice}<span>/month</span>`;

  const featureList = document.createElement('ul');

  featureList.className = 'card__features';

  features.forEach(feature => {
    const featureItem = document.createElement('li');

    featureItem.className = 'card__feature-item';

    const featureStatus = document.createElement('span');

    featureStatus.className = `card__feature-status
      ${feature.isAvialible ? 'checkmark' : 'cross'}`;

    const featureText = document.createTextNode(feature.featureName);

    featureItem.appendChild(featureStatus);
    featureItem.appendChild(featureText);

    featureList.appendChild(featureItem);
  });

  const signUpButton = document.createElement('div');

  signUpButton.className = 'button';
  signUpButton.textContent = 'Sign Up';

  signUpButton.onclick = () => {
    // eslint-disable-next-line no-console
    console.log('Selected plan info: ', plan);

    // eslint-disable-next-line no-console
    console.log('Selected period: month');
  };

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
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const planId = card.id;

    if (planId && plansArr.find(plan => plan.id === planId)) {
      const currentPlan = plansArr.find(plan => plan.id === planId);

      const cardPriceEl = card.querySelector('.card__price');

      cardPriceEl.innerHTML = `${billingPeriod === 'month'
        ? `$${currentPlan.monthPrice}<span>/month</span>`
        : `$${currentPlan.yearPrice}<span>/year</span>`
      }`;

      const signUpButton = card.querySelector('.button');

      signUpButton.onclick = () => {
        // eslint-disable-next-line no-console
        console.log('Selected plan info: ', currentPlan);

        // eslint-disable-next-line no-console
        console.log(`Selected period: ${billingPeriod}`);
      };
    }
  });
};
