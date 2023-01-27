import { indexBook, createBook, showBook, updateBook, deleteBook } from './api.js'
import {
    onIndexBookSuccess, onBookFailure, onCreateBookSuccess, onShowBookSuccess, onUpdateBookSuccess, onDeleteBookSuccess
} from './ui.js'

const createBookForm = document.querySelector('#create-book-form')
const indexBookContainer = document.querySelector('#index-book-container')
const showBookContainer = document.querySelector('#show-book-container')

indexBook()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexBookSuccess(res.books)
    })
    .catch(onBookFailure)


createBookForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const bookData = {
        book: {
            title: event.target['title'].value,
            author: event.target['author'].value,
            genre: event.target['genre'].value
        },
    }

    // console.log(campiagnData)
    createBook(bookData)
        .then(onCreateBookSuccess)
        .catch(onBookFailure)
})

indexBookContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    showBook(id)
        .then((res) => res.json())
        .then((res) => onShowBookSuccess(res.book))
        .catch(onBookFailure)
})

showBookContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const id = event.target.getAttribute('data-id')

    const bookData = {
        book: {
            page: event.target['page'].value,
        },
    }

    if (!id) return

    updateBook(bookData, id)
        // this function (onUpdateBookSuccess) does not need anything to run. NO params
        .then(onUpdateBookSuccess)
        .catch(onBookFailure)
})

showBookContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    deleteBook(id)
        .then(onDeleteBookSuccess)
        .catch(onBookFailure)
})

//REVIEW
import { indexReview, createReview, showReview, updateReview, deleteReview } from './api.js'
import {
    onIndexReviewSuccess, onReviewFailure, onCreateReviewSuccess, onShowReviewSuccess, onUpdateReviewSuccess, onDeleteReviewSuccess
} from './ui.js'

const createReviewForm = document.querySelector('#create-review-form')
const indexReviewContainer = document.querySelector('#index-review-container')
const showReviewContainer = document.querySelector('#show-review-container')

indexReview()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexReviewSuccess(res.reviews)
    })
    .catch(onReviewFailure)


createReviewForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const reviewData = {
        review: {
            rate: event.target['rate'].value,
            comment: event.target['comment'].value
        },
    }

    // console.log(reviewData)
    createReview(reviewData)
        .then(onCreateReviewSuccess)
        .catch(onReviewFailure)
})

indexReviewContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

    if (!id) return

    showReview(id)
        .then((res) => res.json())
        .then((res) => onShowReviewSuccess(res.review))
        .catch(onReviewFailure)
})

showReviewContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const id = event.target.getAttribute('data-id')

    const reviewData = {
        review: {
            rate: event.target['rate'].value,
            comment: event.target['comment'].value
        },
    }

    if (!id) return

    updateReview(reviewData, id)
        // this function (onUpdateReviewSuccess) does not need anything to run. NO params
        .then(onUpdateReviewSuccess)
        .catch(onReviewFailure)
})

showReviewContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    deleteReview(id)
        .then(onDeleteReviewSuccess)
        .catch(onReviewFailure)
})