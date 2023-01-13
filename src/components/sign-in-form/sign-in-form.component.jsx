import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input";
import { SignInButtons, SignInContainer } from "./sign-in-form.styles";


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch(error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    alert('User not found, please try again');
                    break;
                case 'auth/wrong-password':
                    alert('Wrong password');
                    break;
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email' 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />

                <FormInput 
                    label='Password' 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <SignInButtons>
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign in</Button>
                </SignInButtons>


            </form>
        </SignInContainer>
    )
}

export default SignInForm;