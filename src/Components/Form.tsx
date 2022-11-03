import React, { SyntheticEvent } from "react"
import PropTypes, { string } from "prop-types"

interface formtype{
    name:String,
    sirname:String,
    maritalStatus:Boolean
}


export const Form =({backgroundColor="red"})=>{

    let [formdata,setFormdata] = React.useState<formtype>({name:"",sirname:"",maritalStatus:false})

    let handleChange=(e:{target: {name:string; value:string}}) => {
        setFormdata({...formdata,[e.target.name]: e.target.value});
    }

    let handleSubmit=(e:SyntheticEvent)=>{
        e.preventDefault() ;
        console.log(formdata)
    }
    const style={backgroundColor,marginTop}
    return (
        <form style={style}onSubmit={handleSubmit}>
            <div>
                <h1>FORM STORY</h1>
                <input type={'text'} name="name" placeholder="enter name" onChange={handleChange} />
                <input type={'text'} name="sirname" placeholder="enter sirname" onChange={handleChange} />
            <br></br>
                <div>
                    <input type={'radio'} name={'maritalStatus'} value={'Life is in Trouble'}  onChange={handleChange}/>
                    <label htmlFor={'married'}>Married</label>
                    <input type={'radio'} name={'maritalStatus'} value={'Life IS Beautiful'} onChange={handleChange}/>
                    <label htmlFor={'unmarried'}>Unmarried</label>
                </div>
                <input style={{backgroundColor:buttonColor}} type={"submit"}/>
            </div>
            <button onClick={handleClick}>Clicked</button>

        </form>
    )
}
Form.propTypes={
    backgroundColor:PropTypes.string,
    marginTop:PropTypes.string,
    buttonColor:PropTypes.string,
    handleClick:PropTypes.func
}