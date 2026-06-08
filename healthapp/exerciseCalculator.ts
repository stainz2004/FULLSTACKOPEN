interface TrainingResponse {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}



const calculateExercises = (target: number, arr: number[]): TrainingResponse => {
    let rating: number
    let ratingDescription: string

    const isAllNumbers = arr.every(item => typeof item === 'number' && !isNaN(item));

    if (!isAllNumbers) {
        throw new Error("ERRRROOOOOR")
    }

    const periodLength = arr.length
    const trainingDays = arr.filter(num => num !== 0).length
    const averageTrainingTime = arr.reduce((total, num) => total + num, 0) / periodLength


    if (averageTrainingTime < (target / 2)) {
        rating = 1
        ratingDescription = "You basicly did nothing"
    } else if (averageTrainingTime < target) {
        rating = 2
        ratingDescription = "You did Okay"
    } else {
        rating = 3
        ratingDescription = "Amazing! You hit your goals!"
    }

    const response: TrainingResponse = {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: averageTrainingTime >= target,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: averageTrainingTime
    }

    return response
}

const target = Number(process.argv[2])
const hours: number[] = process.argv.slice(3).map(Number);


console.log(calculateExercises(target, hours))