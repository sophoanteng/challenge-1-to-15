const DATE_HTML = document.querySelector('#date');
const LIST_HTML = document.querySelector('#list');
const INPUT_HTML = document.querySelector('#input');

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numberic",
  month: "long",
  day: "numberic"
};

const TODY = new Date();
DATE_HTML.innerHTML = TODY.toLocaleString('en-Us', options);

