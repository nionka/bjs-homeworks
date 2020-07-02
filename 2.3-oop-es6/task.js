class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i]
            }
        }
        
        return null
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null
    }
}

class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    addGrade(grade, subject) {
        if (this[subject] === undefined) {
            this[subject] = [];
        }

        if ((grade < 1 || grade > 5) || typeof grade === "string") {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}.Допускаются только числа от 1 до 5.`)
                   return this[subject].length
        } else {
            this[subject].push(grade)
            return this[subject].length
        }
    }

    getAverageBySubject(subject) {

        if (this[subject] === undefined) {
            return 0
        }

        let sum = 0;
        
        for (let i = 0; i < this[subject].length; i++) {
            sum += this[subject][i];
        }
        
        return sum / this[subject].length
    }

    getTotalAverage() {
        let total = [];
        let sum = 0;

        for (let key in this) {
            if (this[key] === undefined) {
                this[key] = 0;
            } else if (key != "name") {
                total.push(this.getAverageBySubject(key));
            }
        }

        for (let i = 0; i < total.length; i++) {
            sum += total[i];
        }

        return sum / total.length
    }
}