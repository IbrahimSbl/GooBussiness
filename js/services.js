function redirectToForm(plan, price) {
    //Adding a custom CSS to the selected plan card
    //First  removing any previously added classes
    let plans = document.getElementsByClassName('service-plan');
    for (i = 0; i < plans.length; i++) {
        //Check if Id  matches with the clicked one 
        // Id is the first part of plan e.g id="Standard" plan="Standard Plan"
        if (plans[i].id == plan.split(" ")[0]) {
            plans[i].classList.add('selected');
        } else {
            //else remove active class from other cards
            plans[i].classList.remove('selected');
        }
    }
    //Adding the selected plan to the form.
    document.getElementById('plan').value = plan;
    document.getElementById('selected-plan-name').innerHTML = "<span>Selected Plan : </span>" + plan;
    document.getElementById('selected-plan-price').innerHTML = "<span>Price : </span>" + price + " $";
    //Show the selected plan by adding active class to it.
    document.getElementsByClassName("unselected-plan")[0].style.display = "none";
    document.getElementsByClassName('selected-plan')[0].classList.add('selected-plan-active');

}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('order').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        var emailInput = document.getElementById('email');
        var hiddenInput = document.getElementById('plan');

        // Get input values
        var email = emailInput.value.trim();
        var hiddenValue = hiddenInput.value.trim();

        // Validate email format
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate hidden input
        if (hiddenValue === '') {
            alert('Please Choose a Service Plan.');
            return;
        }

        // If validation passes, submit the form
        this.submit();
    });

    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
        return emailRegex.test(email);
    }
});