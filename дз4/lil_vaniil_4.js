class PaginationHelper {
	constructor(collection, itemsPerPage) {
	    this.collection = collection;
      this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	    return this.collection.length;
	}
	pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
      let indexArr = pageIndex * this.itemsPerPage;
      if (pageIndex >= this.pageCount() || pageIndex < 0) 
          return -1;
      return this.collection.slice(indexArr, indexArr + this.itemsPerPage).length;
	}
	pageIndex(itemIndex) {
    if (itemIndex >= this.collection.length || itemIndex < 0) return -1;
      return Math.floor(itemIndex / this.itemsPerPage);
	}
}