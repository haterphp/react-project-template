import React, { FC, PropsWithChildren } from 'react';
import useYupForm from "@core/form";
import Input, {makeBaseInputStyles} from "@ui/inputs/input";
import {Box, Typography} from "@mui/material";

type IndexPageProps = PropsWithChildren<{}>;

const IndexPage: FC<IndexPageProps> = ({}) => {
    const { registerInput, watch } = useYupForm();

    return (
        <Box sx={{ m: 10 }}>
            <Input {...registerInput('test', makeBaseInputStyles())} />
            <Typography>Введенный текст: {watch('test')}</Typography>

            <Input {...registerInput('test2', {})} />
        </Box>
    )
};

export default IndexPage;
