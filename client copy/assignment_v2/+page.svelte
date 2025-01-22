<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script>
  import Message from "$lib/components/Message.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import LogicTesting from "$lib/components/LogicTesting.svelte";
  import ReactiveCounter from "$lib/components/ReactiveCounter.svelte";
  import ReactiveCounterV2 from "$lib/components/ReactiveCounterV2.svelte";
  import SecretManager from "$lib/components/SecretManager.svelte";
  import Todo from "$lib/components/Todo.svelte";
  import FormSubmit from "$lib/components/FormSubmit.svelte";
  import ToDoList_V1 from "$lib/components/ToDoList_V1.svelte";
  import ItemList from "$lib/components/ItemList.svelte";
  import DeepReactiveForm from "$lib/components/DeepReactiveForm.svelte";
  import ShortenRemoveItems from "$lib/components/ShortenRemoveItems.svelte";
  import TodoForm from "$lib/components/TodoForm.svelte";
  import TodoItem from "$lib/components/TodoItem.svelte";
  import Todos from "$lib/components/Todos.svelte";
  import ToDoList from "$lib/components/TodoList.svelte";
  import SeparateComponentState from "$lib/components/SeparateComponent_State.svelte";
  import SharedStateComponent from "$lib/components/SharedStateComponent.svelte";
  import Location from "$lib/components/Location.svelte";
  import Movement from "$lib/components/Movement.svelte";
  import TodosShared from "$lib/components/TodosShared.svelte";
  import TodoFormSharedState from "$lib/components/TodoFormSharedState.svelte";

</script>

<Message />
<Header />
<Footer />
<LogicTesting />
<ReactiveCounter />
<ReactiveCounterV2 />
<SecretManager />
<!--<Todo />-->
<FormSubmit />
<!--<ToDoList_V1 />-->
<ItemList />
<DeepReactiveForm />
<ShortenRemoveItems />
<TodoItem />
<TodoForm />
<Todos />
<SeparateComponentState />
<SharedStateComponent />
<Movement />
<Location />
<TodosShared />
