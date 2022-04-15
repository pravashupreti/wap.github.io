window.onload = function() {

    document.getElementById('getProdsBtn').onclick = function() {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(products => console.log(products));
    }


    document.getElementById('addProdBtn').onclick = function() {
        const newProd = {
            title: 'iPhone 13 Prod',
            description: 'Blue color',
            price: 999
        };

        fetch('http://localhost:3000/products', {
                method: 'POST',
                body: JSON.stringify(newProd),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(prod => console.log(prod));

    }
}