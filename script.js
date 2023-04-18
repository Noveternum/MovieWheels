
const rentalForm = document.querySelector('#rental-form');
const cartBody = document.querySelector('#cart-body');
const total = document.querySelector('#total');
            // Define rental prices
  const prices = {
    small: 50,
    medium: 75,
    large: 100
  };
  
  rentalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get number of rentals for each size
    const smallQty = parseInt(rentalForm.elements['small'].value);
    const mediumQty = parseInt(rentalForm.elements['medium'].value);
    const largeQty = parseInt(rentalForm.elements['large'].value);
    
    // Calculate subtotal for each size
    const smallSubtotal = smallQty * prices['small'];
    const mediumSubtotal = mediumQty * prices['medium'];
    const largeSubtotal = largeQty * prices['large'];
    
    // Calculate total
    const cartTotal = smallSubtotal + mediumSubtotal + largeSubtotal;
    
    // Create cart rows
    cartBody.innerHTML = '';
    if (smallQty > 0) {
      cartBody.innerHTML += `
        <tr>
          <td>Small Minibus (up to 8 passengers)</td>
          <td>${smallQty}</td>
          <td>$${prices['small']}</td>
          <td>$${smallSubtotal}</td>
        </tr>
      `;
    }
    if (mediumQty > 0) {
      cartBody.innerHTML += `
        <tr>
          <td>Medium Minibus (up to 12 passengers)</td>
          <td>${mediumQty}</td>
          <td>$${prices['medium']}</td>
          <td>$${mediumSubtotal}</td>
        </tr>
      `;
    }
    if (largeQty > 0) {
      cartBody.innerHTML += `
        <tr>
          <td>Large Minibus (up to 16 passengers)</td>
          <td>${largeQty}</td>
         
          <td>$${prices['large']}</td>
              <td>$${largeSubtotal}</td>
            </tr>
          `;
        }
        // Display total
    total.innerHTML = `
      <p>Total: $${cartTotal}</p>
    `;
  });


// 
const bgImage = document.querySelector('.bg-image');

function changeBackgroundImage() {
  let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
  let randomIndex = Math.floor(Math.random() * images.length);
  let randomImage = images[randomIndex];
  bgImage.style.backgroundImage = `url('${randomImage}')`;
}

setInterval(changeBackgroundImage, 20000); // Change background image every 10 seconds
