const Form = () => {
  return (
    <div className="d-flex flex-direction-row w-75 mx-auto">
      <input type="text" placeholder="search" className="w-25"/>
      <button className="btn btn-success w-25">search</button>
      <select class="form-select w-50" aria-label="Default select example">
      <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
      </select>  
    </div>
  );
};

export default Form;
