// export const MODAL = {
//   SHOW_CONFIRM_FORM: 'modal/SHOW_CONFIRM_FORM',
//   HIDE_CONFIRM_FORM: 'modal/HIDE_CONFIRM_FORM',
//   SHOW_JOIN_FORM: 'modal/SHOW_JOIN_FORM',
//   HIDE_JOIN_FORM: 'modal/HIDE_JOIN_FORM'
// };

export const MODAL = {
  TOGGLE_CONFIRM_FORM: 'modal/TOGGLE_CONFIRM_FORM',
  TOGGLE_JOIN_FORM: 'modal/TOGGLE_JOIN_FORM'
};

export const toggleConfirmFormModal = () => ({
  type: MODAL.TOGGLE_CONFIRM_FORM
});

export const toggleJoinFormModal = () => ({
  type: MODAL.TOGGLE_JOIN_FORM
});


// export const showConfirmFormModal = () => ({
//   type: MODAL.SHOW_CONFIRM_FORM
// });

// export const showJoinFormModal = () => ({
//   type: MODAL.SHOW_JOIN_FORM
// });

// export const hideConfirmFormModal = () => ({
//   type: MODAL.HIDE_CONFIRM_FORM
// });

// export const hideJoinFormModal = () => ({
//   type: MODAL.HIDE_JOIN_FORM
// });
