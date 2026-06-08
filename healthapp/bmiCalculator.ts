

// weight // height
const calculator = (weight: number, height: number): string => {
    const bmi: number = weight / Math.pow(height / 100, 2);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi <= 24.9) {
        return "Normal"
    } else if (bmi <= 29.9) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

const weight = Number(process.argv[2]);
const height = Number(process.argv[3]);

if (isNaN(weight) || isNaN(height)) {
    console.log("Please provide valid numbers: ts-node bmiCalculator.ts <weight> <height>");
    process.exit(1);
}

console.log(calculator(weight, height));