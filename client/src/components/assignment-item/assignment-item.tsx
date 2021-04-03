import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { Link } from 'react-router-dom';
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
    ButtonRow,
    PrimaryButton,
    SecondaryButton,
    StyledIcon
} from './assignment-item.style';
import { getCurrency } from 'src/services/currency';
import { setAlert, setPrompt } from 'src/store/layout/actions';
import { PromptType } from 'src/store/layout/types';

interface IAssignmentItem {
    item: any
}

export const AssignmentItem: React.FC<IAssignmentItem> = ({ item }) => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = React.useState(true);
    const [isOwner, setIsOwner] = React.useState(false);
    const { t } = useTranslation();
    const { clientID, contractorID } = useSelector((state: RootState) => state.user);

    React.useEffect(() => {
        if (item.client.$oid === clientID) {
            setIsOwner(true)
        }
    }, [])

    const onClickApply = async () => {
        const res = await fetch(`/api/assignment/${item._id.$oid}/apply`)
        if (res.status === 201) {
            setIsActive(false)
        }
    }

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

    return (
        <Container>
            <Link to={`/assignment/${item._id.$oid}`}>
                <Title>
                    {item.title}
                </Title>
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
            </Link>
            {contractorID != undefined && (
                <ButtonRow>
                    <a href={`http://localhost:5000/api/assignment/download/${item.file}`} download>
                        <SecondaryButton onClick={() => null}>{t('common.download')}</SecondaryButton>
                    </a>
                    <PrimaryButton active={isActive} onClick={onClickApply}>{t('common.apply')}</PrimaryButton>
                </ButtonRow>
            )}
            {isOwner && <StyledIcon name="close" onClick={onClickRemove} size="18pt" />}
        </Container>
    );
};
