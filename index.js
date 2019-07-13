/**
 * @name NyanLang
 * @description 그냥 심심해서 약빨고 만든거니 신경쓰지 마십시오
 * @version 2.0.0
 * @see ./test/index.js
 * @example
 * 
 */

const proc = {
  /**
   * time 밀리초뒤 cb를 실행합니다
   * @param {Number} time 밀리초단위
   * @param {Function} cb 실행할 함수
  */
  나: (time, cb) => {
    setTimeout(() => {
      cb()
    }, time)
  },

  냐: Object,

  /**
   * nyanLang 버전을 출력합니다
   * @type {String} nyanLang 버전
  */
  냣: require('./package.json').version,

  /**
   * text를 콘솔에 출력합니다
   * @param {any} text 출력할 값
   */
  냥: (text) => {
    console.log(text)
  },

  /**
   * a에 b를 더합니다
   * @param {String | Number} a 더해지는 값
   * @param {String | Number} b 더하는 값
   * 
   * @returns {String | Number} 더해진 값
   */
  냐앗: (a, b) => {
    return a + b
  },

    /**
   * a에 b를 뺍니다
   * @param {Number} a 빼지는 값
   * @param {Number} b 빼는 값
   * 
   * @returns {Number} 빼진 값
   */
  냐엇: (a, b) => { 
    return a - b
  },

  /**
   * a를 b번 곱하거나 반복합니다
   * @param {String | Number} a 곱해지는 값
   * @param {String | Number} b 곱하는 값
   * 
   * @returns {String | Number} 곱해진 값
   */
  냐냐: (a, b) => {
    if (typeof(a) === 'string' && typeof(b) === 'number') return a.repeat(b)
    else if (typeof(b) === 'string' && typeof(a) === 'number') return b.repeat(a)
    else return a * b
  },

  /**
   * a에 b를 나눕니다
   * @param {Number} a 나눠지는 값
   * @param {Number} b 나누는 값
   * 
   * @returns {Number} 나눈 값
   */
  냐녀: (a, b) => { 
    return a / b
  }
}

proc['냐'] = proc

module.exports = proc