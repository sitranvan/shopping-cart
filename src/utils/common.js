export function formatText(string = '') {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export function formatCurrency(currency = '') {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(currency)
}