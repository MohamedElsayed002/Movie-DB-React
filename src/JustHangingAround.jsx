
import people from './data'

const Review = () => {
    const [index,setIndex] = useState(0)
    const {name,job,image,text} = people[index]


    const checkNumber = (number) => {
        if(number > people.length -1) {
            return 0
        }
        if(number < 0) {
            return people.length -1
        }
        return 0
    }

    const nextPerson = () => {
        setIndex(prevIndex => {
            let newIndex = prevIndex + 1
            return checkNumber(newIndex)
        }) 
    }

    const prevPerson = () => {
        setIndex(prevIndex => {
            let newIndex = prevIndex -1 
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)
        if(randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }
}