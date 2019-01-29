const _ = {
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange (number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    };
    if (start > end) {
      let initStart = start;
      let initEnd = end;
      start = initEnd;
      end = initStart;
    };
    if (number < start) {
      return false;
    } else if (number > end) {
      return false;
    } else if (number >= start && number <= end) {
      return true;
    }
  },
  words (string) {
    let words = string.split(' ');
    return words;
  },
  pad (string, length) {
    let spacesNeeded = length - string.length;
    let frontSpace = Math.floor(spacesNeeded/2);
    let backSpace = length - string.length - frontSpace;
    let space = ' ';
    if (length <= string.length) {
      return string;
    } else if (length > string.length) {
      return space.repeat(frontSpace) + string + space.repeat(backSpace);
    } else {
      return 'Error';
    }
  },
  has (object, key) {
    if (object.key !== undefined) {
      return true;
    } else {
      return false;
    }
  },
  /*invert (object) {
    let invertedObject = {};
    for (key in object) {
      let originalValue = object.key()
    }
  }*/
  findKey (object, predicate) {
    for (key in object) {
      let value = object.key();
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return object.key();
      } else {
        return undefined;
      }
    }
  },
  drop (array, number) {
    if (!number) {
      return array.slice(1);
    } else {
    return array.slice(number);
  }
  },
  dropWhile (array, predicate) {
    let dropNumber = array.findIndex(function (element, index) {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(dropNumber);
    return dropNumber;
  },
  chunk (array, size) {
    if (!size) {
      let size = 1;
    };
    let arrayChunks = [];
    for (let i=0; i < array.length; i + size) {
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks;
  },
  }
