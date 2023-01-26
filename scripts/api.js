//BOOK
export const indexBook = () => {
    return fetch(`http://localhost:2000/books`)
}

export const createBook = (data) => {
    return fetch(`http://localhost:2000/books`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showBook = (id) => {
    return fetch(`http://localhost:2000/books/${id}`)
}

export const updateBook = (data, id) => {
    return fetch(`http://localhost:2000/books/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteBook = (id) => {
    return fetch(`http://localhost:2000/books/${id}`, {
        method: 'DELETE'
    })
}

//REVIEW
export const indexReview = () => {
    return fetch(`http://localhost:2000/reviews`)
}

export const createReview = (data) => {
    return fetch(`http://localhost:2000/reviews`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showReview = (id) => {
    return fetch(`http://localhost:2000/reviews/${id}`)
}

export const updateReview = (data, id) => {
    return fetch(`http://localhost:2000/reviews/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteReview = (id) => {
    return fetch(`http://localhost:2000/reviews/${id}`, {
        method: 'DELETE'
    })
}

