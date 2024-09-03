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

document.addEventListener('click', function(event) {
    const select2 = document.querySelector('.select_2');
    const two = document.querySelector('.two');
    const arrow2 = document.querySelector('.two-arrow');
    const twoPopup = document.querySelector('.two-popup');
    const dropdown2 = document.querySelector('.dropdown-select_2')

    if (event.target === twoPopup) {
        event.stopPropagation();
    }

    if (event.target === two) {
        twoPopup.classList.toggle('visible');
        arrow2.classList.toggle('rotated');
        dropdown2.classList.toggle('active2');
        event.stopPropagation();
    } else if (!select2.contains(event.target)){
        twoPopup.classList.remove('visible');
        arrow2.classList.remove('rotated');
        dropdown2.classList.remove('active2');
    }
    
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.two-input');
    const placeholderResalt = document.querySelector('.two-placeholder-resalt');
    const twoPlaceholder = document.querySelector('.two-placeholder');
    const button = document.querySelector('.btn-education');
    const twoPopup = document.querySelector('.two-popup');
    const arrow2 = document.querySelector('.two-arrow');
    const twoClear = document.querySelector('.two-clear-selection');
    const dropdown2 = document.querySelector('.dropdown-select_2');

    twoClear.style.display = 'none';
    placeholderResalt.style.display = 'none';
    twoPlaceholder.style.display = 'display';
  
    button.addEventListener('click', function() {
        twoPopup.classList.remove('visible');
        arrow2.classList.remove('rotated');
        dropdown2.classList.remove('active2');

        let checkedCount = 0;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkedCount++;
            }
        });
  
        if (checkedCount > 0) {
            placeholderResalt.textContent = `Тип учебного заведения (выбрано: ${checkedCount})`;
            placeholderResalt.style.display = 'block';
            twoClear.style.display = 'block';
            twoPlaceholder.style.display = 'none';
        } else {
            placeholderResalt.textContent = '';
            twoClear.style.display = 'none';
            placeholderResalt.style.display = 'none';
            twoPlaceholder.style.display = 'block';
        };
    });

    twoClearSelection.addEventListener('click', function() {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });

        placeholderResalt.textContent = '';
        twoPlaceholder.style.display = 'block';
        twoClear.style.display = 'none';
        placeholderResalt.style.display = 'none';
    });
});

const twoClearSelection = document.querySelector('.two-clear-selection');
const placeholderResalt = document.querySelector('.two-placeholder-resalt');

twoClearSelection.addEventListener('click', function() {
    placeholderResalt.textContent = '';
    twoPlaceholder.style.display = 'block';
});



const two = document.querySelector('.two');
const arrow2 = document.querySelector('.two-arrow');
const popup2 = document.querySelector('two-popup');
const dropdown2 = document.querySelector('dropdown-select_2')


//two.addEventListener('click', function(event) {
//    arrow2.classList.toggle('rotated');
//    popup2.classList.toggle('active');

//    event.stopPropagation(); // Останавливает всплытие события
//});


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectAllCheckbox = document.querySelector('input[id="check1"]');

document.addEventListener('DOMContentLoaded', function() {
  selectAllCheckbox.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(function(checkbox) {
        if (checkbox !== selectAllCheckbox) {
          checkbox.checked = true;
        }
      });
    } else {
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
      });
    }
  });

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this !== selectAllCheckbox && this.checked) {
        selectAllCheckbox.checked = false;
      } else if (this === selectAllCheckbox && !this.checked) {
        checkboxes.forEach(function(cb) {
          cb.checked = false;
        });
      }
    });
  });
});



























