import defaultProduct from '~/assets/images/default-product.webp';
const thumbnailImg = (item) => {

    const url = item.product.thumbnail?.url
    return item.product.thumbnail
        ? `https://api.ezfrontend.com${url}`
        : defaultProduct
}

export default thumbnailImg