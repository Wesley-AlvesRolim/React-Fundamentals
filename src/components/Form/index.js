import './form.css';

function Form() {
  return (
    <form action="#" onSubmit={this.handleFormSubmit}>
      <input
        onChange={this.handleInputChange}
        type="text"
        placeholder="Adicione aqui uma tafera"
        id="addTasks "
        value={inputValue}
      />
      <button type="submit">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
    </form>
  );
}
export default Form;
