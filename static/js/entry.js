
function verifyEntry() {
            let entry = document.getElementById('amount').value;
            let warning = document.getElementById('warning');
            let submitBtn = document.getElementById('btn-submit');

            // Define a regular expression for digits (0-9)
            let digitPattern = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;

            // Check if entry matches the digit pattern
            if (digitPattern.test(entry)) {
                warning.style.display = 'block'; // Display the warning
                submitBtn.disabled = true;
                entry.innerHTML = "";
            } else {
                warning.style.display = 'none'; // Hide the warning
                submitBtn.disabled = false;
                // Do something with the valid entry, e.g., submit the form
            }
        }