document.addEventListener('DOMContentLoaded', (event) => {
    var options = document.querySelectorAll('.options');

    options.forEach(function(option) {
        option.addEventListener('click', function() {
            let isSelected = this.style.backgroundColor === 'rgb(14, 135, 132)'; 
            let siblingOptions = this.closest('.questions').querySelectorAll('.options');
            siblingOptions.forEach(opt => {
                opt.style.backgroundColor = '';
                opt.style.color = '';
            });

            if (!isSelected) {
                this.style.backgroundColor = '#0E8784'; 
                this.style.color = 'white';
                updateOrderSummary(this);
            } else {
                updateOrderSummary(this, true);
            }
        });
    });
});
function updateOrderSummary(selectedOption) {
    let category = selectedOption.closest('.questions').querySelector('.question-wrapper h1').textContent.trim();
    let selectedText = selectedOption.querySelector('h1').textContent.trim();

    let categoryToSpanId = {
        'How do you drink your coffee': 'coffeeType',
        'What type of coffee?': 'beanType',
        'How much would you like?': 'quantity',
        'Want us to grind them?': 'grindOption',
        'How often should we deliver?': 'delivery'
    };

    let spanId = categoryToSpanId[category];
    if (spanId) {
        let targetSpan = document.getElementById(spanId);
        if (targetSpan.textContent === selectedText) {
            targetSpan.textContent = '---------';
        } else {
            targetSpan.textContent = selectedText;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var arrows = document.querySelectorAll('.question-wrapper img');

    arrows.forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            var optionWrap = arrow.closest('.questions').querySelector('.option-wrap');

            optionWrap.classList.toggle('hidden');

            if (arrow.style.transform === "rotate(180deg)") {
                arrow.style.transform = "rotate(0deg)";
            } else {
                arrow.style.transform = "rotate(180deg)";
            }
        });
    });
});
function areAllOptionsFilled() {
    let placeholders = document.querySelectorAll('.summary-card .custom');
    for (let placeholder of placeholders) {
        if (placeholder.textContent.trim() === '---------') {
            return false;
        }
    }
    return true;
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal, "Create your plan" button, and "Checkout" button
    var modal = document.querySelector('.check-background');
    var btnCreatePlan = document.querySelector('.btn-plan-create');
    var btnCheckout = modal.querySelector('button span');

    // Event listener to show the modal
    btnCreatePlan.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Event listener for the "Checkout" button inside the modal
    btnCheckout.parentElement.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
        window.location.reload(); // Refresh the page
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the toggle button and the side-nav
  var toggleButton = document.getElementById('navToggle');
  var sideNav = document.querySelector('.side-nav');
  var closeButton = document.getElementById('close-nav'); 

  // Function to toggle the side-nav visibility
  function toggleSideNav() {
    sideNav.classList.toggle('active');
  }

  // Function to hide the side-nav
  function closeSideNav() {
    sideNav.classList.remove('active');
  }

  // Event listener for the toggle button
  toggleButton.addEventListener('click', toggleSideNav);

  // Event listener for the close button inside side-nav
  closeButton.addEventListener('click', closeSideNav);
});

