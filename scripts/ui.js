const indexBookContainer = document.querySelector(".index-book-container")
const messageContainer = document.querySelector("#message-container")
const signUpMessage = document.querySelector("#sign-up-message")
const userLoginContainer = document.querySelector(".user-login-container")
const indexReviewContainer = document.querySelector("#index-review-container")
const showReviewContainer = document.querySelector("#show-review-container")
const bookShelfContainer = document.querySelector(".book-shelf-container")

import { store } from "./store.js"

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
    signUpMessage.innerHTML = `
        <h3>Error detected</h3>
        <p>${error}</p>
    `
}

//BOOK
export const onIndexBookSuccess = (books) => {
    bookShelfContainer.innerHTML = ""
    //button to create a new book
    let output = `<div class='row shelf mx-5 mb-3'> <div     class="show-book-container d-flex justitfy-content-center col-3">
                <!-- Button trigger create book modal -->
                <button type="button" class="btn-book" data-bs-toggle="modal" data-bs-target="#new-book-modal"> +
                </button>
            </div>`
    let bookCount = 1
    
    books.forEach(book => {
        //book button that pulls up modal with edit and review options
        let showBookCover = `
            <!-- Button trigger edit modal -->
            <button data-id="${book._id}" type="button" class="btn-edit-book" data-bs-toggle="modal" data-bs-target="#edit-modal" style="display:inline-block">
            <img src="${book.bookCoverUrl}" width="100px" height="150px"/>
            </button>
        `
        if((bookCount%4) == 0) {
            //makes book cover show up on book cover buttons
            output += `</div><div class="row shelf mx-5 mb-3"><div class="show-book-container d-flex justitfy-content-center col-3">${showBookCover}</div>`
        } else {
            output += `<div class="show-book-container d-flex justitfy-content-center col-3">${showBookCover}</div>`
        } bookCount += 1
    })

    if((bookCount%4)!=0) {
        output += `</div>`
    }

    bookShelfContainer.insertAdjacentHTML("beforeend", output)
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
