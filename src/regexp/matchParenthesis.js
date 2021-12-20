const isMatchedParenthesisV1 = (str) => {
    const reg = /<([^>]+)>.*?<\/\1>/g
    return reg.test(str);
}

const isMatchedParenthesisV1 = (str) => {
    const reg = /<([^>]+)>.*?<\/\1>/g
    return reg.test(str);
}

console.log(isMatchedParenthesis('<p></p>'))
console.log(isMatchedParenthesis('<div></p>'))
console.log(isMatchedParenthesis('<div><p></div>'))