import {Control, Controller} from "react-hook-form";
import {TextField, TextFieldProps} from "@mui/material";

export type InputProps = {
    control: Control<any>;
    name: string;
} & TextFieldProps;

const Input = ({control, name, ...props}: InputProps) => (
    <Controller
        name={name}
        control={control}
        render={({fieldState: {error, isDirty}, field: {onChange, value}}) => (
            <TextField
                error={!!error}
                helperText={error?.message}
                value={value}
                onChange={onChange}
                {...props}
            />
        )}
    />
)

export const makeBaseInputStyles = (): Partial<InputProps> => ({ fullWidth: true, margin: 'dense' })

export default Input;
