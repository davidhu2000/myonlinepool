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
