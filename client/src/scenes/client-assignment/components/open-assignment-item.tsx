import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
// components
import {
    Container,
    Title,
    Compensation,
    CompensationRow,
    CompensationCurrency,
    Divider,
    Label,
    Number,
    NotesLabel,
    Notes,
    StyledIcon,
    StyledInput,
    SendButton,
    InputRow,
} from './open-assignment-item.style';
import { getCurrency } from 'src/services/currency';
import { setAlert, setPrompt } from 'src/store/layout/actions';
import { PromptType } from 'src/store/layout/types';
import { ContractorItem } from './contractor-item';
import { Icon } from 'src/components';

interface IAssignmentItem {
    item: any
}

export const OpenAssignmentItem: React.FC<IAssignmentItem> = ({ item }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { clientID, contractorID } = useSelector((state: RootState) => state.user);
    const [comment, setComment] = React.useState<string>("")

    const onClickRemove = async () => {
        const deleteAssignemt = async () => {
            const res = await fetch(`/api/assignment/${item._id.$oid}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Token ${clientID}`
                },
            });
            if (res.status === 204) {
                dispatch(setPrompt({
                    type: PromptType.Success,
                    duration: 4000,
                    text: t('messages.assignmentDeletedSuccessfully'),
                }))
            } else if (res.status === 401) {
                dispatch(setPrompt({
                    type: PromptType.Error,
                    duration: 4000,
                    text: t('error.unauthorized'),
                }))
            } else {
                dispatch(setPrompt({
                    type: PromptType.Error,
                    duration: 4000,
                    text: t('error.unexpectedErrorText'),
                }))
            }
        }

        dispatch(setAlert({
            title: t('alert.deleteAssignmentTitle'),
            text: t('alert.deleteAssignmentText'),
            confirm: t('common.delete'),
            cancel: t('common.cancel'),
            onClick: deleteAssignemt,
        }))
    }

    const onClickSendComment = () => {

    }

    return (
        <Container>
            <Title>
                {item.title}
            </Title>
            <StyledIcon name="close" onClick={onClickRemove} size="18pt" />
            <CompensationRow>
                <Compensation>
                    {item.compensation}
                </Compensation>
                <CompensationCurrency>
                    {getCurrency(item.currency)}
                </CompensationCurrency>
            </CompensationRow>
            <Divider />
            <Label>{t('common.compensation').toUpperCase()}</Label>
            <Number>{item.applicants.length}</Number>
            <Divider />
            <Label>{t('common.applicants').toUpperCase()}</Label>
            <Number>{item.comments.length}</Number>
            <Divider />
            <Label>{t('common.comments').toUpperCase()}</Label>
            {item.notes !== undefined && (
                <>
                    <NotesLabel>
                        {t('common.notes') + ":"}
                    </NotesLabel>
                    <Notes>
                        {item.notes}
                    </Notes>
                </>
            )}
            {item.applicants.map(applicant => (
                <ContractorItem item={applicant} key={applicant._id.$oid} />
            ))}
            <InputRow>
                <StyledInput value={comment} onChange={setComment} label="Write a comment" />
                <SendButton onClick={onClickSendComment}>
                    <Icon name="send" size="16pt" />
                </SendButton>
            </InputRow>
        </Container>
    );
};
