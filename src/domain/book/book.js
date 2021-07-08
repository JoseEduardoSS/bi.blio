export default class Book {
    constructor(bookpic = '',
                booktitle = '',
                bookaut = '',
                autcountry = 'País do autor',
                bookform = 'Formato',
                bookyear = '') {

        this.bookpic = bookpic;
        this.booktitle = booktitle;
        this.bookaut = bookaut;
        this.autcountry = autcountry;
        this.bookform = bookform;
        this.bookyear = bookyear;
    }

}
