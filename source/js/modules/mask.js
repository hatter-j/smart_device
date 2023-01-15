let setPhoneMask = function (e) {

  let el = e.target;
  let clearVal = el.dataset.phoneClear;
  let pattern = el.dataset.phonePattern;
  let matrixDef = '+7(___) ___-__-__';
  let matrix = pattern ? pattern : matrixDef;
  let i = 0;
  let def = matrix.replace(/\D/g, '');
  let val = e.target.value.replace(/\D/g, '');
  if (clearVal !== 'false' && e.type === 'blur') {
    if (val.length < matrix.match(/([\_\d])/g).length) {
      e.target.value = '';
      return;
    }
  }
  if (def.length >= val.length) {
    val = def;
  }
  e.target.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};

function initPhoneMask() {

  let phoneInputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phoneInputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, setPhoneMask);
    }
  }
}
export {initPhoneMask};
