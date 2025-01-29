document.addEventListener("DOMContentLoaded", function () {
    // Order Confirmation Functionality
    document.querySelectorAll('.order-btn').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Get product details
            const productName = this.getAttribute('data-product');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            const quantityId = this.getAttribute('data-quantity');
            const quantity = parseInt(document.getElementById(quantityId).value);

            if (isNaN(quantity) || quantity <= 0) {
                alert("Please enter a valid quantity.");
                return;
            }

            // Calculate total price
            const totalPrice = productPrice * quantity;

            // Create confirmation message
            const confirmationMessage = `
                <div class="order-confirmation">
                    <h4>Order Confirmation</h4>
                    <p>Thank you for ordering <strong>${productName}</strong>.</p>
                    <p>Quantity: <strong>${quantity}</strong></p>
                    <p>Total Price: <strong>$${totalPrice.toFixed(2)}</strong></p>
                    <p>Your cake will be ready for pickup soon!</p>
                </div>
            `;

            // Create a new div for the confirmation message
            const confirmationDiv = document.createElement('div');
            confirmationDiv.innerHTML = confirmationMessage;

            // Append the confirmation message below the product section
            document.getElementById('product').appendChild(confirmationDiv);

            // Apply animation
            confirmationDiv.style.opacity = '0'; // Start hidden
            confirmationDiv.style.transform = 'translateY(20px)'; // Start below
            confirmationDiv.style.transition = 'opacity 0.5s, transform 0.5s'; // Transition for animations
            confirmationDiv.style.color = 'green';
            confirmationDiv.style.backgroundColor = 'white';
            confirmationDiv.style.padding = '10px';
            confirmationDiv.style.margin = '5px';
            confirmationDiv.style.display = 'inline-block';
            confirmationDiv.style.borderRadius = '5px';



            setTimeout(() => {
                confirmationDiv.style.opacity = '1'; // Fade in
                confirmationDiv.style.transform = 'translateY(0)'; // Slide up
            }, 10); // Short timeout to ensure the styles apply
        });
    });

    // Show Reservation Form Functionality
    const showFormButton = document.getElementById("showFormButton");
    const reservationFormContainer = document.getElementById("reservationFormContainer");

    if (showFormButton && reservationFormContainer) {
        showFormButton.addEventListener("click", function () {
            reservationFormContainer.style.display = "block";
            showFormButton.style.display = "none"; // Hide the button
        });
    }

    // Form Submission Handling with Validation
    const reservationForm = document.getElementById("reservationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (reservationForm && confirmationMessage) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Perform validation
            if (!reservationForm.checkValidity()) {
                reservationForm.classList.add("was-validated");
                return;
            }

            // If valid, display confirmation message
            confirmationMessage.style.display = "block";

            // Optional: Reset the form fields
            reservationForm.reset();
            reservationForm.classList.remove("was-validated"); // Remove validation styles for future entries
        });
    }
});
//newsletter click

  function signUp() {
    // Get the input value
    const emailInput = document.getElementById("emailInput").value;
    const messageElement = document.getElementById("message");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (emailRegex.test(emailInput)) {
      messageElement.style.color = "green";
      messageElement.textContent = "Thank you for signing up!";
    } else {
      messageElement.style.color = "red";
      messageElement.textContent = "Please enter a valid email address.";
    }

    // Add animation after 1 minute
    setTimeout(() => {
      messageElement.style.transition = "opacity 2s";
      messageElement.style.opacity = "0"; // Fade out
    }, 2000); // 1 minute delay
  }



