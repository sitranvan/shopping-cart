import classNames from "classnames/bind"
import PropTypes from 'prop-types'
import styles from './PostItem.module.scss'

const cx = classNames.bind(styles)

function PostItem({ posts, pagination, onLoadMore, loading }) {

    const { _page, _limit, _totalRows } = pagination

    const totalPages = Math.ceil(_totalRows / _limit)

    const handleLoadMore = (newPage) => {
        if (onLoadMore) {
            onLoadMore(newPage)
        }
    }

    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                {loading}
                {posts.map((post, index) => (
                    <div key={post.id} className={cx('card')}>
                        <span className={cx('border')}></span>
                        <span className={cx('border')}></span>
                        <span className={cx('border')}></span>
                        <span className={cx('border')}></span>
                        <div className={cx('content')}>
                            {index < 10 ? <h2 className={cx('number')}>0{index + 1}</h2> : <h2 className={cx('number')}>{index + 1}</h2>}
                            <h3 className={cx('title')}>Post Title</h3>
                            <p className={cx('desc')}>{post.title}</p>
                            <a href="#not" className={cx('more')}>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
            <button disabled={_page >= totalPages} onClick={() => handleLoadMore(_page + 1)} className={cx('load-more')}>Load More</button>
        </section>
    )
}

PostItem.propTypes = {
    posts: PropTypes.array.isRequired,
    pagination: PropTypes.object,
    onLoadMore: PropTypes.func,
    loading: PropTypes.node
}

export default PostItem