const mondayInput = document.querySelector('input[name="monday"]')
const tuesdayInput = document.querySelector('input[name="tuesday"]')
const wednesdayInput = document.querySelector('input[name="wednesday"]')
const thursdayInput = document.querySelector('input[name="thursday"]')
const fridayInput = document.querySelector('input[name="friday"]')
const saturdayInput = document.querySelector('input[name="saturday"]')
const sundayInput = document.querySelector('input[name="sunday"]')

mondayInput.addEventListener('input', () => {
    localStorage.setItem('mondayTask', mondayInput.value);
});

tuesdayInput.addEventListener('input', () => {
    localStorage.setItem('tuesdayTask', tuesdayInput.value);
});

wednesdayInput.addEventListener('input', () => {
    localStorage.setItem('wednesdayTask', wednesdayInput.value);
});

thursdayInput.addEventListener('input', () => {
    localStorage.setItem('thursdayTask', thursdayInput.value);
});

fridayInput.addEventListener('input', () => {
    localStorage.setItem('fridayTask', fridayInput.value);
});

saturdayInput.addEventListener('input', () => {
    localStorage.setItem('saturdayTask', saturdayInput.value);
});

sundayInput.addEventListener('input', () => {
    localStorage.setItem('sundayTask', sundayInput.value);
});

windowaddEventListner('load', () => {
    mondayInputvalue = localStorage.getItem('mondayTask') ||'';
    tuesdayInputvalue = localStorage.getItem('tuesdayTask') ||'';
    wednesdayInputvalue = localStorage.getItem('wednesdayTask')||'';
    thursdayInputvalue = localStorage.getItem('thursdayTask')||'';
    fridayInputvalue = localStorage.getItem('fridayTask')||'';
    saturdayInputvalue = localStorage.getItem('saturdayTask')||'';
    sundayInputvalue = localStorage.getItem('sundayTask')||''

})





