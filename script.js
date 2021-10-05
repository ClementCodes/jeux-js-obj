

class Question{
    constructor(text, choices, answer) {
      
        this.text = text
        this.choices = choices
        this.answer = answer
    }
    isCorrectAnswer(choice) {
        return this.answer === choice
    }

    
}

let questions = [


    new Question("quelle methode permet a javascript de filtrer les éléments d'un tableau",
        ["indexOf()", "map()", "filter()", "reduce()", "filter()"],
        "filter()"),

    new Question("quelle methode permet a javascript de verifier si un element figure dans un tableau",
        ["isNan()", "includes()", "filter()", "reduce()", "filter()"], "includes()"),
   
    new Question("quelle methode transforme du json en objet java script",
        ["JSON.parse()", "JSON.stringify()", "Json.object()", "JSON.toJS()", "JSON.parse()"], "JSON.parse()"),
       
    new Question("quel objet javascript permet d 'arrondir a l'entier le plus proche",
        ["Math.ceil()", "MATH.floor()", "MATH.round()", "MATH.random()", "Math.round()"], "Math.round()")
    
    


]

class Quiz{
    constructor(questions) {
        this.score = 0
        this.questions = questions
        this.currentQuestionsIndex = 0
    }





}


console.log(Quiz);