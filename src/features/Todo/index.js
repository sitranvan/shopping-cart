
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { v4 as uuid } from 'uuid'
import storageKey from '~/constants/storageKey'
import Filters from './components/Filters'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function TodoApp() {
    const location = useLocation()
    const history = useNavigate()
    const [todoList, setTodoList] = useState(() => {
        return JSON.parse(localStorage.getItem(storageKey.TODO)) || []
    })
    const [filter, setFilter] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })

    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilter(params.status || 'all')
    }, [location.search])

    useEffect(() => {
        localStorage.setItem(storageKey.TODO, JSON.stringify(todoList))
    }, [todoList])

    const handleSubmit = (dataForm) => {
        const data = [
            ...todoList,
            {
                id: uuid(),
                title: dataForm.title,
                status: 'new'
            }
        ]
        setTodoList(data)
    }
    const filterTodoList = todoList.filter(todo => filter === 'all' || todo.status === filter)

    const handleFilterAll = () => {
        const queryParams = { status: 'all' }
        history({
            pathname: location.pathname,
            search: queryString.stringify(queryParams)
        })
    }
    const handleFilterNew = () => {
        const queryParams = { status: 'new' }
        history({
            pathname: location.pathname,
            search: queryString.stringify(queryParams)
        })
    }
    const handleFilterCompleted = () => {
        const queryParams = { status: 'completed' }
        history({
            pathname: location.pathname,
            search: queryString.stringify(queryParams)
        })
    }
    const handleCompleted = (id) => {
        const newTodoList = todoList.map(todo => todo.id === id ?
            { ...todo, status: todo.status === 'new' ? 'completed' : 'new' } : todo)
        setTodoList(newTodoList)
    }
    const handleRemove = (id) => {
        const newTodoList = todoList.filter(todo => todo.id !== id)
        setTodoList(newTodoList)
    }

    return (
        <main style={{ marginTop: 50 }}>
            <TodoForm onSubmit={handleSubmit} />
            <Filters
                onFilterAll={handleFilterAll}
                onFilterNew={handleFilterNew}
                onFilterCompleted={handleFilterCompleted}
            />
            <TodoList todoList={filterTodoList}
                onRemove={handleRemove}
                onCompleted={handleCompleted}
            />
        </main>
    )
}

export default TodoApp