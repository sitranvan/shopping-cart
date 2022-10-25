
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import { getTitle } from '../../services/titleServives'
import PostItem from './components/PostItem'
function PostTitle() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 4,
        _totalRows: 1,
    })
    const [filters, setFilter] = useState({
        _limit: 4,
        _page: 1
    })

    const handleLoadMore = (newPage) => {
        console.log('newPage: ', newPage);
        setFilter({
            ...filters,
            _page: newPage
        })
    }
    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const resJson = await getTitle(filters)
                const { data, pagination } = resJson
                setPosts(data)
                setPagination(pagination)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }
        fetchApi()
    }, [filters])

    return (
        <PostItem
            posts={posts}
            pagination={pagination}
            onLoadMore={handleLoadMore}
            loading={loading && <Loading />}
        />
    )
}

export default PostTitle