import React from 'react';
import validateEmails from '../../utils/validateEmails';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import formFields from './formFields';

class SurveyForm extends React.Component{

  renderFields(){
    return (<div>
      {
        formFields.map(({name, label}) => {
          return <Field key={name} label={label} type="text" name={name} component={SurveyField}/>
        })
      }
    </div>);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({name}) => {
    if(!values[name]){
      errors[name] = 'You must provide a value'
    }
  });
  return errors;
}


export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
