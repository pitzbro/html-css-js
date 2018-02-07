console.log('hello this is the modal script')

function openModal() {
    console.log('the Modal has been pressed');
    var modal = document.getElementById('modal-wrapper');
    modal.classList.toggle('open');
}