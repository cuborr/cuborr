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
    TableValue,
    RatingRow,
    RatingColumn,
    StarRow,
    StarText,
    RatingLabel
} from './contractor-item.styles';
import { Icon } from 'src/components';

interface IContractorItem {
    item: any;
    assignmentID: string;
    state: 'open' | 'assigned' | 'closed';
    openRatingModal?: (contractorID: string) => void;
}

export const ContractorItem: React.FC<IContractorItem> = ({ item, assignmentID, state, openRatingModal }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { clientID } = useSelector((state: RootState) => state.user);

    const onClickAcceptContractor = async () => {
        const res = await fetch(`/api/assignment/${assignmentID}?accept-contractor=${item._id.$oid}`, {
            method: 'GET',
            headers: { Authorization: `Token ${clientID}` }
        });
        if (res.status === 200) {
            dispatch(setPrompt({
                type: PromptType.Success,
                duration: 9000,
                text: t('messages.contractorAcceptedSuccessfully'),
            }))
        } else {
            dispatch(setPrompt({
                type: PromptType.Error,
                duration: 4000,
                text: t('error.unexpectedErrorText'),
            }))
        }
    }

    const onClickRateContractor = () => {
        if(openRatingModal) openRatingModal(item._id.$oid)
    }

    return (
        <Container>
            <Title>{`${item.first_name} ${item.last_name}`}</Title>
            <SubTitle>{item.country}</SubTitle>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.printerName')}</TableName>
                <TableValue>{item.printer_name}</TableValue>
            </TableRow>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.itemNumber')}</TableName>
                <TableValue>{item.item_number}</TableValue>
            </TableRow>
            <TableDivider />
            <TableRow>
                <TableName>{t('common.materials')}</TableName>
                <TableValue>{item.material}</TableValue>
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

            {
                state === 'open' && item.averageRating.quality > 0 && (
                    <RatingRow>
                        <RatingColumn>
                            <StarRow>
                                <Icon name="star" size="16pt" />
                                <StarText>{item.averageRating.quality.toFixed(1)}</StarText>
                            </StarRow>
                            <RatingLabel>{t('common.quality')}</RatingLabel>
                        </RatingColumn>

                        <RatingColumn>
                            <StarRow>
                                <Icon name="star" size="16pt" />
                                <StarText>{item.averageRating.communication.toFixed(1)}</StarText>
                            </StarRow>
                            <RatingLabel>{t('common.communication')}</RatingLabel>
                        </RatingColumn>

                        <RatingColumn>
                            <StarRow>
                                <Icon name="star" size="16pt" />
                                <StarText>{item.averageRating.shipping.toFixed(1)}</StarText>
                            </StarRow>
                            <RatingLabel>{t('common.shipping')}</RatingLabel>
                        </RatingColumn>
                    </RatingRow>
                )
            }
            {state === 'open' && <StyledButton onClick={onClickAcceptContractor}>{t('common.accept')}</StyledButton>}
            {state === 'closed' && <StyledButton onClick={onClickRateContractor}>{t('common.rate')}</StyledButton>}
        </Container>
    );
};
