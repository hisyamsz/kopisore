document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, nama: 'Black Coffee', img: '1.jpg', price: 27000 },
            { id: 2, nama: 'Arabica Coffee', img: '2.jpg', price: 25000 },
            { id: 3, nama: 'Toraja Coffee', img: '3.jpg', price: 18000 },
            { id: 4, nama: 'Brown Coffee', img: '4.jpg', price: 26000 },
            { id: 5, nama: 'Robusta Coffee', img: '5.jpg', price: 28000 },
        ]
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add: function (newItem) {
            // Cek barang yang sama di cart
            const cartItem = this.items.find(item => item.id === newItem.id);

            // Jika belum ada / cart masih kosong
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price })
                this.quantity++;
                this.total += newItem.price
            } else {
                // Jika barang ada di cart, cek apakah barangnya sama atau beda dengan yang ada di cart
                this.items = this.items.map(item => {
                    // Jika barangnya berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // Jika barangnya sudah ada, tambahkan quantity dan sub totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove: function (id) {
            // Ambil item yang mau di hapus berdasarkan id
            const cartItem = this.items.find(item => item.id === id);

            // Jika item lebih dari 1
            if (cartItem.quantity > 1) {
                // telusuri 1 1
                this.items = this.items.map(item => {
                    // Jika bukan barang yang di klik
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {
                // Jika item nya sama dengan 1
                this.items = this.items.filter(item => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
                return item;
            }
        }
    });
});

// Form validation 
const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.disabled = true;

const form = document.getElementById('checkOutForm')

form.addEventListener('keyup', function () {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value.length !== 0) {
            checkoutBtn.classList.remove('disabled');
            checkoutBtn.classList.add('disabled');
        } else {
            return false;
        }
    }

    checkoutBtn.disabled = false;
    checkoutBtn.classList.remove('disabled');
})

// Konversi ke Rupiah
const rupiah = number => {
    return Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}
