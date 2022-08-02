import {Control, DefaultValues, FieldValues, Mode, useForm} from "react-hook-form";
import {AnyObjectSchema, SchemaOf} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const getButtonState = (errors: { [P: string]: unknown }) => (request: boolean) => {
    return {
        disabled:
            !!((errors && Object.keys(errors).length) || request)
    }
}

const registerInput =
    <TFieldValues, TContext>(control: Control<TFieldValues, TContext>, innerAttrsOptions: Object = {}) =>
    <TProps extends Object,>(name: string, outerAttrsOptions: TProps) =>
        ({control, name, ...innerAttrsOptions, ...outerAttrsOptions})

export default function useYupForm<TFieldValues extends FieldValues = FieldValues,
    TSchema extends AnyObjectSchema = SchemaOf<TFieldValues>,
    TContext extends object = object>
(schema?: TSchema, values?: DefaultValues<TFieldValues>, mode: Mode = 'onSubmit') {
    const reactHookForm = useForm<TFieldValues, TContext>({
        resolver: schema && yupResolver(schema),
        defaultValues: values,
        mode: mode
    })
    return {
        ...reactHookForm,
        getButtonState: getButtonState(reactHookForm.formState.errors),
        registerInput: registerInput<TFieldValues, TContext>(reactHookForm.control),
    }
}
