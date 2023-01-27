const bookShelfContainer = document.querySelector('.bookshelf-container')
const bookMessageContainer = document.querySelector('#book-message-container')
const showBookContainer = document.querySelector('#show-book-container')
const userLoginContainer = document.querySelector(".user-login-container")
const loginButton = document.querySelector("#login-button")

export const onIndexBookSuccess = (books) => {
    books.forEach(book => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${book.title}</h3>
            <button data-id="${book._id}" >Show Book</button>
        `
        bookShelfContainer.appendChild(div)
    })
}

export const onBookFailure = (error) => {
    BookMessageContainer.innerHTML = `
        <h3>Error Detected</h3>
        <p>${error}</p>
    `
}

export const onCreateBookSuccess = () => {
    BookMessageContainer.innerText = 'Book logged'
}

export const onShowBookSuccess = (book) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.genre}</p>
        <p>${book._id}</p>

        <form data-id="${book._id}">
            <input type="text" name="page" value="${book.page}"/>
        </form>

        <button data-id="${book._id}">Delete Book</button>
    `
    bookShelfContainer.appendChild(div)
}

export const onUpdateBookSuccess = () => {
    bookMessageContainer.innerText = 'Book log updated'
}

export const onDeleteBookSuccess = () => {
    bookMessageContainer.innerText = 'Book deleted'
}

//REVIEW
const indexReviewContainer = document.querySelector('#index-review-container')
const reviewMessageContainer = document.querySelector('#review-message-container')
const showReviewContainer = document.querySelector('#show-review-container')

export const onIndexReviewSuccess = (reviews) => {
    reviews.forEach(review => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${review.name}</h3>
            <button data-id="${review._id}">Show Review</button>
        `
        indexReviewContainer.appendChild(div)
    })
}

export const onReviewFailure = (error) => {
    reviewMessageContainer.innerHTML = `
        <h3>Error detected</h3>
        <p>${error}</p>
    `
}

export const onCreateReviewSuccess = () => {
    reviewMessageContainer.innerText = 'Review created'
}

export const onShowReviewSuccess = (review) => {
    const div = document.createElement('div')
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
    reviewMessageContainer.innerText = 'Review updated'
}

export const onDeleteReviewSuccess = () => {
    reviewMessageContainer.innerText = 'Review deleted'
}