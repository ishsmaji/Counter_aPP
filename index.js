const countvalue=document.querySelector('#counter');

const increment =() =>
{
  //ge the value from UI
  let value = parseInt(countvalue.innerText);
  //update the value
  value=value+1;
  //set the value onto UI
  countvalue.innerText=value;
}

const decrement =() =>
{
  //ge the value from UI
  let value = parseInt(countvalue.innerText);
  //update the value
  value=value-1;
  //set the value onto UI
  countvalue.innerText=value;
}