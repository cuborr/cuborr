import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
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
    item: any
}

export const ContractorItem: React.FC<IContractorItem> = ({ item }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { clientID, contractorID } = useSelector((state: RootState) => state.user);

    const onClickAcceptApplicant = () => {

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
                item.averageRating.quality > 0 && (
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

            <StyledButton onClick={onClickAcceptApplicant}>{t('common.accept')}</StyledButton>
        </Container>
    );
};
