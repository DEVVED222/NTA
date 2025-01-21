function showDiv(index) {
    // Hide all question divs
    const allDivs = document.querySelectorAll('.content-div');
    allDivs.forEach(div => {
        div.style.display = 'none';
    });

    // Show the selected question div
    const selectedDiv = document.getElementById(`div-${index}`);
    if (selectedDiv) {
        selectedDiv.style.display = 'block';
    }

    // Change the background image for the clicked pagination item
    const paginationItems = document.querySelectorAll('.pagination li a');
    paginationItems.forEach((item, i) => {
        if (i === index - 1) {
            item.classList.add('que-not-answered'); // Add background to clicked item
        }
    });
}

function checkOption() {
    // Get the currently visible div
    const visibleDiv = document.querySelector('.content-div[style="display: block;"]');

    // Check radio buttons within the visible div
    const options = visibleDiv.querySelectorAll('input[type="radio"]');
    let isOptionSelected = false;

    options.forEach((option) => {
        if (option.checked) {
            isOptionSelected = true;
        }
    });

    // Show alert if no option is selected
    if (!isOptionSelected) {
        alert("Please choose an option.");
    }
}

function clearOptions() {
    const visibleDiv = document.querySelector('.content-div[style="display: block;"]');
    const options = visibleDiv.querySelectorAll('input[type="radio"]');

    options.forEach((option) => {
        option.checked = false; // Clear the selection
    });
}

