document.addEventListener("DOMContentLoaded", function() {
    var Link = document.getElementById("link");

    Link.addEventListener("click", function() {
        window.location.href = "two.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var Linkmap = document.getElementById("linkmap");

    Linkmap.addEventListener("click", function() {
        window.location.href = "three.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var Linkform = document.getElementById("linkform");

    Linkform.addEventListener("click", function() {
        window.location.href = "four.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var Linkenter = document.getElementById("linkenter");

    Linkenter.addEventListener("click", function() {
        window.location.href = "five.html";
    });
});


function createIDInputBoxes() {
    const container = document.getElementById('Id-input-container');
    for (let i = 0; i < 10; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1; // Limit input to one character
        input.classList.add('input-box');
        input.name = 'input[]'; // Add name attribute for form submission
        input.addEventListener('input', function() {
            if (this.value && i < 9) {
                container.children[i + 1].focus();
            }
        });
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace') {
                if (i > -1) {
                    // Clear current input
                    this.value = '';
                    // Focus on previous input
                    container.children[i - 1].focus();
                }
                // Prevent default backspace behavior
                event.preventDefault();
            } else if (event.key === 'ArrowRight' && i < 9) {
                container.children[i + 1].focus();
            } else if (event.key === 'ArrowLeft' && i > 0) {
                container.children[i - 1].focus();
            } else if (event.key === 'ArrowRight' && i === 9) {
                // Set cursor after the number if at the end
                this.setSelectionRange(1, 1);
            }
        });
        container.appendChild(input);
    }
}

function createNameInputBoxes(){
const container = document.getElementById('Name-input-container');
container.style.display = 'flex'; // Set container to flex display
container.style.flexWrap = 'wrap'; // Enable flex-wrap to allow items to wrap to the next line
for (let j = 0; j < 2; j++) { // Create two lines
for (let i = 0; i < 25; i++) { // Create 25 input boxes for each line
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1; // Limit input to one character
    input.classList.add('input-box');
    input.name = 'input[]'; // Add name attribute for form submission
    input.addEventListener('input', function() {
        if (this.value && i < 24) {
            container.children[i + j*25 + 1].focus();
        }
    });
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace') {
            if (i > -1) {
                // Clear current input
                this.value = '';
                // Focus on previous input
                container.children[i - 1 + j*25].focus();
            }
            // Prevent default backspace behavior
            event.preventDefault();
        } else if (event.key === 'ArrowRight' && i < 24) {
            container.children[i + 1 + j*25].focus();
        } else if (event.key === 'ArrowLeft' && i > 0) {
            container.children[i - 1 + j*25].focus();
        } else if (event.key === 'ArrowRight' && i === 24) {
            // Set cursor after the number if at the end
            this.setSelectionRange(1, 1);
        }
    });
    container.appendChild(input);
}
}
}


const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

input1.addEventListener('input', function() {
if (this.value.length === this.maxLength) {
    input2.focus();
}
});

input2.addEventListener('input', function() {
if (this.value.length === 0) {
    input1.focus();
}
});

input1.addEventListener('keydown', function(event) {
if (event.key === 'Backspace' && this.value.length === 0) {
    event.preventDefault();
    input2.focus();
} else if (event.key === 'ArrowDown') {
    event.preventDefault();
    input2.focus();
}
});

input2.addEventListener('keydown', function(event) {
if (event.key === 'Backspace' && this.value.length === 0) {
    event.preventDefault();
    input1.focus();
} else if (event.key === 'ArrowUp') {
    event.preventDefault();
    input1.focus();
}
});





const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

input3.addEventListener('input', function() {
if (this.value.length === this.maxLength) {
    input4.focus();
}
});

input4.addEventListener('input', function() {
if (this.value.length === 0) {
    input3.focus();
}
});

input3.addEventListener('keydown', function(event) {
if (event.key === 'Backspace' && this.value.length === 0) {
    event.preventDefault();
    input4.focus();
} else if (event.key === 'ArrowDown') {
    event.preventDefault();
    input4.focus();
}
});

input4.addEventListener('keydown', function(event) {
if (event.key === 'Backspace' && this.value.length === 0) {
    event.preventDefault();
    input3.focus();
} else if (event.key === 'ArrowUp') {
    event.preventDefault();
    input3.focus();
}
});






// Create input boxes
createIDInputBoxes();
createNameInputBoxes();