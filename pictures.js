//slideshow homepage

document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "https://ihworld.com/media/1285/freiburg-piccy.jpg",
        "https://visit.freiburg.de/extension/portal-freiburg/var/storage/images/media/bibliothek/alle-anderen-bilder-1200x800px/01-fuehlen/historische-altstadt/schlossberg/schlossberg-copyright-fwtm-schoenen/169068-1-ger-DE/schlossberg-copyright-fwtm-schoenen_grid_medium.jpg",
        "https://i.pinimg.com/originals/27/61/b4/2761b42c45a4e9368cedeb43363d127b.jpg",
        "https://static.wixstatic.com/media/nsplsh_7a882081d3094611831a92f836bddf5b~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_7a882081d3094611831a92f836bddf5b~mv2.jpg",
        "https://www.mymove.com/wp-content/uploads/2018/05/Friends-moving_Geber86_Getty-Images.jpg"
    ];
    
    var imageHead = document.getElementById("helperImage");
    var i = 0;
    
    setInterval(function() {
        imageHead.src = images[i];
        i = (i + 1) % images.length; // Use modulo to cycle through images
    }, 7000);
});    


document.addEventListener("DOMContentLoaded", function() {
    var imag = [
        "https://visit.freiburg.de/extension/portal-freiburg/var/storage/images/media/bibliothek/alle-anderen-bilder-1200x800px/02-planen/freiburg-entdecken-und-erkunden/freiburg-highlights-c-fwtm-polkowski/180864-1-ger-DE/freiburg-highlights-c-fwtm-polkowski_grid_large.jpg",
        "https://visit.freiburg.de/extension/portal-freiburg/var/storage/images/media/bibliothek/alle-anderen-bilder-1200x800px/01-fuehlen/winter-rubrik/freiburg-weihnachtsmarkt_lichtorte-im-advent-c-fwtm-schoenen/142090-1-ger-DE/freiburg-weihnachtsmarkt_lichtorte-im-advent-c-fwtm-schoenen_front_medium.jpg",
        "https://www.livegigs.de/mediadb/cache/1800x1200/ZMF-Festivalausblick-credit-Klaus-Polkowski.jpg"
    ];
    
    var imagHead = document.getElementById("eventImage");
    var i = 0;
    
    setInterval(function() {
        imagHead.src = imag[i];
        i = (i + 1) % imag.length; // Use modulo to cycle through images
    }, 7000);
}); 


//search function in profile page

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchBtn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the form submission (if applicable)
        filterProfiles();
        toggleSliderPopup(); // Close the slider after filtering
    });

    // Function to handle opening the slider on anchor link click
    const sliderLink = document.querySelector('.search a[href="#slider"]');
    sliderLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleSliderPopup(); // Toggle the slider visibility
    });

    const resetLink = document.querySelector('.search a[href="#reset"]');
    resetLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        resetfilterProfile(); // reset filter
        closeSliderPopup(); // Toggle the slider visibility
        closeUserPopup();
    });

    document.getElementById('user-searchBtn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the form submission (if applicable)
        UserProfiles();
        toggleUserPopup(); // Close the user search popup after filtering
    });

    // Function to handle opening the user search popup on anchor link click
    const userSliderLink = document.querySelector('.search a[href="#search_user"]');
    userSliderLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleUserPopup(); // Toggle the user search popup visibility
    });
});

function filterProfiles() {
    const selectedCategory = document.getElementById('cat').value.toLowerCase();
    const selectedAge = parseInt(document.getElementById('age').value); // Get selected age as an integer
    const profileElements = document.querySelectorAll('.profile');

    profileElements.forEach(profile => {
        const categories = profile.querySelector('.categories').textContent.toLowerCase(); // get categories
        const profileCategories = categories.split(',').map(category => category.trim()); // split categories by comma

        const ageRegex = /\b(\d{1,2})\b/g; // Regular expression to extract age from profile text
        const ageMatch = profile.querySelector('h3').textContent.match(ageRegex); // Match age from profile

        const profileAge = ageMatch ? parseInt(ageMatch[0]) : null; // Get the age if available

        const categoryMatch = selectedCategory === 'all' || profileCategories.includes(selectedCategory); // check category match
        const ageCondition = isNaN(selectedAge) || (profileAge !== null && profileAge === selectedAge); // Check if ages match or no specific age is selected

        if (categoryMatch && ageCondition) {
            profile.style.display = 'block'; // Show the profile
        } else {
            profile.style.display = 'none'; // Hide the profile
        }
    });
}

function toggleSliderPopup() {
    const sliderPopup = document.getElementById('slider');
    if (sliderPopup.style.display === 'none' || sliderPopup.style.display === '') {
        sliderPopup.style.display = 'block'; // Show the slider popup if it's closed
    } else {
        sliderPopup.style.display = 'none'; // Hide the slider popup if it's open
    }
}

function resetfilterProfile() {
    const selectedCategory = "all";
    const selectedAge = NaN;
    const profileElements = document.querySelectorAll('.profile'); // get category from profile

    const categorySelect = document.getElementById('cat');
    categorySelect.selectedIndex = 0; // Set the category dropdown to 'All'

    const ageInput = document.getElementById('age');
    ageInput.value = ''; // Clear the age input field

    const userInputElement = document.getElementById('user');
    userInputElement.value = '';      // Clear the user input field


    profileElements.forEach(profile => {
        const categories = profile.querySelector('.categories').textContent.toLowerCase(); // get categories
        const profileCategories = categories.split(',').map(category => category.trim()); // split categories by comma

        const ageRegex = /\b(\d{1,2})\b/g; // Regular expression to extract age from profile text
        const ageMatch = profile.querySelector('h3').textContent.match(ageRegex); // Match age from profile

        const profileAge = ageMatch ? parseInt(ageMatch[0]) : null; // Get the age if available

        const categoryMatch = selectedCategory === 'all' || profileCategories.includes(selectedCategory); // check category match
        const ageCondition = isNaN(selectedAge) || (profileAge !== null && profileAge === selectedAge); // Check if ages match or no specific age is selected

        if (categoryMatch && ageCondition) {
            profile.style.display = 'block'; // Show the profile
        } else {
            profile.style.display = 'none'; // Hide the profile
        }
    });
}

function closeSliderPopup() {
    const sliderPopup = document.getElementById('slider');
    sliderPopup.style.display = 'none';
}

function UserProfiles() {
    const selectedUser = document.getElementById('user').value.toLowerCase(); // Get selected user as a lowercase string
    const profileElements = document.querySelectorAll('.profile');

    profileElements.forEach(profile => {
        const profileNameElement = profile.querySelector('h3');
        const profileNameText = profileNameElement.innerText;
        const profileName = profileNameText.split(',')[0].trim().toLowerCase(); // Extract and convert to lowercase

        const userMatch = selectedUser === 'all' || profileName.includes(selectedUser.toLowerCase()); // Check for a partial name match

        if (userMatch) {
            profile.style.display = 'block'; // Show the profile
        } else {
            profile.style.display = 'none'; // Hide the profile
        }
    });

    // Append search to search history only if it doesn't exist already
    var selectElement = document.getElementById("s-history");

    // Check if the option already exists
    var optionExists = Array.from(selectElement.options).some(option => option.value.toLowerCase() === selectedUser);

    if (!optionExists) {
        var newOption = document.createElement("option");
        newOption.value = selectedUser;
        newOption.text = selectedUser;
        selectElement.add(newOption);
    }
}


function toggleUserPopup() {
    const sliderPopup = document.getElementById('search_user');
    if (sliderPopup.style.display === 'none' || sliderPopup.style.display === '') {
        sliderPopup.style.display = 'block'; // Show the slider popup if it's closed
    } else {
        sliderPopup.style.display = 'none'; // Hide the slider popup if it's open
    }
}


// multiple Select
document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('choose-category');
    let isDragging = false;

    selectElement.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isDragging = true;

        const option = e.target;
        option.selected = !option.selected;

        // Update visual feedback for selection
        option.classList.toggle('selected');
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    selectElement.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const option = e.target;
            option.selected = !option.selected;

            // Update visual feedback for selection
            option.classList.toggle('selected');
        }
    });
});
