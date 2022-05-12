const initMainscreenForm = () => {
    
    const stateSelectEl = document.getElementById('mainscreen-state-select');
    const stateSelect = new Select(
        stateSelectEl,
        {
            className: 'mainscreen-form__select',
            placeholder: 'All States',
        },
    );
    stateSelect.init();
};;

document.addEventListener('DOMContentLoaded', () => {
    initMainscreenForm();
});