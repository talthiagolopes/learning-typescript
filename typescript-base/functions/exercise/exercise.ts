const sum = (a: number, b: number): number => {
  consoleActionValues(a,b);
  return a + b;
};

const subtract = (a: number, b: number): number => {
  consoleActionValues(a,b);
  return a - b;
};

const divide = (a: number, b: number): number | never => {
  if (b === 0) {
    throw new Error('Division by zero is undefined');
  }
  consoleActionValues(a,b);
  return a / b;
};

const multiply = (a: number, b: number): number => {
  consoleActionValues(a,b);
  return a * b;
};

type Action = {
  name: string;
  do: (a: number, b: number) => number;
}

const ACTIONS: Action[] = [
  {
    name: 'SUM',
    do: sum,
  },
  {
    name: 'SUBTRACT',
    do: subtract,
  },
  {
    name: 'DIVIDE',
    do: divide,
  },
  {
    name: 'MULTIPLY',
    do: multiply,
  },
];

function consoleActionValues(a: number, b: number): void {
  console.log(a, b);
}

function updateUserMoneyText(element: HTMLElement, actualMoney: number): void {
  element.innerHTML = actualMoney.toString();
}

function randomNumber(max: number): number {
  return Math.round(Math.random() * max);
}

interface PlayTheGameParams {
  actions: Action[],
  totalClick: number,
  userMoney: number,
  onError:  (rundomIndex: number, actions: Action[]) => void,
  onSuccess? : (totalClick: number) => void
}

function playTheGame({ actions, totalClick, onError, onSuccess, userMoney }: PlayTheGameParams): never | number {
  const randomIndex = randomNumber(actions.length);
  const A_MILLION = 1000000;
  const action = actions[randomIndex];

  if (!action) {
    onError(randomIndex, actions);
    return userMoney;
  }

  if (userMoney >= A_MILLION) {
    if (typeof onSuccess === 'function') {
      onSuccess(totalClick);
    }

    return userMoney;
  }

  if (userMoney <= 0) {
    throw new Error('Money must be positive');
  }

  const newMoney: number = Math.round(action.do(userMoney, randomNumber(actions.length * 100)));

  return newMoney;
}

function disableClickButton($button: HTMLButtonElement, handleClick? : () => void) {
  $button.disabled = true;

  if (typeof handleClick === 'function') {
    $button.removeEventListener('click', handleClick);
  }
}

const $button: HTMLButtonElement = document.getElementById('button') as HTMLButtonElement;
const $userMoneyText: HTMLElement = document.getElementById('moneyText');
let userMoney:number = 1000;
let totalClick:number = 0;

updateUserMoneyText($userMoneyText, userMoney);

$button.addEventListener('click', function handleClick() {
  totalClick++;

  const params: PlayTheGameParams = {
    actions: ACTIONS,
    totalClick,
    userMoney: userMoney,
    onError: function (index, actions) {
      console.error('Action error: ', actions[index-1]);
    },
    onSuccess: function (totalClick) {
      disableClickButton($button, handleClick);
      console.log('Te has convertido en millonario al hacer un total de: ', totalClick, ' clicks');
    },
  };

  try {
    userMoney = playTheGame(params);
  } 
  catch (error) {
    disableClickButton($button, handleClick);
    console.error(error);
  }
  updateUserMoneyText($userMoneyText, userMoney);
});