/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const queue = {
    data: [],
    enqueue: function (items) {
      this.data = items.concat(this.data);
      return this.data;
    },
    dequeue: function () {
      return this.data.pop();
    },
    isEmpty: function () {
      return this.data.length === 0;
    },
    empty: function () {
      return this.data.splice(0);
    },
    setQueue: function (data) {
      this.data = data;
    }
  }

  let height = 1;
  let res = 0;

  let dict = new Set(wordList);

  const finishedQueue = Object.create(queue);

  queue.setQueue([beginWord]);

  while (queue.data.length && !res) {
    let local = queue.dequeue();

    if (local === endWord) {
      res = height;
    } else {
      let temp = [];

      dict.forEach(word => {
        if (oneOff(local, word)) {
          temp.push(word);
          dict.remove(word);
        }
      });

      finishedQueue.enqueue(temp);
    }

    if (queue.isEmpty()) {
      height += 1;
      queue.setQueue(finishedQueue.empty());
    }
  }

  return res;
};

function oneOff(baseWord, word) {
  let offset = 0;

  for (const i in baseWord) {
    let baseChar = baseWord[i];
    let check = word[i];

    if (baseChar !== check) {
      offset += 1;
    }

    if (offset > 1) {
      return false;
    }
  }

  return true;
}

console.log()