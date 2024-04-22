import Box from '@mui/material/Box';
import {TextField} from "@mui/material";
import {CountrySelect} from "./CountrySelect.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {nameFill, emailFill, passwordFill} from "../store/user.ts";
import {useState} from "react";

type Errors = {
    nameErrors: boolean
}

const RegistrationForm = () => {
    const {name, email, password} = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<Errors>({
        nameErrors: false,
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(nameFill(event.target.value))
        if(name.length <=1){
            setErrors(prevState => ({
                ...prevState,
                nameErrors: true
            }))
        } else setErrors(prevState => ({
            ...prevState,
            nameErrors: false
        }))
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '30ch'},
                'bgcolor': "grey",
                'display': 'flex',
                'flex-direction': 'column',
                'align-items': "center",
                'justify-content': 'space-evenly',
                'min-height': '70vh'
            }}
            noValidate
            autoComplete="off"
        >
            <h2>Registration form</h2>
            <div>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    error={errors.nameErrors}
                    onChange={event => handleNameChange(event)}
                />
            </div>
            <div>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={event => dispatch(emailFill(event.target.value))}
                />
            </div>
            <div>
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={event => dispatch(passwordFill(event.target.value))}
                />
            </div>
            <CountrySelect/>
        </Box>
    );
};

export default RegistrationForm;
