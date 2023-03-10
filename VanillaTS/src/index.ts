import "./style.scss";

const calculatorOutputId: string = "calculatorOutput";
const clearBtnId: string = "clearBtn";
const divideBtnId: string = "divideBtn";
const decimalBtnId: string = "decimalBtn";
const equalsBtnId: string = "equalsBtn";
const minusBtnId: string = "minusBtn";
const plusBtnId: string = "plusBtn";
const timesBtnId: string = "timesBtn";
const numberZeroBtnId: string = "numberBtn-0";
const numberOneBtnId: string = "numberBtn-1";
const numberTwoBtnId: string = "numberBtn-2";
const numberThreeBtnId: string = "numberBtn-3";
const numberFourBtnId: string = "numberBtn-4";
const numberFiveBtnId: string = "numberBtn-5";
const numberSixBtnId: string = "numberBtn-6";
const numberSevenBtnId: string = "numberBtn-7";
const numberEightBtnId: string = "numberBtn-8";
const numberNineBtnId: string = "numberBtn-9";

let calculatorOutput: HTMLInputElement | null = null;
let clearBtn: HTMLButtonElement | null = null;
let divideBtn: HTMLButtonElement | null = null;
let decimalBtn: HTMLButtonElement | null = null;
let equalsBtn: HTMLButtonElement | null = null;
let minusBtn: HTMLButtonElement | null = null;
let plusBtn: HTMLButtonElement | null = null;
let timesBtn: HTMLButtonElement | null = null;
let numberZeroBtn: HTMLButtonElement | null = null;
let numberOneBtn: HTMLButtonElement | null = null;
let numberTwoBtn: HTMLButtonElement | null = null;
let numberThreeBtn: HTMLButtonElement | null = null;
let numberFourBtn: HTMLButtonElement | null = null;
let numberFiveBtn: HTMLButtonElement | null = null;
let numberSixBtn: HTMLButtonElement | null = null;
let numberSevenBtn: HTMLButtonElement | null = null;
let numberEightBtn: HTMLButtonElement | null = null;
let numberNineBtn: HTMLButtonElement | null = null;

let calculatedOutput: number = 0;

const AssertButtonIsNotNull = (
  element: HTMLButtonElement | null,
  elementId: string
): string => {
  return element !== null
    ? ""
    : `Missing button element with id '${elementId}'\n`;
};

const TryToSetValue = (
  element: HTMLInputElement | null,
  elementId: string,
  valueToSet: number
): string => {
  if (element === null) {
    return `Missing input element with id '${elementId}'\n`;
  }

  element.valueAsNumber = valueToSet;
  return "";
};

window.addEventListener("load", () => {
  calculatorOutput = document.getElementById(
    calculatorOutputId
  ) as HTMLInputElement | null;

  clearBtn = document.getElementById(clearBtnId) as HTMLButtonElement | null;
  divideBtn = document.getElementById(divideBtnId) as HTMLButtonElement | null;
  decimalBtn = document.getElementById(
    decimalBtnId
  ) as HTMLButtonElement | null;
  equalsBtn = document.getElementById(equalsBtnId) as HTMLButtonElement | null;
  minusBtn = document.getElementById(minusBtnId) as HTMLButtonElement | null;
  plusBtn = document.getElementById(plusBtnId) as HTMLButtonElement | null;
  timesBtn = document.getElementById(timesBtnId) as HTMLButtonElement | null;
  numberZeroBtn = document.getElementById(
    numberZeroBtnId
  ) as HTMLButtonElement | null;
  numberOneBtn = document.getElementById(
    numberOneBtnId
  ) as HTMLButtonElement | null;
  numberTwoBtn = document.getElementById(
    numberTwoBtnId
  ) as HTMLButtonElement | null;
  numberThreeBtn = document.getElementById(
    numberThreeBtnId
  ) as HTMLButtonElement | null;
  numberFourBtn = document.getElementById(
    numberFourBtnId
  ) as HTMLButtonElement | null;
  numberFiveBtn = document.getElementById(
    numberFiveBtnId
  ) as HTMLButtonElement | null;
  numberSixBtn = document.getElementById(
    numberSixBtnId
  ) as HTMLButtonElement | null;
  numberSevenBtn = document.getElementById(
    numberSevenBtnId
  ) as HTMLButtonElement | null;
  numberEightBtn = document.getElementById(
    numberEightBtnId
  ) as HTMLButtonElement | null;
  numberNineBtn = document.getElementById(
    numberNineBtnId
  ) as HTMLButtonElement | null;

  let error: string = "";
  error += TryToSetValue(
    calculatorOutput,
    calculatorOutputId,
    calculatedOutput
  );
  error += AssertButtonIsNotNull(clearBtn, clearBtnId);
  error += AssertButtonIsNotNull(divideBtn, divideBtnId);
  error += AssertButtonIsNotNull(decimalBtn, decimalBtnId);
  error += AssertButtonIsNotNull(equalsBtn, equalsBtnId);
  error += AssertButtonIsNotNull(minusBtn, minusBtnId);
  error += AssertButtonIsNotNull(plusBtn, plusBtnId);
  error += AssertButtonIsNotNull(timesBtn, timesBtnId);
  error += AssertButtonIsNotNull(numberZeroBtn, numberZeroBtnId);
  error += AssertButtonIsNotNull(numberOneBtn, numberOneBtnId);
  error += AssertButtonIsNotNull(numberTwoBtn, numberTwoBtnId);
  error += AssertButtonIsNotNull(numberThreeBtn, numberThreeBtnId);
  error += AssertButtonIsNotNull(numberFourBtn, numberFourBtnId);
  error += AssertButtonIsNotNull(numberFiveBtn, numberFiveBtnId);
  error += AssertButtonIsNotNull(numberSixBtn, numberSixBtnId);
  error += AssertButtonIsNotNull(numberSevenBtn, numberSevenBtnId);
  error += AssertButtonIsNotNull(numberEightBtn, numberEightBtnId);
  error += AssertButtonIsNotNull(numberNineBtn, numberNineBtnId);

  if (error !== "") {
    alert(error);
  }
});
