
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import { Button } from 'bootstrap';


function Signup() {


  return (
    <diV>
    <Header/>
    <form>
    <div class="form-row align-items-center d-flex p-6">
      <div class="col-sm-3 my-1">
        <label class="sr-only" for="inlineFormInputName">Name</label>
        <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe"/>
      </div>
      <div class="col-sm-3 my-1">
        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
        </div>
      </div>
      <div class="col-auto my-1">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="autoSizingCheck2"/>
          <label class="form-check-label" for="autoSizingCheck2">
            Remember me
          </label>
        </div>
      </div>
      <div class="col-auto my-1">
        <button  type="submit" class="btn btn-secondary" ><a href='/Tables' style={{textDecoration:'none', color:'black'}}>Submit</a></button>
      </div>
    </div>
  </form>
  <Footer/>
  </diV>
  
  );

}



export default Signup;