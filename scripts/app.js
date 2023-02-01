import {
    indexBooks,
    createBook,
    showBook,
    updateBook,
    deleteBook,
    signUp,
    signIn,
    createReview,
    indexReviews,
    showReview,
    updateReview,
    deleteReview
} from "./api.js"
import {
    onIndexBookSuccess,
    onCreateBookSuccess,
    onShowBookSuccess,
    onUpdateBookSuccess,
    onDeleteBookSuccess,
    onBookFailure,
    onSignUpSuccess,
    onSignInSuccess,
    onLoginFailure,
    onIndexReviewSuccess,
    onShowReviewSuccess,
    onUpdateReviewSuccess,
    onDeleteReviewSuccess,
    onReviewFailure
} from "./ui.js"

const signUpContainer = document.querySelector("#sign-up-form-container")
const signInContainer = document.querySelector("#sign-in-form-container")
const createBookForm = document.querySelector(".create-book-form")
const indexBookContainer = document.querySelector(".index-book-container")
const showBookModal = document.querySelectorAll(".btn-edit-book")
const createReviewForm = document.querySelector(".create-review-form")
const indexReviewContainer = document.querySelector(".index-review-container")
const showReviewContainer = document.querySelector(".show-review-container")
const deleteButton = document.querySelector("#delete-button")
const saveButton = document.querySelector("#save-button")
const editModalForm = document.querySelector("#edit-modal-form")
const reviewModalForm = document.querySelector("#review-modal-form")

//function used to make buttons in the modal in each book work
const makeBookButtonsWork = () => {
    showBookModal.forEach(el => el.addEventListener("click", (event) => {
        let id = event.target.getAttribute("data-id")
        console.log(id)
        deleteButton.setAttribute("data-id", id)
        saveButton.setAttribute("data-id", id)

    }))
}

// User Actions
signUpContainer.addEventListener("submit", (event) => {
    event.preventDefault()
    const userData = {
        credentials: {
            email: event.target["sign-up-email"].value,
            password: event.target["sign-up-password"].value,
        },
    }
    signUp(userData).then(onSignUpSuccess).catch(onLoginFailure)
})

signInContainer.addEventListener("submit", (event) => {
    event.preventDefault()
    const userData = {
        credentials: {
            email: event.target["email"].value,
            password: event.target["password"].value,
        },
    }
    signIn(userData)
        .then((res) => res.json())
        .then((res) => onSignInSuccess(res.token))
        .then(indexBooks)
        .then((res) => res.json())
        .then((res) => onIndexBookSuccess(res.books))
        .then(indexReviews)
        .then((res) => res.json())
        .then((res) => onIndexReviewSuccess(res.reviews))
        .catch(onLoginFailure)

    makeBookButtonsWork()
})

//BOOK
indexBooks()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexBookSuccess(res.books)
    })
    .catch(onBookFailure)


createBookForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const bookData = {
        book: {
            title: event.target["book-title"].value,
            author: event.target["book-author"].value,
            genre: event.target["book-genre"].value,
            isbn: event.target["book-isbn"].value
        },
    }

    createBook(bookData)
        .then(indexBooks)
        .then((res) => res.json())
        .then((res) => onIndexBookSuccess(res.books))
        .then(onCreateBookSuccess)
        .catch(onBookFailure)

    makeBookButtonsWork()
})

indexBookContainer.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id")

    if (!id) return

    showBook(id)
        .then((res) => res.json())
        .then((res) => onShowBookSuccess(res.book))
        .catch(onBookFailure)
})

showBookContainer.addEventListener("submit", (event) => {
    event.preventDefault()

    const id = event.target.getAttribute("data-id")

    const bookData = {
        book: {
            title: event.target["book-title"].value,
            author: event.target["book-author"].value,
            genre: event.target["book-genre"].value,
            isbn: event.target["book-isbn"].value
        },
    }

    if (!id) return

    updateBook(bookData, id)
        // this function (onUpdateBookSuccess) does not need anything to run. NO params
        .then(onUpdateBookSuccess)
        .catch(onBookFailure)
})

deleteButton.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id")

    if (!id) return

    deleteBook(id)
        .then(onDeleteBookSuccess)
        .catch(onBookFailure)
})

//REVIEW
indexReviews()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexReviewSuccess(res.reviews)
    })
    .catch(onReviewFailure)


createReviewForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const reviewData = {
        review: {
            rate: event.target["rate"].value,
            comment: event.target["comment"].value
        },
    }

    createReview(reviewData)
        .then(onCreateReviewSuccess)
        .catch(onReviewFailure)
})

indexReviewContainer.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id")

    if (!id) return

    showReview(id)
        .then((res) => res.json())
        .then((res) => onShowReviewSuccess(res.review))
        .catch(onReviewFailure)
})

showReviewContainer.addEventListener("submit", (event) => {
    event.preventDefault()

    const id = event.target.getAttribute("data-id")

    const reviewData = {
        review: {
            rate: event.target["rate"].value,
            comment: event.target["comment"].value
        },
    }

    if (!id) return

    updateReview(reviewData, id)
        .then(onUpdateReviewSuccess)
        .catch(onReviewFailure)
})

showReviewContainer.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id")

    if (!id) return

    deleteReview(id)
        .then(onDeleteReviewSuccess)
        .catch(onReviewFailure)
})