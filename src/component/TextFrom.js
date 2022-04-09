import React ,{useState} from 'react'
export default function TextFrom(props) {
    // setText("New text Enter");
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase converted successfully","success");
    }

    const handleLoClick = () =>{
      // console.log("LowerCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("LowerCase converted successfully","success");

  }

  const handleCleanClick = () =>{
    // console.log("clean was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Clean successfully","success");

}
    const  handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState(''); 

    const handleCopy = () => {
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert(" clipboard Copeid","success");


    }

    const reverseText = () => {
      let newText = text.split('').reverse().join('');
      setText(newText);
  }

  const handleSpaceRemove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Spaceing","success");

  }

  

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#787171':'white',color: props.mode === 'dark' ? 'white':'black'}} value={text} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-success  mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-danger  mx-1 my-1" onClick={handleCleanClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-warning  mx-1 my-1" onClick={reverseText}>Revrese text</button>
        <button disabled={text.length===0} className="btn btn-info  mx-1 my-1" onClick={handleCopy}>copy</button>
        <button disabled={text.length===0} className="btn btn-success  mx-1 my-1" onClick={handleSpaceRemove}>Remove Extra Space</button>


    </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white':'black'}}>
         <h1>Your Text Summary</h1>
         <p>{text.split(" ").filter((element) => {return element.length!==0}).length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
