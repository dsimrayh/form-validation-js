# Form Validation with JavaScript 

This is a small project to demonstrate HTML form validation using JavaScript.

This is a practice assignment as part of The Odin Project's curriculum.

### Features / Technologies used 
* Constraint Validation API
  * ` HTMLElement.validity `
  * ` HTMLElement.validationMessage `
  * ` HTMLElement.setCustomValidity `
* Built-in validation attributes
  * ` type `
  * ` required `
* Form ` novalidate ` attribute
* ` <datalist> `
* Regular Expressions
* Show / Hide password input

### How to use  

User must input a value for each of the input fields. Each field automatically validates for every keystroke.

When the user clicks / tabs on a field, a green border will be displayed. 

Once there is input in a field, and if that input is invalid, a red border will be applied to the field. 

Once the input is valid, the green border will be reapplied.

If a user tries to submit the form with invalid data, error messages will be displayed underneath the invalid fields and the form will not submit. 

Once the user fixes the errors and resubmits, the form will submit** and the error messages will disappear.

** The form does not actually submit data. The inputs and errors are cleared once the form is successfully 'submitted'. 
