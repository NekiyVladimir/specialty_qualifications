//document.querySelector('.one').addEventListener('click', function() {
//	this.classList.toggle('is-active');
//});

const element = document.querySelector('.one');
const searchArea = document.querySelector('.one-text');
const listItems = document.querySelectorAll('.popup p');
const selectedItem = document.querySelector('.selected-item');
const clearSelection = document.querySelector('.clear-selection');
const icon = document.querySelector('.dropdown-arrow');

element.addEventListener('click', function(event) {
    this.classList.toggle('is-active');
    icon.classList.toggle('rotated');
    event.stopPropagation(); // Останавливает всплытие события
});

document.addEventListener('click', function() {
    element.classList.remove('is-active');
    icon.classList.remove('rotated');
});


const dropdown = document.querySelector('.one-text');

dropdown.addEventListener('click', function(event) {
    this.classList.toggle('is-active');
    event.stopPropagation(); // Останавливает всплытие события
});

document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
});

const popup = document.querySelector('.popup');

element.addEventListener('click', function(event) {
    popup.classList.toggle('visible');
    event.stopPropagation();
});

document.addEventListener('click', function() {
    popup.classList.remove('visible');
});



searchArea.addEventListener('input', function() {
    const filter = searchArea.value.toLowerCase();
    listItems.forEach(item => {
        if (item.textContent.toLowerCase().startsWith(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

listItems.forEach(item => {
    item.addEventListener('click', function() {
        selectedItem.textContent = `Вы выбрали: ${item.textContent}`;
        selectedItem.classList.remove('hidden');
    });
});

clearSelection.addEventListener('click', function() {
    selectedItem.textContent = '';
    selectedItem.classList.add('hidden');
    clearSelection.classList.add('hidden');
});
