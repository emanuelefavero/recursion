function hooray(n) {
  if (n <= 0) {
    console.log('Hello!')
    return
  }
  console.log(n)
  hooray(n - 1)
}

hooray(3) // 3... 2... 1... Hello!
