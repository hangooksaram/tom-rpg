export const validateForm = (elList: HTMLInputElement[]) => {
  let result = true;
  elList.map((el) => {
    if (!el.value) {
      result = false;
    }
  });

  return result;
};
