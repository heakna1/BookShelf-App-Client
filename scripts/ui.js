const indexBookContainer = document.querySelector(".index-book-container")
const messageContainer = document.querySelector("#message-container")
const signUpMessage = document.querySelector("#sign-up-message")
const showBookContainer = document.querySelector("#show-book-container")
const userLoginContainer = document.querySelector(".user-login-container")
const loginButton = document.querySelector("#login-button")
const indexReviewContainer = document.querySelector("#index-review-container")
const showReviewContainer = document.querySelector("#show-review-container")

import { store } from "./store.js"

//BOOK
export const onIndexBookSuccess = (books) => {
    const bookCount = 0
    
    books.forEach(book => {
        if(bookCount % 4 == 0) {
            let bookShelf = document.createElement("div")
            bookShelf.classList.add("row", "shelf")
        }
        const div = document.createElement("div")
        div.classList.add("show-book-container", "col-1")
        div.innerHTML = `
            <!-- Button trigger edit modal -->
            <button data-id="${book._id}" type="button" class="btn-edit-book" data-bs-toggle="modal" data-bs-target="#edit-modal" style="display:inline-block">
            <img src="${book.bookCoverUrl}" style="float:left"/>
            </button>
        `
        bookShelf.appendChild(div)

        if(bookShelf.childElementCount == 4) {
            indexBookContainer.appendChild(bookShelf)
        }
        bookCount += 1
    })
}

export const onBookFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>Error Detected</h3>
        <p>${error}</p>
    `
}

export const onCreateBookSuccess = () => {
    messageContainer.innerText = "Book logged"
}

export const onShowBookSuccess = (book) => {
    const div = document.createElement("div")
    div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.genre}</p>
        <p>${book.isbn}</p>
        <p>${book._id}</p>

        <form data-id="${book._id}">
            <input type="text" name="page" value="${book.title}"/>
            <input type="text" name="page" value="${book.author}"/>
            <input type="text" name="page" value="${book.genre}"/>
            <input type="text" name="page" value="${book.isbn}"/>
        </form>

        <button data-id="${book._id}">Delete Book</button>
    `
    indexBookContainer.appendChild(div)
}

export const onUpdateBookSuccess = () => {
    messageContainer.innerText = "Book log edited"
}

export const onDeleteBookSuccess = () => {
    messageContainer.innerText = "Book deleted"
}


//REVIEW

export const onIndexReviewSuccess = (reviews) => {
    reviews.forEach(review => {
        const div = document.createElement("div")
        div.innerHTML = `
            <h3>${review.name}</h3>
            <button data-id="${review._id}">Show Review</button>
        `
        indexReviewContainer.appendChild(div)
    })
}

export const onReviewFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>Error detected</h3>
        <p>${error}</p>
    `
}

export const onCreateReviewSuccess = () => {
    messageContainer.innerText = "Review created"
}

export const onShowReviewSuccess = (review) => {
    const div = document.createElement("div")
    div.innerHTML = `
        <h3>${review.name}</h3>
        <p>${review._id}</p>
        
        <form data-id="${review._id}">
            <input type="text" name="comment" value="${review.comment}"/>
            <input type="submit" value="Update Review"/>
        </form>

        <button data-id="${review._id}">Delete Review</button>
    `
    showReviewContainer.appendChild(div)
}

export const onUpdateReviewSuccess = () => {
    messageContainer.innerText = "Review updated"
}

export const onDeleteReviewSuccess = () => {
    messageContainer.innerText = "Review deleted"
}

`<!-- Button trigger modal -->
<button type="button" class="btn-update-review" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Update
</button>`

// User Actions
export const onSignUpSuccess = () => {
    signUpMessage.innerHTML = "User created"
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = ""
    store.userToken = userToken
    userLoginContainer.classList.add("d-none")
    indexBookContainer.classList.remove("d-none")
    messageContainer.classList.remove("d-none")
    signUpMessage.classList.add("d-none")
}

export const onLoginFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>Error detected</h3>
        <p>${error}</p>
    `
}