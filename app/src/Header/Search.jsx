import React from 'react';

const ReturnVal = (prop) => {
  if (prop.location === "") {
    var loc = "Bagcampus"
  }else{
    var loc = prop.location;
  }

   return (
     <>
       <p className="text-center">
         Searching For Position of {prop.title} in {loc}
       </p>
     </>
   );
}

const EmptyReturn= () => {
   return (
     <>
       <p className="text-center">
         Let's Start A New Search!
       </p>
     </>
   );
}

const Search = (props) => {

    if(props.title !== ""){
        return (ReturnVal(props))
    }else{
        return EmptyReturn();   
    }
}

export default Search