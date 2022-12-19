function digitize(n) {
  const arr = []
  const newString = String(n)
  for (i = 0; i < newString.length; i++) {
    arr.unshift(Number(newString[i]))
  }
  return arr
}