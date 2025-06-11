import { camelCaseToText } from '@/utils/camelCaseToText';
import {
    Specs,
    SpecsData,
    SpecsHeader,
    SpecsRow,
    SpecsTable,
    SpecsTitle,
} from './styles';
import { ProductSpecsProps } from '../../types';

export default function ProductSpecifications({ specs }: ProductSpecsProps) {
    return (
        <Specs className="product--specs-table" aria-labelledby="specs-heading">
            <SpecsTitle id="specs-heading">Specifications</SpecsTitle>
            <SpecsTable>
                <tbody>
                    {Object.entries(specs).map(([key, value]) => (
                        <SpecsRow key={key}>
                            <SpecsHeader>{camelCaseToText(key)}</SpecsHeader>
                            <SpecsData>{value}</SpecsData>
                        </SpecsRow>
                    ))}
                </tbody>
            </SpecsTable>
        </Specs>
    );
}
