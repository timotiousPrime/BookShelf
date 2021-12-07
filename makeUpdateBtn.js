// TODO: Create module for this component
export function makeUpdateBtn() {
    const btnDiv = document.querySelector('.d-grid');
    const updateBtn = document.createElement('button');

    btnDiv.classList.add('gap-2');

    updateBtn.setAttribute('id', 'updateBtn');
    updateBtn.textContent = 'Update Book';
    updateBtn.setAttribute('type', 'submit');
    updateBtn.classList.add('btn', 'btn-success', 'btn-lg');

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id', 'cancelBtn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.classList.add('btn', 'btn-danger', 'btn-lg');

    btnDiv.appendChild(updateBtn);
    btnDiv.appendChild(cancelBtn);
}
