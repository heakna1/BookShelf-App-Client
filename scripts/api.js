import { store } from "./store.js"

//User actions
export const signUp = (data) => {
    return fetch(`http://localhost:2000/sign-up`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export const signIn = (data) => {
    return fetch(`http://localhost:2000/sign-in`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

//BOOK
export const indexBooks = () => {
    return fetch(`http://localhost:2000/books`, {
        headers: {
            "Authorization": `Bearer ${store.userToken}`
        }
    })
}

export const createBook = (data) => {
    return fetch(`http://localhost:2000/books`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const showBook = (id) => {
    return fetch(`http://localhost:2000/books/${id}`, {
        headers: {
            "Authorization": `Bearer ${store.userToken}`
        }
    })
}

export const updateBook = (data, id) => {
    return fetch(`http://localhost:2000/books/${id}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteBook = (id) => {
    return fetch(`http://localhost:2000/books/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${store.userToken}`
        }
    })
}

//REVIEW
export const indexReviews = () => {
    return fetch(`http://localhost:2000/reviews`, {
        headers: {
            "Authorization": `Bearer ${store.userToken}`
        }

    })
}

export const createReview = (data) => {
    return fetch(`http://localhost:2000/reviews`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const showReview = (id) => {
    return fetch(`http://localhost:2000/reviews/${id}`, {
        headers: {
            "Authorization": `Bearer ${store.userToken}`
        }
    })
}

export const updateReview = (data, id) => {
    return fetch(`http://localhost:2000/reviews/${id}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteReview = (id) => {
    return fetch(`http://localhost:2000/reviews/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${store.userToken}`
        }
    })
}

