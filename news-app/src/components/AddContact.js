import React from 'react'


const AddContact = () => {
    const [name, setName] = React.useState("ABC");
    const [email, setEmail] = React.useState("");
    // state ={
    //     name:"sumit",
    //     email:"",
    // };
    // add=(e)=>{
    //     e.preventDefault();
    //     if(name===""&&email===""){
    //         alert("All the fields are mandatory!")
    //         return;
    //     }
    //     console.log(state);

    // }
    return ( <
        div className = "ui main" >
        <
        h2 > Add Contact < /h2> <
        form className = 'form' >
        <
        div className = "form-label" >
        <
        label > Name < /label> <
        input type = "text"
        className = "form-control"
        placeholder = 'Enter your Name'
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
            // console.log(e.target.value);
        }
        /> <
        /div> <
        div className = "form-label" >
        <
        label > Email < /label> <
        input type = "text"
        className = "form-control"
        placeholder = 'Enter your Name'
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
            //  console.log(e.target.value);
        }
        /> <
        /div> <
        button type = "submit"
        className = "btn btn-primary" > Submit < /button> <
        /form> <
        /div>
    )
}
export default AddContact;