import React, { SyntheticEvent } from "react"
import PropTypes, { func, string } from "prop-types"

interface formtype{
    name:String,
    sirname:String,
    maritalStatus:Boolean
}
interface funcType{
    handleClick:()=>void;
}


export const Form =({backgroundColor="red",marginTop="200px",buttonColor="green",paddingTop="20px",paddingLeft="50px"})=>{

    let [formdata,setFormdata] = React.useState<formtype>({name:"",sirname:"",maritalStatus:false})

    let handleChange=(e:{target: {name:string; value:string}}) => {
        setFormdata({...formdata,[e.target.name]: e.target.value});
       // onChange=((e)=>setFormdata(e.target.value))
    }

    let handleSubmit=(e:SyntheticEvent)=>{
        e.preventDefault() ;
        console.log(formdata)
    }
    const style={backgroundColor,marginTop,paddingTop,paddingLeft}

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
            {/* <button onClick={handleClick}>Clicked</button> */}
        </form>
    )
}


Form.propTypes={
    backgroundColor:PropTypes.string,
    marginTop:PropTypes.string,
    buttonColor:PropTypes.string,
    paddingTop:PropTypes.string,
    paddingLeft:PropTypes.string,
    // handleClick:PropTypes.func
}