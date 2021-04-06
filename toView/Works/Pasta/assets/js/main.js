let a = document.querySelectorAll('input[type=text');

function check(a, f) {
  let err = a.parentNode.querySelector('.status'),
    label = a.parentNode.querySelector('label');

  if (err === null) {
    err = a.parentNode.parentNode.parentNode.querySelector('.status');
  }

  if (f) {
    if (a.value.length == 0) {
      err.classList.add('invalid');
      a.style.borderBottom = '2px solid #c71414';
      label.classList.remove('filled');
    } else {
      label.classList.add('filled');
      err.classList.remove('invalid');
      a.style.borderBottom = '';
    }
  } else {
    if (a.value.length != 0) {
      label.classList.add('filled');
    }
  }
}

function addKeyEvent(elm) {
  let _this = elm,
    type = _this.name;

  /* ВВОД ТОЛЬКО ЛАТИНСКИХ БУКВ */
  function wordCheck() {
    if (_this.value.length <= 12) {
      _this.value = _this.value.replace(/[^a-zA-Z]/, "");
    } else {
      _this.value = _this.value.replace(/[^.]/, "");
    }
  };

  function numCheck() {
    if (_this.value.length <= 2 && type != 'year')
      _this.value = _this.value.replace(/[^\d]/, "");
    else if (_this.value.length <= 4 && type == 'year')
      _this.value = _this.value.replace(/[^\d]/, "");
    else
      _this.value = _this.value.replace(/[^.]/, "");
  };

  if (type == 'firstname' || type == 'lastname') {
    _this.onkeydown = _this.onkeyup = _this.onkeypress = wordCheck;
  } else if (type == 'day' || type == 'month' || type == 'year') {
    _this.onkeydown = _this.onkeyup = _this.onkeypress = numCheck;
  }
}

for (let i = 0; i < a.length; i++) {
  check(a[i]);
  addKeyEvent(a[i]);

  a[i].addEventListener('blur', function () {
    let _this = this,
      flag = true;

    check(_this, flag);
  });
}


let mail = document.getElementById('email');

function mailCheck() {
  let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    err = this.parentNode.querySelector('.status'),
    label = this.parentNode.querySelector('label');

  if (!pattern.test(this.value)) {
    err.classList.add('invalid');
    this.style.borderBottom = '2px solid #c71414';
  } else {
    label.classList.add('filled');
    err.classList.remove('invalid');
    this.style.borderBottom = '';
  }
}

mail.addEventListener('keypress', mailCheck);
mail.addEventListener('blur', mailCheck);


function frameOpen(parentElement, closedElement) {
  return function () {
    event.preventDefault();
    document.querySelector(parentElement).classList.add('open');
    document.querySelector(parentElement).parentNode.setAttribute('style',
      `
        position: fixed;
        top: 10px;
        left: 0;
        right: 0;
        height: 100vh;
      `
    );

    let closeFrame = document.querySelector(closedElement);

    closeFrame.addEventListener('click', () => {
      document.querySelector(parentElement).classList.remove('open');
      document.querySelector(parentElement).parentNode.removeAttribute('style');
    });
  }
}

let frame1 = document.querySelector('.regolamentoLink');
frame1.addEventListener('click', frameOpen('.reglament', '.frame_reg_close'));

let frame2 = document.querySelector('.privacyLink');
frame2.addEventListener('click', frameOpen('.privacy', '.frame_priv_close'));

let frame3 = document.querySelector('.contattoLink');
frame3.addEventListener('click', frameOpen('.contact', '.frame_cont_close'));


document.querySelector('.btn').addEventListener('click', function (e) {
  // e.preventDefault();
  let form = document.querySelector('#action_form'),
    inputs = document.querySelectorAll('input'),
    err = document.querySelectorAll('.status');

  for (let i = 0; i < err.length; i++) {

    if (err[i].style.display == 'block') {
      form.onsubmit = function () {
        return false;
      };
    } else {
      for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value.length) {
          form.onsubmit = function () {
            return false;
          };
        } else {
          console.log(err[i]);
          form.onsubmit = function () {
            return true;
          }();
        }
      }
    }
  }
});
