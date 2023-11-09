    // Retrieve the Python dictionary keys passed to the template
    const keys = {{ category_selection | tojson | safe }};
        
    // Function to create select options using the keys
    function createSelectOptions(keys) {
        const select = document.getElementById('category');
        
        keys.forEach(key => {
            const option = document.createElement('option');
            option.value = key; // Use the key as the value for the option
            option.text = key; // Use the key itself as the text of the option
            select.appendChild(option);
        });
    }
    
    // Call the function to create select options
    createSelectOptions(keys);