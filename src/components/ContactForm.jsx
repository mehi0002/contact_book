import { useState, useEffect } from "react";
import Toolbar from "./Toolbar";

function ContactForm(props){
    const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
    
    function changeHandler(e){
        props.changeInput(e);
    }

    function submitContact(e){
        e.preventDefault();
        props.onSubmit();
    }

    return(
        <form>
            {/* First Name - REQUIRED */}
            <label htmlFor="fName">* First Name</label>
            <input 
                type="text" 
                id="fName" 
                name="firstName" 
                value={props.firstName} 
                placeholder="first name" 
                onChange={changeHandler}
                required
            />
            
            {/* Last Name - REQUIRED */}
            <label htmlFor="lName">* Last Name</label>
            <input 
                type="text" 
                id="lName" 
                name="lastName" 
                value={props.lastName} 
                placeholder="last name" 
                onChange={changeHandler}
                required
            />
            
            {/* Email */}
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={props.email} 
                placeholder="email@provider.com" 
                onChange={changeHandler}
            />
            
            {/* Phone */}
            <label htmlFor="phone">Phone</label>
            <input 
                type="text" 
                id="phone" 
                name="phone" 
                value={props.phone} 
                placeholder="(xxx)xxx-xxxx" 
                onChange={changeHandler}
            />
            
            {/* Address */}
            <fieldset>
                <legend>Address</legend>
                {/* Street number and name */}
                <label htmlFor="address">Street</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={props.address} 
                    placeholder="123 Street Name" 
                    onChange={changeHandler}
                />
                
                {/* City */}
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={props.city} 
                    placeholder="City" 
                    onChange={changeHandler}
                />
                
                {/* Province */}
                <label htmlFor="prov">Province</label>
                <select 
                    id="prov" 
                    name="prov" 
                    value={props.prov} 
                    onChange={changeHandler}>
                        
                        {provinces.map((province, index) => 
                        
                            <option key={index} value={province} aria-selected={province === props.prov ? true : false }> 
                                {province}
                            </option>
                        )}

                </select>

                {/* Postal Code */}
                <label htmlFor="pCode">Postal Code</label>
                <input 
                    type="text" 
                    id="pCode" 
                    name="postalCode" 
                    value={props.postalCode} 
                    placeholder="A1A 1A1" 
                    onChange={changeHandler} 
                /> 
            </fieldset>
            
            <footer>
                <Toolbar>
                    <button type="submit" onClick={submitContact}>Save</button>
                    <button onClick={props.onCancel}>Cancel</button>
                </Toolbar>
            </footer>
            
        </form>         
    );
}

export default ContactForm;