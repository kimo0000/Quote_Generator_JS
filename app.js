const objectPersom = [
    {
        desc: "the best way to find yourself is to lose yourself in the service of others.",
        person: "Mahatma Gandhi"
    },
    {
        desc: "If you want to live a happy life, tie it to a goal, not to people or things.",
        person: "Albert Einstein"
    },
    {
        desc: "At his best, man is the noblest of all animals; separeted from law and justice he is the worst.",
        person: "Aristotle"
    },
    {
        desc: "Your time is limited, so dont waste it living someone else's life.",
        person: "Steve Jobs"
    },
    {
        desc: "Our lives begin to end the day we become silent about things that matter.",
        person: "Martin Luther King, Jr"
    },
    {
        desc: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        person: "Dalai Lama"
    },
    {
        desc: "The journey of a thousand miles begins with one stop.",
        person: "Lao Tzu"
    }
]

const btn = document.querySelector('.btn')
const desc = document.querySelector('.desc')
const person = document.querySelector('.person')

console.log(objectPersom)

btn.addEventListener('click', () => {
       let random = Math.floor(Math.random() * objectPersom.length)
       desc.innerText = objectPersom[random].desc
       person.innerText = objectPersom[random].person
})