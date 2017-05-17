export const toggleCover = () => {
  let settingsDropdown = document.getElementById('settings-dropdown');
  let accountDropdown = document.getElementById('account-dropdown');
  let cover = document.getElementById('dropdown-cover');

  if (cover.classList.contains('hidden')) {
    cover.classList.remove('hidden');
  } else {
    cover.classList.add('hidden');
  }

};
