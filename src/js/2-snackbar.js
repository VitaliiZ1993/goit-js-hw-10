import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const radioButtons = form.querySelectorAll('input[name="state"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const delay = parseInt(delayInput.value, 10); 
  const selectedState = document.querySelector('input[name="state"]:checked').value; 

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
      });
    })
    .catch((delay) => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
      });
    });
});
