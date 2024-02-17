interface User {
  username: string
  age: number
  male: boolean
  bodyCount?: number
}

interface signUpCrediential {
  email: string
  password: number
  firstName: string
  lastname: string
}

const Ayush: signUpCrediential = {
  email: "rayayush47@gmail.com",
  firstName: "Ayush",
  lastname: "Ray",
  password: 270673,
}

const user1: User = {
  username: "ayush",
  age: 19,
  male: true,
}

function legal(usePara: User) {
  if (usePara.age < 18) {
    return false
  } else {
    return true
  }
}

function displayInfo(cred: signUpCrediential) {
  console.log(`Hello my name is ${cred.firstName} ${cred.lastname} `)
}
const result = legal(user1)
console.log(result)

displayInfo(Ayush)
