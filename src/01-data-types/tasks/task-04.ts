/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book1 = {
    ISBNnumber: string[]
    title: string[]
    authors: string[]
    pages: number[]
    category: string[]
    avaliable: boolean[]
}
let Book1 = {
    ISBNnumber: [`978-602-8519-93-9`, `978-602-8519-70-9`, `978-602-8519-60-9`],
    title: [`tutorial dapat 2M dalam waktu sehari no root`, `tutorial khatam typescript dalam waktu sehari no root`, `think like a hacker`],
    authors: ['timoti ronaldo', `sandikos galios`, 'ibrahim random kid'],
    pages: [123,152,50],
    category: [`Money`, `Programming`, `Cybersecurity`],
    avaliable: [true, false, true]
}
function giveoutput(): any{
    for(let i = 0; i < Book1.ISBNnumber.length; i++){
        console.log(`ISBN Number: ${Book1.ISBNnumber[i]}`)
        console.log(`Title: ${Book1.title[i]}`)
        console.log(`Authors: ${Book1.authors[i]}`)
        console.log(`Pages: ${Book1.pages[i]}`)
        console.log(`Category: ${Book1.category[i]}`)
        console.log(`Avaliable: ${Book1.avaliable[i]}`)
        console.log()
    }
}
console.log(giveoutput())