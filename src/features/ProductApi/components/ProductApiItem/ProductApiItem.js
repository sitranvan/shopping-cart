import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ProductApiItem.module.scss'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function ProductApiItem({ products }) {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('container')}>
                <ul className={cx('list')}>
                    {products.map(product => (
                        <li key={product.id} className={cx('item')}>
                            <div className={cx('content')}>
                                <img src={product.image} alt="no-img" className={cx('img')} />
                                <h2 className={cx('name')}>{product.title}</h2>
                                <p className={cx('desc')}>{product.description}</p>
                                <span className={cx('price')}>${product.price}</span>
                                <div className={cx('rate')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className={cx('add')}>
                                <span>Add to cart</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

ProductApiItem.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductApiItem