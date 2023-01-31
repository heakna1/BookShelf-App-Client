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
    deleteReview } from "./api.js"
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

const userLoginContainer = document.querySelector(".user-login-container")
const signInButton = document.querySelector(".sign-in-button")
const signUpContainer = document.querySelector("#sign-up-form-container")
const signInContainer = document.querySelector("#sign-in-form-container")
const createBookForm = document.querySelector(".create-book-form")
const indexBookContainer = document.querySelector(".index-book-container")
const showBookContainer = document.querySelector(".show-book-container")
const createReviewForm = document.querySelector(".create-review-form")
const indexReviewContainer = document.querySelector(".index-review-container")
const showReviewContainer = document.querySelector(".show-review-container")

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
		.then(indexCampaign)
		.then((res) => res.json())
		.then((res) => onIndexCampaignSuccess(res.campaigns))
		.then(indexCharacters)
		.then((res) => res.json())
		.then((res) => onIndexCharacterSuccess(res.characters))
		.catch(onLoginFailure)
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
        .then(onCreateBookSuccess)
        .catch(onBookFailure)
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
            page: event.target["page"].value,
        },
    }

    if (!id) return

    updateBook(bookData, id)
        // this function (onUpdateBookSuccess) does not need anything to run. NO params
        .then(onUpdateBookSuccess)
        .catch(onBookFailure)
})

showBookContainer.addEventListener("click", (event) => {
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
        // this function (onUpdateReviewSuccess) does not need anything to run. NO params
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