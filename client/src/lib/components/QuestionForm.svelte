<script>
// QuestionForm.svelte should provide a form that has (1) an input field of type text for entering the title of
// a quesion, (2) an textarea for typing in the text of the question, and (3) a input of type submit for 
// submitting the form. Submitting the form should add the entered question to the shared state provided 
// by questionState.svelte.js.

    import { useQuestionState } from "$lib/states/questionState.svelte";
    let questionState = useQuestionState();
  
    const addQuestion = (e) => {
      const question = Object.fromEntries(new FormData(e.target));
      // console.log("question", question) // id: "90f2d146-c472-4119-93a0-95d34ce31bd3" text: "test" title: "test"
      question.id = crypto.randomUUID();
      questionState.add(question);
      e.target.reset();
      e.preventDefault();
    };
</script>
  


<h1>Question Forum on Breathing Exercises</h1>

<h2>Enter your question</h2>
<form onsubmit={addQuestion}>
    <div>
        <label for="title">Title</label>
        <input id="title" name="title" type="text" placeholder="Enter a question title" />
    </div>
    <br>
    <div>
        <label for="text">Question</label>
        <input id="text" name="text" type="text" placeholder="Enter your question" />
    </div>
    <br>
    <input type="submit" value="Post question to forum" />
</form>
