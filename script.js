const keyboardContainer = document.createElement("div");
keyboardContainer.setAttribute("id", "keyboard-container");
keyboardContainer.style.width = window.getComputedStyle(document.body).width;
const firstRow = document.createElement("div");
firstRow.setAttribute("class", "keyboard-row");
const secondRow = document.createElement("div");
secondRow.setAttribute("class", "keyboard-row");
const thirdRow = document.createElement("div");
thirdRow.setAttribute("class", "keyboard-row");
const fourthRow = document.createElement("div");
fourthRow.setAttribute("class", "keyboard-row");
const fifthRow = document.createElement("div");
fifthRow.setAttribute("class", "keyboard-row");

const keyboardKeys = {
  firstRowKeys: [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Bck",
  ],
  firstRowKeysShift: [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "Bck",
  ],
  secondRowKeys: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  secondRowKeysShift: [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "{",
    "}",
  ],
  thirdRowKeys: [
    "Caps",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    `'`,
    "\\",
    "Enter",
  ],
  thirdRowKeysShift: [
    "Caps",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ":",
    `"`,
    "|",
    "Enter",
  ],
  fourthRowKeys: [
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ",",
    ".",
    "/",
  ],
  fourthRowKeysShift: [
    "Shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "<",
    ">",
    "?",
  ],
  fifthRowKeys: ["Space"],
};

function setKeyboardRow(keysArray, row) {
  keysArray.forEach((key) => {
    const keyBox = document.createElement("button");
    keyBox.setAttribute("class", "key-box");
    keyBox.textContent = key;

    if (keyBox.textContent == "Bck") {
      keyBox.setAttribute("id", "backspace-key");
    } else if (keyBox.textContent == "Caps") {
      keyBox.setAttribute("id", "caps-key");
    } else if (keyBox.textContent == "Shift") {
      keyBox.setAttribute("id", "shift-key");
    } else if (keyBox.textContent == "Space") {
      keyBox.setAttribute("id", "space-key");
    } else if (keyBox.textContent == "Enter") {
      keyBox.setAttribute("id", "enter-key");
    }
    row.appendChild(keyBox);
  });
}

function appendRowsToKeyboard() {
  setKeyboardRow(keyboardKeys.firstRowKeys, firstRow);
  setKeyboardRow(keyboardKeys.secondRowKeys, secondRow);
  setKeyboardRow(keyboardKeys.thirdRowKeys, thirdRow);
  setKeyboardRow(keyboardKeys.fourthRowKeys, fourthRow);
  setKeyboardRow(keyboardKeys.fifthRowKeys, fifthRow);

  keyboardContainer.appendChild(firstRow);
  keyboardContainer.appendChild(secondRow);
  keyboardContainer.appendChild(thirdRow);
  keyboardContainer.appendChild(fourthRow);
  keyboardContainer.appendChild(fifthRow);
}

appendRowsToKeyboard();

let IS_CAPS_ACTIVATED = false;
let IS_SHIFT_ACTIVATED = false;

document.body.appendChild(keyboardContainer);

function capsLock() {
  IS_CAPS_ACTIVATED = !IS_CAPS_ACTIVATED;
  const keys = document.querySelectorAll(".key-box");

  keys.forEach((letter) => {
    if (letter.textContent.length == 1)
      letter.textContent = IS_CAPS_ACTIVATED
        ? letter.textContent.toUpperCase()
        : letter.textContent.toLowerCase();
  });
}

function shiftLock() {
  IS_SHIFT_ACTIVATED = !IS_SHIFT_ACTIVATED;

  const normalKeysContent = [
    ...keyboardKeys.firstRowKeys,
    ...keyboardKeys.secondRowKeys,
    ...keyboardKeys.thirdRowKeys,
    ...keyboardKeys.fourthRowKeys,
  ];

  const shiftedKeysContent = [
    ...keyboardKeys.firstRowKeysShift,
    ...keyboardKeys.secondRowKeysShift,
    ...keyboardKeys.thirdRowKeysShift,
    ...keyboardKeys.fourthRowKeysShift,
  ];
  const keys = document.querySelectorAll(".key-box");

  for (let i = 0; i < shiftedKeysContent.length; i++) {
    keys[i].textContent = IS_SHIFT_ACTIVATED
      ? shiftedKeysContent[i]
      : normalKeysContent[i];
  }
}

document.querySelector("#caps-key").addEventListener("click", capsLock);
document.querySelector("#shift-key").addEventListener("click", shiftLock);
