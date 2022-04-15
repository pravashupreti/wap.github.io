window.onload = function() {

    document.getElementById('getProdsBtn').onclick = async function() {
        let response = await fetch('http://localhost:3000/products');
        let products = await response.json();

        let template = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr> 
        `;
        products.forEach(prod => {
            template += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.title}</td>
                <td>${prod.price}</td>
                <td>${prod.description}</td>
            </tr>
            `;
        });
        template += '</table>';
        document.getElementById('products').innerHTML = template;
    }

    document.getElementById('addProdBtn').onclick = async function(evt) {
        evt.preventDefault();
        const newProd = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            price: document.getElementById('price').value
        };

        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            body: JSON.stringify(newProd),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);

        document.getElementById('prodForm').reset();

    }
}