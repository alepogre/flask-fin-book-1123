// Your dictionary/object with keys
const categories = {
    Activities: [
        "Day Trips",
        "Gathering",
        "Other",
        "Outings",
        "Restaurant",
        "Travel",
        "Wellness"
    ],
    Baby: [
        "Activities",
        "Clothing",
        "Education",
        "Fees",
        "Food",
        "Furniture",
        "Gadgets",
        "Kindergarten",
        "Toys"
    ],
    Cash: [
        "Pay In",
        "Withdrawal"
    ],
    Education: [
        "Books",
        "Certifications",
        "Courses",
        "Other",
        "University",
        "Printing"
    ],
    Fees: [
        "Banking",
        "Official",
        "Other",
        "Penalties",
        "University"
    ],
    Food: [
        "Delivery",
        "Groceries"
    ],
    Gifts: [
        "Gifts",
        "Other",
        "Christmas",
        "Birthday"
    ],
    Healthcare: [
        "Doctor / Hospital",
        "Other",
        "Pharmacy"
    ],
    Income: [
        "Dividends",
        "One Time",
        "Other",
        "Project",
        "Salary"
    ],
    Insurance: [
        "Car",
        "Health",
        "Travel",
        "Other",
        "House"
    ],
    Living: [
        "Apartment",
        "Electricity",
        "Garage",
        "Heating",
        "Other",
        "Rent"
    ],
    Mobility: [
        "Car Taxation",
        "Car Washing",
        "Flight",
        "Fuel",
        "Leasing",
        "Maintenance",
        "Other",
        "Parking",
        "Public Transport",
        "Rental Car",
        "Taxi",
        "Train"
    ],
    Other: ["Tobacco", "Other"],
    Services: [
        "Advisory",
        "Barber",
        "Crafting",
        "Law",
        "Medical",
        "Nail Studio",
        "Other",
        "Sunbank"
    ],
    Shopping: [
        "Beauty Products",
        "Clothing",
        "Furniture",
        "Gadgets",
        "Household",
        "Other",
        "Skin Care",
        "Technology",
        "Baby"
    ],
    Subscriptions: [
        "Cellphone",
        "Entertainment",
        "Gym",
        "Internet",
        "Other",
        "PrePaid",
        "Software"
    ],
    Work: [
        "Credit Card",
        "Other",
        "Work Expenses",
        "Equipment"
    ],
};

const accounts = {
    SPA: "SPA",
    SPR: "SPR",
    ING: "ING",
    ComDirect: "ComDirect",
    TradeRepublic: "TradeRepublic",
};

const types = {
    Regular: "Regular",
    Variable: "Variable",
    Fixed: "Fixed",
    OneTime: "One-Time",
};

const audience = {
    Alex: "Alex",
    Razan: "Razan",
    Dana: "Dana",
    Family: "Family",
    Other: "Other"
};

// Function to create select options
function createSelectOptions(selected_dict, id_name) {
  const select = document.getElementById(id_name);

  for (const key in selected_dict) {
    if (selected_dict.hasOwnProperty(key)) {
      const option = document.createElement("option");
      option.value = key; // Use the key as the value for the option
      option.text = key; // Use the corresponding value from the dictionary as the text of the option
      select.appendChild(option);
    }
  }
}

// Function to create sub-category options

// Object to store options for each main selection value

function updateSubCat() {
    let mainSelection = document.getElementById("category");
    let secondarySelection = document.getElementById("sub-category");
    
    // Clear existing options
    secondarySelection.innerHTML = "";
    
    // Get the selected value from the main selection
    let selectedValue = mainSelection.value;
    
    // Add options based on the selected value using the optionsDict
    categories[selectedValue].forEach(function(option) {
      addOption(secondarySelection, option, option);
    });
    }
    
    function addOption(selectElement, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
    }

// Call the function to create select options
createSelectOptions(selected_dict=categories, id_name="category");
createSelectOptions(selected_dict=audience, id_name="audience");
createSelectOptions(selected_dict=accounts, id_name="account");
createSelectOptions(selected_dict=types, id_name="type");

// Initial population of secondary selection based on the default value of main selection
updateSubCat();