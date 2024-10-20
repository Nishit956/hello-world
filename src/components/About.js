import React  from 'react'

export default function About(props) {
    // const [myStyle , setMyStyle] =  useState({
    //     color:"black",
    //     backgroundColor:"white",
    // })

    
    let myStyle = {
        color: props.mode === "dark"?"white":"#042743",
        backgroundColor: props.mode === "dark"?"rgb(36 74 104)":"white",
    }
    

  return (
        <div className="container" style={{color: props.mode === "dark"?"white":"rgb(36 74 104)"}}>
            <h1 className="my-3">About Us</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Textutils gives you a way to analyze your text quickly and efficiently. be it word count ,
                        character count or </strong>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>  
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Textutils is a free character counter tool that provides instant character count and word count statistics for given 
                        text.Textutils reports the number of words and characters. thus it is suitable for writing text word / character 
                        limit. </strong>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This word counter software works in any web browser such as Chrome , Browser , Internet Explorer , Safari , Opera. It
                        suits to counter character at facebook , blog , books ,excel document , pdf document, essays, etc.  </strong>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
