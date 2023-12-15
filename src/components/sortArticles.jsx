export const SortArticles = ({sortBy, setSortBy, order, setOrder})=>{

  return (<div>
    <label htmlFor="sorting">
      Sort By: 
    <select id="sorting" onChange={(e)=>{
      setSortBy(e.target.value)
    }}>
      <option value={'created_at'}> Date</option>
      <option value={'author'}> Author</option>
      <option value={'votes'}> Votes</option>
      <option value={'comment_count'}> Comments</option>
    </select></label>
    <label htmlFor="order">
      Order By: 
    <select id="order" onChange={(e)=>{
      setOrder(e.target.value)
    }}>
      <option value={'DESC'}> Descending</option>
      <option value={'ASC'}> Ascending</option>
    </select></label>
  </div>)
}