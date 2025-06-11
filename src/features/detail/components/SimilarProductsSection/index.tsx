'use client';

import ProductCard from '@/features/list/components/ProductCard';
import { ProductListItem } from '@/types/product';
import { Wrapper, SectionTitle, Grid } from './styles';

interface SimilarProductsSectionProps {
    products: ProductListItem[];
}

export default function SimilarProductsSection({
    products,
}: SimilarProductsSectionProps) {
    if (!products?.length) return null;

    return (
        <section aria-labelledby="similar-heading">
            <SectionTitle id="similar-heading">
                Productos similares
            </SectionTitle>
            <Wrapper>
                <Grid>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Grid>
            </Wrapper>
        </section>
    );
}
