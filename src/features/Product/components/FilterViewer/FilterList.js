import CATEGORY_LIST from './CategoryList'
const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Giao hàng miễn phí',
        isActive: filters => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: null,
        onToggle: filters => {
            const newFilters = { ...filters }
            if (filters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true
            }
            return newFilters
        }
    },
    {
        id: 2,
        getLabel: () => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: filters => Object.keys(filters).includes('isPromotion'),
        isRemovable: true,
        onRemove: filters => {
            const newFilters = { ...filters }
            delete newFilters.isPromotion
            return newFilters
        },
        onToggle: null
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: filters => Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte'),
        isRemovable: true,
        onRemove: filters => {
            const newFilters = { ...filters }
            delete newFilters.salePrice_gte
            delete newFilters.salePrice_lte
            return newFilters
        },
        onToggle: null
    },
    {
        id: 3,
        getLabel: (filters) => {
            const categoryId = filters['category.id'] - 1
            return `Danh mục ${CATEGORY_LIST[categoryId]}`
        },
        isActive: () => true,
        isVisible: filters => filters['category.id'],
        isRemovable: true,
        onRemove: filters => {
            const newFilters = { ...filters }
            delete newFilters['category.id']
            return newFilters
        },
        onToggle: null
    },
]

export default FILTER_LIST
