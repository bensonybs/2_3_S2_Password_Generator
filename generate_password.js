function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  // define dummy data
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: 'AaBb'
  }
  console.log('options', options)
  // create a collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  // remove things user do not need
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`)
    collection = collection.filter(character => !(options.excludeCharacters.includes(character)))
  }
  console.log('collection', collection)
  // start generating password

  // return the generated password
  console.log('This function will generate password')
}

generatePassword()