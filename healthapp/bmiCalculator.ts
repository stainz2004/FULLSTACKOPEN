

// weight // height
export const bmiCalculator = (weight: number, height: number): string => {
    const bmi: number = weight / Math.pow(height / 100, 2);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi <= 24.9) {
        return "Normal";
    } else if (bmi <= 29.9) {
        return "Overweight";
    } else {;
        return "Obese";
    }
};
