// questionState.svelte.js provides the functionality for adding, listing, deleting, 
// and upvoting of questions in a way where the questions can be shared across components.

let initialQuestions = [];
let questionState = $state(initialQuestions);


const useQuestionState = () => {
    return {
        get questions() {
          return questionState;
        },
    add: (question) => {
        questionState.push(question); // pushed new question to questionstate and updates questions array
        console.log("pushed question", question) // id: "c2222bb5-1fce-4e4c-9c7c-35fd5b2fe5a5" text: "fesfe" title: "5325"
        // saveTodos();
      }
    }
};
export{ useQuestionState };