<script>
    // QuestionItem.svelte should contain the functionality for (1) receiving information about the question as 
    // a property, (2) showing the title of a the question, (2) deleting the question by pressing a button with 
    // the text "Delete", (3) upvoting the question by pressing an button with the text "Upvote", and (4) 
    // showing the number of upvotes that the question has received. The number of upvotes should be shown 
    // in the form "Upvotes: {count}", where {count} corresponds to the number of upvotes.

    import { useQuestionState } from "$lib/states/questionState.svelte";
    let questionState = useQuestionState();
    // console.log("received question info in item", questionState.questions );
    // let { todo = {name: "fallbackname", done: false}, removeTodo } = $props();
    // let { question = {title: "fallbacktitle", id: 0, text: "fallbacktext"}} = $props();
    // console.log("question in QuestionItem", question);
  
    let { question } = $props();
    
</script>

<!--p for={question.id}>
    {question.name}
</p>
  
<button onclick={() => questionState.add(question.id)}>Add</button>-->