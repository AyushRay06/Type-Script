type profile = {
  email: string
  password: string | number
  firstName: string
  lastname: string
  age?: number
}

const ironman = {
  email: "ironMan@300",
  password: "I love you 300",
  firstName: "Tony",
  lastname: "Stark",
}

function print(crediential: profile) {
  console.log(crediential.password)
}

print(ironman)
