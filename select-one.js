//document.querySelector('.one').addEventListener('click', function() {
//	this.classList.toggle('is-active');
//});

const element = document.querySelector('.one');
const searchArea = document.querySelector('.one-text');
const listItems = document.querySelectorAll('.popup p');
const selectedItem = document.querySelector('.selected-item');
const clearSelection = document.querySelector('.clear-selection');
const icon = document.querySelector('.dropdown-arrow');
const dropdown = document.querySelector('.one-text');

element.addEventListener('click', function(event) {
    this.classList.toggle('is-active');
    if (selectedItem.textContent.trim() === '') {
        searchArea.classList.toggle('one-text_is-active');
    }
    icon.classList.toggle('rotated');
    event.stopPropagation(); // Останавливает всплытие события
});

document.addEventListener('click', function() {
    if (selectedItem.textContent.trim() === '') {
        element.classList.remove('is-active');
        searchArea.classList.remove('one-text_is-active');
    }
    //element.classList.remove('is-active');
    icon.classList.remove('rotated');
});




dropdown.addEventListener('click', function(event) {
    //this.classList.toggle('is-active');
    if (selectedItem.textContent.trim() !== '') {
        this.classList.remove('is-active');
    }
    event.stopPropagation(); // Останавливает всплытие события
});

document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
});

const popup = document.querySelector('.popup');

const elements = document.querySelectorAll('.popup-item');
let isOpen = false;

element.addEventListener('click', function(event) {
    if (!isOpen) {
        // Показываем только первые 10 элементов
        for (let i = 0; i < elements.length; i++) {
            if (i < 10) {
                elements[i].style.display = 'block';
            } else {
                elements[i].style.display = 'none';
            }
        }
        popup.classList.add('visible');
    } else {
        // Скрываем все элементы
        elements.forEach(item => {
            item.style.display = 'none';
        });
        popup.classList.remove('visible');
    }

    isOpen = !isOpen;
    event.stopPropagation();
});

//element.addEventListener('click', function(event) {
//    popup.classList.toggle('visible');
//    event.stopPropagation();
//});

document.addEventListener('click', function() {
    popup.classList.remove('visible');
    elements.forEach(item => {
        item.style.display = 'none';
    });
    isOpen = false;
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
        selectedItem.textContent = `${item.textContent}`;
        searchArea.classList.remove('one-text_is-active');
        clearSelection.style.display = 'block';
        selectedItem.classList.remove('hidden');
    });
});

clearSelection.addEventListener('click', function() {
    selectedItem.textContent = '';
    clearSelection.style.display = 'none';
    selectedItem.classList.add('hidden');
    clearSelection.classList.add('hidden');
});


function handleClick(event) {
    const clickedElement = event.currentTarget;
    const tabName = clickedElement.querySelector('p').textContent;
    
 
    updateClickedTabName(tabName);
}

function updateClickedTabName(tabName) {
    const clickedTabNameElement = document.getElementById('clickedTabName');
    clickedTabNameElement.textContent = tabName.toUpperCase();
}

function toggleDivVisibility() {
    if (selectedItem.textContent.trim() !== '') {
        clearSelection.style.display = 'block'; // Показать div
    } else {
        clearSelection.style.display = 'none'; // Скрыть div
    }
}

toggleDivVisibility();
selectedItem.addEventListener('input', toggleDivVisibility);









const two = document.querySelector('.two');
const arrow2 = document.querySelector('.two-arrow');


two.addEventListener('click', function(event) {
    arrow2.classList.toggle('rotated');
    event.stopPropagation(); // Останавливает всплытие события
});
