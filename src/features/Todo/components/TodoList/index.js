import PropTypes from 'prop-types'
import className from 'classnames/bind'
import styles from './TodoList.module.scss'

const cx = className.bind(styles)

function TodoList({ todoList, onCompleted, onRemove }) {
    return (
        <section className={cx('wrapper')}>
            <ul className={cx('list')}>
                {todoList.map((todo, index) => (
                    <li key={todo.id} className={cx('item')}>
                        <span className={cx('title', {
                            completed: todo.status === 'completed'
                        })}>
                            {todo.title}
                        </span>
                        <div className={cx('action')}>
                            <button onClick={() => onCompleted(todo.id)} className={cx('action-item', 'checked')}>
                                <span>Completed</span>
                            </button>
                            <button onClick={() => onRemove(todo.id)} className={cx('action-item', 'remove')}>
                                <span>Remove</span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onCompleted: PropTypes.func,
    onRemove: PropTypes.func
}

export default TodoList