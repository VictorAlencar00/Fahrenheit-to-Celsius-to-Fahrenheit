//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenitExist = degree.toUpperCase().includes("F")

//O valor booleano é atribuido devido a expressão "includes()"

    if (!celsiusExists && !fahrenitExist) {
        throw new Error("Grau inválido")
    }

//Método ideal é fahrenheit para Celsius

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if (celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ''))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree).toFixed(2) + degreeSign
}
    console.log(transformDegree('50C'))
    console.log(transformDegree('92F'))

// try{
//     transformDegree('50Z')
// } catch (error){
//     console.log(error.message)
// }
