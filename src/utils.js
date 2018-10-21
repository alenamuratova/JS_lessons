const summ = (...numbers) => {
  return numbers.reduce((acc, item) => {
    return acc + item
  }, 0)
}

const avg = (...numbers) => {
  return sum(...numbers) / numbers.length
}

export default summ
