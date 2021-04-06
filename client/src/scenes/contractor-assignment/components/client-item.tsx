import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { setPrompt } from 'src/store/layout/actions';
import { PromptType } from 'src/store/layout/types';
// components
import {
    Title,
    StyledButton,
    Container,
    SubTitle,
    TableDivider,
    TableRow,
    TableName,
    TableValue
} from './client-item.styles';

interface IClientItem {
    item: any;
    assignmentID: string;
    state: 'open' | 'assigned' | 'closed'
}

export const ClientItem: React.FC<IClientItem> = ({ item, assignmentID, state }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { contractorID } = useSelector((state: RootState) => state.user);

    const onClickCompleteAssignment = async () => {
        const res = await fetch(`/api/assignment/${assignmentID}/complete`, {
            method: 'GET',
            headers: { Authorization: `Token ${contractorID}` }
        });
        if (res.status === 200) {
            dispatch(setPrompt({
                type: PromptType.Success,
                duration: 6000,
                text: t('messages.assignmentCompletedSuccessfully'),
            }))
        } else {
            dispatch(setPrompt({
                type: PromptType.Error,
                duration: 4000,
                text: t('error.unexpectedErrorText'),
            }))
        }
    }

    return (
        <Container>
            <Title>{`${item.first_name} ${item.last_name}`}</Title>
            <SubTitle>{item.country}</SubTitle>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.streetAddress')}</TableName>
                <TableValue>{item.street_address}</TableValue>
            </TableRow>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.city')}</TableName>
                <TableValue>{item.city}</TableValue>
            </TableRow>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.zip')}</TableName>
                <TableValue>{item.postal_code}</TableValue>
            </TableRow>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.email')}</TableName>
                <TableValue>{item.email}</TableValue>
            </TableRow>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.phoneNumber')}</TableName>
                <TableValue>{item.phone_number}</TableValue>
            </TableRow>
            <TableDivider />

            {state === 'assigned' && <StyledButton onClick={onClickCompleteAssignment}>{t('common.assignmentCompleted')}</StyledButton>}
        </Container>
    );
};
