//display filename when user upload a file
const files_inputs = document.querySelectorAll('input[type="file"]');
const text_indicators = document.querySelectorAll('.input-text--file');

files_inputs.forEach(f_input => {
    f_input.addEventListener('change', e => {
        let data_for = f_input.id;

        text_indicators.forEach(text_indic => {
            if(text_indic.getAttribute('data-for') == data_for){
                text_indic.innerHTML = f_input.files[0].name
            }
        })
    })
})