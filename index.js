class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((element1, element2) => {
      if(element1 > element2) {
        return 1
      } else {
        return -1
      }
    })
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items.indexOf(pos)
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.items.length > 0 ) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.items.length > 0 ) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    let sum = 0
    for (let i = 0; i <= this.items.length; i++) {
      sum += i
    }
    return sum
  }

  avg() {
    if (this.items.length > 0) {
      let avg = 0
      for (let i = 0; i <= this.items.length; i++) {
        avg += i
      }
      return avg / this.items.length
    } else {
      throw new Error('EmptySortedList')
    }
  }
}

module.exports = SortedList;
