let students = [
    {
        name: "Gabriel",
        note1: 10,
        note2:  7,
        genre: "Masculino"
    },
    {
        name: "Paula",
        note1: 7,
        note2: 4,
        genre: "Feminino"
    },
    {
        name: "Rodrigo",
        note1: 5,
        note2: 3,
        genre: "Masculino"
    },
    {
        name: "Matheus",
        note1: 8,
        note2: 7,
        genre: "Masculino"
    },
    {
        name: "Ana",
        note1: 6,
        note2: 10,
        genre: "Feminino"
    }
]

function calcMed(note1, note2) {
    return (note1 + note2) /2
}

function showAprovedMessage(student, media) {
    if(student.genre == "Masculino") {
        alert(`A média do aluno ${student.name} é ${media}\n
        Parabéns, ${student.name}! Você foi aprovado no concurso!`)
    }else {
        alert(`A média da aluna ${student.name} é ${media}\n
        Parabéns, ${student.name}! Você foi aprovada no concurso!`)
    }
}

function showReprovedMessage(student, media) {
    if(student.genre == "Masculino") {
        alert(`A média do aluno ${student.name} é ${media}\n
        Não foi dessa vez, ${student.name}! Tente novamente!`) 
    }else {
        alert(`A média da aluna ${student.name} é ${media}\n
        Não foi dessa vez, ${student.name}! Tente novamente!`) 
    }
}


for(let student of students) {
    const media = calcMed(student.note1, student.note2)
    if(media >= 7) {
        showAprovedMessage(student, media)
    }else {
        showReprovedMessage(student, media)
    }
}

