export const goToSignIn = (history) => {
    history.push('/signin')
}

export const goToSignUp = (history) => {
    history.push('/signup')
}

export const goToCreateBookReview = (history) => {
    history.push('/create')
}

export const goToBooksFeed = (history) => {
    history.push('/books')
}

export const goToBookReview = (history, id) => {
    history.push(`books${id}`)
}