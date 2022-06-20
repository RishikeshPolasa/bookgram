interface User {
    id: number,
    name: string,
    createAt: Date,
    updateAt: Date
}

interface Book {
    id: number,
    book: string,
    aId: number
}

let users: User[] = [
    { id: 1, name: "mike", createAt: new Date(2022, 5, 1, 9), updateAt: new Date(2022, 5, 1, 1) },
    { id: 2, name: "Raju", createAt: new Date(2022, 5, 16, 6), updateAt: new Date(2022, 5, 3, 17) },
    { id: 3, name: "sanjay", createAt: new Date(2022, 5, 4, 10), updateAt: new Date(2022, 5, 4, 21) },
    { id: 4, name: "jordan", createAt: new Date(2022, 5, 4, 10), updateAt: new Date(2022, 5, 14, 11) }
];

let books: Book[] = [
    { id: 1, book: "introduction to C", aId: 1 },
    { id: 2, book: "introduction to C++", aId: 1 },
    { id: 3, book: "introduction to PYTHON", aId: 2 },
    { id: 4, book: "introduction to JAVASCRIPT", aId: 2 },

];

interface Review {
    id: number,
    aId: number,
    bId: number,
    bookName: string,
    reviewBy: string,
    review: string
}

let reviews: Review[] = [
    { id: 1, aId: 1, bId: 1,bookName:"introduction to C", reviewBy: "Chris Sam", review: "Since story is king in the world of fiction, it probably won’t come as any surprise to learn that a book review for a novel will concentrate on how well the story was told." },
    { id: 2, aId: 1, bId: 2,bookName:"introduction to C++",reviewBy: "Ajay Jade", review: "That said, book reviews in all genres follow the same basic formula that we discussed earlier. In these examples, you’ll be able to see how book reviewers on different platforms expertly intertwine the plot summary and their personal opinions of the book to produce a clear, informative, and concise review." },
    { id: 3, aId: 2, bId: 3,bookName:"introduction to PYTHON",reviewBy: "Vikas Vikky", review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. If I sound stunningly inarticulate at times in this review, " },
    { id: 4, aId: 2, bId: 4,bookName:"introduction to C++", reviewBy: "Priyank Patel",review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double stunningly inarticulate at times in this review, " },
    { id: 5, aId: 3, bId: 1,bookName:"introduction to PYTHON", reviewBy: "Sam Mani",review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. in this review, " },
    { id: 6, aId: 4, bId: 4,bookName:"introduction to JAVASCRIPT",reviewBy: "Abhi Kumar",review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. " }
];

interface feed {
    bId: number,
    book: string,
    aInfo: {
        id: number,
        name: string,
        createAt: Date,
        updateAt: Date
    },
    review: [{
        reviewInfo: string
        review: string[]
    }]
}
let feeds: feed[] = [
    {
        bId: 1,
        book: "introduction to C",
        aInfo: {
            id: 1, name: "mike", createAt: new Date(2022, 5, 12, 9), updateAt: new Date(2022, 5, 12, 10)
        },
        review: [{
            reviewInfo: "Chris Sam",
            review: [
                "Since story is king in the world of fiction, it probably won’t come as any surprise to learn that a book review for a novel will concentrate on how well the story was told.",
                "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. in this review"
                ]
        }]
    },

    {
        bId: 2,
        book: "introduction to C++",
        aInfo: {
            id: 2, name: "raju", createAt: new Date(2022, 5, 12, 9), updateAt: new Date(2022, 5, 12, 10)
        },
        review: [{
            reviewInfo: "Sam Mani",
            review: ["YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. "]
        }]
    },

    {
        bId: 1,
        book: "introduction to PYTHON",
        aInfo: {
            id: 3, name: "Sudheer", createAt: new Date(2022, 5, 1, 2), updateAt: new Date(2022, 5, 2, 9)
        },
        review: [{
            reviewInfo: "Mayank Kumar",
            review: ["YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. "]
        }]
    },

    {
        bId: 4,
        book: "introduction to C++",
        aInfo: {
            id: 2, name: "Sanjay", createAt: new Date(2022, 5, 12, 9), updateAt: new Date(2022, 5, 12, 10)
        },
        review: [{
            reviewInfo: "Harshak kumar",
            review: ["YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. "]
        }]
    }
]
export {
    users, books, reviews,feeds
}