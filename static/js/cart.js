const updateButtons = document.getElementsByClassName('update-cart');

for (let i = 0; i < updateButtons.length; ++i) {
    updateButtons[i].addEventListener('click', function () {
        const productID = this.dataset.product;
        const action = this.dataset.action;
        console.log("product id: ", productID, "action: ", action)

        console.log("user: ", user)
        if (user === "AnonymousUser") {
            console.log("anonymous")
        } else {
            updateUserOrder(productID, action)
        }
    })
}

function updateUserOrder(productID, action) {
    console.log("User is logged in...")

    const url = '/update_item/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'productID': productID, 'action': action})
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log('data: ', data)
        location.reload()
    })
}