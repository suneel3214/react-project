import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
         const lower = word.toLowerCase();
         return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-6"></div>
         <div className="col-md-6">
            <div>
            {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
              </div>}
            </div>
         </div>
      </div>
    </div>
  )
}

export default Alert
