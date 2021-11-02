function text (req, res) {
  const string = req.query.text
  if (string) {
    const text = string.split('').reverse().join('')
    res.status(200).json({
      text: text,
      palindrome: isPalindrome(string, text)
    })
  } else {
    res.status(400).json({
      error: 'no text'
    })
  }
}

// verifica si es palindrome
function isPalindrome (string, text) {
  if (string === text) {
    return true
  }
  return false
}

module.exports = {
  text
}
