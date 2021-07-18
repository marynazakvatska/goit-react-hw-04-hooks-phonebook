import {useState} from 'react';
import s from './ContactForm.module.css';
import shortid from 'shortid'


const SignupForm = ({onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const nameInputId = shortid.generate();
   const numberInputId = shortid.generate();



const  handleSubmit = e => {
    e.preventDefault();
    onSubmit({name, number})
    
reset();
    }
 
  
  const handleChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default: return;
    }
    } 
  
  
 const reset = () => {
   setName('' )
   setNumber( '')
}

  return (<div className={s.forma} >
        <form onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>
 Name <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
value={name}
                 onChange={handleChange}
                 id={nameInputId}
                        />
                    </label>


          <label htmlFor={numberInputId}>
 Number <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
 value={number}
 onChange={handleChange}
  id={numberInputId}
/>
          </label>

            <button className={s.btnsubmit} type="submit" >Add contact</button>
        </form>

        
           </div>
 )
}

export default SignupForm
