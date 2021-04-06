import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { setPrompt } from 'src/store/layout/actions';
import { PromptType } from 'src/store/layout/types';
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
    StyledInput,
    SendButton,
    InputRow,
    CommentUserName,
    Comment
} from './assignment-item.style';
import { getCurrency } from 'src/services/currency';
import { ClientItem } from './client-item';
import { Icon } from 'src/components';

interface IAssignmentItem {
    item: any
    state: 'open' | 'assigned' | 'closed'
}

export const AssignmentItem: React.FC<IAssignmentItem> = ({ item, state }) => {
    console.log(item);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { contractorID } = useSelector((state: RootState) => state.user);
    const [comment, setComment] = React.useState<string>("")

    const onClickSendComment = async () => {
        const res = await fetch(`/api/assignment/${item._id.$oid}/comment`, {
            method: 'POST',
            headers: {
                Authorization: `Token ${contractorID}`
            },
            body: JSON.stringify({ text: comment })
        });
        if (res.status === 201) {
            setComment('')
            dispatch(setPrompt({
                type: PromptType.Success,
                duration: 4000,
                text: t('messages.commentCreatedSuccessfully'),
            }));
        } else {
            dispatch(setPrompt({
                type: PromptType.Error,
                duration: 4000,
                text: t('error.unexpectedErrorText'),
            }));
        }
    }

    return (
        <Container>
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
            <Number>{item.comments?.length}</Number>
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
            <ClientItem
                item={item.client}
                assignmentID={item._id.$oid}
                state={state}
            />
            {state !== 'closed' && (
                <InputRow>
                    <StyledInput
                        value={comment}
                        onChange={setComment}
                        label={t('assignment.writeComment')}
                    />
                    <SendButton onClick={onClickSendComment}>
                        <Icon name="send" size="16pt" />
                    </SendButton>
                </InputRow>
            )}
            {item.comments.map((comment, index) => (
                <div key={index}>
                    <CommentUserName>{comment.user_name}</CommentUserName>
                    <Comment>{comment.text}</Comment>
                </div>
            ))}
        </Container>
    );
};
