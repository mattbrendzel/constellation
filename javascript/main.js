const resetMenuSelection = function () {
  document.querySelectorAll('.menu-item').forEach(element => {
    element.classList.remove('selected');
  });
};

const setContentText = function(str) {
  document.querySelector('#content').textContent = str;
}

const selectNavMenuItemLabel = function (e) {
  this.parentNode.classList.add('selected');
};

const selectMenuDropdownItem = function (e) {
  setContentText(e.target.dataset.text);
  resetMenuSelection();
}

window.onload = function() {
  document.querySelectorAll('.menu-item').forEach(element => {
    element.addEventListener('mouseenter', resetMenuSelection);
  })
  document.querySelectorAll('.menu-item-label').forEach((element, i) => {
    element.addEventListener('click', selectNavMenuItemLabel);
    if (i === 0) { // For "Home" specifically
      element.addEventListener('click', () => setContentText(''));
    }
  });
  document.querySelectorAll('.menu-item-dropdown li').forEach(element => {
    element.addEventListener('click', selectMenuDropdownItem);
  })

  document.querySelector('article').addEventListener('mouseenter', resetMenuSelection);
};
