const resetMenuSelection = function () {
  document.querySelectorAll('.menu-item').forEach(element => {
    element.classList.remove('selected');
  });
};

const selectNavMenuItemLabel = function (e) {
  this.parentNode.classList.add('selected');
};

const selectMenuDropdownItem = function (e) {
  document.querySelector('#content').textContent = e.target.dataset.text;
  resetMenuSelection();
}

window.onload = function() {
  document.querySelectorAll('.menu-item').forEach(element => {
    element.addEventListener('mouseenter', resetMenuSelection);
  })
  document.querySelectorAll('.menu-item-label').forEach(element => {
    element.addEventListener('click', selectNavMenuItemLabel);
  });
  document.querySelectorAll('.menu-item-dropdown li').forEach(element => {
    element.addEventListener('click', selectMenuDropdownItem);
  })

  document.querySelector('article').addEventListener('mouseenter', resetMenuSelection);
};
