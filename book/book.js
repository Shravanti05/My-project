class Book {
    constructor(
        title,
        author,
        pubYear,
        pageNumber,
        currentPage,
        readStatus
    ){
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.pageNumber = pageNumber;
        this.currentPage = currentPage;
        this.readStatus = readStatus;
    }
    updateCurrentPage(newCurrentpage){
        this.currentPage = newCurrentpage;
    }
    updateReadStatus(newReadStatus){
        this.readStatus = newReadStatus;
    }
}

export default Book;