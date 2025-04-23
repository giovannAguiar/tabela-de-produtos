document.addEventListener('DOMContentLoaded', () => {
    const URL = "https://fakestoreapi.com/products?limit=10";
    const productTableBody = document.getElementById('productTableBody');
    const container = document.getElementById('container');

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let rows = '';
            data.forEach(product => {
                rows += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.title}</td>
                        <td>${product.category}</td>
                        <td>${product.description}</td>
                        <td>$${product.price}</td>
                        <td><img src="${product.image}" alt="${product.title}" style="max-width: 50px; max-height: 50px;"></td>
                        <td>${product.rating.rate}</td>
                        <td>${product.rating.count}</td>
                    </tr>
                `;
            });
            productTableBody.innerHTML = rows;
        })
        .catch(error => {
            console.error("Erro ao buscar os produtos:", error);
            container.innerHTML = '<p class="text-danger">Ocorreu um erro ao carregar os produtos.</p>';
        });
});
          
