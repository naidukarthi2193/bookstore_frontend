import React from 'react';
import './AllBooks.css';
import BookCard from './BookCard';
import book_image from './hp_book.jpg';
const AllBooks = () => {
    return (
        
            <div className='allBooks'>
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[true,true,true,true,false]}
                price={500}
                />

                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
            
            </div>

        


        
        
    )
}

export default AllBooks
