const products = [
    {
        id: 1,
        title: "Smartphone Samsung Galaxy A54",
        price: 1899.99,
        discount: 15,
        image: "https://i5.walmartimages.com/seo/Samsung-Galaxy-A54-Dual-SIM-128GB-ROM-8GB-RAM-Only-GSM-No-CDMA-Factory-Unlocked-5G-Smartphone-Awesome-Black-International-Version_d00d1d3d-9d92-4ce2-9204-6d3f64b311be.86092b55bcf9ef12ec28aa981cf61db7.jpeg"
    },
    {
        id: 2,
        title: "Notebook Lenovo IdeaPad",
        price: 2999.99,
        discount: 20,
        image: "https://m.media-amazon.com/images/I/51Ri6f37FRL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 3,
        title: "Smart TV LG 50 4K",
        price: 2299.99,
        discount: 10,
        image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/168984"
    },
    {
        id: 4,
        title: "Tênis Nike Air Max",
        price: 399.99,
        discount: 25,
        image: "https://imgnike-a.akamaihd.net/1920x1920/03164452.jpg"
    },
    {
        id: 5,
        title: "Fone JBL Bluetooth",
        price: 199.90,
        discount: 30,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Cadeira Gamer ThunderX3",
        price: 899.00,
        discount: 18,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop"
    },
    {
        id: 7,
        title: "Console PlayStation 5",
        price: 3999.99,
        discount: 5,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop"
    },
    {
        id: 8,
        title: "Apple Watch Series 8",
        price: 2899.00,
        discount: 12,
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop"
    },
    {
        id: 9,
        title: "Tablet Samsung Galaxy Tab",
        price: 2199.90,
        discount: 15,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop"
    },
    {
        id: 10,
        title: "Câmera Canon EOS Rebel",
        price: 2699.00,
        discount: 8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop"
    },
    {
        id: 11,
        title: "Mouse Gamer Logitech",
        price: 249.90,
        discount: 20,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
    },
    {
        id: 12,
        title: "Teclado Mecânico RGB",
        price: 449.90,
        discount: 22,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop"
    }
]

// FORMATANDO O VALOR PARA REAL
function formartprice(price) {
    return price.toLocaleString('PT-BR', { style: 'currency', currency: 'BRL' })
}

// CRIANDO O FILTRO DE PESQUISA

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase()

    const filteredProducts = products.filter( product => product.title.toLowerCase().includes(searchInput)) // filter = filtra, eu passo um nome para ele e ele retorna somente quem tem aquele nome
    // includes = verifica se o texto contém o que eu passo no parâmetro

    renderProduct(filteredProducts)

}


// criando os cards = create
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${formartprice(product.price)}</div>
            <div class="product-discount">${product.discount}% OFF</div>
        </div>
    `
}

// Colocando os produtos na tela = render

function renderProduct(products) {
    const grid = document.getElementById('productsGrid')

    grid.innerHTML = products.map(createProductCard).join('')
}

// innerHtml = coloca as coisas na tela
// map = mapeia, percorre o array, pegando produto por produto
// join = juntar todo mundo


// colocando as imagens(produtos) na tela;

document.addEventListener('DOMContentLoaded', () => {
    renderProduct(products)

    document.getElementById('searchBtn').addEventListener('click', searchProducts)
}) //Dom = arvore de elementos(quando a página tiver toda carregada)
