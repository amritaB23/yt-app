import React, {useState} from "react";


const SearchVideos = ({onFormSubmit})=>{
  const [term, setTerm] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>video Search</label>

          {/* <input type="text" onChange={this.onInputChange} name="img-search" id="img-search" placeholder="Image Search" /> */}
          {/* <input type="text" onChange={(event)=>console.log(event.target.value)} name="img-search" id="img-search" placeholder="Image Search" /> */}
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            name="img-search"
            id="img-search"
            placeholder="Video Search"
          />
        </div>
      </form>
    </div>
  );
} 

export default SearchVideos;
