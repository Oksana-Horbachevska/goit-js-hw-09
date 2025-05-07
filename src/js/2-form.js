const formElem = document.querySelector('form');

const formData = {
  email: '',
  message: '',
};

const storageKey = 'feedback-form-state';

//========== Відновлення даних із localStorage при завантаженні ========
const savedData = localStorage.getItem(storageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  formElem.elements.email.value = formData.email;
  formElem.elements.message.value = formData.message;
}

//============ Збереження даних у localStorage Інпуті ========
formElem.addEventListener('input', handleFormInput);
function handleFormInput(event) {
  formData.email = formElem.elements.email.value.trim();
  formData.message = formElem.elements.message.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

//================== Обробка submit =============================
formElem.addEventListener('submit', handleBtnSubmit);
function handleBtnSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  formElem.reset();
  formData.email = '';
  formData.message = '';
}
